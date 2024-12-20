import "../globals.css";
import Nav from "@/components/containers/nav";
import Footer from "@/components/containers/footer";
import { Poppins } from "next/font/google";
import { Toaster } from "@/components/ui/toaster";
import ScrollOnNavigate from "@/components/ScrollOnNavigate";

const poppins = Poppins({
  subsets: ["latin"], // Specify character subsets
  weight: ["200", "300", "400", "500", "600", "700", "800"], // Optional: Specify weights
  style: ["normal", "italic"], // Optional: Specify styles
  variable: "--font-poppins", // Optional: CSS variable for custom use
});

export const metadata = {
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">

      <body
        className={`antialiased mx-auto bg-customWhite m-0 min-h-full relative customMd:pt-[184px] pb-1`}
      >
        <Nav></Nav>
        <main className="mt-[50px] customMd:mt-0">{children}</main>
        <Toaster></Toaster>
        <Footer></Footer>
        <ScrollOnNavigate></ScrollOnNavigate>

      </body>
    </html>
  );
}
