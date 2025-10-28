import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Projects } from "@/components/projects"

export default function ProjectsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <Projects />
      </main>
      <Footer />
    </div>
  )
}
