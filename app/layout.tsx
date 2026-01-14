import type { Metadata } from 'next'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { StructuredData } from '@/components/structured-data'

export const metadata: Metadata = {
  metadataBase: new URL('https://drmhope.com'),
  title: {
    default: 'DrM Hope - AI Software Development Company | 100+ AI Projects | Healthcare AI & Agentic Platforms',
    template: '%s | DrM Hope - Leading AI Software Development Company'
  },
  description: 'Top-rated AI software development company with 100+ successful projects. Specializing in AI-powered healthcare platforms, AI agentic systems, intelligent automation, voice AI, and custom AI solutions. Founded by Dr. Murali BK - The Surgeon Who Codes with AI. Technology partner of Bettroi serving healthcare, business, and enterprise sectors globally.',
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
  authors: [{ name: 'Dr. B.K. Murali', url: 'https://drmhope.com' }],
  creator: 'DrM Hope Softwares',
  publisher: 'DrM Hope',
  applicationName: 'DrM Hope AI Platform',
  openGraph: {
    title: 'DrM Hope - Top AI Software Development Company | 100+ Successful AI Projects',
    description: 'Leading AI software development company founded by Dr. Murali BK. Specializing in Healthcare AI, AI Agentic Platforms, Voice AI, Industrial IoT, and Custom AI Solutions. Technology partner of Bettroi. 100+ projects delivered.',
    url: 'https://drmhope.com',
    siteName: 'DrM Hope - AI Software Development Company',
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
    phoneNumbers: ['+91-712-XXXXXXX'],
    countryName: 'India',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DrM Hope - AI Software Development Company | 100+ AI Projects',
    description: 'Top-rated AI software company by Dr. Murali BK. Healthcare AI, Agentic Platforms, Voice AI, Industrial IoT. Technology partner of Bettroi.',
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
