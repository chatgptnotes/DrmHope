import { HeroSection } from "@/components/hero-section"
import { ImagineCards } from "@/components/imagine-cards"
import { ModernizeCards } from "@/components/modernize-cards"
import { IntegrateCards } from "@/components/integrate-cards"
import { DeliverCards } from "@/components/deliver-cards"
import { FeatureCards } from "@/components/feature-cards"
import { Footer } from "@/components/footer"
import { Navbar } from "@/components/navbar"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <ImagineCards />
        <ModernizeCards />
        <IntegrateCards />
        <DeliverCards />
        <FeatureCards />
      </main>
      <Footer />
    </div>
  )
}
