import { VisualVariant } from '@/components/visual/ProjectVisual';
export type Category = '3D Animation'|'3D Character'|'Branding'|'Motion Design'|'3D Design'|'Product Visual'|'Instagram Design';
export interface ProjectItem{ id:number; title:string; category:Category; variant:VisualVariant; }
export const projects:ProjectItem[]=[
{id:1,title:'Abstract Motion',category:'3D Animation',variant:'abstract-motion'},
{id:2,title:'Product Animation',category:'3D Animation',variant:'product-ring'},
{id:3,title:'Character Design',category:'3D Character',variant:'character'},
{id:4,title:'Brand Visual',category:'Branding',variant:'brand-symbol'},
{id:5,title:'Motion Graphics',category:'Motion Design',variant:'motion-sphere'},
{id:6,title:'Futuristic Helmet',category:'3D Design',variant:'helmet'},
{id:7,title:'Glass Cube',category:'3D Animation',variant:'glass-cube'},
{id:8,title:'Sneaker Visual',category:'Product Visual',variant:'sneaker'},
{id:9,title:'Bottle Campaign',category:'Product Visual',variant:'bottle'},
{id:10,title:'Watch Visual',category:'Product Visual',variant:'watch'},
{id:11,title:'Social Campaign',category:'Instagram Design',variant:'instagram'},
{id:12,title:'Poster Design',category:'Branding',variant:'abstract-motion'}
];
export const instagramProjects=['Coffee Land','Fit Move','Glow Skincare','Travel More','Burger House','Minimal Interior','Tech Future'].map((title,id)=>({id:id+1,title,category:'Instagram Design' as Category,variant:'instagram' as VisualVariant}));
