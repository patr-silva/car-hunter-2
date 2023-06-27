import Navbar from "@/components/Navbar";
import Footer from '@/components/Footer';
import "./globals.css";


export const metadata = {
  title: "Car Hunter",
  description: "Discover the best car for you!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className="relative">
        <Navbar/>
        {children}
        <Footer/>
        </body>
    </html>
  );
}
