import AdminSidebar from "@/components/shared/AdminSidebar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen flex">
        <aside className="w-64">
          <AdminSidebar />
        </aside>
        <main className="flex-grow p-4">{children}</main>
      </body>
    </html>
  );
}
