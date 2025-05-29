import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Image from "next/image"; 

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ToDo Tracker",
  description: "Track your daily tasks easily.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <header style={{ textAlign: "center", padding: "20px" }}>
          <Image
            src="/OIP.png" 
            alt="App Logo"
            width={60}
            height={60}
            priority
          />
        </header>
        {children}
      </body>
    </html>
  );
}
