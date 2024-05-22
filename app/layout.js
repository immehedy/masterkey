import { Inter } from "next/font/google";
import Header from "./components/Header";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Masterkey Technology",
  description: "Application Task for Masterkey Technology",
};

export default function RootLayout({ children }) {
  return (
      <html lang="en">
        <body className={`bg-purple-100 ${inter.className}`}>
          <Header />
          <div className="container h-screen">{children}</div>
          <footer className="bg-primary text-white w-full h-[40px] py-2 px-5">
            <p className="text-center">Designed by Mehedy Hassan</p>
          </footer>
        </body>
      </html>
  );
}
