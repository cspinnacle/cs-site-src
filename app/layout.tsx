import type { Metadata } from "next";
import { Fraunces, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const jbmono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-jbmono",
});

export const metadata: Metadata = {
  title: "CS @ Pinnacle Academy",
  description:
    "Class hub for Computer Science at Pinnacle Academy — newsletters, articles, and class info for Grades 6–11.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${fraunces.variable} ${inter.variable} ${jbmono.variable} antialiased`}
      >
        <Navigation />
        <main role="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
