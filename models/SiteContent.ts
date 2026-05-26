import mongoose, { Schema, type InferSchemaType, type Model } from "mongoose";

const ProjectSchema = new Schema(
  {
    number: String,
    title: String,
    category: String,
    variant: String,
    description: String,
  },
  { _id: false }
);

const ExperienceItemSchema = new Schema(
  {
    year: String,
    title: String,
    text: String,
  },
  { _id: false }
);

const ProcessStepSchema = new Schema(
  {
    number: String,
    title: String,
    text: String,
  },
  { _id: false }
);

const ServiceSchema = new Schema(
  {
    title: String,
    text: String,
  },
  { _id: false }
);

const ContactCardSchema = new Schema(
  {
    label: String,
    value: String,
    type: String,
  },
  { _id: false }
);

const SiteContentSchema = new Schema(
  {
    key: {
      type: String,
      required: true,
      unique: true,
      default: "main",
    },

    brand: {
      name: String,
      logoText: String,
    },

    home: {
      label: String,
      titleLine1: String,
      titleLine2: String,
      titleHighlight: String,
      description: String,
      buttonText: String,
      counterText: String,
      quote: String,
      quoteAuthor: String,
    },

    work: {
      label: String,
      featuredTitle: String,
      featuredHighlight: String,
      featuredDescription: String,
      allTitle: String,
      allHighlight: String,
      allDescription: String,
      categories: [String],
      projects: [ProjectSchema],
      instagramTitle: String,
      instagramDescription: String,
      instagramBadge: String,
      instagramProjects: [ProjectSchema],
    },

    about: {
      label: String,
      titleLine1: String,
      titleHighlight: String,
      description: String,
      buttonText: String,
      stats: [String],
      services: [ServiceSchema],
      tools: [String],
      approachLabel: String,
      approachTitle: String,
      approachHighlight: String,
      approachSteps: [ProcessStepSchema],
    },

    experience: {
      label: String,
      titleLine1: String,
      titleHighlight: String,
      description: String,
      stats: [String],
      items: [ExperienceItemSchema],
    },

    process: {
      label: String,
      titleLine1: String,
      titleHighlight: String,
      description: String,
      steps: [ProcessStepSchema],
    },

    contact: {
      label: String,
      titleLine1: String,
      titleHighlight: String,
      description: String,
      fields: [String],
      buttonText: String,
      cards: [ContactCardSchema],
    },
  },
  {
    timestamps: true,
  }
);

export type SiteContentDocument = InferSchemaType<typeof SiteContentSchema>;

export const SiteContent: Model<SiteContentDocument> =
  mongoose.models.SiteContent || mongoose.model("SiteContent", SiteContentSchema);
