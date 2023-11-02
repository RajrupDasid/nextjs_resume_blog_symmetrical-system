import type { Metadata } from "next";
import { Inter } from "next/font/google";
import NavBar from "./navbar/page";
import Footer from "./footer/page";
import GoogleAnalytics from "./GoogleAnalytics";
import ClarityMS from "./Clarity";
import NextBreadcrumb from "@/components/breadcrumbs/Breadcrumbs";
import "@/global.css";
import Head from "next/head";
import GoogleAdsense from "./GoogleAdsense";

const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
  metadataBase: new URL("https://www.webstackpros.net"),
  title: "Webstackpros.net",
  description:
    "We are a team of professionals here to turn your digital dreams into reality. You imagine it, and we'll develop it. Thank you for visiting our site.",
  other: { "p:domain_verify": "7f562b83bb6b61abb8204072b470b756" },
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
        <NextBreadcrumb
          homeElement={"Home"}
          separator={<span> &gt; </span>}
          activeClasses="text-amber-500 items-center"
          containerClasses="flex py-2 bg-opacity-100 rounded-lg"
          listClasses="hover:underline mx-10 font-bold"
          capitalizeLinks
        />
        {children}
        <Footer />
        {process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS ? (
          <GoogleAnalytics ga_id={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS} />
        ) : null}

        {process.env.NEXT_PUBLIC_GOOGLE_ADSENSE ? (
          <GoogleAdsense ad_id={process.env.NEXT_PUBLIC_GOOGLE_ADSENSE} />
        ) : null}

        <ClarityMS />
      </body>
    </html>
  );
}
