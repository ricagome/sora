import * as React from 'react'
import { Badge, Button, Container, Divider, InputAdornment, Link, Stack, TextField } from '@mui/material'
import { useRouter } from 'next/router'
import Head from 'next/head'
import Image from 'next/image'
import { styled } from '@mui/material/styles'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import CssBaseline from '@mui/material/CssBaseline'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import Paper from '@mui/material/Paper'
import Fab from '@mui/material/Fab'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import ListItemText from '@mui/material/ListItemText'
import ListSubheader from '@mui/material/ListSubheader'
import Avatar from '@mui/material/Avatar'
import MenuIcon from '@mui/icons-material/Menu'
import AddIcon from '@mui/icons-material/Add'
import MoreIcon from '@mui/icons-material/MoreVert'
import HomeIcon from '@mui/icons-material/Home'
import PlaceIcon from '@mui/icons-material/Place'
import PersonIcon from '@mui/icons-material/Person'
import HelpIcon from '@mui/icons-material/Help'
import NotificationsIcon from '@mui/icons-material/Notifications'
import SearchIcon from '@mui/icons-material/Search'

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
	width: '100%',
	display: 'flex',
	flexDirection: 'column',
	'@media all': {
		minHeight: 375,
	},
}))

export default function HomePage() {
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

			<CssBaseline />
			<AppBar position='fixed' sx={{ top: 0 }}>
				<Stack direction='row' alignItems='center' justifyContent='space-between' sx={{ width: '100%' }}>
					<IconButton color='inherit'>
						<HelpIcon />
					</IconButton>
					<Typography>Inicio</Typography>
					<IconButton color='inherit'>
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
							// startAdornment: (
							// 	<InputAdornment position='start'>
							// 		<PersonIcon />
							// 	</InputAdornment>
							// ),
							endAdornment: (
								<InputAdornment position='end'>
									<SearchIcon color='success' />
								</InputAdornment>
							),
						}}
					/>
				</Stack>
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
			</AppBar>
			<StyledToolbar></StyledToolbar>
			<Box sx={{ height: 1200, overflow: 'auto' }}>
				<Typography>Example title</Typography>
			</Box>
			{/* <Paper square sx={{ pb: '50px' }}>
				<Typography variant='h5' gutterBottom component='div' sx={{ p: 2, pb: 0 }}>
					Inbox
				</Typography>
			</Paper> */}
			<AppBar position='fixed' sx={{ top: 'auto', bottom: 0, bgcolor: 'white', color: 'gray' }}>
				<Toolbar sx={{ width: '100%' }}>
					<Stack direction='row' alignItems='center' justifyContent='space-around' sx={{ width: '100%' }}>
						<IconButton color='primary'>
							<Stack alignItems='center'>
								<HomeIcon sx={{ fontSize: 32 }} />
								<Typography variant='caption'>Inicio</Typography>
							</Stack>
						</IconButton>
						<IconButton color='inherit'>
							<Stack alignItems='center'>
								<PlaceIcon sx={{ fontSize: 32 }} />
								<Typography variant='caption'>Ubicación</Typography>
							</Stack>
						</IconButton>
						<IconButton color='inherit'>
							<Stack alignItems='center'>
								<PersonIcon sx={{ fontSize: 32 }} />
								<Typography variant='caption'>Perfil</Typography>
							</Stack>
						</IconButton>
					</Stack>
				</Toolbar>
			</AppBar>
		</>
	)
}
