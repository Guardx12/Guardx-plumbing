import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Coastal Plumbing & Heating",
  description: "Emergency plumbers, boiler repairs, and installations across Sussex. Fast response, transparent pricing, and workmanship guaranteed.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
