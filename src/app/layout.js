import "./globals.css";
import { Inter } from "next/font/google";
import HeaderImages from "./header/HeaderImages";
import Navigation from "./navigation/Navigation";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "small disasters - (are better than larger ones)",
  description: "All you need to know about small d in gainesville, fl",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="overscroll-none">
        <div className="min-h-screen overscroll-none">
          <header>
            <HeaderImages />
            <Navigation />
          </header>
          <main className="flex flex-col items-center justify-between p-8 lg:p-24 lg:mx-48">
            <section className="w-full">{children}</section>
          </main>
          <footer className="w-full h-32 bg-slate-700 text-white flex items-center text-center">
            <div className="w-full flex flex-col lg:flex-row justify-center items-center p-8">
              <span>
                &copy; Copyright small disasters 2023. All rights reserved. All
                of them.
              </span>
              <a
                href="https://www.instagram.com/smalldgainesville/"
                target="_blank"
                rel="noreferrer nofollow"
                className="mt-4 lg:mt-0 ml-4"
              >
                <Image
                  src="/Instagram_Glyph_White.png"
                  width={32}
                  height={32}
                  alt="Instagram Logo"
                />
              </a>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
