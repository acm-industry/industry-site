export type ThemeId = 'acm' | 'gse'

type ColorScale = {
  background: string
  backgroundSecondary: string
  backgroundTertiary: string
  surface: string
  surfaceRaised: string
  border: string
  focusRing: string
  textPrimary: string
  textSecondary: string
  textMuted: string
  accentPrimary: string
  accentSecondary: string
  accentHighlight: string
  accentMuted: string
  success: string
  warning: string
  danger: string
  tagBackground: string
  tagBorder: string
  tagGlow: string
  cardShadow: string
  navBackground: string
  navScrolledBackground: string
  footerBackground: string
  gradientHero: string
  gradientCTA: string
}

type TypographyScale = {
  fontFamily: string
  headingFamily?: string
  monospaceFamily?: string
  heroWeight: number
  headingWeight: number
  bodyWeight: number
  buttonWeight: number
}

type LogoAsset = { src: string; alt: string; href?: string; external?: boolean }

type LogoManifest = {
  nav: LogoAsset
  heroMark?: LogoAsset
  footerAffiliates: LogoAsset[]
  toggleIcon: LogoAsset
}

type CopyTokens = {
  orgName: string
  shortName: string
  hero: {
    titleWhite: string
    titleAccent: string
    description: string
    ctaPrimary: string
    ctaSecondary: string
    ctaPrimaryHref: string
    ctaSecondaryHref: string
    affiliation?: string
  }
}

export type ThemeTokens = {
  id: ThemeId
  label: string
  description: string
  colors: ColorScale
  typography: TypographyScale
  logos: LogoManifest
  copy: CopyTokens
}

const sharedTypography: TypographyScale = {
  fontFamily: "var(--font-geist-sans, 'Geist', 'Inter', 'Arial', sans-serif)",
  monospaceFamily: "var(--font-geist-mono, 'Geist Mono', 'Menlo', monospace)",
  heroWeight: 800,
  headingWeight: 700,
  bodyWeight: 400,
  buttonWeight: 600,
}

export const themes: Record<ThemeId, ThemeTokens> = {
  acm: {
    id: 'acm',
    label: 'ACM Industry',
    description: 'Original ACM Industry visual identity',
    colors: {
      background: '#011013',
      backgroundSecondary: '#023E49',
      backgroundTertiary: '#022D35',
      surface: '#032B32',
      surfaceRaised: '#093740',
      border: 'rgba(255,255,255,0.08)',
      focusRing: 'rgba(255, 207, 82, 0.6)',
      textPrimary: '#E5E7EB',
      textSecondary: '#81BDC8',
      textMuted: 'rgba(255,255,255,0.6)',
      accentPrimary: '#FFCF52',
      accentSecondary: '#FEBC11',
      accentHighlight: '#047C91',
      accentMuted: 'rgba(255, 207, 82, 0.25)',
      success: '#4ADE80',
      warning: '#FACC15',
      danger: '#F87171',
      tagBackground: 'rgba(129, 189, 200, 0.15)',
      tagBorder: 'rgba(129, 189, 200, 0.3)',
      tagGlow: 'rgba(129, 189, 200, 0.15)',
      cardShadow: '0 10px 30px rgba(2, 26, 34, 0.45)',
      navBackground: 'rgba(1, 8, 10, 0.9)',
      navScrolledBackground: 'rgba(1, 8, 10, 0.95)',
      footerBackground: 'linear-gradient(180deg, rgba(1,16,19,0.95) 0%, rgba(1,16,19,0.75) 100%)',
      gradientHero: 'radial-gradient(circle at top, rgba(4,124,145,0.25), rgba(1,16,19,0.9))',
      gradientCTA: 'linear-gradient(135deg, rgba(255,207,82,0.25), rgba(4,124,145,0.15))',
    },
    typography: sharedTypography,
    logos: {
      nav: {
        src: '/club-logos/industry-nav-logo.png',
        alt: 'ACM Industry Logo',
      },
      heroMark: {
        src: '/club-logos/industry-logo.png',
        alt: 'ACM Industry Mark',
      },
      footerAffiliates: [
        {
          src: '/club-logos/industry-logo.png',
          alt: 'ACM Industry Emblem',
          href: '/',
        },
        {
          src: '/club-logos/acm-logo.png',
          alt: 'ACM UCSB Logo',
          href: 'https://ucsbacm.com',
          external: true,
        },
        {
          src: '/club-logos/gse/gse-mark.png',
          alt: 'Gaucho Software Engineers Crest',
        },
      ],
      toggleIcon: {
        src: '/club-logos/industry-icon.png',
        alt: 'ACM Industry Icon',
      },
    },
    copy: {
      orgName: 'ACM.Industry',
      shortName: 'ACM',
      hero: {
        titleWhite: 'Built at UCSB.',
        titleAccent: 'For the world.',
        description:
          'ACM.Industry connects UCSB students with real-world companies to build technical solutions, gain hands-on experience, and make a lasting impact before graduation.',
        ctaPrimary: 'Explore our services',
        ctaSecondary: 'See our projects',
        ctaPrimaryHref: '/services',
        ctaSecondaryHref: '/projects',
        affiliation: 'Powered by ACM UCSB.',
      },
    },
  },
  gse: {
    id: 'gse',
    label: 'Gaucho Software Engineers',
    description: 'GSE brand palette with deep navy, azure, and gold accents',
    colors: {
      background: '#010F12',
      backgroundSecondary: '#05202A',
      backgroundTertiary: '#082E3B',
      surface: 'rgba(10, 20, 28, 0.92)',
      surfaceRaised: 'rgba(18, 32, 42, 0.9)',
      border: 'rgba(255, 255, 255, 0.12)',
      focusRing: 'rgba(254, 188, 17, 0.55)',
      textPrimary: '#F6F6F7',
      textSecondary: '#94C4F0',
      textMuted: 'rgba(148, 196, 240, 0.65)',
      accentPrimary: '#FEBC11',
      accentSecondary: '#FFE38A',
      accentHighlight: '#3982CB',
      accentMuted: 'rgba(57, 130, 203, 0.28)',
      success: '#5EE1B7',
      warning: '#F6C543',
      danger: '#F57373',
      tagBackground: 'rgba(57, 130, 203, 0.18)',
      tagBorder: 'rgba(57, 130, 203, 0.45)',
      tagGlow: 'rgba(57, 130, 203, 0.45)',
      cardShadow: '0 18px 40px rgba(25, 16, 0, 0.45)',
      navBackground: 'rgba(6, 18, 25, 0.94)',
      navScrolledBackground: 'rgba(8, 26, 34, 0.96)',
      footerBackground: 'linear-gradient(180deg, rgba(6,18,25,0.96) 0%, rgba(10,28,38,0.78) 100%)',
      gradientHero: 'radial-gradient(circle at top, rgba(254,188,17,0.32), rgba(1,15,18,0.94))',
      gradientCTA: 'linear-gradient(135deg, rgba(254,188,17,0.32), rgba(56,130,203,0.18))',
    },
    typography: {
      ...sharedTypography,
      headingFamily: "'Poppins', var(--font-geist-sans, 'Geist', sans-serif)",
      heroWeight: 800,
    },
    logos: {
      nav: {
        src: '/club-logos/gse/gse-nav.png',
        alt: 'Gaucho Software Engineers Logo',
      },
      heroMark: {
        src: '/club-logos/gse/gse-mark.png',
        alt: 'GSE Crest',
      },
      footerAffiliates: [
        {
          src: '/club-logos/gse/gse-primary.png',
          alt: 'GSE Primary Lockup',
          href: '/',
        },
        {
          src: '/club-logos/industry-logo.png',
          alt: 'ACM Industry Emblem',
          href: '?theme=industry',
        },
        {
          src: '/club-logos/acm-logo.png',
          alt: 'ACM UCSB Logo',
          href: 'https://ucsbacm.com',
          external: true,
        },
      ],
      toggleIcon: {
        src: '/club-logos/gse/gse-mark.png',
        alt: 'GSE Crest',
      },
    },
    copy: {
      orgName: 'Gaucho Software Engineers',
      shortName: 'GSE',
      hero: {
        titleWhite: 'Built at UCSB.',
        titleAccent: 'For the world.',
        description:
          'Gaucho Software Engineers connects UCSB students with real-world companies to build technical solutions, gain hands-on experience, and make a lasting impact before graduation.',
        ctaPrimary: 'Explore our services',
        ctaSecondary: 'See our projects',
        ctaPrimaryHref: '/services',
        ctaSecondaryHref: '/projects',
        affiliation: 'Powered by ACM UCSB.',
      },
    },
  },
}

export function getThemeTokens(theme: ThemeId): ThemeTokens {
  return themes[theme]
}

export const themeIds = Object.keys(themes) as ThemeId[]
