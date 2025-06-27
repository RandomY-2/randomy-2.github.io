import "../styles/globals.css";
import { ReactNode } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

export const metadata = {
  title: "Jiahe Yan | Personal Site",
  description: "Software engineer writing about databases, systems, and various things.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen flex flex-col bg-gray-50 text-gray-900">
        <NavBar />
        <main className="flex-1 container mx-auto px-4 py-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
