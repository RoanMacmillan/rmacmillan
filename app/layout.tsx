'use client'
import type { Metadata } from "next";
import localFont from "next/font/local";
import "../globals.css";
import Nav from "@/components/containers/nav";
import Footer from "@/components/containers/footer";
import ScrollToTopButton from "@/components/containers/scroll";
import { Poppins } from "next/font/google";

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
      <body className="px-5 customMd:px-[80px] antialiased xl:px-36 mx-auto m-0 h-full py-[22.5px] customMd:py-0">
        <ScrollToTopButton className='hidden h-auto right-[-40px] bottom-0 lg:flex'></ScrollToTopButton>
        <div className="w-full h-1 bg-black absolute top-0 left-0"></div>
        
        <main className="relative">
          
        <header>
          <Nav></Nav>
        </header>
          
          {children}</main>
        <Footer></Footer>
      </body>
    </html>
  );
}
