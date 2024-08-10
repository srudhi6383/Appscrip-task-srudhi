import { Nunito } from "next/font/google";
import "./globals.css";
import { Footer, Header } from "@/components";
const nunito = Nunito({ subsets: ["latin"] });

export const metadata = {
  title: "Appscrip-task-Srudhi",
  description: "ecommerce website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={nunito.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
