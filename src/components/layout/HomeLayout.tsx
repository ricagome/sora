import { AppBar, Box, CssBaseline, InputAdornment, Stack, TextField, Toolbar, ToolbarProps, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import Navbar from './Navbar'
import SearchIcon from '@mui/icons-material/Search'
import { styled } from '@mui/material/styles'
import { RFC } from '../../types'
import Bottombar from './Bottombar'

interface StyledToolbarProps extends ToolbarProps {
  theHeight: number
}

const StyledToolbar = styled(Toolbar)<StyledToolbarProps>(({ theme, theHeight }) => ({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  '@media all': {
    minHeight: theHeight,
  },
}))

interface Props extends RFC {
  showPlane?: boolean
}

export default function HomeLayout(props: Props) {
  const { showPlane, children } = props
  return (
    <>
      <CssBaseline />
      <AppBar position='fixed' sx={{ top: 0 }}>
        <Navbar />
        <Stack sx={{ p: 2, pt: 0 }} spacing={1}>
          <Typography variant='body2'>Encuentra tu vuelo</Typography>
          <TextField
            variant='outlined'
            name='search'
            placeholder='Numero de vuelo o aeropuerto'
            size='small'
            sx={{
              '& .MuiInputBase-root': {
                overflow: 'hidden',
                borderRadius: 1,
                backgroundColor: theme => (theme.palette.mode === 'light' ? '#fcfcfb' : '#2b2b2b'),
              },
            }}
            InputProps={{
              endAdornment: (
                <InputAdornment position='end'>
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
        </Stack>
        {!!showPlane && <Stack alignItems='center' sx={{ pb: 0.5 }}>
          <Box sx={{ position: 'relative', width: 360, height: 85 }}>
            <Image
              src='/assets/plane.png'
              fill
              alt='plane'
              style={{ position: 'absolute', objectPosition: 'center', objectFit: 'cover' }}
            />
          </Box>
        </Stack>}
      </AppBar>
      <StyledToolbar theHeight={showPlane ? 213 : 130} />
      {children}
      <Bottombar />
    </>
  )
}
