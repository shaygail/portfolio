import "./globals.css";

export const metadata = {
  title: "Shayenne Galiste",
  description: "Portfolio Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={children}>{children}</body>
    </html>
  );
}
