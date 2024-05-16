import type { Metadata } from "next";
import { Poppins, Anton } from "next/font/google";
import "./globals.css";
import Cta from "@/components/cta";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "100", "200", "300", "500", "600", "700"],
  display: "swap",
  variable: "--poppins",
});

export const anton = Anton({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
  variable: "--anton",
});

export const metadata: Metadata = {
  title: "Soko by AJ",
  description: "An e-commerce app by Aloys Aboge",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Cta />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
