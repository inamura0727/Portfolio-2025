import style from '../css/project.module.css'
export default function ProjectLayout({
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
