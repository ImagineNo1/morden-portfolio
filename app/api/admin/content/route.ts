import { NextResponse } from "next/server";
import { getAdminSession } from "@/lib/auth";
import { getSiteContent, upsertSiteContent } from "@/lib/siteContent";

export async function GET() {
  const session = getAdminSession();
  if (!session) {
    return NextResponse.json({ ok: false, message: "Unauthorized." }, { status: 401 });
  }

  const content = await getSiteContent();
  return NextResponse.json({ ok: true, content });
}

export async function PUT(request: Request) {
  const session = getAdminSession();
  if (!session) {
    return NextResponse.json({ ok: false, message: "Unauthorized." }, { status: 401 });
  }

  try {
    const body = await request.json();
    const updated = await upsertSiteContent(body);
    return NextResponse.json({ ok: true, content: updated });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ ok: false, message: "Failed to update content." }, { status: 500 });
  }
}
