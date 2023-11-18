import type { Metadata } from "next";
import "./globals.css";
import "animate.css";
import Provider from "./Provider";
import Navbar from "./components/sections/Navbar";
import Sidebar from "./components/sections/Sidebar";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  title: "Twitter",
  description: "Twitter clone",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <Provider>
        <body className=" h-screen w-screen flex p-2 relative justify-around dark:bg-black  dark:text-white">
          <Navbar />
          {children}
          <Sidebar />

          <Toaster />
        </body>
      </Provider>
    </html>
  );
}
