'use client'
import {
  Box,
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
} from '@mui/material'
import { ProjectWithParseData } from '../types/project'
import { ProjectModal } from './modal'
import ImageNotSupportedIcon from '@mui/icons-material/ImageNotSupported'
import { useLangStore } from '../utils/zustand/initial'
import React from 'react'

export const ProjectCardListComponent = ({
  ui_data,
}: {
  ui_data: ProjectWithParseData[]
}) => {
  const language = useLangStore((state) => state.language)

  return (
    <Box
      display="grid"
      gap={4}
      gridTemplateColumns="repeat(auto-fit, minmax(305px, 1fr))"
    >
      {ui_data.map((item: ProjectWithParseData) => (
        <React.Fragment key={item.id}>
          {item.user_lang === language && (
            <Card
              sx={{
                width: 330,
                height: 280,
                borderRadius: 2,
                position: 'relative',
              }}
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
                sx={{
                  pt: 0.2,
                  pl: 2,
                  position: 'absolute',
                  bottom: 4,
                  left: 0,
                }}
              >
                <ProjectModal project={item} />
              </CardActions>
            </Card>
          )}
        </React.Fragment>
      ))}
    </Box>
  )
}
