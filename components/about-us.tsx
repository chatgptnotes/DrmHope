import { Award, Building, Clock, Globe, Heart, Users } from "lucide-react"

export function AboutUs() {
  return (
    <section id="about" className="py-16 bg-gradient-to-b from-white to-red-50 dark:from-gray-950 dark:to-red-950/50">
      <div className="container mx-auto px-4">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
          <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-5xl text-red-700 dark:text-red-300">
            About DRM HOPE Software
          </h2>
          <p className="max-w-[85%] leading-normal text-gray-700 dark:text-gray-300 sm:text-lg sm:leading-7">
            Delivering innovative software solutions across multiple industries since 2010
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-red-700 dark:text-red-300 mb-4">Our Story</h3>
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
              <h3 className="text-2xl font-bold text-red-700 dark:text-red-300 mb-4">Our Mission</h3>
              <p className="text-gray-700 dark:text-gray-300">
                To empower organizations with innovative, reliable, and user-friendly software solutions that enhance
                operational efficiency, improve customer experiences, and drive better business outcomes across all
                industries.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-red-700 dark:text-red-300 mb-4">Our Vision</h3>
              <p className="text-gray-700 dark:text-gray-300">
                To be the global leader in software solutions, setting the standard for innovation, quality, and
                customer satisfaction in the technology industry.
              </p>
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-red-700 dark:text-red-300 mb-4">Our Values</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex gap-3">
                  <div className="flex-shrink-0">
                    <Heart className="h-6 w-6 text-red-600 dark:text-red-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-red-700 dark:text-red-300">Customer-Centered</h4>
                    <p className="text-sm text-gray-700 dark:text-gray-300 mt-1">
                      We design all our solutions with the ultimate goal of improving customer experiences and outcomes.
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="flex-shrink-0">
                    <Award className="h-6 w-6 text-red-600 dark:text-red-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-red-700 dark:text-red-300">Excellence</h4>
                    <p className="text-sm text-gray-700 dark:text-gray-300 mt-1">
                      We strive for excellence in everything we do, from product development to customer support.
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="flex-shrink-0">
                    <Users className="h-6 w-6 text-red-600 dark:text-red-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-red-700 dark:text-red-300">Collaboration</h4>
                    <p className="text-sm text-gray-700 dark:text-gray-300 mt-1">
                      We work closely with clients to ensure our solutions meet their real-world needs across
                      industries.
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="flex-shrink-0">
                    <Clock className="h-6 w-6 text-red-600 dark:text-red-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-red-700 dark:text-red-300">Innovation</h4>
                    <p className="text-sm text-gray-700 dark:text-gray-300 mt-1">
                      We continuously innovate to stay ahead of industry trends and technological advancements.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-red-700 dark:text-red-300 mb-4">Company Facts</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white dark:bg-gray-900 p-4 rounded-lg border border-red-100 dark:border-red-900 text-center">
                  <div className="text-3xl font-bold text-red-700 dark:text-red-300">2010</div>
                  <div className="text-sm text-gray-700 dark:text-gray-300 mt-1">Founded</div>
                </div>
                <div className="bg-white dark:bg-gray-900 p-4 rounded-lg border border-red-100 dark:border-red-900 text-center">
                  <div className="text-3xl font-bold text-red-700 dark:text-red-300">100+</div>
                  <div className="text-sm text-gray-700 dark:text-gray-300 mt-1">Team Members</div>
                </div>
                <div className="bg-white dark:bg-gray-900 p-4 rounded-lg border border-red-100 dark:border-red-900 text-center">
                  <div className="text-3xl font-bold text-red-700 dark:text-red-300">500+</div>
                  <div className="text-sm text-gray-700 dark:text-gray-300 mt-1">Clients</div>
                </div>
                <div className="bg-white dark:bg-gray-900 p-4 rounded-lg border border-red-100 dark:border-red-900 text-center">
                  <div className="text-3xl font-bold text-red-700 dark:text-red-300">15+</div>
                  <div className="text-sm text-gray-700 dark:text-gray-300 mt-1">Industries Served</div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-red-700 dark:text-red-300 mb-4">Our Locations</h3>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <div className="flex-shrink-0">
                    <Building className="h-6 w-6 text-red-600 dark:text-red-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-red-700 dark:text-red-300">Headquarters</h4>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      DRM hope software office is at 701, Casa royal apartment, Mohan nagar, Nagpur, India
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="flex-shrink-0">
                    <Globe className="h-6 w-6 text-red-600 dark:text-red-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-red-700 dark:text-red-300">Global Presence</h4>
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
      </div>
    </section>
  )
}
