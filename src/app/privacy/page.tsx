import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Shield, Lock, Eye, Info, Database, Globe, Briefcase, RefreshCw, Key, UserCheck, Link as LinkIcon, Scale, Mail, Clock, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy | AQYNTRA",
  description: "AQYNTRA Privacy Policy - Learn how we collect, use, store, protect, and process information in connection with our export and packaging services.",
};

export default function PrivacyPolicy() {
  return (
    <>
      {/* Navigation */}
      <Header />

      {/* Main Content */}
      <main className="min-h-screen bg-cloud pb-20 pt-28">
        {/* Banner / Hero */}
        <section className="relative overflow-hidden bg-gradient-to-br from-[#020d07] to-[#0c2417] text-white py-20 lg:py-24">
          <div className="absolute inset-0 bg-grid-pattern-dark opacity-30" />
          <div className="absolute bottom-0 right-0 w-[400px] h-[300px] bg-spring/[0.08] blur-[120px] rounded-full" />
          
          <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
            <span className="text-spring font-semibold text-[11px] uppercase tracking-[0.2em] mb-4 block">
              Legal Documentation
            </span>
            <h1 className="font-display font-bold text-4xl md:text-5xl tracking-tight mb-6">
              Privacy <span className="font-serif italic font-normal text-dew text-glow-green">Policy</span>
            </h1>
            <div className="flex flex-wrap justify-center items-center gap-4 text-white/50 text-[12px] font-medium tracking-wide">
              <span>Effective Date: 28 June 2026</span>
              <span className="w-1.5 h-1.5 rounded-full bg-white/20" />
              <span>Last Updated: 28 June 2026</span>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="max-w-4xl mx-auto px-6 -mt-10 relative z-20">
          <div className="bg-petal rounded-3xl p-8 md:p-12 border border-deep/[0.04] shadow-[0_20px_50px_rgba(10,31,20,0.04)]">
            
            {/* Intro */}
            <div className="prose prose-slate max-w-none mb-12">
              <p className="text-deep/80 text-[16px] leading-relaxed font-medium mb-6">
                Welcome to AQYNTRA.
              </p>
              <p className="text-lichen text-[15px] leading-relaxed mb-6">
                At AQYNTRA, we believe that trust is the foundation of every successful business relationship. Protecting the
                privacy, confidentiality, and security of the information entrusted to us by our customers, suppliers,
                business partners, and website visitors is an important part of our commitment to responsible business
                practices.
              </p>
              <p className="text-lichen text-[15px] leading-relaxed">
                This Privacy Policy explains how AQYNTRA collects, uses, stores, protects, and processes information when
                you visit our website or interact with us in connection with our products and export services.
                By using this website, you agree to the practices described in this Privacy Policy.
              </p>
            </div>

            <hr className="border-deep/[0.06] my-10" />

            {/* Privacy Sections Grid */}
            <div className="space-y-12">
              
              {/* 1. About AQYNTRA */}
              <div className="flex gap-5">
                <div className="w-10 h-10 rounded-xl bg-spring/10 text-spring flex items-center justify-center shrink-0">
                  <Briefcase className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="font-display font-semibold text-[19px] text-deep mb-3">
                    1. About AQYNTRA
                  </h2>
                  <p className="text-lichen text-[14.5px] leading-relaxed">
                    AQYNTRA is an India-based export company committed to delivering high-quality products and private label
                    solutions to customers across international markets. Our business encompasses international trade, export
                    management, sourcing, packaging solutions, and value-added supply chain services for global customers.
                    We are committed to conducting business with integrity, transparency, regulatory compliance, and respect
                    for customer confidentiality.
                  </p>
                </div>
              </div>

              {/* 2. Information We Collect */}
              <div className="flex gap-5">
                <div className="w-10 h-10 rounded-xl bg-spring/10 text-spring flex items-center justify-center shrink-0">
                  <Database className="w-5 h-5" />
                </div>
                <div className="w-full">
                  <h2 className="font-display font-semibold text-[19px] text-deep mb-3">
                    2. Information We Collect
                  </h2>
                  <p className="text-lichen text-[14.5px] leading-relaxed mb-4">
                    Depending on your interaction with AQYNTRA, we may collect the following categories of information.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                    {/* Business Info */}
                    <div className="bg-mist p-5 rounded-2xl border border-deep/[0.02]">
                      <h3 className="font-display font-semibold text-[14.5px] text-forest mb-3">
                        Business Information
                      </h3>
                      <ul className="text-[13px] text-lichen space-y-2">
                        <li>• Company Name</li>
                        <li>• Business Address</li>
                        <li>• Country</li>
                        <li>• VAT / GST / Tax Details</li>
                        <li>• Business Registration Details</li>
                        <li>• Import/Export Requirements</li>
                        <li>• Product Requirements</li>
                        <li>• Purchase Orders</li>
                        <li>• RFQs</li>
                      </ul>
                    </div>

                    {/* Personal Info */}
                    <div className="bg-mist p-5 rounded-2xl border border-deep/[0.02]">
                      <h3 className="font-display font-semibold text-[14.5px] text-forest mb-3">
                        Personal Information
                      </h3>
                      <ul className="text-[13px] text-lichen space-y-2">
                        <li>• Full Name</li>
                        <li>• Designation</li>
                        <li>• Email Address</li>
                        <li>• Telephone Number</li>
                        <li>• Mobile Number</li>
                        <li>• WhatsApp Number</li>
                        <li>• Communication Preferences</li>
                      </ul>
                    </div>

                    {/* Website Info */}
                    <div className="bg-mist p-5 rounded-2xl border border-deep/[0.02]">
                      <h3 className="font-display font-semibold text-[14.5px] text-forest mb-3">
                        Website Information
                      </h3>
                      <ul className="text-[13px] text-lichen space-y-2">
                        <li>• IP Address</li>
                        <li>• Browser Type</li>
                        <li>• Device Information</li>
                        <li>• Operating System</li>
                        <li>• Pages Visited</li>
                        <li>• Time Spent on Website</li>
                        <li>• Referral Sources</li>
                        <li>• Cookie Information</li>
                        <li>• Website Usage Statistics</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* 3. How We Use Your Information */}
              <div className="flex gap-5">
                <div className="w-10 h-10 rounded-xl bg-spring/10 text-spring flex items-center justify-center shrink-0">
                  <RefreshCw className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="font-display font-semibold text-[19px] text-deep mb-3">
                    3. How We Use Your Information
                  </h2>
                  <p className="text-lichen text-[14.5px] leading-relaxed mb-4">
                    Your information may be used for legitimate business purposes:
                  </p>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2 text-[13.5px] text-lichen">
                    <li>• Respond to enquiries and support</li>
                    <li>• Process quotation requests and RFQs</li>
                    <li>• Prepare custom commercial proposals</li>
                    <li>• Communicate about products &amp; services</li>
                    <li>• Process and fulfill export orders</li>
                    <li>• Coordinate logistics and shipment</li>
                    <li>• Improve website &amp; customer experience</li>
                    <li>• Maintain customer relationship records</li>
                    <li>• Conduct business performance analysis</li>
                    <li>• Meet contractual and legal obligations</li>
                    <li>• Prevent fraud and unauthorized activities</li>
                  </ul>
                </div>
              </div>

              {/* 4. Confidentiality */}
              <div className="flex gap-5">
                <div className="w-10 h-10 rounded-xl bg-spring/10 text-spring flex items-center justify-center shrink-0">
                  <Lock className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="font-display font-semibold text-[19px] text-deep mb-3">
                    4. Confidentiality
                  </h2>
                  <p className="text-lichen text-[14.5px] leading-relaxed">
                    AQYNTRA recognizes that many business discussions involve commercially sensitive information.
                    Any technical specifications, pricing discussions, product requirements, business proposals, procurement
                    details, and commercial communications shared with us are treated with appropriate confidentiality and
                    are used solely for legitimate business purposes.
                  </p>
                </div>
              </div>

              {/* 5. Cookies */}
              <div className="flex gap-5">
                <div className="w-10 h-10 rounded-xl bg-spring/10 text-spring flex items-center justify-center shrink-0">
                  <Eye className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="font-display font-semibold text-[19px] text-deep mb-3">
                    5. Cookies
                  </h2>
                  <p className="text-lichen text-[14.5px] leading-relaxed">
                    Our website may use cookies and similar technologies to improve website functionality, remember
                    user preferences, analyze website traffic, enhance user experience, and measure performance.
                    You may modify your browser settings to refuse cookies. Certain website functions may be affected if
                    cookies are disabled.
                  </p>
                </div>
              </div>

              {/* 6. Information Sharing */}
              <div className="flex gap-5">
                <div className="w-10 h-10 rounded-xl bg-spring/10 text-spring flex items-center justify-center shrink-0">
                  <Globe className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="font-display font-semibold text-[19px] text-deep mb-3">
                    6. Information Sharing
                  </h2>
                  <p className="text-lichen text-[14.5px] leading-relaxed mb-4">
                    AQYNTRA does not sell, rent, or commercially distribute your personal or business information.
                    Information may only be shared when reasonably necessary with:
                  </p>
                  <div className="bg-mist p-5 rounded-2xl border border-deep/[0.02] text-[13.5px] text-lichen">
                    <p className="font-semibold text-deep mb-2">Operational &amp; Regulatory Partners:</p>
                    <p>
                      Shipping &amp; Logistics Partners, Freight Forwarders, Customs Brokers, Banks &amp; Financial Institutions,
                      Government Authorities, Certification &amp; Inspection Agencies, Information Technology Service Providers,
                      and Professional Advisors (Legal, Tax &amp; Audit).
                    </p>
                    <p className="mt-3 text-[12px] text-lichen/70 italic">
                      Disclosures are strictly limited to the extent necessary for business operations or legal compliance.
                    </p>
                  </div>
                </div>
              </div>

              {/* 7. International Business Operations */}
              <div className="flex gap-5">
                <div className="w-10 h-10 rounded-xl bg-spring/10 text-spring flex items-center justify-center shrink-0">
                  <Globe className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="font-display font-semibold text-[19px] text-deep mb-3">
                    7. International Business Operations
                  </h2>
                  <p className="text-lichen text-[14.5px] leading-relaxed">
                    AQYNTRA serves customers and business partners across multiple countries.
                    Accordingly, information may be transferred internationally for purposes including export documentation,
                    international logistics, banking &amp; payment processing, customs &amp; regulatory compliance, customer
                    communication, and supply chain coordination. Where applicable, reasonable safeguards are implemented
                    to protect such information.
                  </p>
                </div>
              </div>

              {/* 8. Data Security */}
              <div className="flex gap-5">
                <div className="w-10 h-10 rounded-xl bg-spring/10 text-spring flex items-center justify-center shrink-0">
                  <Key className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="font-display font-semibold text-[19px] text-deep mb-3">
                    8. Data Security
                  </h2>
                  <p className="text-lichen text-[14.5px] leading-relaxed mb-4">
                    AQYNTRA maintains appropriate administrative, technical, and organizational measures designed to protect
                    information against unauthorized access, alteration, disclosure, or destruction.
                  </p>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2 text-[13.5px] text-lichen">
                    <li>• Secure Website (SSL Encryption)</li>
                    <li>• Access Control Mechanisms</li>
                    <li>• Password Protected Systems</li>
                    <li>• Role-Based Permissions</li>
                    <li>• Secure Cloud Storage</li>
                    <li>• Firewall Protection</li>
                    <li>• Routine Data Backups</li>
                    <li>• Active System Monitoring &amp; Audit Logs</li>
                  </ul>
                  <p className="text-[12.5px] text-lichen/80 italic mt-3">
                    Although we strive to maintain a secure environment, no internet-based system can be guaranteed to be
                    completely secure.
                  </p>
                </div>
              </div>

              {/* 9. Data Retention */}
              <div className="flex gap-5">
                <div className="w-10 h-10 rounded-xl bg-spring/10 text-spring flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="font-display font-semibold text-[19px] text-deep mb-3">
                    9. Data Retention
                  </h2>
                  <p className="text-lichen text-[14.5px] leading-relaxed">
                    Information is retained only for as long as necessary to complete business transactions, maintain customer
                    relationships, comply with legal and tax obligations, resolve disputes, protect legitimate business interests,
                    and fulfill contractual obligations. Information that is no longer required is securely deleted or
                    anonymized where appropriate.
                  </p>
                </div>
              </div>

              {/* 10. Your Rights */}
              <div className="flex gap-5">
                <div className="w-10 h-10 rounded-xl bg-spring/10 text-spring flex items-center justify-center shrink-0">
                  <UserCheck className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="font-display font-semibold text-[19px] text-deep mb-3">
                    10. Your Rights
                  </h2>
                  <p className="text-lichen text-[14.5px] leading-relaxed mb-3">
                    Subject to applicable law, you may request to:
                  </p>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-[13.5px] text-lichen">
                    <li>• Access your personal information</li>
                    <li>• Correct inaccurate or incomplete information</li>
                    <li>• Update business information</li>
                    <li>• Request deletion of eligible information</li>
                    <li>• Withdraw consent where applicable</li>
                    <li>• Restrict or object to processing activities</li>
                    <li>• Request info on how your data is used</li>
                  </ul>
                  <p className="text-lichen text-[14.5px] leading-relaxed mt-3">
                    Requests may be submitted using the contact information below.
                  </p>
                </div>
              </div>

              {/* 11. Third-Party Links */}
              <div className="flex gap-5">
                <div className="w-10 h-10 rounded-xl bg-spring/10 text-spring flex items-center justify-center shrink-0">
                  <LinkIcon className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="font-display font-semibold text-[19px] text-deep mb-3">
                    11. Third-Party Links
                  </h2>
                  <p className="text-lichen text-[14.5px] leading-relaxed">
                    Our website may contain links to third-party websites, including logistics providers, trade organizations,
                    government agencies, certification bodies, or social media platforms. AQYNTRA is not responsible for the
                    privacy practices or content of third-party websites. Users are encouraged to review the privacy policies
                    of those websites separately.
                  </p>
                </div>
              </div>

              {/* 12. Compliance Commitment */}
              <div className="flex gap-5">
                <div className="w-10 h-10 rounded-xl bg-spring/10 text-spring flex items-center justify-center shrink-0">
                  <Scale className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="font-display font-semibold text-[19px] text-deep mb-3">
                    12. Compliance Commitment
                  </h2>
                  <p className="text-lichen text-[14.5px] leading-relaxed mb-3">
                    AQYNTRA is committed to conducting business responsibly and handling information in accordance with
                    applicable legal and regulatory requirements. Where applicable, we strive to align our practices with:
                  </p>
                  <ul className="text-[13.5px] text-lichen space-y-2 font-medium">
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-spring shrink-0" />
                      Digital Personal Data Protection Act, 2023 (India)
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-spring shrink-0" />
                      Information Technology Act, 2000 (India)
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-spring shrink-0" />
                      General Data Protection Regulation (GDPR), where applicable
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-spring shrink-0" />
                      Other international data protection requirements relevant to global trade
                    </li>
                  </ul>
                </div>
              </div>

              {/* 13. Policy Updates */}
              <div className="flex gap-5">
                <div className="w-10 h-10 rounded-xl bg-spring/10 text-spring flex items-center justify-center shrink-0">
                  <RefreshCw className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="font-display font-semibold text-[19px] text-deep mb-3">
                    13. Policy Updates
                  </h2>
                  <p className="text-lichen text-[14.5px] leading-relaxed">
                    AQYNTRA may revise this Privacy Policy periodically to reflect changes in our business, technology, legal
                    requirements, or operational practices. The updated version will be published on this page together with
                    the revised &quot;Last Updated&quot; date.
                  </p>
                </div>
              </div>

              {/* 14. Contact Information */}
              <div className="flex gap-5">
                <div className="w-10 h-10 rounded-xl bg-spring/10 text-spring flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="font-display font-semibold text-[19px] text-deep mb-3">
                    14. Contact Information
                  </h2>
                  <p className="text-lichen text-[14.5px] leading-relaxed mb-4">
                    For questions relating to this Privacy Policy or the handling of your information, please contact us:
                  </p>
                  
                  <div className="bg-mist p-6 rounded-2xl border border-deep/[0.02] max-w-md">
                    <p className="font-display font-bold text-[16px] text-deep mb-1">AQYNTRA</p>
                    <p className="text-[13.5px] text-lichen mb-3">Sourcing, Packaging &amp; Supply Chain Services</p>
                    <ul className="text-[13px] text-lichen space-y-2">
                      <li><strong>Website:</strong> <a href="https://www.aqyntra.com" className="text-spring hover:underline font-semibold">www.aqyntra.com</a></li>
                      <li><strong>Email:</strong> <a href="mailto:info@aqyntra.com" className="text-spring hover:underline font-semibold">info@aqyntra.com</a></li>
                      <li className="pt-2 border-t border-deep/[0.04] mt-2">
                        <strong>Business Hours:</strong><br />
                        Monday – Friday<br />
                        09:00 AM – 06:00 PM (IST)
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* 15. Acceptance of this Policy */}
              <div className="flex gap-5">
                <div className="w-10 h-10 rounded-xl bg-spring/10 text-spring flex items-center justify-center shrink-0">
                  <CheckCircle className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="font-display font-semibold text-[19px] text-deep mb-3">
                    15. Acceptance of this Policy
                  </h2>
                  <p className="text-lichen text-[14.5px] leading-relaxed">
                    By accessing or using the AQYNTRA website, communicating with our representatives, submitting
                    enquiries, requesting quotations, or conducting business with AQYNTRA, you acknowledge that you have
                    read, understood, and accepted this Privacy Policy.
                  </p>
                </div>
              </div>

            </div>

          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}
