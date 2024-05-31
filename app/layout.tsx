import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Notes",
  description: "Keep all your important",
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "./Notes.png",
        href: "./Notes.png",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "./Notes-Dark.png",
        href: "./Notes-Dark.png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
