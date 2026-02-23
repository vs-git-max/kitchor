import type { Metadata } from "next";
import { Roboto, Goldman } from "next/font/google";
import "./globals.css";
import Navbar from "./components/nav/Navbar";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const logoFontFamily = Goldman({
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "KITCHOR",
  description: "Building kitchen designs for users",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.className}  antialiased bg-primary`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
