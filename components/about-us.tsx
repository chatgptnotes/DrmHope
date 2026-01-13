import { Award, Building, Clock, Globe, Heart, Users } from "lucide-react"

export function AboutUs() {
  return (
    <section id="about" className="py-16 bg-gradient-to-b from-white to-red-50 dark:from-gray-950 dark:to-red-950/50">
      <div className="container mx-auto px-4">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
          <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-5xl text-red-700 dark:text-white">
            About DRM HOPE Software
          </h2>
          <p className="max-w-[85%] leading-normal text-gray-700 dark:text-gray-300 sm:text-lg sm:leading-7">
            Delivering innovative software solutions across multiple industries since 2010
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-red-700 dark:text-white mb-4">Our Story</h3>
              <p className="text-gray-700 dark:text-gray-300">
                DRM HOPE Software was founded in 2010 with a mission to transform businesses through innovative
                technology solutions. What began as a small team of software specialists has grown into a leading
                provider of comprehensive software solutions serving hundreds of organizations across diverse industries
                worldwide.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mt-4">
                Our journey started when our founders, experienced technology professionals, recognized the critical
                need for more efficient, integrated, and user-friendly software systems across various business sectors.
                They set out to create solutions that would address the real-world challenges faced by organizations of
                all sizes.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mt-4">
                Today, DRM HOPE Software is recognized for its commitment to innovation, quality, and customer
                satisfaction. We continue to evolve our solutions to meet the changing needs of multiple industries,
                always staying at the forefront of technology advancements and regulatory requirements.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-red-700 dark:text-white mb-4">Our Mission</h3>
              <p className="text-gray-700 dark:text-gray-300">
                To empower organizations with innovative, reliable, and user-friendly software solutions that enhance
                operational efficiency, improve customer experiences, and drive better business outcomes across all
                industries.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-red-700 dark:text-white mb-4">Our Vision</h3>
              <p className="text-gray-700 dark:text-gray-300">
                To be the global leader in software solutions, setting the standard for innovation, quality, and
                customer satisfaction in the technology industry.
              </p>
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-red-700 dark:text-white mb-4">Our Values</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex gap-3">
                  <div className="flex-shrink-0">
                    <Heart className="h-6 w-6 text-red-600 dark:text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-red-700 dark:text-white">Customer-Centered</h4>
                    <p className="text-sm text-gray-700 dark:text-gray-300 mt-1">
                      We design all our solutions with the ultimate goal of improving customer experiences and outcomes.
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="flex-shrink-0">
                    <Award className="h-6 w-6 text-red-600 dark:text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-red-700 dark:text-white">Excellence</h4>
                    <p className="text-sm text-gray-700 dark:text-gray-300 mt-1">
                      We strive for excellence in everything we do, from product development to customer support.
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="flex-shrink-0">
                    <Users className="h-6 w-6 text-red-600 dark:text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-red-700 dark:text-white">Collaboration</h4>
                    <p className="text-sm text-gray-700 dark:text-gray-300 mt-1">
                      We work closely with clients to ensure our solutions meet their real-world needs across
                      industries.
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="flex-shrink-0">
                    <Clock className="h-6 w-6 text-red-600 dark:text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-red-700 dark:text-white">Innovation</h4>
                    <p className="text-sm text-gray-700 dark:text-gray-300 mt-1">
                      We continuously innovate to stay ahead of industry trends and technological advancements.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-red-700 dark:text-white mb-4">Company Facts</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white dark:bg-gray-900 p-4 rounded-lg border border-red-100 dark:border-red-900 text-center">
                  <div className="text-3xl font-bold text-red-700 dark:text-white">2010</div>
                  <div className="text-sm text-gray-700 dark:text-gray-300 mt-1">Founded</div>
                </div>
                <div className="bg-white dark:bg-gray-900 p-4 rounded-lg border border-red-100 dark:border-red-900 text-center">
                  <div className="text-3xl font-bold text-red-700 dark:text-white">100+</div>
                  <div className="text-sm text-gray-700 dark:text-gray-300 mt-1">Team Members</div>
                </div>
                <div className="bg-white dark:bg-gray-900 p-4 rounded-lg border border-red-100 dark:border-red-900 text-center">
                  <div className="text-3xl font-bold text-red-700 dark:text-white">500+</div>
                  <div className="text-sm text-gray-700 dark:text-gray-300 mt-1">Clients</div>
                </div>
                <div className="bg-white dark:bg-gray-900 p-4 rounded-lg border border-red-100 dark:border-red-900 text-center">
                  <div className="text-3xl font-bold text-red-700 dark:text-white">15+</div>
                  <div className="text-sm text-gray-700 dark:text-gray-300 mt-1">Industries Served</div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-red-700 dark:text-white mb-4">Our Locations</h3>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <div className="flex-shrink-0">
                    <Building className="h-6 w-6 text-red-600 dark:text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-red-700 dark:text-white">Headquarters</h4>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      DRM hope software office is at 701, Casa royal apartment, Mohan nagar, Nagpur, India
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="flex-shrink-0">
                    <Globe className="h-6 w-6 text-red-600 dark:text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-red-700 dark:text-white">Global Presence</h4>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      With regional offices and partners across Asia, Europe, and North America, we provide local
                      support to our global client base.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Leadership & Strategic Partnerships Section */}
        <div className="mt-20 pt-16 border-t border-red-100 dark:border-red-900">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center mb-12">
            <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-4xl text-red-700 dark:text-white">
              Leadership & Partnerships
            </h2>
            <p className="max-w-[85%] leading-normal text-gray-700 dark:text-gray-300 sm:text-lg sm:leading-7">
              Driving innovation through expertise and strategic collaboration
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Dr. Murali BK Profile */}
            <div className="bg-white dark:bg-gray-900 p-8 rounded-lg border border-red-100 dark:border-red-900">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="h-24 w-24 rounded-full bg-gradient-to-br from-red-500 to-red-700 flex items-center justify-center text-white text-3xl font-bold">
                    MB
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-red-700 dark:text-white">Dr. Murali B.K.</h3>
                  <div className="mt-2 space-y-1">
                    <p className="text-sm font-semibold text-red-600 dark:text-red-400">
                      Founder & Director, DRM Hope Software
                    </p>
                    <p className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                      Chief Technology Officer, Bettroi
                    </p>
                  </div>
                  <p className="mt-4 text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                    Dr. Murali B.K. is a visionary technology leader with dual expertise spanning software engineering and medical sciences. As the Founder and Director of DRM Hope Software, he leads the company's mission to deliver innovative solutions across healthcare, engineering, and enterprise sectors.
                  </p>
                  <p className="mt-3 text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                    In his role as Chief Technology Officer at Bettroi, Dr. Murali drives technological innovation and strategic product development, bringing his unique perspective that combines medical insights with cutting-edge software engineering practices.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-300">
                      Software Engineering
                    </span>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-300">
                      Healthcare Technology
                    </span>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-300">
                      AI & Machine Learning
                    </span>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-300">
                      Product Strategy
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Strategic Partnership */}
            <div className="bg-gradient-to-br from-red-50 to-white dark:from-red-950/30 dark:to-gray-900 p-8 rounded-lg border border-red-100 dark:border-red-900">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-12 w-12 rounded-lg bg-red-600 dark:bg-red-700 flex items-center justify-center text-white">
                  <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-red-700 dark:text-white">Strategic Technology Partnership</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">DRM Hope Software × Bettroi</p>
                </div>
              </div>

              <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed mb-4">
                DRM Hope Software serves as the exclusive technology development partner for Bettroi, combining deep technical expertise with strategic product innovation to deliver cutting-edge solutions.
              </p>

              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 mt-1">
                    <div className="h-5 w-5 rounded-full bg-red-600 dark:bg-red-700 flex items-center justify-center">
                      <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-red-700 dark:text-white text-sm">Full-Stack Development</h4>
                    <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                      End-to-end software engineering from architecture design to deployment
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 mt-1">
                    <div className="h-5 w-5 rounded-full bg-red-600 dark:bg-red-700 flex items-center justify-center">
                      <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-red-700 dark:text-white text-sm">AI & Innovation</h4>
                    <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                      Leveraging artificial intelligence and machine learning for intelligent solutions
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 mt-1">
                    <div className="h-5 w-5 rounded-full bg-red-600 dark:bg-red-700 flex items-center justify-center">
                      <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-red-700 dark:text-white text-sm">Product Excellence</h4>
                    <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                      Strategic product development ensuring scalability, security, and user experience
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-red-100 dark:border-red-900">
                <p className="text-xs text-gray-600 dark:text-gray-400 text-center italic">
                  "Together, we're building the future of technology-driven business solutions"
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
