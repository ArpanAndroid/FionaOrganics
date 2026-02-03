import "./globals.css";
import { Outfit } from 'next/font/google';

const outfit = Outfit({ subsets: ['latin'], variable: '--font-outfit' });

export const metadata = {
    title: "Fiona Organics - Pure & Natural Superfoods",
    description: "Fiona Organics provides 100% pure, farm-fresh Moringa, Beetroot, and Turmeric powders. Chemical-free, nutrient-rich, and eco-friendly superfoods directly from nature.",
    keywords: "organic superfoods, moringa powder, beetroot powder, turmeric powder, natural health, organic supplements",
    authors: [{ name: "Fiona Organics" }],
    openGraph: {
        title: "Fiona Organics - Pure & Natural Superfoods",
        description: "100% pure, farm-fresh organic powders. Chemical-free, nutrient-rich superfoods.",
        type: "website",
    },
    icons: {
        icon: '/assets/images/logo.jpeg',
    },
    viewport: {
        width: 'device-width',
        initialScale: 1,
        maximumScale: 5,
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={outfit.className}>{children}</body>
        </html>
    );
}
