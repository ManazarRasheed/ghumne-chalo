import UserSidebar from "@/components/shared/UserSidebar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen flex">
        <aside className="w-64 min-h-screen">
          <UserSidebar />
        </aside>
        <main className="flex-grow p-4">{children}</main>
      </body>
    </html>
  );
}
