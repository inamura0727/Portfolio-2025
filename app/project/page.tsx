import { Database } from '@/database.types'
import { createClient } from '../utils/supabase/server'
import Link from 'next/link'

type Project = Database['public']['Tables']['project']['Row']

async function fetchProjects() {
  const supabase = await createClient()
  const { data, error } = await supabase.from('project').select('*')
  if (error) throw error

  return data
}

export default async function ProjectsList() {
  const projects: Project[] = await fetchProjects()
  return (
    <div>
      <p>Project Experiences</p>
      <ul>
        {projects.map((item) => (
          <li key={item.id}>
            <Link prefetch={false} href={`/project/${item.id}`}>
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
