import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { ThemeProvider } from '@/context/ThemeContext'
import { LanguageProvider } from '@/context/LanguageContext'
import AppWrapper from '@/components/AppWrapper'
import CursorTrail from '@/components/CursorTrail'
import ThreeBackground from '@/components/ThreeBackground'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

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
      <body className={`${inter.className} bg-jp-bg text-jp-black min-h-screen flex flex-col transition-colors duration-300 relative`}>
        <ThreeBackground />
        <CursorTrail />
        <ThemeProvider>
          <LanguageProvider>
            <AppWrapper>
              <Header />
              <main className="flex-grow">
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