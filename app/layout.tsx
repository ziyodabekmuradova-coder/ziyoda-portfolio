import type { Metadata } from "next";
import "./globals.css";

const fullPortfolio = process.env.NEXT_PUBLIC_FULL_PORTFOLIO_URL || "https://www.figma.com/";

export const metadata: Metadata = {
  title: "Ziyoda Usman — Product Designer",
  description:
    "Ziyoda Usman is a Product Designer from Uzbekistan specializing in UI/UX, mobile apps, web products and digital experiences.",
  metadataBase: new URL("https://ziyodabekmuradova.vercel.app"),
  openGraph: {
    title: "Ziyoda Usman — Product Designer",
    description:
      "Product Designer from Uzbekistan specializing in UI/UX, mobile apps, web products and digital experiences.",
    type: "website",
    url: fullPortfolio,
  },
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
