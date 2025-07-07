import { create } from 'zustand'

type LangStore = {
  language: string
  changeLang: (lang: string) => void
}

export const useLangStore = create<LangStore>((set) => ({
  language: 'en',
  changeLang: (lang: string) => set({ language: lang }),
}))
