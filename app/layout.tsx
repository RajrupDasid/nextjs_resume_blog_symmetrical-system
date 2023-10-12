import type { Metadata } from "next";
import { Inter } from "next/font/google";
import NavBar from "./navbar/page";
import Footer from "./footer/page";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Webstackpros.net",
  description:
    "We are a team of professionals here to turn your digital dreams into reality. You imagine it, and we'll develop it. Thank you for visiting our site.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
