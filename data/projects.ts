import type { ProjectVisualVariant } from "@/components/visual/ProjectVisual";

export type Project = {
  id: string;
  number: string;
  title: string;
  category: string;
  variant: ProjectVisualVariant;
};

export const projects: Project[] = [
  { id: "01", number: "01", title: "Abstract Motion", category: "3D Animation", variant: "abstract-motion" },
  { id: "02", number: "02", title: "Product Animation", category: "3D Animation", variant: "product-ring" },
  { id: "03", number: "03", title: "Character Design", category: "3D Character", variant: "character" },
  { id: "04", number: "04", title: "Brand Visual", category: "Branding", variant: "brand-symbol" },
  { id: "05", number: "05", title: "Motion Graphics", category: "Motion Design", variant: "motion-sphere" },
  { id: "06", number: "06", title: "Futuristic Helmet", category: "3D Design", variant: "helmet" },
  { id: "07", number: "07", title: "Glass Cube", category: "3D Animation", variant: "glass-cube" },
  { id: "08", number: "08", title: "Sneaker Visual", category: "Product Visual", variant: "sneaker" },
  { id: "09", number: "09", title: "Bottle Campaign", category: "Product Visual", variant: "bottle" },
  { id: "10", number: "10", title: "Watch Visual", category: "Product Visual", variant: "watch" },
  { id: "11", number: "11", title: "Social Campaign", category: "Instagram Design", variant: "instagram" },
  { id: "12", number: "12", title: "Poster Design", category: "Branding", variant: "abstract-motion" },
];

export const instagramProjects: Project[] = [
  { id: "ig-01", number: "01", title: "Coffee Land", category: "Instagram Design", variant: "motion-sphere" },
  { id: "ig-02", number: "02", title: "Fit Move", category: "Instagram Design", variant: "character" },
  { id: "ig-03", number: "03", title: "Glow Skincare", category: "Instagram Design", variant: "bottle" },
  { id: "ig-04", number: "04", title: "Travel More", category: "Instagram Design", variant: "glass-cube" },
  { id: "ig-05", number: "05", title: "Burger House", category: "Instagram Design", variant: "motion-sphere" },
  { id: "ig-06", number: "06", title: "Minimal Interior", category: "Instagram Design", variant: "instagram" },
  { id: "ig-07", number: "07", title: "Tech Future", category: "Instagram Design", variant: "brand-symbol" },
];

export const instagramPosts = instagramProjects.map((project) => project.title);
