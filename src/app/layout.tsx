import type { Metadata } from 'next'
import { Syne, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { ThemeProvider } from '@/context/ThemeContext'
import { LanguageProvider } from '@/context/LanguageContext'
import AppWrapper from '@/components/AppWrapper'

const syne = Syne({ 
  subsets: ['latin'], 
  weight: ['700', '800'],
  variable: '--font-syne' 
})

const jetBrainsMono = JetBrains_Mono({ 
  subsets: ['latin'], 
  weight: ['400', '500'],
  variable: '--font-jetbrains' 
})

export const metadata: Metadata = {
  title: 'Julián Villamizar - Desarrollador Backend',
  description: 'Portafolio profesional de Julián Villamizar, desarrollador backend especializado en PHP, Java, Node.js y arquitecturas avanzadas',
  icons: {
    icon: [
      {
        url: '/favicon.svg',
        type: 'image/svg+xml',
      },
    ],
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${jetBrainsMono.variable} ${syne.variable} font-sans bg-bg text-text min-h-screen flex flex-col`}>
        <ThemeProvider>
          <LanguageProvider>
            <AppWrapper>
              <Header />
              <main className="flex-grow flex flex-col">
                {children}
              </main>
              <Footer />
            </AppWrapper>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}