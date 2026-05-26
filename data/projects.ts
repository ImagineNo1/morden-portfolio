export type Category = '3D Animation' | 'Character Design' | 'Product Visual' | 'Branding' | 'Motion Graphics' | 'Instagram Design';

export interface Project {
  id: number;
  title: string;
  category: Category;
  image: string;
  featured: boolean;
}

const categories: Category[] = ['3D Animation', 'Character Design', 'Product Visual', 'Branding', 'Motion Graphics', 'Instagram Design'];

export const projects: Project[] = Array.from({ length: 200 }, (_, i) => ({
  id: i + 1,
  title: `Project ${String(i + 1).padStart(3, '0')}`,
  category: categories[i % categories.length],
  image: `https://images.unsplash.com/photo-${1498050108023 + i}-c5249f4df085?auto=format&fit=crop&w=1000&q=80`,
  featured: i < 18
}));

export const instagramProjects = projects.filter((item) => item.category === 'Instagram Design').slice(0, 12);
