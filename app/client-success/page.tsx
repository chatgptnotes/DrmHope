import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Award, TrendingUp, Users, Target, CheckCircle2 } from "lucide-react"

export default function ClientSuccessPage() {
  const successMetrics = [
    {
      icon: Award,
      value: "98%",
      label: "Client Satisfaction Rate",
      color: "text-[#FD5F07]"
    },
    {
      icon: TrendingUp,
      value: "150+",
      label: "Successful Projects",
      color: "text-[#009CB3]"
    },
    {
      icon: Users,
      value: "50+",
      label: "Active Clients",
      color: "text-[#6f7aa6]"
    },
    {
      icon: Target,
      value: "100%",
      label: "On-Time Delivery",
      color: "text-[#FD5F07]"
    }
  ]

  const caseStudies = [
    {
      industry: "Healthcare",
      client: "Leading Healthcare Provider",
      challenge: "Legacy systems causing inefficiencies in patient care management",
      solution: "Implemented AI-powered Hospital Management System with EHR integration",
      results: [
        "40% reduction in administrative tasks",
        "60% faster patient data retrieval",
        "Enhanced patient satisfaction scores by 35%",
        "Seamless integration with existing systems"
      ],
      color: "border-l-[#FD5F07]"
    },
    {
      industry: "Finance",
      client: "Regional Banking Institution",
      challenge: "Manual processes leading to slow transaction processing and compliance risks",
      solution: "Developed custom banking system with automated compliance and analytics",
      results: [
        "75% faster transaction processing",
        "99.9% compliance accuracy",
        "Real-time fraud detection",
        "$2M annual cost savings"
      ],
      color: "border-l-[#009CB3]"
    },
    {
      industry: "Government",
      client: "Federal Agency",
      challenge: "Outdated infrastructure unable to meet modern digital requirements",
      solution: "Digital transformation with cloud migration and secure workflow automation",
      results: [
        "50% improvement in service delivery",
        "Enhanced data security compliance",
        "Reduced operational costs by 30%",
        "Improved citizen satisfaction"
      ],
      color: "border-l-[#6f7aa6]"
    }
  ]

  const testimonials = [
    {
      quote: "DrmHope transformed our operations completely. Their AI-powered solutions reduced our processing time by half while improving accuracy significantly.",
      author: "Sarah Johnson",
      position: "CTO, Healthcare Solutions Inc.",
      image: "/placeholder-user.jpg"
    },
    {
      quote: "The team's expertise in financial technology helped us modernize our legacy systems seamlessly. Best investment we've made.",
      author: "Michael Chen",
      position: "VP Technology, Regional Bank",
      image: "/placeholder-user.jpg"
    },
    {
      quote: "Outstanding results! Their government solutions met all compliance requirements while delivering ahead of schedule.",
      author: "David Martinez",
      position: "Director IT, Federal Agency",
      image: "/placeholder-user.jpg"
    }
  ]

  return (
    <div className="flex min-h-screen flex-col bg-white dark:bg-gray-950">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-[#091D40] via-[#0a2850] to-[#0d3461] py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center text-white">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Client Success Stories
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed">
                Discover how we've helped organizations transform their operations,
                achieve their goals, and drive meaningful business results through innovative technology solutions.
              </p>
            </div>
          </div>
        </section>

        {/* Success Metrics */}
        <section className="py-16 bg-white dark:bg-gray-950">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {successMetrics.map((metric, index) => {
                const Icon = metric.icon
                return (
                  <div
                    key={index}
                    className="text-center p-6 rounded-lg bg-gray-50 dark:bg-gray-900 hover:shadow-lg transition-shadow duration-300"
                  >
                    <Icon className={`h-12 w-12 mx-auto mb-4 ${metric.color}`} />
                    <div className={`text-4xl font-bold mb-2 ${metric.color}`}>
                      {metric.value}
                    </div>
                    <div className="text-gray-600 dark:text-gray-400">
                      {metric.label}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Case Studies */}
        <section className="py-20 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                Case Studies
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                Real-world examples of how our solutions deliver tangible results
              </p>
            </div>

            <div className="space-y-8 max-w-5xl mx-auto">
              {caseStudies.map((study, index) => (
                <div
                  key={index}
                  className={`bg-white dark:bg-gray-800 rounded-lg border-l-4 ${study.color} shadow-lg p-8`}
                >
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 bg-gray-100 dark:bg-gray-700 text-sm font-semibold text-gray-700 dark:text-gray-300 rounded-full mb-2">
                      {study.industry}
                    </span>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      {study.client}
                    </h3>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                        Challenge
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400 mb-4">
                        {study.challenge}
                      </p>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                        Solution
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400">
                        {study.solution}
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                        Results
                      </h4>
                      <ul className="space-y-2">
                        {study.results.map((result, idx) => (
                          <li
                            key={idx}
                            className="flex items-start text-gray-700 dark:text-gray-300"
                          >
                            <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                            <span>{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 bg-white dark:bg-gray-950">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                What Our Clients Say
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400">
                Trusted by leading organizations worldwide
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-gray-50 dark:bg-gray-900 rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="mb-6">
                    <svg className="h-8 w-8 text-[#FD5F07] mb-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                    <p className="text-gray-700 dark:text-gray-300 italic mb-6">
                      "{testimonial.quote}"
                    </p>
                  </div>
                  <div className="flex items-center">
                    <img
                      src={testimonial.image}
                      alt={testimonial.author}
                      className="w-12 h-12 rounded-full mr-4"
                    />
                    <div>
                      <div className="font-semibold text-gray-900 dark:text-white">
                        {testimonial.author}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        {testimonial.position}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-[#FD5F07] to-[#ff8c42]">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Write Your Success Story?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join our growing list of satisfied clients and transform your business with innovative solutions
            </p>
            <a
              href="/contact"
              className="inline-block bg-white text-[#FD5F07] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors duration-300"
            >
              Get Started Today
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
