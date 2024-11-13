import type { Metadata } from 'next';
import './globals.css';
import ClientThemeProvider from './ui/ClientThemeProvider';


export const metadata: Metadata = {
  title: 'kylewiskel.dev',
  description: 'Personal website of Kyle Wiskel',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
+      <body>
          <ClientThemeProvider>
          {children}
        </ClientThemeProvider>
      </body>
    </html>
  );
}
