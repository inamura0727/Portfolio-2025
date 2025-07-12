import { notFound } from 'next/navigation'
import { createClient } from '../../utils/supabase/server'
import * as React from 'react'
import { Project, PropjectPageProps } from '@/app/types/project'

async function fetchProject(projectId: string) {
  const supabase = await createClient()
  const { data: project, error } = await supabase
    .from('project')
    .select('*')
    .eq('id', projectId)
  if (error) return notFound()

  return project[0]
}

export default async function ProjectDetailPage({ params }: PropjectPageProps) {
  const project: Project = await fetchProject(params.projectId)

  const user_lang = project.user_lang as string

  return (
    <div>
      <div>
        <div>
          <p></p>
        </div>
        <p>{project.start_date}</p>
        <p>{project.role}</p>
        <p>{project.total_members}</p>
        <p>{project.duration}</p>
        <p>{project.tasks}</p>
        <p>{project.language}</p>
        <p>{project.freamwork}</p>
        <p>{project.libraries}</p>
        <p>{project.tools}</p>
        <ul>
          {project.overview?.map((item) => (
            <li>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}
