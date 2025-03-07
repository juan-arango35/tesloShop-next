
export default function AuthLayout({
 children
}: {
 children: React.ReactNode;
}) {
  return (
    <main className="bg-gay-700 min-h-screen">
        {children}
    </main>
  );
}