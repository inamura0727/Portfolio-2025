'use client'
import '../../i18n'
import { useTranslation } from 'react-i18next'

type Props = {
  lang: string
}

export default function SampleClient({ lang }: Props) {
  const { t, i18n } = useTranslation()
  console.log(i18n.language)

  if (i18n.language !== lang) {
    i18n.changeLanguage(lang)
  }

  return (
    <div>
      <p>Test fot useTranslation</p>
      <h1>{t('greeting')}</h1>
      <p>{t('sample')}</p>
    </div>
  )
}
