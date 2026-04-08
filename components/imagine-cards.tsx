import Image from "next/image"
import { Code, Sparkles, Brain } from "lucide-react"
import Link from "next/link"

export function ImagineCards() {
  const cards = [
    {
      icon: Code,
      title: "Enterprise AI Solutions",
      subtitle: "AI-Powered Business Integration",
      items: [
        "web solutions using AI",
        "AI integration in your existing project",
        "Cloud-Native Development",
        "Scalable Infrastructure"
      ],
      borderColor: "border-l-[#FD5F07]",
      link: "/services#cloud"
    },
    {
      icon: Sparkles,
      title: "Generative AI & Machine Learning",
      subtitle: "Intelligent automation solutions",
      items: [
        "Machine Learning Models",
        "Natural Language Processing",
        "AI-Powered Analytics",
        "Predictive Intelligence"
      ],
      borderColor: "border-l-[#009CB3]",
      link: "/services#ai"
    },
    {
      icon: Brain,
      title: "B2B Digital Transformation",
      subtitle: "Enterprise digital transformation",
      items: [
        "B2B Platform Development",
        "Investment Tools with Argon",
        "Process Automation",
        "Digital Strategy"
      ],
      borderColor: "border-l-[#FD5F07]",
      link: "/services#digital"
    },
  ]

  return (
    <section
      className="relative min-h-[70vh] flex items-center justify-center py-20 overflow-hidden"
    >
      <Image
        src="/Homepage-Theme-Engineer-Banner.jpg"
        alt="AI software development team building enterprise solutions"
        fill
        sizes="100vw"
        className="object-cover"
        loading="lazy"
        quality={75}
      />
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Red Tech Pattern Overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 grid-pattern-red" />
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            AI Software Solutions for Enterprise Growth
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto">
            Through <strong>AI software development</strong>, machine learning, and data engineering, we help enterprises
            design intelligent solutions that accelerate growth and <strong>digital transformation</strong>
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
                      <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-gray-100">
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
                        className="flex items-start text-gray-700 dark:text-gray-300 text-sm sm:text-base"
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
