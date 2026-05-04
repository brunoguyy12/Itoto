import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { NextIntlClientProvider } from 'next-intl'
import { getLocale, getMessages } from 'next-intl/server'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'ITOTO Learning Hub | Empowering Minds, Transforming Futures',
  description: 'A values-driven learning and capacity development center dedicated to promoting holistic, practical, and transformational learning through language training, career guidance, and community development.',
  keywords: ['language learning', 'English courses', 'French courses', 'Kirundi', 'Kiswahili', 'career guidance', 'translation services', 'Burundi education', 'TOEFL preparation', 'IELTS preparation'],
  authors: [{ name: 'ITOTO Learning Hub' }],
  openGraph: {
    title: 'ITOTO Learning Hub | Empowering Minds, Transforming Futures',
    description: 'Quality learning, language, professional, and community development services in Burundi and beyond.',
    type: 'website',
    locale: 'en_US',
  },
}

export const viewport = {
  themeColor: '#F47C20',
  width: 'device-width',
  initialScale: 1,
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const locale = await getLocale()
  const messages = await getMessages()

  return (
    <html lang={locale} className={`${inter.variable} bg-background`}>
      <body className="font-sans antialiased">
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
