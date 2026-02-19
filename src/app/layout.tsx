import type { Metadata } from 'next'
import { Providers } from './providers'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import './globals.css'

export const metadata: Metadata = {
  title: 'AIreal.agency - We ship real User eXperiences',
  description: 'AIreal.agency delivers real User eXperiences through AI-powered development. Terminal-first, developer-native. Build faster, deploy smarter.',
  keywords: ['AI development', 'UX design', 'user experience', 'AIreal.agency', 'web development', 'real experiences'],
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className="scanlines crt-effect">
        <Providers>
          <Header />
          <main>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
