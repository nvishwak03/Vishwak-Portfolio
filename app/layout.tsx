
import "./globals.css";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      
      <body className="bg-gray-100">
        <main className="pt-16">{children}</main> {/* Add padding-top to avoid content overlap with the fixed Navbar */}
      </body>
    </html>
  );
}