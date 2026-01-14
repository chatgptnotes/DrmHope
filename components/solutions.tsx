"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Users, Building, ShoppingBag, BookOpen, Briefcase, Server, CreditCard, ShieldCheck } from "lucide-react"
import { GetStartedModal } from "./get-started-modal"

export function Solutions() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <section
      id="solutions"
      className="py-16 bg-gradient-to-b from-white to-red-50 dark:from-gray-950 dark:to-red-950/50"
    >
      <div className="container mx-auto px-4">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
          <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-5xl text-red-700 dark:text-white">
            Our Software Solutions
          </h2>
          <p className="max-w-[85%] leading-normal text-gray-700 dark:text-gray-300 sm:text-lg sm:leading-7">
            Comprehensive software solutions designed for diverse industries and business needs
          </p>
        </div>

        <div className="mt-16">
          <Tabs defaultValue="healthcare" className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 bg-red-100 dark:bg-red-900 mb-8 h-auto p-2">
              <TabsTrigger
                value="healthcare"
                className="data-[state=active]:bg-white dark:data-[state=active]:bg-gray-950 data-[state=active]:text-red-700 dark:data-[state=active]:text-white py-3 px-2 text-xs md:text-sm"
              >
                Healthcare
              </TabsTrigger>
              <TabsTrigger
                value="finance"
                className="data-[state=active]:bg-white dark:data-[state=active]:bg-gray-950 data-[state=active]:text-red-700 dark:data-[state=active]:text-white py-3 px-2 text-xs md:text-sm"
              >
                Finance
              </TabsTrigger>
              <TabsTrigger
                value="education"
                className="data-[state=active]:bg-white dark:data-[state=active]:bg-gray-950 data-[state=active]:text-red-700 dark:data-[state=active]:text-white py-3 px-2 text-xs md:text-sm"
              >
                Education
              </TabsTrigger>
              <TabsTrigger
                value="retail"
                className="data-[state=active]:bg-white dark:data-[state=active]:bg-gray-950 data-[state=active]:text-red-700 dark:data-[state=active]:text-white py-3 px-2 text-xs md:text-sm"
              >
                Retail
              </TabsTrigger>
              <TabsTrigger
                value="manufacturing"
                className="data-[state=active]:bg-white dark:data-[state=active]:bg-gray-950 data-[state=active]:text-red-700 dark:data-[state=active]:text-white py-3 px-2 text-xs md:text-sm"
              >
                Manufacturing
              </TabsTrigger>
              <TabsTrigger
                value="custom"
                className="data-[state=active]:bg-white dark:data-[state=active]:bg-gray-950 data-[state=active]:text-red-700 dark:data-[state=active]:text-white py-3 px-2 text-xs md:text-sm"
              >
                Custom
              </TabsTrigger>
            </TabsList>

            <TabsContent
              value="healthcare"
              className="p-6 bg-white dark:bg-gray-950 rounded-md border border-red-100 dark:border-red-900"
            >
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-red-100 dark:bg-red-900 p-2 rounded-full">
                      <Users className="h-6 w-6 text-red-700 dark:text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-red-700 dark:text-white">Healthcare Solutions</h3>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 mb-6">
                    Our comprehensive healthcare software solutions streamline all aspects of healthcare operations,
                    from patient management to administrative tasks, enabling healthcare facilities to deliver better
                    patient care while optimizing operational efficiency.
                  </p>
                  <div className="space-y-4">
                    <h4 className="text-xl font-semibold text-red-700 dark:text-white">Key Features</h4>
                    <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
                      <li>Hospital Management Systems</li>
                      <li>Electronic Health Records (EHR)</li>
                      <li>Laboratory Information Systems</li>
                      <li>Pharmacy Management</li>
                      <li>Telemedicine Platforms</li>
                      <li>Medical Billing Software</li>
                      <li>Healthcare Analytics</li>
                    </ul>
                  </div>
                </div>
                <div className="space-y-6">
                  <div>
                    <h4 className="text-xl font-semibold text-red-700 dark:text-white mb-3">Benefits</h4>
                    <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
                      <li>Improved operational efficiency and reduced administrative burden</li>
                      <li>Enhanced patient experience with faster service delivery</li>
                      <li>Better resource utilization and cost management</li>
                      <li>Reduced errors through automation and validation</li>
                      <li>Comprehensive reporting for informed decision-making</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-red-700 dark:text-white mb-3">Ideal For</h4>
                    <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
                      <li>Hospitals and medical centers</li>
                      <li>Clinics and specialty practices</li>
                      <li>Diagnostic centers</li>
                      <li>Pharmacies</li>
                      <li>Healthcare networks</li>
                    </ul>
                  </div>
                  <div className="pt-4">
                    <Button className="bg-red-600 hover:bg-red-700 text-white" onClick={() => setIsModalOpen(true)}>
                      Request Demo
                    </Button>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent
              value="finance"
              className="p-6 bg-white dark:bg-gray-950 rounded-md border border-red-100 dark:border-red-900"
            >
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-red-100 dark:bg-red-900 p-2 rounded-full">
                      <CreditCard className="h-6 w-6 text-red-700 dark:text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-red-700 dark:text-white">Financial Software</h3>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 mb-6">
                    Our financial software solutions provide robust tools for managing financial operations,
                    transactions, and analytics, helping financial institutions and businesses optimize their financial
                    processes and decision-making.
                  </p>
                  <div className="space-y-4">
                    <h4 className="text-xl font-semibold text-red-700 dark:text-white">Key Features</h4>
                    <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
                      <li>Banking Systems</li>
                      <li>Payment Processing Solutions</li>
                      <li>Accounting Software</li>
                      <li>Financial Analytics</li>
                      <li>Investment Management</li>
                      <li>Risk Assessment Tools</li>
                      <li>Regulatory Compliance Systems</li>
                    </ul>
                  </div>
                </div>
                <div className="space-y-6">
                  <div>
                    <h4 className="text-xl font-semibold text-red-700 dark:text-white mb-3">Benefits</h4>
                    <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
                      <li>Streamlined financial operations and reporting</li>
                      <li>Enhanced security for financial transactions</li>
                      <li>Improved compliance with financial regulations</li>
                      <li>Better financial decision-making with analytics</li>
                      <li>Reduced operational costs and increased efficiency</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-red-700 dark:text-white mb-3">Ideal For</h4>
                    <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
                      <li>Banks and credit unions</li>
                      <li>Insurance companies</li>
                      <li>Investment firms</li>
                      <li>Accounting firms</li>
                      <li>Corporate finance departments</li>
                    </ul>
                  </div>
                  <div className="pt-4">
                    <Button className="bg-red-600 hover:bg-red-700 text-white" onClick={() => setIsModalOpen(true)}>
                      Request Demo
                    </Button>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent
              value="education"
              className="p-6 bg-white dark:bg-gray-950 rounded-md border border-red-100 dark:border-red-900"
            >
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-red-100 dark:bg-red-900 p-2 rounded-full">
                      <BookOpen className="h-6 w-6 text-red-700 dark:text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-red-700 dark:text-white">Education Management</h3>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 mb-6">
                    Our education management solutions help educational institutions streamline administrative
                    processes, enhance teaching and learning experiences, and improve communication between students,
                    teachers, and parents.
                  </p>
                  <div className="space-y-4">
                    <h4 className="text-xl font-semibold text-red-700 dark:text-white">Key Features</h4>
                    <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
                      <li>School Management Systems</li>
                      <li>Learning Management Platforms</li>
                      <li>Student Information Systems</li>
                      <li>Admission and Enrollment Management</li>
                      <li>Examination and Grading Systems</li>
                      <li>Library Management</li>
                      <li>Educational Analytics</li>
                    </ul>
                  </div>
                </div>
                <div className="space-y-6">
                  <div>
                    <h4 className="text-xl font-semibold text-red-700 dark:text-white mb-3">Benefits</h4>
                    <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
                      <li>Streamlined administrative processes</li>
                      <li>Enhanced teaching and learning experiences</li>
                      <li>Improved communication between stakeholders</li>
                      <li>Better tracking of student performance</li>
                      <li>Data-driven decision making for educational improvement</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-red-700 dark:text-white mb-3">Ideal For</h4>
                    <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
                      <li>K-12 schools</li>
                      <li>Colleges and universities</li>
                      <li>Training institutes</li>
                      <li>Online learning platforms</li>
                      <li>Educational departments</li>
                    </ul>
                  </div>
                  <div className="pt-4">
                    <Button className="bg-red-600 hover:bg-red-700 text-white" onClick={() => setIsModalOpen(true)}>
                      Request Demo
                    </Button>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent
              value="retail"
              className="p-6 bg-white dark:bg-gray-950 rounded-md border border-red-100 dark:border-red-900"
            >
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-red-100 dark:bg-red-900 p-2 rounded-full">
                      <ShoppingBag className="h-6 w-6 text-red-700 dark:text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-red-700 dark:text-white">Retail & E-commerce</h3>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 mb-6">
                    Our retail and e-commerce solutions help businesses manage inventory, process sales, and enhance
                    customer experiences across physical stores and online platforms.
                  </p>
                  <div className="space-y-4">
                    <h4 className="text-xl font-semibold text-red-700 dark:text-white">Key Features</h4>
                    <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
                      <li>Inventory Management Systems</li>
                      <li>Point of Sale (POS) Solutions</li>
                      <li>E-commerce Platforms</li>
                      <li>Customer Relationship Management</li>
                      <li>Order Processing and Fulfillment</li>
                      <li>Retail Analytics</li>
                      <li>Loyalty Program Management</li>
                    </ul>
                  </div>
                </div>
                <div className="space-y-6">
                  <div>
                    <h4 className="text-xl font-semibold text-red-700 dark:text-white mb-3">Benefits</h4>
                    <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
                      <li>Streamlined inventory and sales management</li>
                      <li>Enhanced customer shopping experiences</li>
                      <li>Improved order processing and fulfillment</li>
                      <li>Better customer relationship management</li>
                      <li>Data-driven retail insights for business growth</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-red-700 dark:text-white mb-3">Ideal For</h4>
                    <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
                      <li>Retail stores</li>
                      <li>E-commerce businesses</li>
                      <li>Supermarkets and grocery chains</li>
                      <li>Fashion and apparel retailers</li>
                      <li>Electronics and specialty stores</li>
                    </ul>
                  </div>
                  <div className="pt-4">
                    <Button className="bg-red-600 hover:bg-red-700 text-white" onClick={() => setIsModalOpen(true)}>
                      Request Demo
                    </Button>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent
              value="manufacturing"
              className="p-6 bg-white dark:bg-gray-950 rounded-md border border-red-100 dark:border-red-900"
            >
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-red-100 dark:bg-red-900 p-2 rounded-full">
                      <Building className="h-6 w-6 text-red-700 dark:text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-red-700 dark:text-white">Manufacturing ERP</h3>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 mb-6">
                    Our manufacturing ERP solutions integrate all aspects of manufacturing operations, from production
                    planning to quality control, helping manufacturers optimize their processes and increase
                    productivity.
                  </p>
                  <div className="space-y-4">
                    <h4 className="text-xl font-semibold text-red-700 dark:text-white">Key Features</h4>
                    <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
                      <li>Production Planning and Scheduling</li>
                      <li>Inventory and Warehouse Management</li>
                      <li>Supply Chain Management</li>
                      <li>Quality Control Systems</li>
                      <li>Equipment Maintenance</li>
                      <li>Manufacturing Analytics</li>
                      <li>Cost Management</li>
                    </ul>
                  </div>
                </div>
                <div className="space-y-6">
                  <div>
                    <h4 className="text-xl font-semibold text-red-700 dark:text-white mb-3">Benefits</h4>
                    <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
                      <li>Streamlined production processes</li>
                      <li>Improved inventory management and reduced waste</li>
                      <li>Enhanced quality control and compliance</li>
                      <li>Better supply chain visibility and management</li>
                      <li>Data-driven manufacturing insights for optimization</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-red-700 dark:text-white mb-3">Ideal For</h4>
                    <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
                      <li>Manufacturing plants</li>
                      <li>Production facilities</li>
                      <li>Assembly operations</li>
                      <li>Process manufacturing</li>
                      <li>Discrete manufacturing</li>
                    </ul>
                  </div>
                  <div className="pt-4">
                    <Button className="bg-red-600 hover:bg-red-700 text-white" onClick={() => setIsModalOpen(true)}>
                      Request Demo
                    </Button>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent
              value="custom"
              className="p-6 bg-white dark:bg-gray-950 rounded-md border border-red-100 dark:border-red-900"
            >
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-red-100 dark:bg-red-900 p-2 rounded-full">
                      <Briefcase className="h-6 w-6 text-red-700 dark:text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-red-700 dark:text-white">Custom Software Solutions</h3>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 mb-6">
                    Our custom software development services create tailored solutions to address your unique business
                    challenges and requirements, ensuring you get exactly what your organization needs to succeed.
                  </p>
                  <div className="space-y-4">
                    <h4 className="text-xl font-semibold text-red-700 dark:text-white">Our Approach</h4>
                    <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
                      <li>Thorough business analysis and requirements gathering</li>
                      <li>Collaborative design and planning process</li>
                      <li>Agile development methodology</li>
                      <li>Rigorous testing and quality assurance</li>
                      <li>Comprehensive implementation support</li>
                      <li>Ongoing maintenance and updates</li>
                      <li>Training and knowledge transfer</li>
                    </ul>
                  </div>
                </div>
                <div className="space-y-6">
                  <div>
                    <h4 className="text-xl font-semibold text-red-700 dark:text-white mb-3">
                      Types of Custom Solutions
                    </h4>
                    <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
                      <li>Enterprise Applications</li>
                      <li>Workflow Automation Systems</li>
                      <li>Data Management Solutions</li>
                      <li>Integration Platforms</li>
                      <li>Mobile Applications</li>
                      <li>Web Applications</li>
                      <li>Industry-Specific Solutions</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-red-700 dark:text-white mb-3">Ideal For</h4>
                    <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
                      <li>Organizations with unique business processes</li>
                      <li>Companies needing specialized functionality</li>
                      <li>Businesses looking to gain competitive advantage</li>
                      <li>Enterprises requiring system integration</li>
                      <li>Organizations with specific compliance requirements</li>
                    </ul>
                  </div>
                  <div className="pt-4">
                    <Button className="bg-red-600 hover:bg-red-700 text-white" onClick={() => setIsModalOpen(true)}>
                      Request Consultation
                    </Button>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md border border-red-100 dark:border-red-900">
            <div className="flex items-center justify-center h-12 w-12 rounded-md bg-red-100 dark:bg-red-900 text-red-600 dark:text-white mb-4 mx-auto">
              <Server className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold text-center text-red-700 dark:text-white mb-2">
              Implementation Support
            </h3>
            <p className="text-center text-gray-700 dark:text-gray-300">
              Our dedicated implementation team ensures smooth transition and integration with your existing systems and
              workflows.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md border border-red-100 dark:border-red-900">
            <div className="flex items-center justify-center h-12 w-12 rounded-md bg-red-100 dark:bg-red-900 text-red-600 dark:text-white mb-4 mx-auto">
              <CreditCard className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold text-center text-red-700 dark:text-white mb-2">Flexible Pricing</h3>
            <p className="text-center text-gray-700 dark:text-gray-300">
              Choose from subscription-based or perpetual licensing models with options tailored to organizations of all
              sizes.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md border border-red-100 dark:border-red-900">
            <div className="flex items-center justify-center h-12 w-12 rounded-md bg-red-100 dark:bg-red-900 text-red-600 dark:text-white mb-4 mx-auto">
              <ShieldCheck className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold text-center text-red-700 dark:text-white mb-2">Security & Compliance</h3>
            <p className="text-center text-gray-700 dark:text-gray-300">
              All our solutions are designed with robust security features and can be configured to meet
              industry-specific regulations and standards.
            </p>
          </div>
        </div>
      </div>
      <GetStartedModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  )
}
