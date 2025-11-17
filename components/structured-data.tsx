export function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "DrM Hope Softwares",
    "alternateName": "DrM Hope",
    "description": "AI Software Development Company specializing in AI-powered healthcare platforms, AI agentic systems, and intelligent automation solutions",
    "url": "https://drmhope.com",
    "logo": "https://drmhope.com/images/1631365238387.jpeg",
    "image": "https://drmhope.com/images/1631365238387.jpeg",
    "founder": {
      "@type": "Person",
      "name": "Dr. B.K. Murali",
      "jobTitle": "Founder & Chief AI Architect",
      "description": "The Surgeon Who Codes with AI - Pioneer in AI-powered healthcare software development"
    },
    "foundingDate": "2011",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Nagpur",
      "addressRegion": "Maharashtra",
      "addressCountry": "IN"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Customer Service",
      "email": "info@drmhope.com"
    },
    "sameAs": [
      "https://linkedin.com/company/drmhope",
      "https://github.com/drmhope"
    ],
    "knowsAbout": [
      "Artificial Intelligence",
      "Machine Learning",
      "Healthcare AI",
      "Natural Language Processing",
      "Computer Vision",
      "Predictive Analytics",
      "AI Agentic Systems",
      "Intelligent Automation",
      "Generative AI",
      "Deep Learning"
    ],
    "makesOffer": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "AI Software Development",
          "description": "Custom AI software development for healthcare, business, and enterprise solutions"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "AI Agentic Platforms",
          "description": "Development of AI agent platforms for intelligent automation"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Healthcare AI Solutions",
          "description": "AI-powered healthcare platforms and hospital management systems"
        }
      }
    ]
  }

  const softwareApplicationSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "DrMHope AI Platform",
    "applicationCategory": "BusinessApplication",
    "applicationSubCategory": "Healthcare Management Software",
    "operatingSystem": "Web, iOS, Android",
    "description": "Award-winning AI-powered hospital information system with NLP medical records, predictive analytics, and intelligent automation",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
      "description": "Contact for pricing"
    },
    "screenshot": "https://drmhope.com/images/drmhope-platform.png",
    "featureList": [
      "AI-powered patient registration",
      "NLP medical documentation",
      "Predictive analytics",
      "Smart pharmacy inventory",
      "Automated billing",
      "AI clinical decision support"
    ],
    "author": {
      "@type": "Organization",
      "name": "DrM Hope Softwares"
    }
  }

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "DrM Hope",
    "url": "https://drmhope.com",
    "description": "AI Software Development Company - AI Agentic Platforms & Intelligent Solutions",
    "publisher": {
      "@type": "Organization",
      "name": "DrM Hope Softwares"
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://drmhope.com/search?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
  }

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://drmhope.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Projects",
        "item": "https://drmhope.com/projects"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Services",
        "item": "https://drmhope.com/services"
      }
    ]
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  )
}
