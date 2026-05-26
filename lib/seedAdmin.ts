import bcrypt from "bcryptjs";
import { connectMongo } from "@/lib/mongodb";
import { seedSiteContent } from "@/lib/siteContent";
import { AdminUser } from "@/models/AdminUser";

export async function seedAdminUser() {
  await connectMongo();

  const username = process.env.ADMIN_SEED_USERNAME || "admin";
  const password = process.env.ADMIN_SEED_PASSWORD || "admin";

  const exists = await AdminUser.findOne({ username });

  if (!exists) {
    const passwordHash = await bcrypt.hash(password, 12);

    await AdminUser.create({
      username,
      passwordHash,
    });
  }

  await seedSiteContent();
}
