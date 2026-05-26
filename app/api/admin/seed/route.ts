import { NextResponse } from "next/server";
import { seedAdminUser } from "@/lib/seedAdmin";

export async function POST() {
  try {
    await seedAdminUser();

    return NextResponse.json({
      ok: true,
      message: "Admin user and default content seeded.",
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        ok: false,
        message: "Failed to seed admin user.",
      },
      { status: 500 }
    );
  }
}

export async function GET() {
  return POST();
}
