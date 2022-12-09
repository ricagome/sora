import { AppBar, Box, Button, Container, CssBaseline, InputAdornment, Stack, TextField, Toolbar, ToolbarProps, Typography } from '@mui/material'
import Image from 'next/image'
import * as React from 'react'
import Navbar from './Navbar'
import SearchIcon from '@mui/icons-material/Search'
import { styled } from '@mui/material/styles'
import { RFC } from '../../types'
import Bottombar from './Bottombar'
import FlightLandIcon from '@mui/icons-material/FlightLand';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import { useRouter } from 'next/router'

interface StyledToolbarProps extends ToolbarProps {
  theheight: number
}

const StyledToolbar = styled(Toolbar)<StyledToolbarProps>(({ theme, theheight }) => ({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  '@media all': {
    minHeight: theheight,
  },
}))

interface Props extends RFC {
  showPlane?: boolean
}

export default function HomeLayout(props: Props) {
  const { pathname, push } = useRouter()
  const { showPlane, children } = props

  const handleFlightsNavigate = (href: string) => {
    const link = `/flights/${pathname.split('/').slice()[2]}/${href}`
    push(link)
  }
  
  return (
    <>
      <CssBaseline />
      <AppBar position='fixed' sx={{ top: 0 }}>
        <Container maxWidth='sm'>
          <Navbar />
          <Stack sx={{ py: 2, pt: 0 }} spacing={1}>
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
          {!!showPlane && (
            <Stack alignItems='center' sx={{ pb: 0.5 }}>
              <Box sx={{ position: 'relative', width: 360, height: 85 }}>
                <Image
                  src='/assets/plane.png'
                  fill
                  alt='plane'
                  style={{ position: 'absolute', objectPosition: 'center', objectFit: 'cover' }}
                />
              </Box>
            </Stack>
          )}
          {pathname.includes('flights') && (
            <Stack direction='row' justifyContent='space-evenly'>
              <Button startIcon={<FlightTakeoffIcon />} color='success' onClick={() => handleFlightsNavigate('departures')}>
                Salidas
              </Button>
              <Button startIcon={<FlightTakeoffIcon />} color='error' onClick={() => handleFlightsNavigate('arrivals')}>
                Llegadas
              </Button>
            </Stack>)
          }
        </Container>
      </AppBar>
      <StyledToolbar theheight={showPlane ? 213 : 118} />
      {children}
      <Bottombar />
    </>
  )
}
