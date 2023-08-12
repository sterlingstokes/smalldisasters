import "./globals.css";
import { Inter } from "next/font/google";
import Header from "./header/Header";
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
        <Header />
        <Navigation />
        {children}
      </body>
    </html>
  );
}
