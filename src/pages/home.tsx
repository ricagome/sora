import * as React from 'react'
import { Button, Divider, Grid, InputAdornment, ListItemButton, ListItemIcon, Stack, TextField } from '@mui/material'
import { useRouter } from 'next/router'
import Head from 'next/head'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import PlaceIcon from '@mui/icons-material/Place'
import SearchIcon from '@mui/icons-material/Search'
import CloudIcon from '@mui/icons-material/Cloud'
import LayersIcon from '@mui/icons-material/Layers';
import FlightIcon from '@mui/icons-material/Flight';
import DirectionsBusIcon from '@mui/icons-material/DirectionsBus';
import LocalTaxiIcon from '@mui/icons-material/LocalTaxi';
import LocalParkingIcon from '@mui/icons-material/LocalParking';
import HomeLayout from '../components/layout/HomeLayout'

const listItems = [
	{
		id: 'national-flights',
		label: 'Vuelos Nacionales',
		icon: <FlightIcon sx={{ color: 'green' }} />,
		href: '/flights/nationals/departures'
	},
	{
		id: 'international-flights',
		label: 'Vuelos Internacionales',
		icon: <FlightIcon sx={{ color: 'black' }} />,
		href: '/flights/internationals/departures'
	},
	{
		id: 'airport-map',
		label: 'Mapa del aeropuerto',
		icon: <PlaceIcon sx={{ color: 'orange' }} />,
		href: '/home'
	},
	{
		id: 'public-transport',
		label: 'Transporte publico',
		icon: <DirectionsBusIcon sx={{ color: 'blue' }} />,
		href: '/home'
	},
	{
		id: 'taxis',
		label: 'Taxis',
		icon: <LocalTaxiIcon sx={{ color: 'orange' }} />,
		href: '/home'
	},
	{
		id: 'parking',
		label: 'Parqueo',
		icon: <LocalParkingIcon sx={{ color: 'blue' }} />,
		href: '/home'
	},
]

export default function HomePage() {
	const { push } = useRouter()

	const handleNavigate = (href: string) => {
		push(href)
	}

	return (
		<>
			<Head>
				<title>SORA</title>
				<meta
					name='description'
					content='Acceso rapido a tus vuelos - Siempre podras ver tus datos - Administra tu experiencia y mejora tu viaje '
				/>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<HomeLayout showPlane>
				<Grid container sx={{ overflow: 'auto', bgcolor: theme => theme.palette.primary.light, px: 2, py: 1 }}>
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
				<Stack direction='row' justifyContent='space-around' sx={{ px: 2, py: 1, }} spacing={2}>
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
				<Divider />
				<Box sx={{ pb: '67px' }}>
					<List>
						{listItems.map((item, i) => (
							<>
								<ListItem disablePadding>
									<ListItemButton onClick={() => handleNavigate(item.href)}>
										<ListItemIcon>
											{item.icon}
										</ListItemIcon>
										<ListItemText primary={item.label} />
									</ListItemButton>
								</ListItem>
								{i < listItems.length - 1 && <Divider />}
							</>
						))}
					</List>
				</Box>
			</HomeLayout>
		</>
	)
}
