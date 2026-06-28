import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function POST() {
  try {
    const cookieStore = await cookies();
    cookieStore.set("admin_token", "", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 0, // immediately expires the cookie
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Admin Logout Error:", error);
    return NextResponse.json(
      { success: false, message: "An unexpected error occurred during logout" },
      { status: 500 }
    );
  }
}
