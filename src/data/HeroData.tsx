import { themes, themeIds, type ThemeId, type ThemeTokens } from '@/theme/tokens'

export type HeroCopy = ThemeTokens['copy']['hero']

export const heroContent: Record<ThemeId, HeroCopy> = themeIds.reduce((acc, id) => {
  acc[id] = themes[id].copy.hero
  return acc
}, {} as Record<ThemeId, HeroCopy>)

export const techTags = [
  'UI/UX',
  'Databases',
  'Machine Learning',
  'DevOps',
  'Web Development',
  'AR/VR',
  'Cloud',
  'Systems',
  'AI',
]
