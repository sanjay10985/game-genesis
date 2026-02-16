import { Nova_Flat } from "next/font/google";
import "./globals.css";
import LoadingScreen from "@/components/LoadingScreen";

const novaFlat = Nova_Flat({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-nova-flat",
  display: "swap",
});

export const metadata = {
  title: "Game Genesis",
  description:
    "Professional game development studio creating immersive gaming experiences",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${novaFlat.variable} antialiased`}>
        <LoadingScreen />
        {children}
      </body>
    </html>
  );
}
