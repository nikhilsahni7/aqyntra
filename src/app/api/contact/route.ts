import { NextResponse } from "next/server";
import prisma from "@/lib/db";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY || "re_dummy_key_for_build_compatibility");

// Fallback email addresses if environment variables are not configured
const FALLBACK_NOTIFICATION_EMAIL = "vishalsingh260796@gmail.com";
const DEFAULT_SENDER = "onboarding@resend.dev";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { companyName, country, contactPerson, email, quantity, productType, message } = body;

    // 1. Validation
    if (!companyName?.trim()) {
      return NextResponse.json({ success: false, message: "Company name is required" }, { status: 400 });
    }
    if (!country?.trim()) {
      return NextResponse.json({ success: false, message: "Country is required" }, { status: 400 });
    }
    if (!contactPerson?.trim()) {
      return NextResponse.json({ success: false, message: "Contact person name is required" }, { status: 400 });
    }
    if (!email?.trim() || !/\S+@\S+\.\S+/.test(email)) {
      return NextResponse.json({ success: false, message: "A valid email address is required" }, { status: 400 });
    }
    const parsedQuantity = parseInt(quantity);
    if (isNaN(parsedQuantity) || parsedQuantity < 1000) {
      return NextResponse.json({ success: false, message: "Minimum quantity is 1,000 units" }, { status: 400 });
    }

    // 2. Save submission to PostgreSQL database via Prisma
    const inquiry = await prisma.inquiry.create({
      data: {
        companyName: companyName.trim(),
        country: country.trim(),
        contactPerson: contactPerson.trim(),
        email: email.trim(),
        quantity: parsedQuantity,
        productType: productType || "500ml Bottle",
        message: (message || "").trim(),
      },
    });

    // 3. Email notifications using Resend
    let sender = process.env.SENDER_EMAIL || DEFAULT_SENDER;
    if (!sender.includes("<") && !sender.includes(">")) {
      sender = `AQYNTRA <${sender}>`;
    }
    const notificationRecipient = process.env.NOTIFICATION_EMAIL || FALLBACK_NOTIFICATION_EMAIL;

    // A. Admin notification email HTML template
    const adminEmailHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <title>New Business Inquiry</title>
          <style>
            body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; color: #0A1F14; background-color: #F8FAF8; margin: 0; padding: 20px; }
            .container { max-width: 600px; margin: 0 auto; background: #ffffff; border: 1px solid #E8EDE9; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 12px rgba(10,31,20,0.03); }
            .header { background-color: #0A1F14; padding: 30px; text-align: center; border-bottom: 3px solid #5DBA72; }
            .header h1 { color: #FFFFFF; font-size: 20px; font-weight: 700; margin: 0; letter-spacing: 2px; text-transform: uppercase; }
            .content { padding: 30px; }
            .intro { font-size: 15px; color: #4A7C5C; line-height: 1.5; margin-bottom: 25px; }
            .details-table { width: 100%; border-collapse: collapse; margin-bottom: 25px; }
            .details-table th, .details-table td { padding: 12px 15px; text-align: left; border-bottom: 1px solid #EFF6F0; }
            .details-table th { font-size: 11px; text-transform: uppercase; letter-spacing: 1px; color: #4A7C5C; width: 35%; }
            .details-table td { font-size: 14px; color: #0A1F14; font-weight: 500; }
            .message-box { background-color: #EFF6F0; border-left: 4px solid #5DBA72; padding: 15px 20px; border-radius: 0 8px 8px 0; font-size: 14px; line-height: 1.6; color: #14432A; font-style: italic; }
            .footer { background-color: #F8FAF8; padding: 20px 30px; text-align: center; font-size: 11px; color: #4A7C5C; border-top: 1px solid #E8EDE9; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>New Business Inquiry</h1>
            </div>
            <div class="content">
              <p class="intro">A new RFQ / business inquiry has been submitted via the AQYNTRA website. See details below:</p>

              <table class="details-table">
                <tr>
                  <th>Company</th>
                  <td>${inquiry.companyName}</td>
                </tr>
                <tr>
                  <th>Country</th>
                  <td>${inquiry.country}</td>
                </tr>
                <tr>
                  <th>Contact Person</th>
                  <td>${inquiry.contactPerson}</td>
                </tr>
                <tr>
                  <th>Email</th>
                  <td><a href="mailto:${inquiry.email}" style="color: #5DBA72; text-decoration: none;">${inquiry.email}</a></td>
                </tr>
                <tr>
                  <th>Product Type</th>
                  <td>${inquiry.productType}</td>
                </tr>
                <tr>
                  <th>Quantity (Units)</th>
                  <td>${inquiry.quantity.toLocaleString()}</td>
                </tr>
                <tr>
                  <th>Date & Time</th>
                  <td>${inquiry.createdAt.toLocaleString()}</td>
                </tr>
              </table>

              ${inquiry.message ? `
                <div style="margin-top: 20px;">
                  <h4 style="margin: 0 0 8px 0; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; color: #4A7C5C;">Message / Demands</h4>
                  <div class="message-box">"${inquiry.message}"</div>
                </div>
              ` : ""}
            </div>
            <div class="footer">
              This inquiry was securely recorded in the AQYNTRA Database.
            </div>
          </div>
        </body>
      </html>
    `;

    // B. Submitter acknowledgement email HTML template
    const submitterEmailHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <title>Thank You for Contacting AQYNTRA</title>
          <style>
            body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; color: #0A1F14; background-color: #F8FAF8; margin: 0; padding: 20px; }
            .container { max-width: 600px; margin: 0 auto; background: #ffffff; border: 1px solid #E8EDE9; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 12px rgba(10,31,20,0.03); }
            .header { background-color: #0A1F14; padding: 30px; text-align: center; border-bottom: 3px solid #5DBA72; }
            .header h1 { color: #FFFFFF; font-size: 20px; font-weight: 700; margin: 0; letter-spacing: 2px; text-transform: uppercase; }
            .content { padding: 30px; }
            .greeting { font-size: 16px; font-weight: 600; color: #0A1F14; margin-bottom: 15px; }
            .body-text { font-size: 14px; color: #4A7C5C; line-height: 1.7; margin-bottom: 25px; }
            .details-card { background: #F8FAF8; border: 1px solid #E8EDE9; border-radius: 8px; padding: 20px; margin-bottom: 25px; }
            .details-title { font-size: 11px; text-transform: uppercase; letter-spacing: 1px; color: #4A7C5C; margin: 0 0 12px 0; font-weight: 700; }
            .details-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; font-size: 13px; }
            .details-item { margin-bottom: 8px; }
            .details-item-label { color: #4A7C5C; font-size: 11px; text-transform: uppercase; margin-bottom: 2px; }
            .details-item-value { color: #0A1F14; font-weight: 600; }
            .btn { display: inline-block; background-color: #0A1F14; color: #FFFFFF !important; text-decoration: none; padding: 12px 24px; font-size: 13px; font-weight: 600; border-radius: 8px; text-align: center; transition: background-color 0.2s; }
            .btn:hover { background-color: #14432A; }
            .footer { background-color: #F8FAF8; padding: 20px 30px; text-align: center; font-size: 11px; color: #4A7C5C; border-top: 1px solid #E8EDE9; line-height: 1.5; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>AQYNTRA</h1>
            </div>
            <div class="content">
              <div class="greeting">Hello ${inquiry.contactPerson},</div>
              <p class="body-text">
                Thank you for reaching out to AQYNTRA. We have successfully received your inquiry for eco-friendly packaged water solutions.
                Our global export team is reviewing your specifications and will provide a tailored quotation within 24 hours.
              </p>

              <div class="details-card">
                <div class="details-title">Inquiry Details Recap</div>
                <table style="width: 100%; border-collapse: collapse; font-size: 13px;">
                  <tr>
                    <td style="padding: 6px 0; color: #4A7C5C;">Company</td>
                    <td style="padding: 6px 0; text-align: right; color: #0A1F14; font-weight: 600;">${inquiry.companyName}</td>
                  </tr>
                  <tr>
                    <td style="padding: 6px 0; color: #4A7C5C;">Product Type</td>
                    <td style="padding: 6px 0; text-align: right; color: #0A1F14; font-weight: 600;">${inquiry.productType}</td>
                  </tr>
                  <tr>
                    <td style="padding: 6px 0; color: #4A7C5C;">Quantity Requested</td>
                    <td style="padding: 6px 0; text-align: right; color: #0A1F14; font-weight: 600;">${inquiry.quantity.toLocaleString()} units</td>
                  </tr>
                  <tr>
                    <td style="padding: 6px 0; color: #4A7C5C;">Target Destination</td>
                    <td style="padding: 6px 0; text-align: right; color: #0A1F14; font-weight: 600;">${inquiry.country}</td>
                  </tr>
                </table>
              </div>

              <div style="text-align: center; margin: 30px 0 10px 0;">
                <a href="https://aqyntra.com" class="btn">Visit Our Website</a>
              </div>
            </div>
            <div class="footer">
              <strong>AQYNTRA | Pure Nature. Pure Future.</strong><br>
              Eco-Friendly Packaged Drinking Water & Biodegradable Preforms Exporter<br>
              <span style="font-size: 10px; color: #4A7C5C; display: block; margin-top: 5px;">If you did not make this request, please disregard this email.</span>
            </div>
          </div>
        </body>
      </html>
    `;

    // Only attempt sending emails if RESEND_API_KEY is provided.
    // In development without key, we log in server and proceed to make testing easier.
    if (process.env.RESEND_API_KEY) {
      console.log(`Attempting to send email via Resend... Sender: ${sender}, Admin Recipient: ${notificationRecipient}, Submitter: ${email}`);
      
      // Send Alert to Admin/Client
      const adminEmailResponse = await resend.emails.send({
        from: sender,
        to: notificationRecipient,
        subject: `New AQYNTRA Business Inquiry - ${companyName}`,
        html: adminEmailHtml,
      });
      
      if (adminEmailResponse.error) {
        console.error("Resend Admin Email Error:", adminEmailResponse.error);
      } else {
        console.log("Resend Admin Email Sent successfully:", adminEmailResponse.data);
      }

      // Send Acknowledgement to Submitter
      const submitterEmailResponse = await resend.emails.send({
        from: sender,
        to: email,
        subject: `Thank you for your inquiry - AQYNTRA`,
        html: submitterEmailHtml,
      });

      if (submitterEmailResponse.error) {
        console.error("Resend Submitter Email Error:", submitterEmailResponse.error);
      } else {
        console.log("Resend Submitter Email Sent successfully:", submitterEmailResponse.data);
      }
    } else {
      console.warn("WARNING: RESEND_API_KEY is not defined in the environment. Email delivery was skipped.");
    }

    return NextResponse.json({ success: true, data: inquiry });
  } catch (error: any) {
    console.error("Contact Form Submission Error:", error);
    return NextResponse.json(
      { success: false, message: error.message || "An unexpected error occurred while processing your inquiry" },
      { status: 500 }
    );
  }
}
