import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";
import { signAdminToken, setAdminCookie } from "@/lib/auth";
import { connectMongo } from "@/lib/mongodb";
import { seedAdminUser } from "@/lib/seedAdmin";
import { AdminUser } from "@/models/AdminUser";

export async function POST(request: Request) {
  try {
    await seedAdminUser();
    await connectMongo();

    const body = await request.json();
    const username = String(body.username || "");
    const password = String(body.password || "");

    if (!username || !password) {
      return NextResponse.json({ ok: false, message: "Username and password are required." }, { status: 400 });
    }

    const user = await AdminUser.findOne({ username });
    if (!user) {
      return NextResponse.json({ ok: false, message: "Invalid username or password." }, { status: 401 });
    }

    const valid = await bcrypt.compare(password, user.passwordHash);
    if (!valid) {
      return NextResponse.json({ ok: false, message: "Invalid username or password." }, { status: 401 });
    }

    const token = signAdminToken({ id: String(user._id), username: user.username });
    setAdminCookie(token);

    return NextResponse.json({ ok: true, message: "Logged in successfully." });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ ok: false, message: "Login failed." }, { status: 500 });
  }
}
