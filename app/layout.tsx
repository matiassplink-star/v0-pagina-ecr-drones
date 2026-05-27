import type { Metadata } from 'next'
import { Inter, Montserrat } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter'
});

const montserrat = Montserrat({ 
  subsets: ["latin"],
  variable: '--font-montserrat'
});

export const metadata: Metadata = {
  title: 'ECR Drones - Escola de Capacitação Rural',
  description: 'Capacitação profissional em drones para agricultura de precisão. Cursos práticos e certificação para operadores de drones agrícolas.',
  generator: 'v0.app',
  keywords: ['drones agrícolas', 'agricultura de precisão', 'capacitação rural', 'cursos de drone', 'operador de drone'],
  icons: {
    icon: '/images/logo-ecr-icon.png',
    apple: '/images/logo-ecr-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className="bg-background">
      <body className={`${inter.variable} ${montserrat.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
