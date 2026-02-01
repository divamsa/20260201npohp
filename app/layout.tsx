import type { Metadata } from 'next'
import { Zen_Old_Mincho, Zen_Kaku_Gothic_New } from 'next/font/google'
import './globals.css'
import { Header } from './components/layout/Header'
import { Footer } from './components/layout/Footer'

const mincho = Zen_Old_Mincho({
  weight: ['400', '500', '600', '700', '900'],
  variable: '--font-mincho',
  display: 'swap',
  preload: false,
})

const gothic = Zen_Kaku_Gothic_New({
  weight: ['300', '400', '500', '700', '900'],
  variable: '--font-gothic',
  display: 'swap',
  preload: false,
})

export const metadata: Metadata = {
  title: '特定非営利活動法人 おひとりさま終活支援協議会 | 陽の終活',
  description: '豊島区で終活、遺贈、相続のご相談ならNPO法人おひとりさま終活支援協議会へ。「陽（ひ）の終活」で安心と尊厳ある未来をサポートします。',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja" className={`${mincho.variable} ${gothic.variable}`}>
      <body className="antialiased">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
