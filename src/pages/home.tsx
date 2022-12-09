import * as React from 'react'
import { Button, Container, Divider, Grid, InputAdornment, ListItemButton, ListItemIcon, Stack, TextField } from '@mui/material'
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
import WeatherNav from '../components/layout/WeatherNav'
import AirportSearch from '../components/layout/AirportSearch'

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
				<WeatherNav />
				<AirportSearch />
				<Divider />
				<Box sx={{ pb: '67px' }}>
					<List>
						{listItems.map((item, i) => (
							<>
								<ListItem disablePadding>
									<Container maxWidth='sm'>
										<ListItemButton onClick={() => handleNavigate(item.href)}>
											<ListItemIcon>
												{item.icon}
											</ListItemIcon>
											<ListItemText primary={item.label} />
										</ListItemButton>
									</Container>
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
