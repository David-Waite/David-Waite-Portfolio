import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import NavBar from "./components/Nav/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "David Waite | Web Developer",
  description: `David Waite. Web Developer. I like to create simple clean websites that gets the user to where they wanna go without the clutter.`,
  formatDetection: {
    telephone: false,
  },
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
        <div className="content">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
