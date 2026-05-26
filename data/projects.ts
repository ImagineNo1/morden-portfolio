export type ProjectVariant = 'abstract-motion'|'product-ring'|'character'|'brand-symbol'|'motion-sphere'|'helmet'|'glass-cube'|'sneaker'|'bottle'|'watch'|'instagram';
export type ProjectItem = { id: string; title: string; category: string; variant: ProjectVariant };
export const projects: ProjectItem[] = [
  { id: '01', title: 'Abstract Motion', category: '3D Animation', variant: 'abstract-motion' },
  { id: '02', title: 'Product Animation', category: '3D Animation', variant: 'product-ring' },
  { id: '03', title: 'Character Design', category: '3D Character', variant: 'character' },
  { id: '04', title: 'Brand Visual', category: 'Branding', variant: 'brand-symbol' },
  { id: '05', title: 'Motion Graphics', category: 'Motion Design', variant: 'motion-sphere' },
  { id: '06', title: 'Futuristic Helmet', category: '3D Design', variant: 'helmet' },
  { id: '07', title: 'Glass Cube', category: '3D Animation', variant: 'glass-cube' },
  { id: '08', title: 'Sneaker Visual', category: 'Product Visual', variant: 'sneaker' },
  { id: '09', title: 'Bottle Campaign', category: 'Product Visual', variant: 'bottle' },
  { id: '10', title: 'Watch Visual', category: 'Product Visual', variant: 'watch' },
  { id: '11', title: 'Social Campaign', category: 'Instagram Design', variant: 'instagram' },
  { id: '12', title: 'Poster Design', category: 'Branding', variant: 'abstract-motion' }
];
export const instagramPosts = ['Coffee Land','Fit Move','Glow Skincare','Travel More','Burger House','Minimal Interior','Tech Future'];
