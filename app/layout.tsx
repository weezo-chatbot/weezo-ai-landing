// app/layout.tsx
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata = {
  title: 'Weezo AI',
  description: 'AI-powered chatbot landing page with analytics and demos',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} font-sans bg-weezo-gray text-white`}>
      <body className="antialiased">{children}</body>
    </html>
  )
}
