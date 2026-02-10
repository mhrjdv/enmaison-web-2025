import Footer from "@/components/Footer";
import Header from "@/components/Header";
import GoToTop from "@/components/GoToTop";
import MobileDock from "@/components/MobileDock";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "An aesthetic room is given harmony",
  description: "Interior design portfolio showcasing beautiful spaces",
  metadataBase: new URL('https://interior-design-portfolio.vercel.app'),
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main>
          {children}
        </main>
        <Footer />
        <GoToTop />
        <MobileDock />
      </body>
    </html>
  );
}
