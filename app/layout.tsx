import type { Metadata } from 'next';
import './globals.css';
export const metadata:Metadata={title:'SEXIMON Portfolio',description:'Premium cinematic 3D portfolio'};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang='en'><body><main className='mx-auto max-w-frame px-4 pb-16 pt-24 md:px-8'>{children}</main></body></html>}
