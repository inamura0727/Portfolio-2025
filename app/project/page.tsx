import { createClient } from '../utils/supabase/server'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import { Project, ProjectWithParseData } from '../types/project'
import { ProjectCardListComponent } from '../components/projectCardList'

async function fetchProjects() {
  const supabase = await createClient()
  const { data, error } = await supabase.from('project').select('*')
  if (error) throw error

  return data
}

export default async function ProjectsList() {
  const projects: Project[] = await fetchProjects()
  const ui_data: ProjectWithParseData[] = []

  projects.forEach((item) => {
    const front: string[] = []
    const server: string[] = []
    const achievement: string[] = []
    if (item.description) {
      item.description?.forEach((descStr) => {
        const parsed = JSON.parse(descStr)
        const key = Object.keys(parsed)[0]
        const data = parsed[key]
        if (key === 'front') {
          front.push(...data)
        } else if (key === 'server') {
          server.push(...data)
        } else if (key === 'achievement') {
          achievement.push(...data)
        }
      })
    }
    ui_data.push({
      ...item,
      front,
      server,
      achievement,
    })
  })

  return (
    <Box>
      <Box>
        <Typography sx={{ fontSize: '80px', fontWeight: 'bold' }}>
          Project Experiences
        </Typography>
      </Box>
      <ProjectCardListComponent ui_data={ui_data} />
    </Box>
  )
}
