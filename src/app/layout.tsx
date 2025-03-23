import type { Metadata } from "next";
import { Geist, Geist_Mono, Racing_Sans_One, Raleway } from "next/font/google";
import "./globals.css";
import Header from "@/sections/Header";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const raleway = Raleway({
    subsets: ["latin"],
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    style: ["normal", "italic"],
    display: "swap",
});

export const racingSansOne = Racing_Sans_One({
    subsets: ["latin"],
    weight: "400",
    display: "swap",
});

export const metadata: Metadata = {
    title: "FOSO Test",
    description: "Generated by create next app",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                <Header />
                <div className="relative overflow-clip">
                    <div className="absolute bg-gradient-to-r from-[#E0FFCC] to-[#CCFFEC] w-[500px] h-[500px]  blur-[267.45px] -left-[339px] top-[528px]"></div>
                    <div className="absolute bg-gradient-to-l from-[#E0FFCC] to-[#CCFFEC] w-[500px] h-[500px]  blur-[267.45px] left-[1770px] top-[2875px]"></div>

                    {children}
                </div>
            </body>
        </html>
    );
}
