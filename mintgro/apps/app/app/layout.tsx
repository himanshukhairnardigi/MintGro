import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";

export const metadata: Metadata = {
  title: "Mintgro | Business Growth Made Simple",
  description: "Business growth made simple.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-white text-[#292929] antialiased">

        <Header />

        <main>
          {children}
        </main>
    </body>
    </html>
  );
}