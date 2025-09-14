import ToastConfig from "@/config/toast-config";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl">
      <body>
        {children}
        <ToastConfig />
      </body>
    </html>
  );
}
