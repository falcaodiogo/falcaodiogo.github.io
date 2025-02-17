import type { Metadata } from "next";
import { Inter, Geist, Geist_Mono, Archivo, Crimson_Pro } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const interFont = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const archivoFont = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
});

const crimsonProFont = Crimson_Pro({
  variable: "--font-crimson-pro",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Diogo's Portfolio",
  description: "My portfolio website"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${interFont.variable} ${archivoFont.variable} ${crimsonProFont.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
