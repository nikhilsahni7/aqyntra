import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { signJWT } from "@/lib/auth";

export async function POST(req: Request) {
  try {
    const { username, password } = await req.json();

    const expectedUsername = process.env.ADMIN_USERNAME || "admin";
    const expectedPassword = process.env.ADMIN_PASSWORD || "admin123";

    if (username !== expectedUsername || password !== expectedPassword) {
      return NextResponse.json(
        { success: false, message: "Invalid username or password" },
        { status: 401 }
      );
    }

    const token = await signJWT({ username });

    const cookieStore = await cookies();
    cookieStore.set("admin_token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 24, // 24 hours
    });

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error("Admin Login Error:", error);
    return NextResponse.json(
      { success: false, message: "An unexpected error occurred during login" },
      { status: 500 }
    );
  }
}
