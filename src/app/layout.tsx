import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NaariSamata Organization Registration Portal",
  description: "Register your organization to support women and children in India",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.Node;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
