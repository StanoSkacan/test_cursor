import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Animated Navigation Demo",
  description: "Demo fullscreen hamburger navigacie, ktora sa vysuva zhora."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sk">
      <body>{children}</body>
    </html>
  );
}
