import type { Metadata } from "next";
import "./globals.css";
import NavBar from "./components/NavBar";

export const metadata: Metadata = {
  title: "YouTube Clone",
  description: "YouTube Clone built with Next.js and Tailwind CSS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-white">
        <NavBar />
        {children}
      </body>
    </html>
  );
}
