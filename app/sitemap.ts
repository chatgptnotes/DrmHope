import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://drmhope.com'

  // Main pages
  const routes = [
    '',
    '/projects',
    '/services',
    '/solutions',
    '/about',
    '/contact',
    '/client-success',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }))

  // AI-focused pages (to be created)
  const aiFocusedPages = [
    {
      url: `${baseUrl}/ai-software-development`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/ai-agentic-platforms`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/healthcare-ai-solutions`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
  ]

  return [...routes, ...aiFocusedPages]
}
