import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Coastal Plumbing & Heating | Emergency & Domestic Plumbing",
  description:
    "Fast, tidy and trusted plumbing in West Sussex. Emergency call-outs, boiler servicing, leaks, installs and repairs.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
