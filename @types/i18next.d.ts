// /@types/i18next.d.ts
// import the original type declarations
import 'i18next'
// import all namespaces (for the default language, only)
import enCommon from './public/locales/en/common.json'
import jaCommon from './public/locales/ja/common.json'

declare module 'i18next' {
  // Extend CustomTypeOptions
  interface CustomTypeOptions {
    // custom namespace type, if you changed it
    defaultNS: 'ja'
    // custom resources type
    resources: {
      ja: typeof jaCommon
      en: typeof enCommon
    }
  }
}
