import { NextRequest, NextResponse, userAgent } from "next/server";
import bcrypt from "bcrypt";
import "dotenv/config";
import { createAdmin } from "@/controllers/user.controller";
import {cookies} from "next/headers";
import jwt from "jsonwebtoken";






export const POST = async (req: NextRequest) => {
  const setCookie = cookies();
  const { name, email, password } = await req.json();
  const hashedPassword = await bcrypt.hash(password, 10);
  try {
    await createAdmin(name, email, hashedPassword, true, "ADMIN");
    const token = jwt.sign({ email: email,
     }, process.env.JWT_SECRET as string, {
      expiresIn: "30d",
    });
    (await setCookie).set("token", token, {
      path: "/",
      httpOnly: true,
      // secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 60 * 60 * 24 * 30,
      // domain: process.env.NEXT_PUBLIC_VERCEL_URL,
    });
    return NextResponse.json({ message: "Admin created successfully" });

  } catch (error: any) {
    console.log(error.message);
    return NextResponse.json({ message: error.message });
  }
  // return NextResponse.json({ message: "Admin created successfully" });
};