export type Category = '3D Animation' | 'Character Design' | 'Product Visual' | 'Branding' | 'Motion Graphics' | 'Instagram Design';
export interface Project { id:number; title:string; category:Category; featured?:boolean; colorA:string; colorB:string; }

export const projects: Project[] = [
  { id:1,title:'Abstract Motion',category:'Motion Graphics',featured:true,colorA:'#2A145A',colorB:'#7C3AED' },
  { id:2,title:'Product Animation',category:'3D Animation',featured:true,colorA:'#1D294B',colorB:'#8B5CF6' },
  { id:3,title:'Character Design',category:'Character Design',featured:true,colorA:'#0F2F3A',colorB:'#6D28D9' },
  { id:4,title:'Brand Visual',category:'Branding',featured:true,colorA:'#311B45',colorB:'#9333EA' },
  { id:5,title:'Motion Graphics',category:'Motion Graphics',featured:true,colorA:'#172554',colorB:'#7E22CE' },
  { id:6,title:'Futuristic Helmet',category:'3D Animation',colorA:'#1F2937',colorB:'#8B5CF6' },
  { id:7,title:'Glass Cube',category:'Product Visual',colorA:'#1E1B4B',colorB:'#7C3AED' },
  { id:8,title:'Sneaker Visual',category:'Product Visual',colorA:'#111827',colorB:'#6D28D9' },
  { id:9,title:'Product Bottle',category:'Product Visual',colorA:'#0B1120',colorB:'#9333EA' },
  { id:10,title:'Watch Visual',category:'3D Animation',colorA:'#1F2937',colorB:'#7C3AED' },
  { id:11,title:'Social Media Campaign',category:'Branding',colorA:'#172554',colorB:'#8B5CF6' },
  { id:12,title:'Poster Design',category:'Branding',colorA:'#0F172A',colorB:'#6D28D9' }
];

export const instagramProjects = [
  'Coffee Land','Fit Move','Glow Skincare','Travel More','Burger House','Minimal Interior','Tech Future'
].map((title,i)=>({id:i+1,title,category:'Instagram Design' as Category,colorA:['#1f2937','#1e1b4b','#0f172a'][i%3],colorB:['#8b5cf6','#7c3aed','#9333ea'][i%3]}));
