import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Neellohit Somayajula - Portfolio',
  description: 'Portfolio website of Neellohit Somayajula - Full Stack Developer',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
} 