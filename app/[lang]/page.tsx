import SampleClient from '../components/sample'

export default function HomePage() {
  const lang = 'en'

  return (
    <main>
      <SampleClient lang={lang} />
    </main>
  )
}
