import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Toaster } from "react-hot-toast";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Asmit Malakannawar",
    description:
        "Welcome to Asmit's digital space! He is a product designer from India. This is where he shares all the cool stuff that he has worked on. Take a look around to see his designs, graphics, and more. Each project has a story, and he would love to share them with you. Let's explore and get inspired together!",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <Toaster
                    position="top-center"
                    toastOptions={{
                        duration: 3000,
                        style: {
                            background: "#333",
                            color: "#fff",
                        },
                    }}
                />
                <Navbar />
                {children}
                <Footer />
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
