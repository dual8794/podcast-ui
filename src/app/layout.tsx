import type { Metadata } from "next";
import "./globals.css";
import { ReactQueryProvider } from "./provider";

export const metadata: Metadata = {
  title: "Search Podcasts",
  description: "Search for podcasts and episodes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <ReactQueryProvider>{children}</ReactQueryProvider>
      </body>
    </html>
  );
}
