import "./globals.css";
import { Inter } from "next/font/google";
import HeaderImages from "./header/HeaderImages";
import Navigation from "./navigation/Navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "small disasters - (are better than larger ones)",
  description: "All you need to know about small d in gainesville, fl",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header>
          <HeaderImages />
          <Navigation />
        </header>
        <main className="flex flex-col items-center justify-between p-8 lg:p-24 lg:mx-48">
          <section className="w-full">{children}</section>
        </main>
      </body>
    </html>
  );
}
