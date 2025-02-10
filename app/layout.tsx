
import "./globals.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      
      <body className="bg-gray-100">
        
        <Navbar />
        <main className="pt-16">{children}</main> {/* Add padding-top to avoid content overlap with the fixed Navbar */}
        <Footer />
      </body>
    </html>
  );
}