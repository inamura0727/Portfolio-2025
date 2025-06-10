import Link from 'next/link'
import { notFound } from 'next/navigation'
import type { Database } from '../../../database.types'
import { createClient } from '../../utils/supabase/server'

type PageProps = {
  params: {
    projectId: string
  }
}

type Project = Database['public']['Tables']['project']['Row']

async function fetchProject(projectId: string) {
  const supabase = await createClient()
  const { data: project, error } = await supabase
    .from('project')
    .select('*')
    .eq('id', projectId)
  if (error) return notFound()

  return project[0]
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const project: Project = await fetchProject(params.projectId)

  return (
    <div>
      <p>{project.title}</p>
    </div>
  )
}
