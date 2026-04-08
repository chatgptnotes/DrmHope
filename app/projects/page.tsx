import { Metadata } from 'next'
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ProjectsWithTabs } from "@/components/projects-with-tabs"

export const metadata: Metadata = {
  alternates: {
    canonical: 'https://www.drmhope.com/projects',
  },
  title: 'AI Projects & Portfolio',
  description: 'Explore 100+ AI projects including hospital management systems, agentic platforms, voice AI apps, and enterprise automation solutions.',
  openGraph: {
    title: 'AI Projects & Portfolio | DrM Hope',
    description: 'Explore 100+ AI projects including hospital management systems, agentic platforms, voice AI apps, and enterprise automation solutions.',
    url: 'https://www.drmhope.com/projects',
    type: 'website',
  },
}

export default function ProjectsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white dark:bg-gray-950">
      <Navbar />
      <main className="flex-1">
        <ProjectsWithTabs />
      </main>
      <Footer />
    </div>
  )
}
