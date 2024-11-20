import type { Metadata } from 'next';
import './globals.css';
import ClientThemeProvider from './ui/ClientThemeProvider';
import { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'kylewiskel.dev',
  description: 'Personal website of Kyle Wiskel',
  icons: {
    icon: '/favicon.ico', // Path to your favicon in the public folder
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang='en'>
      <ClientThemeProvider>{children}</ClientThemeProvider>
    </html>
  );
}
