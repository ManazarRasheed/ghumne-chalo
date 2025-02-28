import PublicNavbar from "@/components/shared/PublicNavbar";
import Footer from "@/components/shared/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <PublicNavbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
