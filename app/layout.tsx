import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Coastal Plumbing & Heating | Plumbers in Sussex",
  description:
    "Reliable plumbing & heating across Sussex. Emergency call-outs, boiler servicing, repairs and bathroom plumbing — clear quotes and tidy workmanship.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
