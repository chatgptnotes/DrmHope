import { Metadata } from 'next'
import { Suspense } from 'react'
import dynamic from 'next/dynamic'
import { Footer } from "@/components/footer"
import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { ImagineCards } from "@/components/imagine-cards"

// Lazy-load below-fold components
const ModernizeCards = dynamic(() => import("@/components/modernize-cards").then(mod => mod.ModernizeCards))
const MissionSection = dynamic(() => import("@/components/mission-section").then(mod => mod.MissionSection))
const AdvantageSection = dynamic(() => import("@/components/advantage-section").then(mod => mod.AdvantageSection))
const IntegrateCards = dynamic(() => import("@/components/integrate-cards").then(mod => mod.IntegrateCards))
const DeliverCards = dynamic(() => import("@/components/deliver-cards").then(mod => mod.DeliverCards))
const FeatureCards = dynamic(() => import("@/components/feature-cards").then(mod => mod.FeatureCards))

export const metadata: Metadata = {
  alternates: {
    canonical: 'https://www.drmhope.com',
  },
  title: 'AI Software Development & Consulting Company | DrM Hope',
  description: 'AI-driven software development and consulting by Dr. Murali BK. 100+ projects in healthcare, automation, and enterprise AI solutions.',
  openGraph: {
    title: 'AI Software Development & Consulting Company | DrM Hope',
    description: 'AI-driven software development and consulting by Dr. Murali BK. 100+ projects in healthcare, automation, and enterprise AI solutions.',
    url: 'https://www.drmhope.com',
    type: 'website',
  },
}

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <ImagineCards />
        <ModernizeCards />
        <MissionSection />
        <AdvantageSection />
        <IntegrateCards />
        <DeliverCards />
        <FeatureCards />
      </main>
      <Footer />
    </div>
  )
}
