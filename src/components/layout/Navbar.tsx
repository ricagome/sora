import { Badge, IconButton, Stack, Typography } from '@mui/material'
import HelpIcon from '@mui/icons-material/Help'
import NotificationsIcon from '@mui/icons-material/Notifications'
import * as React from 'react'
import { useRouter } from 'next/router'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'

export default function Navbar() {
  const { push, pathname, back } = useRouter()

  const handleNavigate = (href: string) => {
    push(href)
  }

  return (
    <Stack direction='row' alignItems='center' justifyContent='space-between' sx={{ width: '100%' }}>
      {pathname.includes('flights')
        ? (
          <IconButton color='inherit' onClick={() => back()}>
            <ArrowBackIosIcon />
          </IconButton>
        ) : (
          <IconButton color='inherit' onClick={() => handleNavigate('/support')}>
            <HelpIcon />
          </IconButton>
        )
      }
      <Typography>Inicio</Typography>
      <IconButton color='inherit' onClick={() => handleNavigate('/notifications')}>
        <Badge
          color='error'
          overlap='circular'
          badgeContent=' '
          variant='dot'
          anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        >
          <NotificationsIcon />
        </Badge>
      </IconButton>
    </Stack>
  )
}
