import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { verifyJWT } from "@/lib/auth";
import prisma from "@/lib/db";

export async function GET() {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get("admin_token")?.value;

    if (!token) {
      return NextResponse.json({ success: false, message: "Unauthorized" }, { status: 401 });
    }

    const payload = await verifyJWT(token);
    if (!payload) {
      return NextResponse.json({ success: false, message: "Unauthorized" }, { status: 401 });
    }

    const inquiries = await prisma.inquiry.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

    return NextResponse.json({ success: true, data: inquiries });
  } catch (error: any) {
    console.error("Admin Fetch Inquiries Error:", error);
    return NextResponse.json(
      { success: false, message: error.message || "Failed to fetch inquiries" },
      { status: 500 }
    );
  }
}
