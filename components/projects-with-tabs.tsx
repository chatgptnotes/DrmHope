"use client"

import { useState } from "react"
import { Projects } from "@/components/projects"
import { MobileApps } from "@/components/mobile-apps"
import { Button } from "@/components/ui/button"
import { Monitor, Smartphone } from "lucide-react"

export function ProjectsWithTabs() {
  const [activeTab, setActiveTab] = useState<"web" | "mobile">("web")

  return (
    <div>
      {/* Header */}
      <section className="py-16 bg-gradient-to-b from-white to-red-50 dark:from-gray-950 dark:to-red-950/50">
        <div className="container mx-auto px-4">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center mb-12">
            <h1 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-5xl text-red-700 dark:text-white">
              Our Projects
            </h1>
            <p className="max-w-[85%] leading-normal text-gray-700 dark:text-gray-300 sm:text-lg sm:leading-7">
              Explore our portfolio of successful software solutions delivered across various industries
            </p>
          </div>

          {/* Tab Buttons */}
          <div className="flex justify-center gap-4 mb-8">
            <Button
              onClick={() => setActiveTab("web")}
              variant={activeTab === "web" ? "default" : "outline"}
              className={
                activeTab === "web"
                  ? "bg-red-600 hover:bg-red-700 text-white px-8 py-6 text-lg"
                  : "border-red-300 dark:border-red-700 text-gray-700 dark:text-gray-300 hover:bg-red-50 dark:hover:bg-red-950 px-8 py-6 text-lg"
              }
            >
              <Monitor className="h-5 w-5 mr-2" />
              Our Web Solution
            </Button>
            <Button
              onClick={() => setActiveTab("mobile")}
              variant={activeTab === "mobile" ? "default" : "outline"}
              className={
                activeTab === "mobile"
                  ? "bg-red-600 hover:bg-red-700 text-white px-8 py-6 text-lg"
                  : "border-red-300 dark:border-red-700 text-gray-700 dark:text-gray-300 hover:bg-red-50 dark:hover:bg-red-950 px-8 py-6 text-lg"
              }
            >
              <Smartphone className="h-5 w-5 mr-2" />
              Our Mobile Solution
            </Button>
          </div>
        </div>
      </section>

      {/* Tab Content */}
      <div>
        {activeTab === "web" ? <Projects hideHeader={true} /> : <MobileApps hideHeader={true} />}
      </div>
    </div>
  )
}