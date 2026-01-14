"use client"

import { CheckCircle, Award, Rocket } from "lucide-react"
import Link from "next/link"

export function DeliverCards() {
  const cards = [
    {
      icon: CheckCircle,
      title: "AdamRIT",
      subtitle: "ESIC Patient Mapping System",
      items: [
        "React-Based Patient Management",
        "Hospital Mapping & Navigation",
        "Real-time Patient Tracking",
        "Modern Healthcare Interface"
      ],
      borderColor: "border-l-[#FD5F07]",
      link: "https://adamrit.com",
      isExternal: true
    },
    {
      icon: Award,
      title: "PrewedAI",
      subtitle: "AI-Generated Prewedding Photography",
      items: [
        "AI-Powered Photo Generation",
        "No Travel or Photographer Needed",
        "Stunning Cinematic Locations",
        "Custom Romantic Settings"
      ],
      borderColor: "border-l-[#009CB3]",
      link: "https://www.prewedai.com",
      isExternal: true
    },
    {
      icon: Rocket,
      title: "Linkist NFC",
      subtitle: "AI-Powered Smart Business Cards",
      items: [
        "Next.js + AI Relationship Manager",
        "NFC & QR Digital Business Cards",
        "Real-time Engagement Tracking",
        "Automated Follow-up Reminders"
      ],
      borderColor: "border-l-[#FD5F07]",
      link: "https://linkist.2men.co",
      isExternal: true
    },
  ]

  return (
    <section
      className="relative min-h-[70vh] flex items-center justify-center py-20 overflow-hidden"
      style={{
        backgroundImage: 'url(/pexels-googledeepmind-17485709.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/65" />

      {/* Tech Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(90deg, #00d9ff 1px, transparent 1px),
            linear-gradient(0deg, #00d9ff 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          backgroundPosition: '0 0'
        }} />
      </div>

      {/* Animated gradient for AI theme */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#009CB3]/20 via-transparent to-[#FD5F07]/20 animate-pulse" />

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4">
            We deliver.
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto">
            Proven track record of successful implementations across industries,
            delivering measurable results and exceeding client expectations
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {cards.map((card, index) => {
            const Icon = card.icon
            const CardWrapper = card.isExternal ? 'a' : Link
            const linkProps = card.isExternal
              ? { href: card.link, target: "_blank", rel: "noopener noreferrer" }
              : { href: card.link }

            return (
              <CardWrapper
                {...linkProps}
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
                      {card.isExternal ? 'Visit Website' : 'View Case Study'}
                      <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </div>
              </CardWrapper>
            )
          })}
        </div>
      </div>
    </section>
  )
}
