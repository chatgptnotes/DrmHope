"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { ExternalLink, Calendar, Tag, Smartphone, Download, Star, X } from "lucide-react"

interface MobileApp {
  id: number
  title: string
  description: string
  detailedDescription?: string
  category: string
  platform: string[] // iOS, Android
  tags: string[]
  aiFeatures?: string[]
  keyFeatures?: string[]
  technologies?: string[]
  image?: string
  appStoreUrl?: string
  playStoreUrl?: string
  websiteUrl?: string
  downloadCount?: string
  rating?: number
  date: string
  featured?: boolean
}

const mobileApps: MobileApp[] = [
  {
    id: 1,
    title: "StyleMy.Hair",
    description: "AI-powered virtual hairstyle try-on app that lets users experiment with different hairstyles in real-time using advanced AR technology.",
    detailedDescription: "StyleMy.Hair revolutionizes the hairdressing industry by allowing users to virtually try on hundreds of hairstyles before making a commitment. Using advanced AI and AR technology, the app provides realistic hair simulations, color variations, and personalized recommendations based on face shape and skin tone.",
    category: "Beauty Tech",
    platform: ["iOS", "Android"],
    tags: ["AI-Powered", "AR Technology", "Beauty", "Hair Styling"],
    aiFeatures: [
      "AI-powered face shape detection and analysis",
      "Intelligent hairstyle recommendations based on facial features",
      "Real-time AR hair rendering with natural physics",
      "AI color matching for optimal hair color suggestions",
      "Machine learning-based style trending predictions",
      "Personalized hair care recommendations",
    ],
    keyFeatures: [
      "Virtual try-on for 500+ hairstyles",
      "Real-time AR visualization",
      "Color variations and highlights simulation",
      "Save and share functionality",
      "Salon booking integration",
      "Hair care product recommendations",
      "Before/After comparison mode",
      "Social sharing features",
    ],
    technologies: ["React Native", "AR Core", "AI/ML", "Computer Vision", "Cloud Processing"],
    websiteUrl: "https://stylemy.hair",
    appStoreUrl: "#",
    playStoreUrl: "#",
    downloadCount: "100K+",
    rating: 4.7,
    date: "2024",
    featured: true,
  },
  {
    id: 2,
    title: "Adamrit Health",
    description: "Comprehensive healthcare mobile app providing AI-powered health tracking, telemedicine consultations, and personalized wellness recommendations.",
    detailedDescription: "Adamrit Health mobile app brings comprehensive healthcare to your fingertips. With AI-powered health monitoring, instant access to healthcare providers, and personalized wellness plans, the app ensures users stay on top of their health journey. The platform integrates seamlessly with wearable devices and provides real-time health insights.",
    category: "Healthcare",
    platform: ["iOS", "Android"],
    tags: ["Healthcare", "AI-Powered", "Telemedicine", "Health Tracking"],
    aiFeatures: [
      "AI-powered symptom checker and health assessment",
      "Predictive health analytics and early warning system",
      "Intelligent medication reminders and management",
      "AI chatbot for instant health queries",
      "Smart appointment scheduling based on urgency",
      "Personalized health insights and recommendations",
    ],
    keyFeatures: [
      "24/7 telemedicine consultations",
      "Electronic health records access",
      "Medicine delivery integration",
      "Lab test booking and results",
      "Health metrics tracking and monitoring",
      "Emergency SOS feature",
      "Family health management",
      "Integration with fitness wearables",
    ],
    technologies: ["React Native", "Healthcare APIs", "AI/ML", "WebRTC", "Secure Cloud Storage"],
    websiteUrl: "https://adamrit.com",
    appStoreUrl: "#",
    playStoreUrl: "#",
    downloadCount: "50K+",
    rating: 4.8,
    date: "2024",
    featured: true,
  },
  {
    id: 3,
    title: "AI Relationship Coach",
    description: "Voice-powered AI relationship and intimacy coach app offering personalized guidance, conversation practice, and emotional support.",
    detailedDescription: "AI Relationship Coach is a revolutionary voice agent app that provides confidential, judgment-free relationship and intimacy coaching. Using advanced conversational AI, the app offers personalized advice, helps users practice difficult conversations, and provides emotional support for relationship challenges. The app maintains complete privacy while delivering professional-grade relationship guidance.",
    category: "Wellness",
    platform: ["iOS", "Android"],
    tags: ["AI Voice Agent", "Relationship", "Wellness", "Mental Health"],
    aiFeatures: [
      "Advanced conversational AI with natural voice interaction",
      "Emotion recognition and empathetic responses",
      "Personalized relationship advice based on user patterns",
      "AI-powered conversation simulation and practice",
      "Sentiment analysis for relationship health monitoring",
      "Intelligent conflict resolution strategies",
    ],
    keyFeatures: [
      "24/7 voice-based AI coaching sessions",
      "Private and confidential conversations",
      "Relationship health assessments",
      "Communication skills training",
      "Conflict resolution guidance",
      "Daily relationship tips and exercises",
      "Progress tracking and insights",
      "Multiple language support",
    ],
    technologies: ["Voice AI", "Natural Language Processing", "React Native", "Secure Encryption", "Cloud AI"],
    websiteUrl: "#",
    appStoreUrl: "#",
    playStoreUrl: "#",
    downloadCount: "25K+",
    rating: 4.6,
    date: "2024",
    featured: true,
  },
  {
    id: 4,
    title: "Raftaar - RSeva App",
    description: "Fast and efficient service delivery app connecting users with essential services, powered by AI for intelligent service matching and rapid response.",
    detailedDescription: "Raftaar (RSeva) is a comprehensive service delivery platform that connects users with essential services quickly and efficiently. The app uses AI to match service requests with the best available providers, ensuring rapid response times and quality service delivery. From healthcare to home services, Raftaar streamlines the entire service booking and delivery process.",
    category: "Services",
    platform: ["iOS", "Android"],
    tags: ["Service Platform", "AI Matching", "On-Demand", "Multi-Service"],
    aiFeatures: [
      "AI-powered service provider matching",
      "Intelligent pricing and time estimation",
      "Predictive service recommendations",
      "Smart scheduling and route optimization",
      "Quality prediction based on provider history",
      "Automated service categorization and tagging",
    ],
    keyFeatures: [
      "Multi-category service booking",
      "Real-time service tracking",
      "In-app chat with service providers",
      "Secure payment integration",
      "Rating and review system",
      "Service history and rebooking",
      "Emergency service priority booking",
      "Multi-language support",
    ],
    technologies: ["React Native", "AI/ML", "Real-time Tracking", "Payment Gateway", "Cloud Infrastructure"],
    websiteUrl: "https://www.rseva.health",
    appStoreUrl: "#",
    playStoreUrl: "#",
    downloadCount: "75K+",
    rating: 4.5,
    date: "2024",
    featured: false,
  },
]

const categories = ["All", "Beauty Tech", "Healthcare", "Wellness", "Services"]
const platforms = ["All", "iOS", "Android"]

interface MobileAppsProps {
  hideHeader?: boolean
}

export function MobileApps({ hideHeader = false }: MobileAppsProps) {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedPlatform, setSelectedPlatform] = useState("All")
  const [selectedApp, setSelectedApp] = useState<MobileApp | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const filteredApps = mobileApps.filter((app) => {
    const categoryMatch = selectedCategory === "All" || app.category === selectedCategory
    const platformMatch = selectedPlatform === "All" || app.platform.includes(selectedPlatform)
    return categoryMatch && platformMatch
  })

  const handleLearnMore = (app: MobileApp) => {
    setSelectedApp(app)
    setIsModalOpen(true)
  }

  return (
    <section className={hideHeader ? "" : "py-16 bg-gradient-to-b from-red-50 to-white dark:from-red-950/50 dark:to-gray-950"}>
      <div className="container mx-auto px-4">
        {/* Header */}
        {!hideHeader && (
          <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center mb-12">
            <div className="flex items-center gap-3 mb-2">
              <Smartphone className="h-8 w-8 text-red-600 dark:text-red-400" />
              <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-5xl text-red-700 dark:text-white">
                Our Mobile Apps
              </h2>
            </div>
            <p className="max-w-[85%] leading-normal text-gray-700 dark:text-gray-300 sm:text-lg sm:leading-7">
              Innovative mobile applications powered by cutting-edge AI technology
            </p>
          </div>
        )}

        {/* Filters */}
        <div className="space-y-4 mb-12">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className={
                  selectedCategory === category
                    ? "bg-red-600 hover:bg-red-700 text-white"
                    : "border-red-300 dark:border-red-700 text-gray-700 dark:text-gray-300 hover:bg-red-50 dark:hover:bg-red-950"
                }
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Platform Filter */}
          <div className="flex justify-center gap-3">
            {platforms.map((platform) => (
              <Button
                key={platform}
                variant={selectedPlatform === platform ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedPlatform(platform)}
                className={
                  selectedPlatform === platform
                    ? "bg-gray-800 hover:bg-gray-900 text-white"
                    : "border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-950"
                }
              >
                {platform}
              </Button>
            ))}
          </div>
        </div>

        {/* Apps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredApps.map((app) => (
            <Card
              key={app.id}
              className="flex flex-col border-red-100 dark:border-red-900 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <Badge className="bg-red-100 dark:bg-red-900 text-red-700 dark:text-white hover:bg-red-200 dark:hover:bg-red-800">
                    {app.category}
                  </Badge>
                  {app.featured && (
                    <Badge className="bg-yellow-100 dark:bg-yellow-900 text-yellow-700 dark:text-yellow-300">
                      <Star className="h-3 w-3 mr-1" />
                      Featured
                    </Badge>
                  )}
                </div>
                <CardTitle className="text-xl text-red-700 dark:text-white flex items-center gap-2">
                  <Smartphone className="h-5 w-5" />
                  {app.title}
                </CardTitle>
                <CardDescription className="text-gray-700 dark:text-gray-300">
                  {app.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <div className="space-y-3">
                  {/* Platform Badges */}
                  <div className="flex gap-2">
                    {app.platform.map((platform) => (
                      <Badge
                        key={platform}
                        variant="secondary"
                        className="text-xs bg-gray-100 dark:bg-gray-800"
                      >
                        {platform}
                      </Badge>
                    ))}
                  </div>

                  {/* App Metrics */}
                  {(app.downloadCount || app.rating) && (
                    <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
                      {app.downloadCount && (
                        <div className="flex items-center gap-1">
                          <Download className="h-4 w-4" />
                          <span>{app.downloadCount}</span>
                        </div>
                      )}
                      {app.rating && (
                        <div className="flex items-center gap-1">
                          <Star className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                          <span>{app.rating}</span>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Tags */}
                  <div className="flex items-start gap-2">
                    <Tag className="h-4 w-4 mt-1 text-gray-600 dark:text-gray-400" />
                    <div className="flex flex-wrap gap-1">
                      {app.tags.slice(0, 3).map((tag) => (
                        <Badge
                          key={tag}
                          variant="outline"
                          className="text-xs border-red-200 dark:border-red-800 text-gray-700 dark:text-gray-300"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                    <Calendar className="h-4 w-4" />
                    <span>{app.date}</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex gap-2">
                <Button
                  size="sm"
                  variant="outline"
                  className="w-full border-red-300 dark:border-red-700"
                  onClick={() => handleLearnMore(app)}
                >
                  Learn More
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Modal for Detailed View */}
        <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
          <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <div className="flex items-center justify-between">
                <DialogTitle className="text-2xl text-red-700 dark:text-white flex items-center gap-2">
                  <Smartphone className="h-6 w-6" />
                  {selectedApp?.title}
                </DialogTitle>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsModalOpen(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <X className="h-5 w-5" />
                </Button>
              </div>
              <div className="flex gap-2 mt-2">
                <Badge className="bg-red-100 dark:bg-red-900 text-red-700 dark:text-white">
                  {selectedApp?.category}
                </Badge>
                {selectedApp?.platform.map((platform) => (
                  <Badge key={platform} variant="secondary">
                    {platform}
                  </Badge>
                ))}
                {selectedApp?.featured && (
                  <Badge className="bg-yellow-100 dark:bg-yellow-900 text-yellow-700 dark:text-yellow-300">
                    <Star className="h-3 w-3 mr-1" />
                    Featured
                  </Badge>
                )}
              </div>
            </DialogHeader>
            <DialogDescription className="space-y-6 mt-4">
              {/* App Metrics */}
              {(selectedApp?.downloadCount || selectedApp?.rating) && (
                <div className="flex items-center gap-6 p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
                  {selectedApp?.downloadCount && (
                    <div className="flex items-center gap-2">
                      <Download className="h-5 w-5 text-green-600" />
                      <div>
                        <p className="text-xs text-gray-500">Downloads</p>
                        <p className="text-lg font-semibold text-gray-900 dark:text-white">
                          {selectedApp.downloadCount}
                        </p>
                      </div>
                    </div>
                  )}
                  {selectedApp?.rating && (
                    <div className="flex items-center gap-2">
                      <Star className="h-5 w-5 fill-yellow-500 text-yellow-500" />
                      <div>
                        <p className="text-xs text-gray-500">Rating</p>
                        <p className="text-lg font-semibold text-gray-900 dark:text-white">
                          {selectedApp.rating}/5.0
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* Detailed Description */}
              <div>
                <h4 className="font-semibold text-lg mb-2 text-gray-900 dark:text-white">Overview</h4>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  {selectedApp?.detailedDescription || selectedApp?.description}
                </p>
              </div>

              {/* AI Features */}
              {selectedApp?.aiFeatures && selectedApp.aiFeatures.length > 0 && (
                <div>
                  <h4 className="font-semibold text-lg mb-2 text-gray-900 dark:text-white flex items-center gap-2">
                    <Star className="h-5 w-5 text-purple-600" />
                    AI-Powered Features
                  </h4>
                  <ul className="space-y-2">
                    {selectedApp.aiFeatures.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="text-purple-600 mt-1">•</span>
                        <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Key Features */}
              {selectedApp?.keyFeatures && selectedApp.keyFeatures.length > 0 && (
                <div>
                  <h4 className="font-semibold text-lg mb-2 text-gray-900 dark:text-white">Key Features</h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {selectedApp.keyFeatures.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="text-green-600 mt-1">✓</span>
                        <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Technologies */}
              {selectedApp?.technologies && selectedApp.technologies.length > 0 && (
                <div>
                  <h4 className="font-semibold text-lg mb-2 text-gray-900 dark:text-white">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedApp.technologies.map((tech, index) => (
                      <Badge key={index} variant="outline" className="bg-blue-50 dark:bg-blue-950 border-blue-200 dark:border-blue-800">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}

              {/* Tags */}
              <div>
                <h4 className="font-semibold text-lg mb-2 text-gray-900 dark:text-white">Tags</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedApp?.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="border-red-200 dark:border-red-800">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Download Links */}
              {(selectedApp?.appStoreUrl || selectedApp?.playStoreUrl || selectedApp?.websiteUrl) && (
                <div className="flex gap-3 pt-4 border-t">
                  {selectedApp.appStoreUrl && (
                    <Button className="flex-1 bg-black hover:bg-gray-800 text-white" asChild>
                      <a href={selectedApp.appStoreUrl} target="_blank" rel="noopener noreferrer">
                        <Download className="mr-2 h-4 w-4" />
                        App Store
                      </a>
                    </Button>
                  )}
                  {selectedApp.playStoreUrl && (
                    <Button className="flex-1 bg-green-600 hover:bg-green-700 text-white" asChild>
                      <a href={selectedApp.playStoreUrl} target="_blank" rel="noopener noreferrer">
                        <Download className="mr-2 h-4 w-4" />
                        Play Store
                      </a>
                    </Button>
                  )}
                  {selectedApp.websiteUrl && (
                    <Button className="flex-1 bg-red-600 hover:bg-red-700 text-white" asChild>
                      <a href={selectedApp.websiteUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Visit Website
                      </a>
                    </Button>
                  )}
                </div>
              )}
            </DialogDescription>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  )
}