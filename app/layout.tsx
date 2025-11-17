import type { Metadata } from 'next'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { StructuredData } from '@/components/structured-data'

export const metadata: Metadata = {
  metadataBase: new URL('https://drmhope.com'),
  title: {
    default: 'DrM Hope - AI Software Development | AI Agentic Platforms & Intelligent Solutions',
    template: '%s | DrM Hope - AI Software Development'
  },
  description: 'Leading AI software development company specializing in AI-powered healthcare platforms, AI agentic systems, machine learning solutions, and intelligent automation. 100+ AI projects delivered across healthcare, business, and enterprise sectors.',
  keywords: [
    'AI software development',
    'AI agentic software',
    'AI platforms',
    'artificial intelligence solutions',
    'machine learning platforms',
    'AI healthcare software',
    'intelligent automation',
    'AI-powered applications',
    'generative AI platforms',
    'AI SaaS solutions',
    'NLP software',
    'computer vision AI',
    'predictive analytics platforms',
    'AI agent platforms',
    'healthcare AI solutions',
    'medical AI software',
    'AI for hospitals',
    'AI medical records',
    'AI deepfake detection',
    'AI sales automation',
    'voice AI platforms',
    'AI chatbot development',
    'custom AI solutions'
  ],
  authors: [{ name: 'Dr. B.K. Murali', url: 'https://drmhope.com' }],
  creator: 'DrM Hope Softwares',
  publisher: 'DrM Hope',
  applicationName: 'DrM Hope AI Platform',
  openGraph: {
    title: 'DrM Hope - AI Software Development & AI Agentic Platforms',
    description: '100+ AI-powered software projects | Healthcare AI | Machine Learning | Intelligent Automation | Custom AI Solutions',
    url: 'https://drmhope.com',
    siteName: 'DrM Hope',
    images: [
      {
        url: '/images/1631365238387.jpeg',
        width: 1200,
        height: 630,
        alt: 'DrM Hope - AI Software Solutions & AI Agentic Platforms'
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DrM Hope - AI Software Development & Intelligent Platforms',
    description: 'Leading AI software company - 100+ AI projects in healthcare, business automation, and enterprise solutions',
    images: ['/images/1631365238387.jpeg'],
    creator: '@drmhope',
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/images/1631365238387.jpeg',
    shortcut: '/images/1631365238387.jpeg',
    apple: '/images/1631365238387.jpeg',
  },
  manifest: '/manifest.json',
  category: 'technology',
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <StructuredData />
      </head>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
