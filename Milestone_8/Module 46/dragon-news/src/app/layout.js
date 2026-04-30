import { Geist, Geist_Mono, Montserrat, Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/Components/Shared/Header";
import Navbar from "@/Components/Shared/Navbar";

const poopins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "700"]
})
export const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "700"]
})
export const metadata = {
  title: "Dragon News",
  description: "Best News Portan in Bangladesh",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={` h-full antialiased`}
    >
      <body className={`min-h-full flex flex-col ${poopins.className}`}>
        <main>
          {children}
        </main>

      </body>
    </html>
  );
}
