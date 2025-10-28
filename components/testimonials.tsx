import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function Testimonials() {
  return (
    <section id="testimonials" className="container py-12 md:py-24 lg:py-32">
      <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
        <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-5xl text-primary-700 dark:text-primary-300">
          Trusted by Healthcare Professionals
        </h2>
        <p className="max-w-[85%] leading-normal text-secondary-600 dark:text-secondary-400 sm:text-lg sm:leading-7">
          See what our clients have to say about our hospital management software
        </p>
      </div>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 mt-12">
        <Card className="border-primary-100 dark:border-primary-900">
          <CardHeader>
            <div className="flex items-center gap-4">
              <Avatar>
                <AvatarImage src="/images/doctor-female.jpg" alt="Dr. Sarah Johnson" />
                <AvatarFallback className="bg-primary-100 text-primary-700 dark:bg-primary-900 dark:text-primary-300">
                  SJ
                </AvatarFallback>
              </Avatar>
              <div>
                <p className="text-lg font-semibold text-primary-700 dark:text-primary-300">Dr. Sarah Johnson</p>
                <p className="text-sm text-secondary-600 dark:text-secondary-400">Chief Medical Officer</p>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-secondary-600 dark:text-secondary-400">
              "DRM HOPE's software has transformed our hospital operations. The intuitive interface and comprehensive
              features have significantly improved our efficiency and patient care quality."
            </p>
          </CardContent>
          <CardFooter>
            <p className="text-sm text-secondary-600 dark:text-secondary-400">Metro General Hospital</p>
          </CardFooter>
        </Card>
        <Card className="border-primary-100 dark:border-primary-900">
          <CardHeader>
            <div className="flex items-center gap-4">
              <Avatar>
                <AvatarImage src="/images/hospital-admin.jpg" alt="James Wilson" />
                <AvatarFallback className="bg-primary-100 text-primary-700 dark:bg-primary-900 dark:text-primary-300">
                  JW
                </AvatarFallback>
              </Avatar>
              <div>
                <p className="text-lg font-semibold text-primary-700 dark:text-primary-300">James Wilson</p>
                <p className="text-sm text-secondary-600 dark:text-secondary-400">Hospital Administrator</p>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-secondary-600 dark:text-secondary-400">
              "The implementation of DRM HOPE's hospital management system has resulted in a 30% reduction in
              administrative overhead and significantly improved our billing accuracy."
            </p>
          </CardContent>
          <CardFooter>
            <p className="text-sm text-secondary-600 dark:text-secondary-400">Riverside Medical Center</p>
          </CardFooter>
        </Card>
        <Card className="border-primary-100 dark:border-primary-900">
          <CardHeader>
            <div className="flex items-center gap-4">
              <Avatar>
                <AvatarImage src="/images/nurse-lead.jpg" alt="Maria Rodriguez" />
                <AvatarFallback className="bg-primary-100 text-primary-700 dark:bg-primary-900 dark:text-primary-300">
                  MR
                </AvatarFallback>
              </Avatar>
              <div>
                <p className="text-lg font-semibold text-primary-700 dark:text-primary-300">Maria Rodriguez</p>
                <p className="text-sm text-secondary-600 dark:text-secondary-400">Head Nurse</p>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-secondary-600 dark:text-secondary-400">
              "As a nurse, I appreciate how user-friendly the system is. It has streamlined our workflows and allows us
              to spend more time with patients instead of paperwork."
            </p>
          </CardContent>
          <CardFooter>
            <p className="text-sm text-secondary-600 dark:text-secondary-400">Community Health Partners</p>
          </CardFooter>
        </Card>
      </div>
    </section>
  )
}
