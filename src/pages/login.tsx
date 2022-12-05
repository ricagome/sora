import * as React from 'react'
import {
	Box,
	Button,
	Container,
	Divider,
	IconButton,
	InputAdornment,
	Link,
	Stack,
	TextField,
	Typography,
} from '@mui/material'
import { useRouter } from 'next/router'
import Head from 'next/head'
import Image from 'next/image'
import PersonIcon from '@mui/icons-material/Person'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import VisibilityIcon from '@mui/icons-material/Visibility'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'
import KeyIcon from '@mui/icons-material/Key'
import GoogleIcon from '@mui/icons-material/Google'
import AppleIcon from '@mui/icons-material/Apple'
import RouterLink from 'next/link'

export default function LoginPage() {
	const { push } = useRouter()

	const handleLoginWithProvider = () => {
		push('/home')
	}

	const handleLogin = (event: React.SyntheticEvent<HTMLFormElement>) => {
		event.preventDefault()
		push('/home')
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
			<Box sx={{ bgcolor: '#003398', minHeight: '100vh', color: 'white', textAlign: 'center' }}>
				<Box sx={{ height: '30vh', bgcolor: '#2e8dfb' }}>
					<Image src='' alt='' />
				</Box>
				<Container maxWidth='xs'>
					<Stack spacing={2} sx={{ p: 2 }} onSubmit={handleLogin} component='form'>
						<Typography variant='h6' fontWeight={600}>
							Bienvenidos
						</Typography>
						<TextField
							variant='outlined'
							name='email'
							placeholder='Email'
							size='small'
							sx={{
								'& .MuiInputBase-root': {
									overflow: 'hidden',
									borderRadius: 1,
									backgroundColor: theme => (theme.palette.mode === 'light' ? '#fcfcfb' : '#2b2b2b'),
								},
							}}
							InputProps={{
								startAdornment: (
									<InputAdornment position='start'>
										<PersonIcon />
									</InputAdornment>
								),
								endAdornment: (
									<InputAdornment position='end'>
										<CheckCircleIcon color='success' />
									</InputAdornment>
								),
							}}
						/>
						<TextField
							variant='outlined'
							type='password'
							name='password'
							placeholder='Password'
							size='small'
							sx={{
								'& .MuiInputBase-root': {
									overflow: 'hidden',
									borderRadius: 1,
									backgroundColor: theme => (theme.palette.mode === 'light' ? '#fcfcfb' : '#2b2b2b'),
								},
							}}
							InputProps={{
								startAdornment: (
									<InputAdornment position='start'>
										<KeyIcon />
									</InputAdornment>
								),
								endAdornment: (
									<InputAdornment position='end'>
										<IconButton sx={{ p: 0 }}>
											<VisibilityIcon />
										</IconButton>
									</InputAdornment>
								),
							}}
						/>
						<Link
							sx={{
								textDecoration: 'none',
								color: 'white',
								textAlign: 'end',
								textDecorationColor: 'white',
								'&:hover': { textDecoration: 'underline' },
							}}
							component={RouterLink}
							href='/home'
						>
							Olvido su contraseña
						</Link>
						<Button type='submit' variant='contained' color='warning' sx={{ '&:hover': { color: 'white' } }}>
							Ingresar
						</Button>
					</Stack>
					<Stack spacing={2} sx={{ p: 2 }}>
						<Button
							onClick={handleLoginWithProvider}
							variant='contained'
							sx={{ bgcolor: 'white', color: '#292929', '&:hover': { color: 'white', bgcolor: 'warning.main' } }}
						>
							Ingresar con Google
						</Button>
						<Button
							onClick={handleLoginWithProvider}
							variant='contained'
							sx={{ bgcolor: 'white', color: '#292929', '&:hover': { color: 'white', bgcolor: 'warning.main' } }}
						>
							Ingresar con Apple
						</Button>
						<Button
							onClick={handleLoginWithProvider}
							variant='contained'
							sx={{ bgcolor: 'white', color: '#292929', '&:hover': { color: 'white', bgcolor: 'warning.main' } }}
						>
							Ingresar con Microsoft
						</Button>
						<Link
							sx={{
								textDecoration: 'none',
								color: 'white',
								textAlign: 'center',
								textDecorationColor: 'white',
								'&:hover': { textDecoration: 'underline' },
							}}
							component={RouterLink}
							href='/register'
						>
							No tienes cuenta?, Registrate aqui!
						</Link>
					</Stack>
				</Container>
			</Box>
		</>
	)
}
