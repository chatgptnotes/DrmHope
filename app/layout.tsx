import type { Metadata, Viewport } from 'next'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { StructuredData } from '@/components/structured-data'
import { GoogleAnalytics } from '@next/third-parties/google'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export const metadata: Metadata = {
  metadataBase: new URL('https://www.drmhope.com'),
  title: {
    default: 'AI Software Development & Consulting Company | DrM Hope',
    template: '%s | DrM Hope'
  },
  description: 'AI software development by Dr. Murali BK. 100+ projects in healthcare, automation, and enterprise AI. Technology partner of Bettroi.',
  keywords: [
    // Core AI Services
    'AI software development company',
    'AI software development services',
    'custom AI development',
    'AI agentic software development',
    'AI agent platforms',
    'AI agentic systems',
    'intelligent automation solutions',
    'AI-powered applications',
    'machine learning development',
    'deep learning solutions',
    'generative AI development',

    // Healthcare AI
    'AI healthcare software development',
    'healthcare AI solutions',
    'medical AI software',
    'AI for hospitals',
    'hospital management AI',
    'AI medical records',
    'healthcare automation AI',
    'AI clinical decision support',
    'telemedicine AI platforms',
    'AI patient management',
    'medical AI applications',

    // Industry-Specific
    'AI for business automation',
    'enterprise AI solutions',
    'AI CRM development',
    'AI project management software',
    'AI education platforms',
    'AI tutoring systems',
    'voice AI development',
    'voice AI applications',
    'industrial IoT solutions',
    'SCADA systems development',
    'AI beauty tech',
    'virtual try-on technology',

    // Technical Expertise
    'NLP software development',
    'natural language processing AI',
    'computer vision AI development',
    'predictive analytics platforms',
    'AI chatbot development',
    'conversational AI platforms',
    'React Native AI apps',
    'Next.js AI applications',
    'Supabase AI integration',
    'TensorFlow development',
    'OpenAI integration',
    'Google AI development',

    // Location & Company
    'AI software company India',
    'AI development Nagpur',
    'Bettroi technology partner',
    'Dr Murali BK AI developer',
    'surgeon who codes',
    'healthcare software developer'
  ],
  authors: [{ name: 'Dr. B.K. Murali', url: 'https://www.drmhope.com' }],
  creator: 'DrM Hope Softwares',
  publisher: 'DrM Hope',
  applicationName: 'DrM Hope AI Platform',
  openGraph: {
    title: 'AI Software Development & Consulting Company | DrM Hope',
    description: 'AI software development by Dr. Murali BK. 100+ projects in healthcare, automation, and enterprise AI. Technology partner of Bettroi.',
    url: 'https://www.drmhope.com',
    siteName: 'DrM Hope - Better Technology',
    images: [
      {
        url: '/images/1631365238387.jpeg',
        width: 1200,
        height: 630,
        alt: 'DrM Hope - AI Software Development Company | Healthcare AI & Agentic Platforms'
      }
    ],
    locale: 'en_US',
    type: 'website',
    emails: ['info@drmhope.com'],
    countryName: 'India',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DrM Hope | AI Software Development Company',
    description: 'AI software company by Dr. Murali BK. Healthcare AI, agentic platforms, voice AI, and industrial IoT. Technology partner of Bettroi.',
    images: ['/images/1631365238387.jpeg'],
    creator: '@drmhope',
    site: '@drmhope',
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
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/images/1631365238387.jpeg',
  },
  alternates: {
    canonical: 'https://www.drmhope.com',
    languages: {
      'en': 'https://www.drmhope.com',
      'x-default': 'https://www.drmhope.com',
    },
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
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <StructuredData />
      </head>
      <body>
        <a href="#main-content" className="skip-to-content">Skip to main content</a>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div id="main-content">
            {children}
          </div>
        </ThemeProvider>
      </body>
      {process.env.NEXT_PUBLIC_GA_ID && (
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
      )}
    </html>
  )
}
