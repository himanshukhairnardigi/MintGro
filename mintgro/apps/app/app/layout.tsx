import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mintgro — Business Growth Made Simple",
  description:
    "Transform challenges into opportunities with Mintgro's all-in-one business growth platform. Features, analytics, and tools designed to scale your business.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">{children}</body>
    </html>
  );
}