import '@/app/ui/global.css'
import { font_ngc } from '@/app/ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font_ngc.className}>{children}</body>
    </html>
  );
}
