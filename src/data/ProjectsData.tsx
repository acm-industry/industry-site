import { ExternalLink } from "lucide-react"

export const featuredProjectsTitleWhite = 'Featured'
export const featuredProjectsTitleGold = 'Projects'

export const featuredProjectsDescription =
  'See how our student teams build real products for real companies—creative, impactful, and industry-ready.'

export const currentQuarter = [4, 2025]

export const projects = [
  {
    id: 'finsight',
    name: 'FinSight AI Analytics',
    short_description: 'AI-driven platform for forecasting transactions, detecting anomalies, and uncovering hidden financial patterns.',
    long_description: 'An AI-powered analytics platform that detects financial anomalies, forecasts transactions, and highlights hidden correlations in uploaded data. It features two custom machine learning models: an unsupervised anomaly detection model trained on hundreds of thousands of synthetic transactions, and an XGBoost model for short-term transaction forecasting. The platform includes user authentication, dynamic visualizations, and clean data upload workflows, powered by a modern stack of Next.js, Flask, and Supabase.',
    images: ['pwc-project-1.png'],
    link: '/projects/#finsight',
    featured: true,
    quarter: [3, 2025],
    company_logo: 'pwc-logo.png',
    tags: ['Data Visualization', 'Next.js', 'Flask', 'AI / ML'],
    external_links: [
      { label: "VIEW SITE", href: "https://pwc-project.vercel.app/", icon: <ExternalLink className="w-4 h-4" /> },
    ]
  },
  {
    id: 'paskin',
    name: 'AI Property Forecasting',
    short_description: 'Machine learning models to forecast rental income and equity growth using custom real estate data pipelines in one clean dashboard.',
    long_description: 'A real estate forecasting platform that combines proprietary web scraping with a suite of predictive models to estimate rental income and long-term equity growth. For each property, we extract rich datasets from sources like Zillow, Redfin, and regional property appraisal sites to drive accurate forecasts. The platform uses a mix of models—including linear regressions, XGBoost, and custom pipelines—to deliver tailored investment insights. Built with Next.js, Flask, and Supabase, it features full authentication, historical analysis, and a clean web interface for property evaluation.',
    images: null,
    link: '/projects/#paskin',
    featured: false,
    quarter: [3, 2025],
    company_logo: 'paskin-logo.png',
    tags: ['Data Analysis', 'Next.js', 'Flask', 'AI / ML'],
    external_links: []
  },
  {
    id: 'probability-management',
    name: 'Stochastic Modeling Library',
    short_description: 'A modern Python library for generating and manipulating Stochastic Information Packets (SIPs), with LLM-powered features and a demo dashboard.',
    long_description: 'Working in the novel statistical space of Stochastic Information Packets (SIPs), we developed a modern Python library by overhauling an early prototype provided by the company. The new library integrates core functionalities from their Excel-based SIP tools, adds support for generating SIPs using LLMs like ChatGPT and Gemini, and introduces utility functions for simulation, transformation, and interpretation of probabilistic data. A lightweight Streamlit dashboard was built to demonstrate the library’s capabilities and showcase example use cases.',
    images: null,
    link: '/projects/#probability-management',
    featured: false,
    quarter: [3, 2025],
    company_logo: 'prob-manage-logo.png',
    tags: ['Python', 'LLM', 'Data Visualization'],
    external_links: []
  },
  {
    id: 'sweet-petes',
    name: 'Sweet Pete\'s Website',
    short_description: 'A fully custom bakery site with live content editing and a text-based cookie ordering system.',
    long_description: 'A fully custom website built with Next.js and Supabase for a local bakery, featuring a complete admin dashboard that allows the owner to edit all content — from text and images to entire sections of the page. The site includes a unique online ordering system where customers place cookie orders through a form that sends a real-time text message to the owner for preparation and in-store pickup. Designed with thoughtful UI/UX, deployed on Vercel, and configured with a custom domain for a professional, branded experience.',
    images: ['sweet-petes-1.png', 'sweet-petes-2.png', 'sweet-petes-3.png', 'sweet-petes-4.png', 'sweet-petes-5.png', 'sweet-petes-6.png'],
    link: '/projects/#sweet-petes',
    featured: true,
    quarter: [2, 2025],
    company_logo: 'sweet-petes-logo.png',
    tags: ['Next.js', 'Text-to-Order', 'UI / UX', 'Supabase'],
    external_links: [
      { label: "VIEW SITE", href: "https://sweetpetestreats.com/", icon: <ExternalLink className="w-4 h-4" /> },
    ]
  },
  {
    id: 'teddy-rice',
    name: 'Teddy Rice Rebrand',
    short_description: 'A full visual rebrand and site overhaul for a local restaurant, powered by Square and optimized for online ordering.',
    long_description: 'A Square-based website overhaul for a well-known Isla Vista restaurant, focused on visual polish, user flow, and local engagement. We customized their Square theme, captured new photography for the menu, and optimized page layouts to align with the brand’s refreshed identity. The site includes full support for online and location-based ordering, pickup scheduling, and a custom domain for a seamless customer experience. While built on Square’s infrastructure, the project involved extensive design iteration and content work to elevate the site beyond the platform’s defaults.',
    images: ['teddy-rice.png'],
    link: '/projects/#teddy-rice',
    featured: true,
    quarter: [2, 2025],
    company_logo: 'teddy-rice-logo.png',
    tags: ['Square', 'UI / UX'],
    external_links: [
      { label: "VIEW SITE", href: "https://teddyriceusa.com/", icon: <ExternalLink className="w-4 h-4" /> },
    ]
  },
  {
    id: 'iv-drip',
    name: 'IV Drip Website',
    short_description: 'A custom site for a local coffee and dessert bar with a live menu editor and storefront gallery.',
    long_description: 'A fully custom Next.js and Supabase site built for IV Drip, designed to let the owner manage and publish their store content in real time. The site features a full admin dashboard for updating menus, images, and descriptions, along with a public-facing gallery to showcase and promote branded merchandise. While it doesn’t support online ordering, it provides a curated digital storefront experience. Content is cached with a 1-hour eviction policy for smooth performance, and the site is hosted on Vercel with a custom domain.',
    images: ['iv-drip.png'],
    link: '/projects/#iv-drip',
    featured: true,
    quarter: [2, 2025],
    company_logo: 'iv-drip-logo.png',
    tags: ['Next.js', 'Supabase', 'UI / UX'],
    external_links: [
      { label: "VIEW SITE", href: "https://iv-drip.vercel.app/", icon: <ExternalLink className="w-4 h-4" /> },
    ]
  },
  {
    id: 'sams-to-go',
    name: 'Sam\'s To Go Website',
    short_description: 'A lightweight, custom-designed Webflow site to showcase menu offerings and promote catering services.',
    long_description: 'A custom Webflow site built for a local sandwich shop to highlight its menu, catering options, and contact information. Designed to be fast, mobile-friendly, and easy to navigate, the site supports custom orders and browsing via a clear, modern layout. Hosted on GitHub with a custom domain, it serves as a straightforward but professional online presence for the business.',
    images: ['sams-to-go.png'],
    link: '/projects/#sams-to-go',
    featured: true,
    quarter: [2, 2025],
    company_logo: 'sams-to-go-logo.png',
    tags: ['Webflow', 'Static Site', 'UI / UX'],
    external_links: [
      { label: "VIEW SITE", href: "https://samstogoislavista.com/", icon: <ExternalLink className="w-4 h-4" /> },
    ]
  },
  {
    id: 'palm-coast',
    name: 'Palm Coast Living Website',
    short_description: 'A custom real estate site with live property management and application link integration.',
    long_description: 'A fully custom website built with Next.js and Supabase for a local real estate company, featuring a complete admin dashboard for managing listings, uploading property images, and editing all on-page content. Each property links directly to its current application portal, providing a seamless experience for prospective tenants. The site uses real-time data from Supabase, with caching and a polished UI/UX design, and is deployed on Vercel with a custom domain.',
    images: ['palm-coast-living-1.png', 'palm-coast-living-2.png', 'palm-coast-living-3.mov', 'palm-coast-living-4.png'],
    link: '/projects/#palm-coast',
    featured: false,
    quarter: [2, 2025],
    company_logo: 'palm-coast-living-logo.png',
    tags: ['Next.js', 'Supabase', 'UI / UX'],
    external_links: [
      { label: "VIEW SITE", href: "https://property-management-five.vercel.app/", icon: <ExternalLink className="w-4 h-4" /> },
    ]
  },
  {
    id: 'sweet-jane',
    name: 'Sweet Jane Website',
    short_description: 'A custom product gallery for a local boutique with full admin editing and optional e-commerce support.',
    long_description: 'A fully custom website built with Next.js and Supabase for a boutique retail shop in Isla Vista. Designed around a clean, gallery-style layout, the site showcases products and collections while allowing the owner to manage all content—including images, text, and page structure—via an integrated admin dashboard. The site includes optional online purchase capabilities, ready to be enabled when the owner is ready to support transactions. Real-time data updates and a 1-hour cache policy keep performance smooth, with the site deployed on Vercel under a custom domain.',
    images: ['sweet-jane-1.png', 'sweet-jane-2.png'],
    link: '/projects/#sweet-jane',
    featured: false,
    quarter: [2, 2025],
    company_logo: 'sweet-jane-logo.png',
    tags: ['Next.js', 'Supabase', 'UI / UX'],
    external_links: [
      { label: "VIEW SITE", href: "https://sweetjaneiv.com/", icon: <ExternalLink className="w-4 h-4" /> },
    ]
  }
]
