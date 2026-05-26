import jwt from "jsonwebtoken";
import { cookies } from "next/headers";

const JWT_SECRET = process.env.JWT_SECRET || "dev-secret-change-me";
const COOKIE_NAME = "seximon_admin_token";

export type AdminTokenPayload = {
  id: string;
  username: string;
};

export function signAdminToken(payload: AdminTokenPayload) {
  return jwt.sign(payload, JWT_SECRET, {
    expiresIn: "7d",
  });
}

export function verifyAdminToken(token: string): AdminTokenPayload | null {
  try {
    return jwt.verify(token, JWT_SECRET) as AdminTokenPayload;
  } catch {
    return null;
  }
}

export function getAdminSession() {
  const token = cookies().get(COOKIE_NAME)?.value;

  if (!token) {
    return null;
  }

  return verifyAdminToken(token);
}

export function setAdminCookie(token: string) {
  cookies().set(COOKIE_NAME, token, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 24 * 7,
  });
}

export function clearAdminCookie() {
  cookies().delete(COOKIE_NAME);
}

export { COOKIE_NAME };
