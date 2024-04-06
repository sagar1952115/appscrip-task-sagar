import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Appscrip - One stop e-commerce solution",
  description: "Discover the future of e-commerce.",
  keywords: [
    "e-commerce",
    "online shopping",
    "digital marketplace",
    "business solutions",
    "retail",
    "online retail",
    "ecommerce platform",
    "online store",
    "internet shopping",
    "virtual storefront",
    "online commerce",
    "electronic commerce",
    "ecommerce website",
    "digital goods",
    "virtual goods",
    "online payments",
    "secure transactions",
    "mobile commerce",
    "social commerce",
    "customer experience",
    "omnichannel retail",
    "supply chain management",
    "inventory management",
    "dropshipping",
    "fulfillment services",
    "product catalog",
    "shopping cart",
    "checkout process",
    "payment gateway",
    "order tracking",
    "customer support",
    "customer reviews",
    "loyalty programs",
    "discounts and promotions",
    "shipping and delivery",
    "return policy",
  ],
  robots: "index, follow",
  languages: ["English"],
};

export default function RootLayout({ children }) {
  return (
    <>
      <Head>
        <link rel="icon" href="./favicon.ico" sizes="any" />
      </Head>
      <html lang="en">
        <body>{children}</body>
      </html>
    </>
  );
}
