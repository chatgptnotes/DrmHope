export function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "DrM Hope Softwares",
    "alternateName": ["DrM Hope", "DRM Hope Software", "Dr M Hope"],
    "description": "Leading AI Software Development Company specializing in AI-powered healthcare platforms, AI agentic systems, intelligent automation, and custom AI solutions. Technology partner of Bettroi with 100+ successful AI projects delivered.",
    "url": "https://drmhope.com",
    "logo": "https://drmhope.com/images/1631365238387.jpeg",
    "image": "https://drmhope.com/images/1631365238387.jpeg",
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
      "https://linkedin.com/company/drmhope",
      "https://github.com/drmhope",
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
    "makesOffer": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "AI Software Development",
          "description": "Custom AI software development for healthcare, business, and enterprise solutions",
          "provider": {
            "@type": "Organization",
            "name": "DrM Hope Softwares"
          },
          "serviceType": "Software Development"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "AI Agentic Platforms",
          "description": "Development of AI agent platforms for intelligent automation and decision-making",
          "provider": {
            "@type": "Organization",
            "name": "DrM Hope Softwares"
          },
          "serviceType": "AI Platform Development"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Healthcare AI Solutions",
          "description": "AI-powered healthcare platforms, hospital management systems, and medical AI applications",
          "provider": {
            "@type": "Organization",
            "name": "DrM Hope Softwares"
          },
          "serviceType": "Healthcare Software"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Voice AI Development",
          "description": "Voice AI applications with natural language processing and speech recognition",
          "provider": {
            "@type": "Organization",
            "name": "DrM Hope Softwares"
          },
          "serviceType": "Voice AI"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Industrial IoT Solutions",
          "description": "Industrial automation, SCADA systems, and IoT platforms for manufacturing and utilities",
          "provider": {
            "@type": "Organization",
            "name": "DrM Hope Softwares"
          },
          "serviceType": "Industrial IoT"
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
          "text": "Dr. B.K. Murali is the Founder & Director of DrM Hope Software and Chief Technology Officer of Bettroi. Known as 'The Surgeon Who Codes with AI', he is a pioneer in AI-powered healthcare software development with expertise in artificial intelligence, machine learning, and healthcare technology innovation."
        }
      },
      {
        "@type": "Question",
        "name": "What is DrM Hope's relationship with Bettroi?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "DrM Hope Software is the strategic technology development partner of Bettroi. Dr. Murali BK serves dual roles as Founder & Director of DrM Hope Software and Chief Technology Officer of Bettroi, providing innovative software solutions and engineering expertise to both organizations."
        }
      },
      {
        "@type": "Question",
        "name": "What technologies does DrM Hope specialize in?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "DrM Hope specializes in cutting-edge technologies including Artificial Intelligence, Machine Learning, Deep Learning, Natural Language Processing, Computer Vision, React Native, Next.js, Supabase, TensorFlow, Google AI, OpenAI, Voice AI, Industrial IoT, SCADA systems, and cloud platforms (AWS, Azure, Vercel). We build production-ready AI solutions with modern tech stacks."
        }
      },
      {
        "@type": "Question",
        "name": "How many AI projects has DrM Hope delivered?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "DrM Hope has successfully delivered 100+ AI-powered software projects across healthcare, business automation, education, beauty tech, and industrial sectors. Our portfolio includes hospital management systems, AI tutoring platforms, voice AI applications, virtual try-on solutions, industrial IoT platforms, and custom enterprise AI systems."
        }
      },
      {
        "@type": "Question",
        "name": "Does DrM Hope offer custom AI development?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, DrM Hope offers comprehensive custom AI development services tailored to your unique business challenges. We provide AI strategy consulting, custom AI model development, legacy system AI integration, intelligent process automation, advanced data analytics, computer vision solutions, and natural language processing implementations with ongoing support and optimization."
        }
      }
    ]
  }

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "DrM Hope Softwares",
    "image": "https://drmhope.com/images/1631365238387.jpeg",
    "@id": "https://drmhope.com",
    "url": "https://drmhope.com",
    "telephone": "+91-712-XXXXXXX",
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
    </>
  )
}
