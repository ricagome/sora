import { Grid, List, ListItem, ListItemButton, ListItemText, Typography } from '@mui/material'
import React from 'react'
import HomeLayout from '../../../components/layout/HomeLayout'
import { flights } from '../../../example/flights'


const ItemType = new Map([
  ['inroom', { bgcolor: '#D3F7C1', textColor: 'black', titleColor: 'orange', label: 'En sala' }],
  ['canceled', { bgcolor: '#F37163', textColor: 'white', titleColor: 'orange', label: 'Cancelado' }],
  ['boarding', { bgcolor: '#FFDC8E', textColor: 'black', titleColor: 'orange', label: 'Abordando' }],
  ['delayed', { bgcolor: '#FAAE72', textColor: 'black', titleColor: 'orange', label: 'Retrasado' }],
])

export default function DeparturesPage() {
  return (
    <HomeLayout>
      <List>
        {flights.map(flight => (
          <ListItem key={flight.id} sx={{ bgcolor: ItemType.get(flight.status)?.bgcolor, color: ItemType.get(flight.status)?.textColor }}>
            <ListItemButton>
              <Grid container>
                <Grid item sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }} xs={3}>
                  <Typography>{new Date(flight.hour).getHours() + ':' + new Date(flight.hour).getMinutes()}</Typography>
                </Grid>
                <Grid item sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', }} xs={6}>
                  <Typography>Miami (MIA)</Typography>
                  <Typography>Lufthansa Airlines</Typography>
                  <Typography>UA2058</Typography>
                </Grid>
                <Grid item sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'end' }} xs={3}>
                  <Typography>{ItemType.get(flight.status)?.label}</Typography>
                </Grid>
              </Grid>
              {/* <ListItemText primary='Flight' secondary='Subtitle' primaryTypographyProps={{ fontWeight: 600 }}>
            </ListItemText> */}
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </HomeLayout>
  )
}
