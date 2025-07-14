import style from '../css/project.module.css'
export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <section className={style.section}>
      <main className={style.main}>{children}</main>
    </section>
  )
}
