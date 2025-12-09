import './globals.css';
import Link from 'next/link';
import React from 'react';

export const metadata = {
  title: "Writer's Nook",
  description: 'A personal blog for lovers of the written word.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const year = new Date().getFullYear();
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <header className="py-6 border-b border-accent dark:border-gray-700">
          <div className="container mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-4">
            <Link href="/" className="text-3xl font-serif font-bold text-accent">
              Writer's Nook
            </Link>
            <nav className="space-x-4 font-sans text-lg">
              <Link href="/" className="hover:underline">
                Home
              </Link>
              <Link href="/about" className="hover:underline">
                About
              </Link>
            </nav>
          </div>
        </header>
        <main className="flex-grow container mx-auto px-4 py-8">{children}</main>
        <footer className="py-6 border-t border-accent dark:border-gray-700 text-center text-sm">
          <p>&copy; {year} Writer's Nook. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}
