"use client"

import { Sparkles, Code, Zap } from "lucide-react"

export function FeatureCards() {
  const features = [
    {
      icon: Sparkles,
      title: "AI Integration",
      description: "Transform any industry with AI",
      gradient: "from-[#FD5F07] to-[#ff8c42]",
    },
    {
      icon: Code,
      title: "Custom Development",
      description: "Bespoke AI solutions",
      gradient: "from-[#009CB3] to-[#7AC5C3]",
    },
    {
      icon: Zap,
      title: "Digital Innovation",
      description: "Future-ready technology",
      gradient: "from-[#342E39] to-[#404040]",
    },
  ]

  return (
    <section className="py-20 bg-white dark:bg-gray-950">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-50 dark:from-gray-900 to-gray-100 dark:to-gray-800 p-8 transition-all duration-300 hover:shadow-2xl hover:scale-105"
              >
                {/* Background Gradient on Hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                />

                {/* Content */}
                <div className="relative z-10 space-y-4">
                  {/* Icon */}
                  <div
                    className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${feature.gradient} shadow-lg`}
                  >
                    <Icon className="h-8 w-8 text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 dark:text-gray-300 text-base">
                    {feature.description}
                  </p>
                </div>

                {/* Decorative Border */}
                <div
                  className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${feature.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300`}
                />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
