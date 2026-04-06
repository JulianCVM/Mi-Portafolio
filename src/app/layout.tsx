import type { Metadata } from 'next'
import { Space_Grotesk, Fira_Code } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { ThemeProvider } from '@/context/ThemeContext'
import { LanguageProvider } from '@/context/LanguageContext'
import AppWrapper from '@/components/AppWrapper'

const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'], 
  weight: ['400', '600', '700'],
  variable: '--font-display' 
})

const firaCode = Fira_Code({ 
  subsets: ['latin'], 
  weight: ['400', '500'],
  variable: '--font-mono' 
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
    <html lang="es" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                  document.documentElement.classList.add('dark')
                } else {
                  document.documentElement.classList.remove('dark')
                }
              } catch (_) {}
            `,
          }}
        />
      </head>
      <body className={`${firaCode.variable} ${spaceGrotesk.variable} font-sans bg-bg text-text min-h-screen flex flex-col`}>
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