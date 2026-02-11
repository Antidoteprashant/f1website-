import type { Metadata } from "next";
import { Orbitron, Rajdhani } from "next/font/google";
import "./globals.css";

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
  display: "swap",
});

const rajdhani = Rajdhani({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-rajdhani",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Red Bull RB19 Formula 1 - Works Team Prototype",
  description: "Experience the championship-winning Red Bull Racing RB19 Formula 1 car through an immersive scrollytelling showcase featuring ground-effect aerodynamics and hybrid power.",
  keywords: ["Red Bull Racing", "RB19", "Formula 1", "F1", "aerodynamics", "hybrid power unit"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${orbitron.variable} ${rajdhani.variable}`}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
