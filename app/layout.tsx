import type { Metadata } from "next";
import "./globals.css";
import Header from "./header/page";
import Footer from "./footer/page";
import { geist } from "./data/fonts";

export const metadata: Metadata = {
  title: "Motech Solutions",
  description: "Your trusted technology partner for innovative solutions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`flex min-h-dvh flex-col ${geist.className} text-lg antialiased`}
      >
        <Header />
        <main className="container flex-grow px-4">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
