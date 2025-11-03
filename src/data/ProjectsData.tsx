import { ExternalLink } from "lucide-react"
import { themeIds, type ThemeId } from '@/theme/tokens'

export type ProjectsPageContent = {
  hero: {
    titlePrefix: string
    titleHighlight: string
    titleSuffix?: string
    description: string
  }
  cta: {
    heading: string
    description: string
    primaryLabel: string
    primaryHref: string
    secondaryLabel: string
    secondaryHref: string
  }
}

export const projectsPageContent: Record<ThemeId, ProjectsPageContent> = themeIds.reduce((acc, id) => {
  if (id === 'acm') {
    acc[id] = {
      hero: {
        titlePrefix: 'Explore ',
        titleHighlight: 'Our Work',
        description:
          'A showcase of our student-built solutions — past and present. Filter by quarter, explore by type, and dive into the real work that defines ACM Industry.',
      },
      cta: {
        heading: 'Ready to join us?',
        description:
          'Whether you’re a student ready to build or a company ready to collaborate — let’s make it happen.',
        primaryLabel: 'Join ACM Industry',
        primaryHref: '/join',
        secondaryLabel: 'Partner With Us',
        secondaryHref: '/services',
      },
    }
  } else {
    acc[id] = {
      hero: {
        titlePrefix: 'Explore ',
        titleHighlight: 'Gaucho Builds',
        description:
          'See how Gaucho Software Engineers delivers production-ready products for campus, community, and industry partners. Find the projects and stories that inspire your next build.',
      },
      cta: {
        heading: 'Ready to build with GSE?',
        description:
          'Join a team, mentor rising talent, or collaborate with us on your next initiative — we’d love to work together.',
        primaryLabel: 'Join GSE',
        primaryHref: '/join',
        secondaryLabel: 'Partner With GSE',
        secondaryHref: '/services',
      },
    }
  }
  return acc
}, {} as Record<ThemeId, ProjectsPageContent>)

export const currentQuarter = [4, 2025]

export const projects = [
  {
    id: 'data-constr-innov',
    name: 'ConstructWise',
    short_description: 'A stealth startup building a platform with AI-powered tools.',
    long_description: 'A stealth startup building a platform with AI-powered tools. More coming soon...',
    images: null,
    link: '/projects/#data-constr-innov',
    featured: true,
    quarter: [4, 2025],
    company_logo: 'constructwise-logo.png',
    tags: ['Next.js', 'Django', 'Anthropic'],
    external_links: [],
    colors: {
      background: '#000000',
      border: '#0066CC',
      textPrimary: '#FFFFFF',
      textSecondary: '#E6E6E6',
      accent: '#0066CC',
      mediaBackground: '#1A1A1A',
      tag: {
        background: '#0066CC33',
        text: '#0066CC',
        border: '#0066CC80'
      },
      button: {
        background: '#0066CC',
        text: '#FFFFFF',
        border: '#0066CC80'
      }
    }
  },
  {
    id: 'dossmd',
    name: 'BioMeasure',
    short_description: 'An ARKit-powered iOS app that scans faces in real time and extracts biometric facial measurements.',
    long_description: 'BioMeasure is an innovative iOS application that leverages Apple\'s ARKit technology to provide real-time facial biometric measurements. The app uses advanced computer vision algorithms to scan faces and extract precise measurements including distances between facial landmarks, angles of facial features, and other biometric data points. Built with Swift and SwiftUI, DossMD represents a breakthrough in mobile facial analysis technology, offering medical professionals, researchers, and beauty industry experts a portable tool for accurate facial measurements without the need for expensive equipment.',
    images: null,
    link: '/projects/#dossmd',
    featured: true,
    quarter: [4, 2025],
    company_logo: 'dossmd-logo.png',
    tags: ['AR Kit', 'Swift', 'XCode'],
    external_links: [],
    colors: {
      background: '#F8F6F0',
      border: '#2E7D32',
      textPrimary: '#2E2E2E',
      textSecondary: '#6B6B6B',
      accent: '#2E7D32',
      mediaBackground: '#FFFFFF',
      tag: {
        background: '#2E7D321A',
        text: '#2E7D32',
        border: '#2E7D3240'
      },
      button: {
        background: '#2E7D32',
        text: '#FFFFFF',
        border: '#2E7D3280'
      }
    }
  },
  {
    id: 'finsight',
    name: 'FinSight AI Analytics',
    short_description: 'AI-driven platform for forecasting transactions, detecting anomalies, and uncovering hidden financial patterns.',
    long_description: 'An AI-powered analytics platform that detects financial anomalies, forecasts transactions, and highlights hidden correlations in uploaded data. It features two custom machine learning models: an unsupervised anomaly detection model trained on hundreds of thousands of synthetic transactions, and an XGBoost model for short-term transaction forecasting. The platform includes user authentication, dynamic visualizations, and clean data upload workflows, powered by a modern stack of Next.js, Flask, and Supabase.',
    images: ['pwc-project/pwc-project-1.png', 'pwc-project/pwc-project-2.png', 'pwc-project/pwc-project-3.png', 'pwc-project/pwc-project-4.png', 'pwc-project/pwc-project-5.png'],
    link: '/projects/#finsight',
    featured: true,
    quarter: [3, 2025],
    company_logo: 'pwc-logo.png',
    tags: ['Next.js', 'Flask', 'AI / ML'],
    external_links: [],
    colors: {
      background: '#2B170D',
      border: '#A65A2A',
      textPrimary: '#FAF6F2',
      textSecondary: '#D6C6B8',
      accent: '#FF7A2F',
      mediaBackground: '#3B1F12',
      tag: {
        background: '#FF7A2F33',
        text: '#FF8B3A',
        border: '#FF7A2F80'
      },
      button: {
        background: '#DA6A27',
        text: '#FFF4E8',
        border: '#DA6A2780'
      }
    }        
  },
  {
    id: 'paskin',
    name: 'AI Property Forecasting',
    short_description: 'Machine learning models to forecast rental income and equity growth using custom real estate data pipelines in one clean dashboard.',
    long_description: 'A real estate forecasting platform that combines proprietary web scraping with a suite of predictive models to estimate rental income and long-term equity growth. For each property, we extract rich datasets from sources like Zillow, Redfin, and regional property appraisal sites to drive accurate forecasts. The platform uses a mix of models—including linear regressions, XGBoost, and custom pipelines—to deliver tailored investment insights. Built with Next.js, Flask, and Supabase, it features full authentication, historical analysis, and a clean web interface for property evaluation.',
    images: ['paskin/dashboard1.png', 'paskin/dashboard2.png', 'paskin/dashboard3.png'],
    link: '/projects/#paskin',
    featured: false,
    quarter: [3, 2025],
    company_logo: 'paskin-logo.png',
    tags: ['Next.js', 'Flask', 'AI / ML'],
    external_links: [],
    colors: {}
  },
  {
    id: 'probability-management',
    name: 'Stochastic Modeling Library',
    short_description: 'A modern Python library for generating and manipulating Stochastic Information Packets (SIPs), with LLM-powered features and a demo dashboard.',
    long_description: 'Working in the novel statistical space of Stochastic Information Packets (SIPs), we developed a modern Python library by overhauling an early prototype provided by the company. The new library integrates core functionalities from their Excel-based SIP tools, adds support for generating SIPs using LLMs like ChatGPT and Gemini, and introduces utility functions for simulation, transformation, and interpretation of probabilistic data. A lightweight Streamlit dashboard was built to demonstrate the library’s capabilities and showcase example use cases.',
    images: ['prob-manage/dashboard1.png', 'prob-manage/dashboard2.png', 'prob-manage/dashboard3.png', 'prob-manage/dashboard4.png', 'prob-manage/dashboard5.png', 'prob-manage/dashboard6.png'],
    link: '/projects/#probability-management',
    featured: false,
    quarter: [3, 2025],
    company_logo: 'prob-manage-logo.png',
    tags: ['Python', 'LLM', 'Stochastic Data'],
    external_links: [],
    colors: {
      background: '#1E1E1E',
      border: '#0066CC',
      textPrimary: '#FFFFFF',
      textSecondary: '#B8B8B8',
      accent: '#0066CC',
      mediaBackground: '#1A1A1A',
      tag: {
        background: '#0066CC1A',
        text: '#0066CC',
        border: '#0066CC40'
      },
      button: {
        background: '#0066CC',
        text: '#FFFFFF',
        border: '#0066CC80'
      }
    }
  },
  {
    id: 'sweet-petes',
    name: 'Sweet Pete\'s Website',
    short_description: 'A fully custom bakery site with live content editing and a text-based cookie ordering system.',
    long_description: 'A fully custom website built with Next.js and Supabase for a local bakery, featuring a complete admin dashboard that allows the owner to edit all content — from text and images to entire sections of the page. The site includes a unique online ordering system where customers place cookie orders through a form that sends a real-time text message to the owner for preparation and in-store pickup. Designed with thoughtful UI/UX, deployed on Vercel, and configured with a custom domain for a professional, branded experience.',
    images: ['sweet-petes/sweet-petes-1.png', 'sweet-petes/sweet-petes-2.png', 'sweet-petes/sweet-petes-3.png', 'sweet-petes/sweet-petes-4.png', 'sweet-petes/sweet-petes-5.png', 'sweet-petes/sweet-petes-6.png'],
    link: '/projects/#sweet-petes',
    featured: false,
    quarter: [2, 2025],
    company_logo: 'sweet-petes-logo.png',
    tags: ['Next.js', 'UI / UX', 'Supabase'],
    external_links: [
      { label: "VIEW SITE", href: "https://sweetpetestreats.com/", icon: <ExternalLink className="w-4 h-4 md:w-5 md:h-5 lg:w-5 lg:h-5 xl:w-6 xl:h-6" /> },
    ],
    colors: {
      background: '#2E1C13',
      border: 'rgba(255, 235, 205, 0.25)',
      textPrimary: '#FFF3E8',
      textSecondary: '#FFDAB3',
      accent: '#FFA14D',
      mediaBackground: '#3B2316',
      tag: {
        background: '#A24E1820',
        text: '#FFB36B',
        border: '#FFA14D88'
      },
      button: {
        background: '#CC8340',
        text: '#FFF2E0',
        border: '#CC834080'
      }
    }    
  },
  {
    id: 'teddy-rice',
    name: 'Teddy Rice Rebrand',
    short_description: 'A full visual rebrand and site overhaul for a local restaurant, powered by Square and optimized for online ordering.',
    long_description: 'A Square-based website overhaul for a well-known Isla Vista restaurant, focused on visual polish, user flow, and local engagement. We customized their Square theme, captured new photography for the menu, and optimized page layouts to align with the brand’s refreshed identity. The site includes full support for online and location-based ordering, pickup scheduling, and a custom domain for a seamless customer experience. While built on Square’s infrastructure, the project involved extensive design iteration and content work to elevate the site beyond the platform’s defaults.',
    images: ['teddy-rice/teddy-rice-1.png', 'teddy-rice/teddy-rice-2.png', 'teddy-rice/teddy-rice-3.png'],
    link: '/projects/#teddy-rice',
    featured: true,
    quarter: [2, 2025],
    company_logo: 'teddy-rice-logo.png',
    tags: ['Square', 'UI / UX'],
    external_links: [
      { label: "VIEW SITE", href: "https://teddyriceusa.com/", icon: <ExternalLink className="w-4 h-4 md:w-5 md:h-5 lg:w-5 lg:h-5 xl:w-6 xl:h-6" /> },
    ],
    colors: {
      background: '#1A1A2E',
      border: 'rgba(255, 255, 255, 0.15)',
      textPrimary: '#FFFFFF',
      textSecondary: '#CCCCCC',
      accent: '#E63946',
      mediaBackground: 'rgba(255, 255, 255, 0.05)',
      tag: {
        background: '#E6394620',
        text: '#A12A35',
        border: '#E6394670'
      },
      button: {
        background: '#E63946',
        text: '#1A1A2E',
        border: '#E6394680'
      }
    }
  },
  {
    id: 'iv-drip',
    name: 'IV Drip Website',
    short_description: 'A custom site for a local coffee and dessert bar with a live menu editor and storefront gallery.',
    long_description: 'A fully custom Next.js and Supabase site built for IV Drip, designed to let the owner manage and publish their store content in real time. The site features a full admin dashboard for updating menus, images, and descriptions, along with a public-facing gallery to showcase and promote branded merchandise. While it doesn’t support online ordering, it provides a curated digital storefront experience. Content is cached with a 1-hour eviction policy for smooth performance, and the site is hosted on Vercel with a custom domain.',
    images: ['iv-drip/iv-drip-1.png', 'iv-drip/iv-drip-2.png', 'iv-drip/iv-drip-3.png', 'iv-drip/iv-drip-4.png', 'iv-drip/iv-drip-5.png', 'iv-drip/iv-drip-6.png', 'iv-drip/iv-drip-7.png', 'iv-drip/iv-drip-8.png'],
    link: '/projects/#iv-drip',
    featured: false,
    quarter: [2, 2025],
    company_logo: 'iv-drip-logo.png',
    tags: ['Next.js', 'Supabase', 'UI / UX'],
    external_links: [
      { label: "VIEW SITE", href: "https://iv-drip.vercel.app/", icon: <ExternalLink className="w-4 h-4 md:w-5 md:h-5 lg:w-5 lg:h-5 xl:w-6 xl:h-6" /> },
    ],
    colors: {
      background: '#362110',
      border: 'rgba(255, 255, 255, 0.14)',
      textPrimary: '#F5EBDD',
      textSecondary: '#D4BFAA',
      accent: '#C57A34',
      mediaBackground: '#4D3220',
    
      tag: {
        background: '#A4551F33',
        text: '#FFAE6B',
        border: '#C57A34AA'
      },
    
      button: {
        background: '#E98A3C',
        text: '#2A180C',
        border: '#E98A3C88'
      }
    }    
  },
  {
    id: 'sams-to-go',
    name: 'Sam\'s To Go Website',
    short_description: 'A lightweight, custom-designed Webflow site to showcase menu offerings and promote catering services.',
    long_description: 'A custom Webflow site built for a local sandwich shop to highlight its menu, catering options, and contact information. Designed to be fast, mobile-friendly, and easy to navigate, the site supports custom orders and browsing via a clear, modern layout. Hosted on GitHub with a custom domain, it serves as a straightforward but professional online presence for the business.',
    images: ['sams-to-go/sams-to-go-1.png', 'sams-to-go/sams-to-go-2.png', 'sams-to-go/sams-to-go-3.png'],
    link: '/projects/#sams-to-go',
    featured: true,
    quarter: [2, 2025],
    company_logo: 'sams-to-go-logo.png',
    tags: ['Webflow', 'Static Site', 'UI / UX'],
    external_links: [
      { label: "VIEW SITE", href: "https://samstogoislavista.com/", icon: <ExternalLink className="w-4 h-4 md:w-5 md:h-5 lg:w-5 lg:h-5 xl:w-6 xl:h-6" /> },
    ],
    colors: {
      background: '#fdf5e6',
      border: '#d8c9a8',
      textPrimary: '#3b2007',
      textSecondary: '#8f5123',
      accent: '#cc5e0d',
      mediaBackground: '#f9efdd',
    
      tag: {
        background: '#d7641725',
        text: '#b14400',
        border: '#d7641780'
      },
    
      button: {
        background: '#a64812',
        text: '#fff3e0',
        border: '#3b200770'
      }
    }
  },
  {
    id: 'palm-coast',
    name: 'Palm Coast Living Website',
    short_description: 'A custom real estate site with live property management and application link integration.',
    long_description: 'A fully custom website built with Next.js and Supabase for a local real estate company, featuring a complete admin dashboard for managing listings, uploading property images, and editing all on-page content. Each property links directly to its current application portal, providing a seamless experience for prospective tenants. The site uses real-time data from Supabase, with caching and a polished UI/UX design, and is deployed on Vercel with a custom domain.',
    images: ['palm-coast-living/palm-coast-living-1.png', 'palm-coast-living/palm-coast-living-2.png', 'palm-coast-living/palm-coast-living-3.mov', 'palm-coast-living/palm-coast-living-4.png'],
    link: '/projects/#palm-coast',
    featured: false,
    quarter: [2, 2025],
    company_logo: 'palm-coast-living-logo.png',
    tags: ['Next.js', 'Supabase', 'UI / UX'],
    external_links: [
      { label: "VIEW SITE", href: "https://property-management-five.vercel.app/", icon: <ExternalLink className="w-4 h-4 md:w-5 md:h-5 lg:w-5 lg:h-5 xl:w-6 xl:h-6" /> },
    ],
    colors: {
      background: '#f1f3f6',
      border: '#d0d7e2',
      textPrimary: '#14253d',
      textSecondary: '#475a72',
      accent: '#f4b04c',
      mediaBackground: '#14253d20',
      tag: {
        background: '#f4b04c20',
        text: '#b36b00',
        border: '#f4b04c70'
      },
      button: {
        background: '#f4b04c',
        text: '#14253d',
        border: '#f4b04c80'
      }
    }
  },
  {
    id: 'sweet-jane',
    name: 'Sweet Jane Website',
    short_description: 'A custom product gallery for a local boutique with full admin editing and optional e-commerce support.',
    long_description: 'A fully custom website built with Next.js and Supabase for a boutique retail shop in Isla Vista. Designed around a clean, gallery-style layout, the site showcases products and collections while allowing the owner to manage all content—including images, text, and page structure—via an integrated admin dashboard. The site includes optional online purchase capabilities, ready to be enabled when the owner is ready to support transactions. Real-time data updates and a 1-hour cache policy keep performance smooth, with the site deployed on Vercel under a custom domain.',
    images: ['sweet-jane/sweet-jane-1.png', 'sweet-jane/sweet-jane-2.png'],
    link: '/projects/#sweet-jane',
    featured: false,
    quarter: [2, 2025],
    company_logo: 'sweet-jane-logo.svg',
    tags: ['Next.js', 'Supabase', 'UI / UX'],
    external_links: [
      { label: "VIEW SITE", href: "https://sweetjaneiv.com/", icon: <ExternalLink className="w-4 h-4 md:w-5 md:h-5 lg:w-5 lg:h-5 xl:w-6 xl:h-6" /> },
    ],
    colors: {
      background: '#faf8f4',
      border: '#d1b88d',
      textPrimary: '#161616',
      textSecondary: '#5a4a38',
      accent: '#ff4f3e',
      mediaBackground: '#f9f4ec',
    
      tag: {
        background: '#ff4f3e22',
        text: '#b73128',
        border: '#ff4f3e70'
      },
    
      button: {
        background: '#ff4f3e',
        text: '#fff8f0',
        border: '#b7312880'
      }
    }    
  }
]
