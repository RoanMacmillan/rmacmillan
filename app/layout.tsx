"use client";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "../globals.css";
import Nav from "@/components/containers/nav";
import Footer from "@/components/containers/footer";
import ScrollToTopButton from "@/animations/scroll";
import { Poppins } from "next/font/google";
import LoadingBar from "@/animations/loading-bar";
import { Toaster } from "@/components/ui/toaster";

const poppins = Poppins({
  subsets: ["latin"], // Specify character subsets
  weight: ["200", "300", "400", "500", "600", "700", "800"], // Optional: Specify weights
  style: ["normal", "italic"], // Optional: Specify styles
  variable: "--font-poppins", // Optional: CSS variable for custom use
});

// export const metadata = {
//   title: "Default Title", // Fallback title
//   description: "This is the default description for the site",
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className="h-full" lang="en">
      <body
        className={`antialiased mx-auto bg-customWhite m-0 min-h-full relative customMd:pt-[184px] pb-1`}
      >

        <header>
          <Nav></Nav>
        </header>

        <main className="mt-[50px] customMd:mt-0">{children}</main>
        <Toaster></Toaster>
        <Footer></Footer>
      </body>
    </html>
  );
}
