"use client"

import { Target, Eye, TrendingUp } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function MissionSection() {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-950">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-4 py-2 bg-red-100 dark:bg-red-900/30 rounded-full">
            <span className="text-red-600 dark:text-red-400 text-sm font-medium">Your Technology, Our Focus</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Driving Innovation Through AI
          </h2>
          <div className="flex justify-center mb-8">
            <img
              src="/images/1631365238387.jpeg"
              alt="Dr. Murali BK - Founder & CTO of Bettroi"
              className="w-32 h-32 rounded-full border-4 border-red-600 shadow-lg"
            />
          </div>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Dr. Murali BK - Founder & Director, DrM Hope Software | Chief Technology Officer, Bettroi
          </p>
        </div>

        {/* Mission, Vision, Strategy Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Mission */}
          <Card className="border-2 hover:border-red-600 transition-all duration-300 hover:shadow-xl">
            <CardHeader>
              <div className="mb-4 w-12 h-12 bg-red-100 dark:bg-red-900/30 rounded-lg flex items-center justify-center">
                <Target className="h-6 w-6 text-red-600 dark:text-red-400" />
              </div>
              <CardTitle className="text-2xl">Mission</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base leading-relaxed text-gray-700 dark:text-gray-300">
                Our mission is to simplify AI technology, making it accessible to businesses by providing tailored software solutions that optimize processes, reduce costs, and enhance efficiency through cutting-edge artificial intelligence.
              </CardDescription>
            </CardContent>
          </Card>

          {/* Vision */}
          <Card className="border-2 hover:border-red-600 transition-all duration-300 hover:shadow-xl">
            <CardHeader>
              <div className="mb-4 w-12 h-12 bg-red-100 dark:bg-red-900/30 rounded-lg flex items-center justify-center">
                <Eye className="h-6 w-6 text-red-600 dark:text-red-400" />
              </div>
              <CardTitle className="text-2xl">Vision</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base leading-relaxed text-gray-700 dark:text-gray-300">
                To be the premier AI software development partner empowering businesses globally, transforming them through innovative AI technology and strategic guidance to drive sustainable growth and digital excellence.
              </CardDescription>
            </CardContent>
          </Card>

          {/* Strategy */}
          <Card className="border-2 hover:border-red-600 transition-all duration-300 hover:shadow-xl">
            <CardHeader>
              <div className="mb-4 w-12 h-12 bg-red-100 dark:bg-red-900/30 rounded-lg flex items-center justify-center">
                <TrendingUp className="h-6 w-6 text-red-600 dark:text-red-400" />
              </div>
              <CardTitle className="text-2xl">Strategy</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base leading-relaxed text-gray-700 dark:text-gray-300">
                DrM Hope conducts detailed discovery of client needs, analyzing goals, technology, and systems to identify high-impact AI opportunities. We propose targeted interventions, followed by prioritization, ROI analysis, and execution.
              </CardDescription>
            </CardContent>
          </Card>
        </div>

        {/* Partnership Highlight */}
        <div className="mt-16 p-8 bg-gradient-to-r from-red-600 to-purple-600 rounded-2xl text-center">
          <h3 className="text-3xl font-bold text-white mb-4">
            Technology Partner of Bettroi
          </h3>
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            DrM Hope Software serves as the strategic technology development partner of Bettroi, delivering innovative AI solutions and engineering expertise that power business transformation.
          </p>
        </div>
      </div>
    </section>
  )
}
