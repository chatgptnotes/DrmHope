import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ProjectsWithTabs } from "@/components/projects-with-tabs"

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
