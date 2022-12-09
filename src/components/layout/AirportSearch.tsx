import { Box, Button, Container, InputAdornment, Stack, TextField } from '@mui/material'
import * as React from 'react'
import LayersIcon from '@mui/icons-material/Layers';
import SearchIcon from '@mui/icons-material/Search'

export default function AirportSearch() {
  return (
    <Box>
      <Container maxWidth='sm'>
        <Stack direction='row' justifyContent='space-between' sx={{ py: 1, }} spacing={2}>
          <TextField
            variant='outlined'
            name='search'
            placeholder='Buscar en el aeropuerto'
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
          <Button variant='contained' sx={{ bgcolor: theme => theme.palette.grey[500] }}>
            <LayersIcon />
          </Button>
        </Stack>
      </Container>
    </Box>
  )
}
