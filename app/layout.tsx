import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

const siteUrl = 'https://luckybear6casino.vercel.app/'
const pageTitle = 'Lucky Bear Casino — официальный сайт, зеркало и лаки бир казино онлайн'
const pageDescription = 'Lucky Bear Casino: подробный русскоязычный гид по официальному сайту, зеркалу и доступу к лаки бир казино онлайн. Проверка адреса, навигация, правила и ответственная игра.'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: pageTitle,
  description: pageDescription,
  generator: 'Next.js',
  alternates: { canonical: siteUrl },
  robots: { index: true, follow: true },
  keywords: ['lucky bear casino', 'luckybear casino', 'лаки бир казино', 'лакибир казино', 'онлайн казино'],
  openGraph: {
    type: 'website',
    url: siteUrl,
    title: pageTitle,
    description: pageDescription,
    siteName: 'Lucky Bear Casino',
    locale: 'ru_RU',
  },
  twitter: { card: 'summary', title: pageTitle, description: pageDescription },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  colorScheme: 'dark',
  themeColor: '#111315',
  userScalable: true,
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru" className="bg-background">
      <head>
        <link rel="canonical" href={siteUrl} />
        <meta name="format-detection" content="telephone=no" />
        <meta name="referrer" content="strict-origin-when-cross-origin" />
      </head>
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
