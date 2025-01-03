import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "BrewUp - Where creators brew the future.",
  description:
    "BrewUp lets supporters fuel creators with small contributions, like buying them a brew. Simple, personal, and rewarding!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <div className="min-h-screen">

        
        {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}