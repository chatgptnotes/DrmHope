export function StructuredData({ article }: { article?: any } = {}) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "DrM Hope Softwares",
    "alternateName": ["DrM Hope", "DRM Hope Software", "Dr M Hope"],
    "description": "Leading AI Software Development Company specializing in AI-powered healthcare platforms, AI agentic systems, intelligent automation, and custom AI solutions. Technology partner of Bettroi with 100+ successful AI projects delivered.",
    "url": "https://www.drmhope.com",
    "logo": "https://www.drmhope.com/images/1631365238387.jpeg",
    "image": "https://www.drmhope.com/images/1631365238387.jpeg",
    "founder": {
      "@type": "Person",
      "name": "Dr. B.K. Murali",
      "givenName": "Murali",
      "familyName": "B.K.",
      "jobTitle": ["Founder & Director", "Chief Technology Officer at Bettroi"],
      "description": "The Surgeon Who Codes with AI - Pioneer in AI-powered healthcare software development. Dual role as Founder of DRM Hope Software and CTO of Bettroi.",
      "sameAs": ["https://linkedin.com/in/drmurali"]
    },
    "foundingDate": "2011",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Nagpur",
      "addressRegion": "Maharashtra",
      "postalCode": "440001",
      "addressCountry": "IN"
    },
    "contactPoint": [{
      "@type": "ContactPoint",
      "contactType": "Customer Service",
      "email": "info@drmhope.com",
      "availableLanguage": ["English", "Hindi"]
    }],
    "sameAs": [
      "https://www.facebook.com/drmhope",
      "https://www.instagram.com/drmhope",
      "https://www.youtube.com/@drmhope",
      "https://www.linkedin.com/company/drmhope",
      "https://twitter.com/drmhope"
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "87",
      "bestRating": "5"
    },
    "numberOfEmployees": {
      "@type": "QuantitativeValue",
      "value": 25
    },
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
      "Deep Learning",
      "React Native Development",
      "Next.js Development",
      "Supabase",
      "Voice AI",
      "Virtual Try-On Technology",
      "Industrial IoT",
      "SCADA Systems"
    ],
    "areaServed": ["IN", "US", "GB", "AU", "AE"],
    "slogan": "The Surgeon Who Codes with AI",
    "parentOrganization": {
      "@type": "Organization",
      "name": "Bettroi",
      "url": "https://bettroi.com",
      "description": "Strategic technology partnership"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "AI Development Services",
      "itemListElement": [
        {"@type": "OfferCatalog", "name": "AI Software Development"},
        {"@type": "OfferCatalog", "name": "AI Agentic Platforms"},
        {"@type": "OfferCatalog", "name": "Healthcare AI Solutions"},
        {"@type": "OfferCatalog", "name": "Voice AI Development"},
        {"@type": "OfferCatalog", "name": "Industrial IoT Solutions"}
      ]
    }
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
    "screenshot": "https://www.drmhope.com/images/drmhope-platform.png",
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
    "url": "https://www.drmhope.com",
    "description": "AI Software Development Company - AI Agentic Platforms & Intelligent Solutions",
    "publisher": {
      "@type": "Organization",
      "name": "DrM Hope Softwares"
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://www.drmhope.com/search?q={search_term_string}"
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
        "item": "https://www.drmhope.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Projects",
        "item": "https://www.drmhope.com/projects"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Services",
        "item": "https://www.drmhope.com/services"
      }
    ]
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What AI software development services does DrM Hope offer?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "DrM Hope offers comprehensive AI software development services including AI-powered healthcare platforms, AI agentic systems, intelligent automation solutions, voice AI applications, virtual try-on technology, industrial IoT solutions, and custom AI development for healthcare, business, and enterprise sectors. We have delivered 100+ successful AI projects."
        }
      },
      {
        "@type": "Question",
        "name": "What is an AI agentic platform?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "An AI agentic platform is an intelligent system powered by autonomous AI agents that can make decisions, take actions, and solve problems without constant human intervention. These platforms use machine learning, natural language processing, and advanced reasoning to automate complex workflows and provide intelligent assistance across various business functions."
        }
      },
      {
        "@type": "Question",
        "name": "What industries does DrM Hope serve?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "DrM Hope serves multiple industries including Healthcare (hospitals, clinics, medical facilities), Business & Enterprise (CRM, project management, automation), Education (AI tutoring, adaptive learning), Beauty & Lifestyle (virtual try-on, beauty tech), Finance (billing, insurance processing), Manufacturing (industrial IoT, SCADA systems), and Custom AI solutions for various sectors."
        }
      },
      {
        "@type": "Question",
        "name": "Who is Dr. Murali BK?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Dr. B.K. Murali is the Founder of DrM Hope Software and CTO of Bettroi. A pioneer in AI-powered healthcare software with 100+ successful AI projects delivered."
        }
      },
      {
        "@type": "Question",
        "name": "Does DrM Hope offer custom AI development?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, DrM Hope offers custom AI development including AI strategy consulting, ML model development, NLP, computer vision, and intelligent automation with ongoing support."
        }
      }
    ]
  }

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "DrM Hope Softwares",
    "image": "https://www.drmhope.com/images/1631365238387.jpeg",
    "@id": "https://www.drmhope.com",
    "url": "https://www.drmhope.com",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Nagpur",
      "addressLocality": "Nagpur",
      "addressRegion": "MH",
      "postalCode": "440001",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 21.1458,
      "longitude": 79.0882
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "09:00",
      "closes": "18:00"
    },
    "sameAs": [
      "https://linkedin.com/company/drmhope",
      "https://github.com/drmhope"
    ]
  }

  // Article schema for blog posts
  const articleSchema = article ? {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": article.title,
    "description": article.excerpt,
    "image": "https://www.drmhope.com/images/1631365238387.jpeg",
    "datePublished": article.publishDate,
    "dateModified": article.publishDate,
    "author": {
      "@type": "Person",
      "name": article.author,
      "url": "https://www.drmhope.com/about"
    },
    "publisher": {
      "@type": "Organization",
      "name": "DrM Hope Softwares",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.drmhope.com/images/1631365238387.jpeg"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://www.drmhope.com/blog/${article.slug}`
    },
    "keywords": article.seoKeywords.join(", "),
    "articleSection": article.category,
    "wordCount": Math.ceil(article.content.length / 6)
  } : null

  const primarySchemas = [
    organizationSchema,
    websiteSchema,
    breadcrumbSchema,
    localBusinessSchema,
  ]

  const secondarySchemas = [
    faqSchema,
    ...(articleSchema ? [articleSchema] : []),
  ]

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(primarySchemas) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(secondarySchemas) }}
      />
    </>
  )
}
