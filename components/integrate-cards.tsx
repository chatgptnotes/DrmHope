"use client"

import { Cpu, Workflow, Zap } from "lucide-react"
import Link from "next/link"

export function IntegrateCards() {
  const cards = [
    {
      icon: Cpu,
      title: "AI-Powered Analytics",
      subtitle: "Intelligent data insights",
      items: [
        "Machine Learning Integration",
        "Predictive Analytics Models",
        "Real-time Data Processing",
        "Automated Decision Making"
      ],
      borderColor: "border-l-[#FD5F07]",
      link: "/services#ai-analytics"
    },
    {
      icon: Workflow,
      title: "Custom AI Solutions",
      subtitle: "Tailored AI implementation",
      items: [
        "Natural Language Processing",
        "Computer Vision Systems",
        "AI Chatbots & Assistants",
        "Process Automation with AI"
      ],
      borderColor: "border-l-[#009CB3]",
      link: "/services#ai-custom"
    },
    {
      icon: Zap,
      title: "Seamless Integration",
      subtitle: "AI into existing systems",
      items: [
        "Legacy System AI Enhancement",
        "API-First AI Integration",
        "Cloud-Based AI Services",
        "IoT with AI Intelligence"
      ],
      borderColor: "border-l-[#FD5F07]",
      link: "/services#ai-integration"
    },
  ]

  return (
    <section
      className="relative min-h-[70vh] flex items-center justify-center py-20 overflow-hidden"
      style={{
        backgroundImage: 'url(/pexels-tara-winstead-8386440.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70" />

      {/* AI Tech Pattern Overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(90deg, #00d9ff 1px, transparent 1px),
            linear-gradient(0deg, #00d9ff 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
          backgroundPosition: '0 0'
        }} />
      </div>

      {/* Animated gradient overlay for AI feel */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-cyan-900/20 animate-pulse" />

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4">
            We integrate.
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto">
            Seamlessly integrate AI into your existing software solutions, empowering your business with
            intelligent automation, predictive insights, and cutting-edge innovation
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {cards.map((card, index) => {
            const Icon = card.icon
            return (
              <Link
                href={card.link}
                key={index}
                className={`group relative bg-white dark:bg-gray-800 rounded-lg border-l-4 ${card.borderColor} shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2`}
              >
                <div className="p-6 space-y-4">
                  {/* Icon and Title */}
                  <div className="flex items-start space-x-3">
                    <Icon
                      className={`h-8 w-8 mt-1 ${card.borderColor.replace('border-l-', 'text-')}`}
                      strokeWidth={1.5}
                    />
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                        {card.title}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                        {card.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* Feature List */}
                  <ul className="space-y-2 pt-2">
                    {card.items.map((item, itemIndex) => (
                      <li
                        key={itemIndex}
                        className="flex items-start text-gray-700 dark:text-gray-300 text-sm"
                      >
                        <span className={`inline-block w-1.5 h-1.5 rounded-full ${card.borderColor.replace('border-l-', 'bg-')} mt-2 mr-2 flex-shrink-0`} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Arrow Indicator */}
                  <div className="pt-2">
                    <span className={`inline-flex items-center text-sm font-semibold ${card.borderColor.replace('border-l-', 'text-')} group-hover:gap-2 transition-all duration-300`}>
                      Learn More
                      <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
