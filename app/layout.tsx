import type { Metadata } from 'next';
import '@fontsource/jetbrains-mono/400.css';
import '@fontsource/jetbrains-mono/500.css';
import './globals.css';
export const metadata:Metadata={title:'HOUR ZERO — Roasted to order.',description:'Small-batch coffee from Connecticut. Roast to order. Ships in 48 hours.'};
export default function Layout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}
