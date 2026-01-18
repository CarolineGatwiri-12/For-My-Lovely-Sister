import type { Metadata } from "next";
import { Cormorant_Garamond, Great_Vibes } from "next/font/google";
import "./globals.css";

const garamond = Cormorant_Garamond({
  variable: "--font-garamond",
  subsets: ["latin"],
});

const vibes = Great_Vibes({
  weight: "400",
  variable: "--font-vibes",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "For my lovely Cee ❤️",
  description: "Made with love",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` ${garamond.variable} ${vibes.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
