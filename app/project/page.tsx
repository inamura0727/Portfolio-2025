import { createClient } from '../utils/supabase/server'
import * as React from 'react'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import { ProjectModal } from '../components/modal'
import ImageNotSupportedIcon from '@mui/icons-material/ImageNotSupported'
import { Project, ProjectWithParseData } from '../types/project'

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
    if (item.description) {
      item.description?.forEach((descStr) => {
        const parsed = JSON.parse(descStr)
        const key = Object.keys(parsed)[0]
        const data = parsed[key]
        if (key === 'front') {
          front.push(...data)
        } else if (key === 'server') {
          server.push(...data)
        }
      })
    }
    ui_data.push({
      ...item,
      front,
      server,
    })
  })

  return (
    <Box>
      <Box>
        <Typography sx={{ fontSize: '80px', fontWeight: 'bold' }}>
          Project Experiences
        </Typography>
      </Box>
      <Box
        display="grid"
        gap={4}
        gridTemplateColumns="repeat(auto-fit, minmax(305px, 1fr))"
      >
        {ui_data.map((item: ProjectWithParseData) => (
          <Card
            sx={{
              width: 330,
              height: 280,
              borderRadius: 2,
              position: 'relative',
            }}
            key={item.id}
          >
            {item.pic_url ? (
              <CardMedia
                component="img"
                sx={{
                  objectFit: 'cover',
                  width: '100%',
                  height: '120px',
                }}
                image={item.pic_url}
                alt="Project Image"
              />
            ) : (
              <Box
                sx={{
                  width: '100%',
                  height: '120px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: '#f0f0f0',
                }}
              >
                <ImageNotSupportedIcon fontSize="large" />
              </Box>
            )}

            <CardContent sx={{ padding: 1.5 }}>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                sx={{
                  display: '-webkit-box',
                  overflow: 'hidden',
                  WebkitBoxOrient: 'vertical',
                  WebkitLineClamp: 2,
                }}
              >
                {item.title}
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: 'text.secondary',
                  display: '-webkit-box',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  WebkitBoxOrient: 'vertical',
                  WebkitLineClamp: 2,
                  paddingBottom: '5px',
                }}
              >
                {item.language}
              </Typography>
            </CardContent>
            <CardActions
              aria-label="close"
              sx={{ pt: 0.2, pl: 2, position: 'absolute', bottom: 4, left: 0 }}
            >
              <ProjectModal project={item} />
            </CardActions>
          </Card>
        ))}
      </Box>
    </Box>
  )
}
