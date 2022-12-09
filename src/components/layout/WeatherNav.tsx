import { Box, Container, Grid, Typography } from '@mui/material'
import CloudIcon from '@mui/icons-material/Cloud'
import * as React from 'react'

export default function WeatherNav() {
  return (
    <Box sx={{ bgcolor: theme => theme.palette.primary.light, }}>
      <Container maxWidth='sm'>
        <Grid container sx={{ overflow: 'auto', py: 1 }}>
          <Grid item xs={5} color='white'>
            <Typography variant='h6' fontSize={12} fontWeight={600}>Clima</Typography>
            <Typography variant='subtitle1' fontSize={12} >Bucaramanga</Typography>
          </Grid>
          <Grid item xs={3} sx={{ display: 'flex', gap: 1 }} justifyContent='center' alignItems='center' color='orange'>
            <CloudIcon />
            <Typography>9 C</Typography>
          </Grid>
          <Grid item xs={4} color='white'>
            <Typography align='right' variant='h6' fontSize={12} fontWeight={600}>Estado</Typography>
            <Typography align='right' variant='subtitle1' fontSize={12} >Abierto</Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}
