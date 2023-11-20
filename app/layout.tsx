import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Projeto fortes',
  description: 'Aplicativo para pedir comida',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={`${inter.className} h-full w-full bg-primary min-h-screen px-8 py-4 flex flex-1 flex-col gap-2`}>{children}</body>
    </html>
  )
}
