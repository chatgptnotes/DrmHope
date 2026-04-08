import { Metadata } from 'next'
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Solutions } from "@/components/solutions"

export const metadata: Metadata = {
  alternates: {
    canonical: 'https://www.drmhope.com/solutions',
  },
  title: 'AI Solutions for Every Industry',
  description: 'Industry-specific AI solutions for healthcare, education, fintech, and enterprise. Scalable platforms built to solve real business challenges.',
  openGraph: {
    title: 'AI Solutions for Every Industry | DrM Hope',
    description: 'Industry-specific AI solutions for healthcare, education, fintech, and enterprise. Scalable platforms built to solve real business challenges.',
    url: 'https://www.drmhope.com/solutions',
    type: 'website',
  },
}

export default function SolutionsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white dark:bg-gray-950">
      <Navbar />
      <main className="flex-1">
        <Solutions />
      </main>
      <Footer />
    </div>
  )
}
