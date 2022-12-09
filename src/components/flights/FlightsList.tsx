import { Container, Grid, List, ListItem, ListItemButton, Typography } from '@mui/material'
import * as React from 'react'
import { Flight } from '../../types/flight'
import { FLIGHT_ITEM_TYPE } from '../../utils/flights'

interface Props {
  flights: Flight[]
}

export default function FlightsList(props: Props) {
  return (
    <List sx={{ pt: 5, pb: 8 }}>
      {!!props.flights.length && props.flights.map((flight, i) => (
        <ListItem key={flight.id} sx={{ bgcolor: FLIGHT_ITEM_TYPE.get(flight.status)?.bgcolor, color: FLIGHT_ITEM_TYPE.get(flight.status)?.textColor }}>
          <ListItemButton>
            <Container maxWidth='sm'>
              <Grid container >
                <Grid item sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }} xs={3}>
                  <Typography>{new Date(flight.hour).getHours().toString().padStart(2, '0') + ':' + new Date(flight.hour).getMinutes().toString().padStart(2, '0')}</Typography>
                </Grid>
                <Grid item sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', }} xs={6}>
                  <Typography>{flight.destiny}</Typography>
                  <Typography>{flight.airport}</Typography>
                  <Typography>{flight.flightCode}</Typography>
                </Grid>
                <Grid item sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'end' }} xs={3}>
                  <Typography>{FLIGHT_ITEM_TYPE.get(flight.status)?.label}</Typography>
                </Grid>
              </Grid>
            </Container>
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  )
}
