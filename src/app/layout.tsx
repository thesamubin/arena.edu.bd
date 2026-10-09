import type { Metadata } from "next";
import "./globals.css";
import { Inter, Lora } from "next/font/google";
import { InstitutionalTopBar } from "@/components/layout/InstitutionalTopBar";
import { AnnouncementBar } from "@/components/layout/AnnouncementBar";
import { InstitutionalHeader } from "@/components/layout/InstitutionalHeader";
import { InstitutionalFooter } from "@/components/layout/InstitutionalFooter";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

const lora = Lora({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-serif",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.arenawebsecurity.edu.bd"),
  title: {
    default: "Arena Web Security Institute of Technology — Applied Cybersecurity Institute",
    template: "%s | Arena Web Security Institute of Technology",
  },
  description:
    "Official academic portal of Arena Web Security Institute of Technology (arenawebsecurity.edu.bd). Professional diplomas, hands-on penetration testing laboratories, corporate cyber defense, and applied security research.",
  keywords: [
    "cybersecurity institute Bangladesh",
    "arena web security",
    "arenawebsecurity.edu.bd",
    "ethical hacking diploma",
    "penetration testing Bangladesh",
    "VAPT",
    "OSINT training",
  ],
  authors: [{ name: "Arena Web Security Institute of Technology", url: "https://www.arenawebsecurity.edu.bd" }],
  creator: "Arena Web Security Institute of Technology",
  publisher: "Arena Web Security Institute of Technology",
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
    <html lang="en" className={`${inter.variable} ${lora.variable}`}>
      <body className="min-h-screen flex flex-col font-sans bg-academic-warm text-academic-ink-primary antialiased">
        {/* InstitutionalTopBar removed to clean up the header area */}
        <AnnouncementBar />
        <InstitutionalHeader />
        <main className="flex-1">{children}</main>
        <InstitutionalFooter />
      </body>
    </html>
  );
}
