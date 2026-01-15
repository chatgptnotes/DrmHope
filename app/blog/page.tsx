import { Metadata } from 'next'
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, ArrowRight, TrendingUp } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: 'AI Software Development Blog | 300+ Articles on AI, Healthcare AI & Agentic Platforms',
  description: '300+ expert articles on AI software development, machine learning, deep learning, AI agentic systems, healthcare AI, voice AI, conversational AI, computer vision, NLP, industrial IoT, and intelligent automation. Comprehensive tutorials, case studies, and best practices by Dr. Murali BK and DrM Hope team.',
  keywords: [
    'AI blog',
    'AI software development blog',
    'machine learning tutorials',
    'deep learning articles',
    'AI articles',
    'healthcare AI blog',
    'AI agentic systems blog',
    'voice AI articles',
    'conversational AI',
    'computer vision tutorials',
    'NLP blog',
    'industrial IoT blog',
    'AI development best practices',
    'AI case studies',
    '300+ AI articles',
    'predictive analytics',
    'neural networks',
    'reinforcement learning',
    'edge AI',
    'AI ethics'
  ]
}

export default function Blog() {
  const { blogPosts, getAllCategories } = require('@/data/blog-posts')
  const allCategories = getAllCategories()
  const categories = ["All", ...allCategories]

  return (
    <div className="flex min-h-screen flex-col bg-white dark:bg-gray-950">
      <Navbar />

      <main className="flex-1">
        {/* Hero */}
        <section className="py-16 px-4 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-purple-950">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center">
              <Badge className="mb-4 bg-blue-600 text-white">📝 300+ AI Articles & Tutorials</Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                AI Software Development Blog
              </h1>
              <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
                {blogPosts.length}+ expert articles on AI development, machine learning, deep learning, healthcare AI, agentic systems, voice AI, conversational AI, computer vision, NLP, industrial IoT, and intelligent automation by Dr. Murali BK and DrM Hope team
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
