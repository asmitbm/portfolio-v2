import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Asmit Malakannawar",
    description:
        "Welcome to Asmit's digital space! This is where he shares all the cool stuff that he has worked on. Take a look around to see my designs, graphics, and more. Each project has a story, and I'd love to share them with you. Let's explore and get inspired together!",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <Navbar />
                {children}
                <Contact />
                <Script
                    strategy="afterInteractive"
                    src="https://www.googletagmanager.com/gtag/js?id=G-MD828K0DZ2"
                />
                <Script id="google-analytics" strategy="afterInteractive">
                    {`
                      window.dataLayer = window.dataLayer || [];
                      function gtag(){dataLayer.push(arguments);}
                      gtag('js', new Date());
                      gtag('config', 'G-MD828K0DZ2');
                    `}
                </Script>
            </body>
        </html>
    );
}
