import "./globals.css";

export const metadata = {
  title: "Gerai POS System",
  description: "Sistem POS untuk gerai dengan fungsi login, laporan, dan PWA.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ms">
      <body className="bg-gray-50 text-gray-900 min-h-screen">{children}</body>
    </html>
  );
}
