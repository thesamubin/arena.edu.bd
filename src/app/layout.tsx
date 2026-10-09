import type { Metadata } from "next";
import "./globals.css";
import { InstitutionalTopBar } from "@/components/layout/InstitutionalTopBar";
import { AnnouncementBar } from "@/components/layout/AnnouncementBar";
import { InstitutionalHeader } from "@/components/layout/InstitutionalHeader";
import { InstitutionalFooter } from "@/components/layout/InstitutionalFooter";

export const metadata: Metadata = {
  metadataBase: new URL("https://arena.edu.bd"),
  title: {
    default: "Arena Web Security — Applied Cybersecurity Institute",
    template: "%s | Arena Web Security",
  },
  description:
    "Official academic portal of Arena Web Security (arena.edu.bd). Professional diplomas, hands-on penetration testing laboratories, corporate cyber defense, and applied security research.",
  keywords: [
    "cybersecurity institute Bangladesh",
    "arena web security",
    "arena.edu.bd",
    "ethical hacking diploma",
    "penetration testing Bangladesh",
    "VAPT",
    "OSINT training",
  ],
  authors: [{ name: "Arena Web Security", url: "https://arena.edu.bd" }],
  creator: "Arena Web Security",
  publisher: "Arena Web Security",
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col font-sans bg-academic-warm text-academic-ink-primary antialiased">
        <InstitutionalTopBar />
        <AnnouncementBar />
        <InstitutionalHeader />
        <main className="flex-1">{children}</main>
        <InstitutionalFooter />
      </body>
    </html>
  );
}
