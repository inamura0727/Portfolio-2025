'use client'
import { AppBar, Toolbar, Typography, Box, Button } from '@mui/material'
import Link from 'next/link'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import styles from '../css/navBar.module.css'
import { useLangStore } from '../utils/zustand/initial'

declare module '@mui/material/styles' {
  interface Palette {
    ochre: Palette['primary']
  }

  interface PaletteOptions {
    ochre?: PaletteOptions['primary']
  }
}

declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    ochre: true
  }
}

const theme = createTheme({
  palette: {
    ochre: {
      main: '#2e2e2e',
    },
  },
})

export const NavBar = () => {
  const language = useLangStore((state) => state.language)
  const changeLang = useLangStore((state) => state.changeLang)

  return (
    <header style={{ position: 'fixed', width: '100%', zIndex: 5 }}>
      <ThemeProvider theme={theme}>
        <AppBar position="static" sx={{ bgcolor: 'ochre.main' }}>
          <Toolbar>
            <Box sx={{ display: 'flex', gap: 2 }}>
              <Button color="inherit">
                <Link href="/" className={styles.link}>
                  Home
                </Link>
              </Button>
              <Button color="inherit">
                <Link href="/profile" className={styles.link}>
                  profile
                </Link>
              </Button>
              <Button color="inherit">
                <Link href="/project" className={styles.link}>
                  Projects
                </Link>
              </Button>
              {language === 'en' ? (
                <Button color="inherit" onClick={() => changeLang('ja')}>
                  <Typography
                    sx={{
                      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
                    }}
                  >
                    日本語
                  </Typography>
                </Button>
              ) : (
                <Button color="inherit" onClick={() => changeLang('en')}>
                  <Typography
                    sx={{
                      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
                    }}
                  >
                    En
                  </Typography>
                </Button>
              )}
            </Box>
          </Toolbar>
        </AppBar>
      </ThemeProvider>
    </header>
  )
}
