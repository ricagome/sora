import { AppBar, Container, IconButton, Stack, Toolbar, Typography } from '@mui/material'
import * as React from 'react'
import HomeIcon from '@mui/icons-material/Home'
import PlaceIcon from '@mui/icons-material/Place'
import PersonIcon from '@mui/icons-material/Person'
import { useRouter } from 'next/router'

export default function Bottombar() {
  const { pathname, push } = useRouter()

  const handleNavigate = (href: string) => {
    push(href)
  }
  return (
    <AppBar position='fixed' sx={{ top: 'auto', bottom: 0, bgcolor: 'white', color: 'gray' }}>
      <Container maxWidth='sm'>
        <Toolbar sx={{ width: '100%' }}>
          <Stack direction='row' alignItems='center' justifyContent='space-around' sx={{ width: '100%' }}>
            <IconButton onClick={() => handleNavigate('/home')} sx={{ color: theme => pathname.includes('home') ? theme.palette.common.black : 'inherit' }}>
              <Stack alignItems='center'>
                <HomeIcon sx={{ fontSize: 32 }} />
                <Typography variant='caption'>Inicio</Typography>
              </Stack>
            </IconButton>
            <IconButton onClick={() => handleNavigate('/home')} sx={{ color: theme => pathname.includes('location') ? theme.palette.common.black : 'inherit' }}>
              <Stack alignItems='center'>
                <PlaceIcon sx={{ fontSize: 32 }} />
                <Typography variant='caption'>Ubicación</Typography>
              </Stack>
            </IconButton>
            <IconButton onClick={() => handleNavigate('/home')} sx={{ color: theme => pathname.includes('profile') ? theme.palette.common.black : 'inherit' }}>
              <Stack alignItems='center'>
                <PersonIcon sx={{ fontSize: 32 }} />
                <Typography variant='caption'>Perfil</Typography>
              </Stack>
            </IconButton>
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
