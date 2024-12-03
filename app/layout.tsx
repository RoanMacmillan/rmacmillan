import type { Metadata } from "next";
import localFont from "next/font/local";
import '../globals.css'
import Nav from "@/components/containers/nav";
import Footer from "@/components/containers/footer";

import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"], // Specify character subsets
  weight: ["400", '500', '600', "700"], // Optional: Specify weights
  style: ["normal", "italic"], // Optional: Specify styles
  variable: "--font-poppins", // Optional: CSS variable for custom use
});


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="px-5">
        <div className="w-full h-1 bg-black absolute top-0 left-0"></div>
        <header>
          <Nav></Nav>
        </header>
        <main>{children}</main>
        {/* <footer>© 2024 My App</footer> */}
        <Footer></Footer>
      </body>
    </html>
  );
}

