import type { Metadata } from 'next'
import { Source_Sans_3 } from 'next/font/google'
const alumn = Source_Sans_3({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={alumn.className}>{children}</body>
    </html>
  )
}
