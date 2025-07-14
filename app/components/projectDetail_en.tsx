'use client'
import { IconButton, Typography, Stack } from '@mui/material'
import { useTranslation } from 'react-i18next'
import Box from '@mui/material/Box'
import HighlightOffIcon from '@mui/icons-material/HighlightOff'
import { ProjectDetailProps } from '../types/project'
import { forwardRef, useEffect } from 'react'

export const ProjectDetailEn = forwardRef<HTMLDivElement, ProjectDetailProps>(
  (detailData, ref) => {
    const { project, setIsOpen } = detailData
    const { t, i18n } = useTranslation()
    useEffect(() => {
      i18n.changeLanguage('en')
    }, [])

    return (
      <Box
        ref={ref}
        sx={{
          backgroundColor: 'white',
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '65rem',
          height: '35rem',
          padding: '2rem',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          zIndex: 20,
          borderRadius: '15px',
          overflow: 'hidden',
        }}
      >
        <Box
          sx={{
            overflowY: 'auto',
            height: '100%',
            width: '100%',
          }}
        >
          <Box>
            <IconButton
              onClick={() => setIsOpen(false)}
              aria-label="close"
              sx={{
                position: 'absolute',
                top: 8,
                right: 8,
              }}
            >
              <HighlightOffIcon />
            </IconButton>
          </Box>
          <Typography sx={{ fontSize: '24px', fontWeight: 'bold' }}>
            {project.title}
          </Typography>
          <Box>
            <Stack
              direction={'row'}
              spacing={2}
              sx={{
                borderBottom: '1.5px solid',
                padding: 1,
              }}
            >
              <Box sx={{ width: '35rem' }}>
                <Stack
                  direction="row"
                  spacing={2}
                  sx={{
                    borderBottom: '1.5px solid',
                    padding: 0.5,
                  }}
                >
                  <Box sx={{ flex: 1 }}>
                    <Stack direction="row" spacing={1}>
                      <Typography sx={{ flexGrow: 1 }}>
                        {t('duration')}
                      </Typography>
                      <Typography>{project.duration}</Typography>
                    </Stack>
                  </Box>
                  <Box sx={{ flex: 1 }}>
                    <Stack direction="row" spacing={1}>
                      <Typography sx={{ flexGrow: 1 }}>{t('role')}</Typography>
                      <Typography>{project.role}</Typography>
                    </Stack>
                  </Box>
                </Stack>
                <Stack
                  direction="row"
                  spacing={2}
                  sx={{
                    borderBottom: '1.5px solid',
                    padding: 0.5,
                  }}
                >
                  <Typography sx={{ width: '10rem' }}>
                    {t('total_members')}
                  </Typography>
                  <Typography sx={{ width: '30rem' }}>
                    {project.total_members}
                  </Typography>
                </Stack>
                <Stack
                  direction="row"
                  spacing={2}
                  sx={{
                    borderBottom: '1.5px solid',
                    padding: 0.5,
                  }}
                >
                  <Typography sx={{ width: '10rem' }}>
                    {t('language')}
                  </Typography>
                  <Typography sx={{ width: '30rem' }}>
                    {project.language}
                  </Typography>
                </Stack>
                <Stack
                  direction="row"
                  spacing={2}
                  sx={{
                    borderBottom: '1.5px solid',
                    padding: 0.5,
                  }}
                >
                  <Typography sx={{ width: '10rem' }}>
                    {t('freamwork')}
                  </Typography>
                  <Typography sx={{ width: '30rem' }}>
                    {project.freamwork}
                  </Typography>
                </Stack>
                <Stack
                  direction="row"
                  spacing={2}
                  sx={{
                    borderBottom: '1.5px solid',
                    padding: 0.5,
                  }}
                >
                  <Typography sx={{ width: '10rem' }}>
                    {t('libraries')}
                  </Typography>
                  <Typography sx={{ width: '30rem' }}>
                    {project.libraries}
                  </Typography>
                </Stack>
                <Stack
                  direction="row"
                  spacing={2}
                  sx={{
                    padding: 0.5,
                  }}
                >
                  <Typography sx={{ width: '10rem' }}>{t('tools')}</Typography>
                  <Typography sx={{ width: '30rem' }}>
                    {project.tools}
                  </Typography>
                </Stack>
              </Box>
              <Box sx={{ width: '25rem' }}>
                {project.pic_url && (
                  <Box
                    component="img"
                    src={project.pic_url}
                    alt="Sample Image"
                    sx={{ width: '100%', height: 'auto', borderRadius: 2 }}
                  />
                )}
              </Box>
            </Stack>
            <Stack>
              <Stack
                direction="row"
                spacing={2}
                sx={{
                  borderBottom: '1px solid',
                  padding: 0.5,
                }}
              >
                <Box sx={{ width: '15rem' }}>
                  <Typography>{t('overview')}</Typography>
                </Box>
                <Box sx={{ width: '40rem' }}>
                  {project.overview?.map((item, i) => (
                    <Typography key={i}>{item}</Typography>
                  ))}
                </Box>
              </Stack>
            </Stack>
            {project.achievement.length > 0 && (
              <Stack
                sx={{
                  borderBottom: '1px solid',
                  padding: 0.5,
                }}
                key={project.id}
              >
                <Stack
                  direction="row"
                  spacing={2}
                  sx={{
                    padding: 0.5,
                  }}
                >
                  <Box sx={{ width: '15rem' }}>
                    <Typography>{t('achievement')}</Typography>
                  </Box>
                  <Box sx={{ width: '40rem' }}>
                    <ul>
                      {project.achievement.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </Box>
                </Stack>
              </Stack>
            )}
          </Box>
        </Box>
      </Box>
    )
  }
)
