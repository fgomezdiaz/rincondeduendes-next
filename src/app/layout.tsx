import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import NavBar from "../components/NavBar";
import { ScrollToTopOnRouteChange } from "../components/ScrollToTopOnRouteChange";
import { Analytics } from "@vercel/analytics/next";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Rincón de Duendes",
  description: "Librería infantil y juguetería",
  keywords: ["librería", "infantil", "juguetería", "juguetes", "libros", "madera", "puzzles", "construcciones"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="light">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ScrollToTopOnRouteChange />
        <div className="min-h-screen max-h-screen flex flex-col bg-gradient-to-r from-white via-gray-200 to-white">
          <NavBar  />
          <main className="flex-1 overflow-y-auto">
            {children}
            <Analytics />
          </main>
          <footer className="w-full justify-center items-center bottom-0 text-center ">
            <div className="flex justify-center gap-1 pb-2 md:pb-4 pt-0 md:pt-4 ">
              <span className="text-default-600">Powered by</span>
              <p className="text-blue-500">Rincón de Duendes</p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
