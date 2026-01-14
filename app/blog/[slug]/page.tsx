import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { blogPosts, getBlogPostBySlug, getBlogPostsByCategory } from '@/data/blog-posts'
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, Clock, User, ArrowLeft, ArrowRight, Tag } from "lucide-react"

// Generate static params for all blog posts
export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }))
}

// Generate metadata for each blog post
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = getBlogPostBySlug(params.slug)

  if (!post) {
    return {
      title: 'Blog Post Not Found',
    }
  }

  return {
    title: `${post.title} | DrM Hope AI Blog`,
    description: post.excerpt,
    keywords: post.seoKeywords,
    authors: [{ name: post.author }],
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.publishDate,
      authors: [post.author],
      tags: post.tags,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
    },
  }
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getBlogPostBySlug(params.slug)

  if (!post) {
    notFound()
  }

  // Get related posts from the same category
  const relatedPosts = getBlogPostsByCategory(post.category)
    .filter(p => p.id !== post.id)
    .slice(0, 3)

  // Get next and previous posts
  const currentIndex = blogPosts.findIndex(p => p.id === post.id)
  const previousPost = currentIndex > 0 ? blogPosts[currentIndex - 1] : null
  const nextPost = currentIndex < blogPosts.length - 1 ? blogPosts[currentIndex + 1] : null

  return (
    <div className="flex min-h-screen flex-col bg-white dark:bg-gray-950">
      <Navbar />

      <main className="flex-1">
        {/* Article Header */}
        <article className="py-12 px-4">
          <div className="container mx-auto max-w-4xl">
            {/* Breadcrumb */}
            <div className="mb-8">
              <Link href="/blog" className="flex items-center text-blue-600 hover:text-blue-700 dark:text-blue-400">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Blog
              </Link>
            </div>

            {/* Article Meta */}
            <div className="mb-8">
              <Badge className="mb-4 bg-blue-600 text-white">{post.category}</Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
                {post.title}
              </h1>

              <div className="flex flex-wrap items-center gap-6 text-gray-600 dark:text-gray-400">
                <div className="flex items-center gap-2">
                  <User className="h-5 w-5" />
                  <span className="font-medium">{post.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-5 w-5" />
                  <span>{new Date(post.publishDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5" />
                  <span>{post.readTime}</span>
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-6">
                {post.tags.map((tag) => (
                  <Badge key={tag} variant="outline" className="border-blue-300 dark:border-blue-700">
                    <Tag className="mr-1 h-3 w-3" />
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Article Content */}
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <div className="bg-blue-50 dark:bg-blue-950/30 p-6 rounded-lg mb-8">
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  {post.excerpt}
                </p>
              </div>

              <div
                className="article-content"
                dangerouslySetInnerHTML={{ __html: post.content.replace(/\n/g, '<br />') }}
              />
            </div>

            {/* Author Bio */}
            <div className="mt-12 p-6 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-900 dark:to-purple-950 rounded-lg">
              <div className="flex items-start gap-4">
                <div className="h-16 w-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white text-2xl font-bold">
                  {post.author.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    About {post.author}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    {post.author === "Dr. Murali BK"
                      ? "Dr. B.K. Murali is the Founder & Director of DrM Hope Software and Chief Technology Officer of Bettroi. Known as 'The Surgeon Who Codes with AI', he is a pioneer in AI-powered healthcare software development."
                      : "Part of the DrM Hope AI development team, contributing expertise in cutting-edge AI technologies and software engineering."}
                  </p>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-between">
              {previousPost ? (
                <Link href={`/blog/${previousPost.slug}`} className="flex-1">
                  <Card className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 mb-2">
                        <ArrowLeft className="h-4 w-4" />
                        <span className="text-sm font-medium">Previous Article</span>
                      </div>
                      <CardTitle className="text-lg line-clamp-2">{previousPost.title}</CardTitle>
                    </CardHeader>
                  </Card>
                </Link>
              ) : <div className="flex-1" />}

              {nextPost ? (
                <Link href={`/blog/${nextPost.slug}`} className="flex-1">
                  <Card className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-center gap-2 justify-end text-blue-600 dark:text-blue-400 mb-2">
                        <span className="text-sm font-medium">Next Article</span>
                        <ArrowRight className="h-4 w-4" />
                      </div>
                      <CardTitle className="text-lg line-clamp-2 text-right">{nextPost.title}</CardTitle>
                    </CardHeader>
                  </Card>
                </Link>
              ) : <div className="flex-1" />}
            </div>
          </div>
        </article>

        {/* Related Articles */}
        {relatedPosts.length > 0 && (
          <section className="py-16 px-4 bg-gray-50 dark:bg-gray-900">
            <div className="container mx-auto max-w-6xl">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
                Related Articles in {post.category}
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {relatedPosts.map((relatedPost) => (
                  <Card key={relatedPost.id} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <Badge className="w-fit mb-2" variant="outline">{relatedPost.category}</Badge>
                      <CardTitle className="text-lg line-clamp-2">
                        <Link href={`/blog/${relatedPost.slug}`} className="hover:text-blue-600 transition-colors">
                          {relatedPost.title}
                        </Link>
                      </CardTitle>
                      <CardDescription className="line-clamp-3">
                        {relatedPost.excerpt}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-4">
                        <span className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {new Date(relatedPost.publishDate).toLocaleDateString()}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {relatedPost.readTime}
                        </span>
                      </div>
                      <Link href={`/blog/${relatedPost.slug}`}>
                        <Button variant="outline" className="w-full">
                          Read Article
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA Section */}
        <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Build Your AI Solution?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Partner with DrM Hope for cutting-edge AI software development. 100+ successful projects delivered.
            </p>
            <div className="flex gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/projects">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  View Projects
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
