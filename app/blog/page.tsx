import { Metadata } from 'next'
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, ArrowRight, TrendingUp } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: 'AI Software Development Blog | AI Insights & Tutorials',
  description: 'Expert insights on AI software development, machine learning, AI agentic systems, healthcare AI, and intelligent automation. Latest trends, tutorials, and case studies.',
  keywords: [
    'AI blog',
    'AI software development blog',
    'machine learning insights',
    'AI tutorials',
    'healthcare AI articles',
    'AI agentic systems',
    'AI development best practices'
  ]
}

export default function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: "How AI is Transforming Healthcare Software Development in 2025",
      excerpt: "Discover how AI-powered healthcare platforms are revolutionizing patient care, reducing costs, and improving outcomes through predictive diagnostics, NLP medical records, and intelligent automation.",
      category: "Healthcare AI",
      date: "2025-01-15",
      readTime: "8 min read",
      author: "Dr. B.K. Murali",
      featured: true,
      tags: ["Healthcare AI", "Medical Software", "AI Platforms"]
    },
    {
      id: 2,
      title: "Building AI Agentic Systems: A Complete Guide for Enterprises",
      excerpt: "Step-by-step guide to developing autonomous AI agents for business automation. Learn about LangChain, AutoGen, multi-agent systems, and best practices for production deployment.",
      category: "AI Agentic Platforms",
      date: "2025-01-12",
      readTime: "12 min read",
      author: "Dr. B.K. Murali",
      featured: true,
      tags: ["AI Agents", "LangChain", "Automation"]
    },
    {
      id: 3,
      title: "Top 10 AI Platforms for Enterprise Automation in 2025",
      excerpt: "Comprehensive review of leading AI platforms including OpenAI, Anthropic Claude, Google Gemini, and custom AI solutions. Compare features, pricing, and use cases.",
      category: "AI Platforms",
      date: "2025-01-10",
      readTime: "10 min read",
      author: "DrM Hope Team",
      featured: false,
      tags: ["AI Platforms", "Enterprise AI", "Comparison"]
    },
    {
      id: 4,
      title: "Machine Learning in Medical Diagnosis: Real-World Case Studies",
      excerpt: "How ML models are achieving 95%+ accuracy in medical imaging, early disease detection, and diagnostic support. Case studies from Hope Hospital's AI implementation.",
      category: "Healthcare AI",
      date: "2025-01-08",
      readTime: "15 min read",
      author: "Dr. B.K. Murali",
      featured: true,
      tags: ["Machine Learning", "Medical AI", "Case Studies"]
    },
    {
      id: 5,
      title: "NLP-Powered Healthcare Solutions: Automating Medical Documentation",
      excerpt: "Learn how natural language processing is transforming medical documentation, reducing physician burnout, and improving patient care quality through voice-to-text and automated summarization.",
      category: "NLP",
      date: "2025-01-05",
      readTime: "9 min read",
      author: "DrM Hope Team",
      featured: false,
      tags: ["NLP", "Medical Records", "Automation"]
    },
    {
      id: 6,
      title: "Voice AI Agents: Building Conversational AI for Customer Service",
      excerpt: "Complete tutorial on developing voice AI agents using Bolna AI, ElevenLabs, and Vapi. Includes code examples, best practices, and deployment strategies.",
      category: "Voice AI",
      date: "2025-01-03",
      readTime: "11 min read",
      author: "DrM Hope Team",
      featured: false,
      tags: ["Voice AI", "Chatbots", "Tutorial"]
    },
    {
      id: 7,
      title: "AI in Emergency Healthcare: How Raftaar Saves Lives with Intelligent Dispatch",
      excerpt: "Deep dive into AI-powered emergency response systems. Learn how crash detection, intelligent routing, and predictive analytics reduce response times by 40%.",
      category: "Healthcare AI",
      date: "2025-01-01",
      readTime: "10 min read",
      author: "Dr. B.K. Murali",
      featured: false,
      tags: ["Emergency AI", "Healthcare", "Case Study"]
    },
    {
      id: 8,
      title: "Generative AI for Software Development: Tools, Techniques, and ROI",
      excerpt: "Explore how LLMs like GPT-4, Claude, and Gemini are transforming software development. Code generation, debugging, documentation, and productivity gains.",
      category: "Generative AI",
      date: "2024-12-28",
      readTime: "13 min read",
      author: "DrM Hope Team",
      featured: false,
      tags: ["Generative AI", "LLMs", "Development"]
    }
  ]

  const categories = ["All", "Healthcare AI", "AI Agentic Platforms", "NLP", "Voice AI", "Generative AI"]

  return (
    <div className="flex min-h-screen flex-col bg-white dark:bg-gray-950">
      <Navbar />

      <main className="flex-1">
        {/* Hero */}
        <section className="py-16 px-4 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-purple-950">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center">
              <Badge className="mb-4 bg-blue-600 text-white">📝 AI Insights & Tutorials</Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                AI Software Development Blog
              </h1>
              <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
                Expert insights, tutorials, and case studies on AI development, machine learning, healthcare AI, and intelligent automation
              </p>
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="py-8 px-4 border-b border-gray-200 dark:border-gray-800">
          <div className="container mx-auto max-w-6xl">
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((category, index) => (
                <Button
                  key={index}
                  variant={index === 0 ? "default" : "outline"}
                  className={index === 0 ? "bg-blue-600 hover:bg-blue-700" : ""}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Posts */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="flex items-center gap-2 mb-8">
              <TrendingUp className="h-6 w-6 text-blue-600" />
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Featured Articles</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {blogPosts.filter(post => post.featured).slice(0, 2).map((post) => (
                <Card key={post.id} className="hover:shadow-lg transition-shadow overflow-hidden">
                  <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-500"></div>
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-2">
                      <Badge>{post.category}</Badge>
                      <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
                        <span className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {new Date(post.date).toLocaleDateString()}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {post.readTime}
                        </span>
                      </div>
                    </div>
                    <CardTitle className="text-2xl hover:text-blue-600 transition-colors">
                      {post.title}
                    </CardTitle>
                    <CardDescription className="text-base mt-2">
                      {post.excerpt}
                    </CardDescription>
                  </CardHeader>
                  <CardFooter className="flex justify-between items-center">
                    <span className="text-sm text-gray-600 dark:text-gray-400">{post.author}</span>
                    <Button variant="ghost" className="text-blue-600">
                      Read More <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>

            {/* All Posts */}
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Latest Articles</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <Card key={post.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="outline">{post.category}</Badge>
                    </div>
                    <CardTitle className="text-lg hover:text-blue-600 transition-colors line-clamp-2">
                      {post.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-3 mb-4">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center gap-4 text-xs text-gray-500 dark:text-gray-500">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {new Date(post.date).toLocaleDateString()}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {post.readTime}
                      </span>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="ghost" className="text-blue-600 text-sm">
                      Read Article <ArrowRight className="ml-2 h-3 w-3" />
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Get AI Insights Delivered to Your Inbox
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Join 10,000+ developers and AI practitioners receiving weekly updates on AI development trends
            </p>
            <div className="flex gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg"
              />
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                Subscribe
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
