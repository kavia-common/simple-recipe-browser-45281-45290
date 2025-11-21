import type { Metadata, Viewport } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ocean Recipes",
  description: "Browse, search, and view delicious recipes.",
  applicationName: "Ocean Recipes",
  keywords: ["recipes", "cooking", "search", "Next.js", "Ocean Professional"],
  authors: [{ name: "Ocean Recipes" }],
  openGraph: {
    title: "Ocean Recipes",
    description: "Browse, search, and view delicious recipes.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#2563EB",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <div className="min-h-screen flex flex-col">
          <header className="hero-bg border-b border-black/5">
            <div className="container-op py-6 md:py-8">
              <div className="flex items-center justify-between gap-4">
                <Link href="/" className="inline-flex items-center gap-2 no-underline">
                  <span
                    aria-hidden
                    className="inline-flex h-9 w-9 items-center justify-center rounded-xl"
                    style={{ background: "linear-gradient(135deg, rgba(37,99,235,.12), rgba(2,6,23,.06))", boxShadow: "var(--shadow-sm)" }}
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="#2563EB" role="img" aria-label="Ocean Recipes logo">
                      <path d="M12 3c4 0 7 3 9 9-2 6-5 9-9 9s-7-3-9-9c2-6 5-9 9-9zm0 3c-2.8 0-5 2.2-6.8 6.7C6.9 17.2 9.2 19 12 19s5.1-1.8 6.8-6.3C17 8.2 14.8 6 12 6zm0 3.2a3.8 3.8 0 1 1 0 7.6 3.8 3.8 0 0 1 0-7.6z"/>
                    </svg>
                  </span>
                  <span className="font-semibold text-lg tracking-tight">Ocean Recipes</span>
                </Link>
                <nav aria-label="Primary">
                  <a className="btn-op btn-secondary" href="#recipes">Browse Recipes</a>
                </nav>
              </div>
            </div>
          </header>

          <main className="flex-1">{children}</main>

          <footer className="border-t border-black/5 bg-white">
            <div className="container-op py-6 text-sm text-muted flex items-center justify-between flex-wrap gap-3">
              <p>&copy; {new Date().getFullYear()} Ocean Recipes</p>
              <p>
                Built with <a className="link-op" href="https://nextjs.org" target="_blank" rel="noreferrer">Next.js</a>
              </p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
