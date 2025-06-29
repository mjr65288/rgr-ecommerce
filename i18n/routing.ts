import { i18n } from '../i18n-config'

export const routing = {
  locales: i18n.locales.map((locale) => locale.code),
  defaultLocale: 'en-US',
  localePrefix: 'as-needed' as const,
  // Add pathnames if needed
}