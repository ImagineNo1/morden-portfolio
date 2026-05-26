import { defaultContent, type SiteContentShape } from "@/lib/defaultContent";
import { connectMongo } from "@/lib/mongodb";
import { SiteContent } from "@/models/SiteContent";

function serializeContent(content: unknown): SiteContentShape {
  return JSON.parse(JSON.stringify(content)) as SiteContentShape;
}

export async function getSiteContent(): Promise<SiteContentShape> {
  try {
    await connectMongo();

    const content = await SiteContent.findOne({ key: "main" }).lean();

    if (!content) {
      return defaultContent;
    }

    return {
      ...defaultContent,
      ...serializeContent(content),
    };
  } catch {
    return defaultContent;
  }
}

export async function upsertSiteContent(input: SiteContentShape) {
  await connectMongo();

  const updated = await SiteContent.findOneAndUpdate(
    { key: "main" },
    {
      ...input,
      key: "main",
    },
    {
      upsert: true,
      new: true,
      setDefaultsOnInsert: true,
    }
  ).lean();

  return serializeContent(updated);
}

export async function seedSiteContent() {
  await connectMongo();

  const exists = await SiteContent.findOne({ key: "main" });

  if (!exists) {
    await SiteContent.create(defaultContent);
  }
}
