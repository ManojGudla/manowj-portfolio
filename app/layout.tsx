
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "maNOWj | Portfolio",
  description: "Technology, projects, and ideas by maNOWj.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
