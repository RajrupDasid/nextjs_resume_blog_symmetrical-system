import { Metadata } from "next";
import { Roboto } from "next/font/google";
import NavBar from "./navbar/page";
import Footer from "./footer/page";
import GoogleAnalytics from "./GoogleAnalytics";
import ClarityMS from "./Clarity";
import NextBreadcrumb from "@/components/breadcrumbs/Breadcrumbs";
import "@/global.css";
import GoogleAdsense from "./GoogleAdsense";
import { websiteMetadata } from "@/util/websiteMetaData";

const inter = Roboto({ weight: ["700"], subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.webstackpros.net"),
  title: "Webstackpros.net",
  description:
    "We are a team of professionals here to turn your digital dreams into reality. You imagine it, and we'll develop it. Thank you for visiting our site.",
  other: { "p:domain_verify": "7f562b83bb6b61abb8204072b470b756" },
};

// export const metadata: Metadata = {
//   metadataBase: new URL(websiteMetadata.siteUrl),
//   title: {
//     template: `%s | ${websiteMetadata.title}`,
//     default: websiteMetadata.title, // a default is required when creating a template
//   },
//   description: websiteMetadata.description,
//   other: { "p:domain_verify": "7f562b83bb6b61abb8204072b470b756" },
//   openGraph: {
//     title: websiteMetadata.title,
//     description: websiteMetadata.description,
//     url: websiteMetadata.siteUrl,
//     siteName: websiteMetadata.title,
//     images: [websiteMetadata.socialBanner],
//     locale: "en_US",
//     type: "website",
//   },
//   robots: {
//     index: true,
//     follow: true,
//     googleBot: {
//       index: true,
//       follow: true,
//       noimageindex: false,
//       "max-video-preview": -1,
//       "max-image-preview": "large",
//       "max-snippet": -1,
//     },
//   },
//   twitter: {
//     card: "summary_large_image",
//     title: websiteMetadata.title,
//     images: [websiteMetadata.socialBanner],
//   },
// };

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
