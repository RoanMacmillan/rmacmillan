import type { Metadata } from "next";
import localFont from "next/font/local";
import '../globals.css'
import Nav from "@/components/containers/nav";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header>
          <Nav></Nav>
        </header>
        <main className="px-5">{children}</main>
        {/* <footer>© 2024 My App</footer> */}
      </body>
    </html>
  );
}

