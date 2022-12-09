import * as React from 'react'
import {
	Avatar,
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
import dayjs, { Dayjs } from 'dayjs'
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
import CameraAltIcon from '@mui/icons-material/CameraAlt'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { TimePicker } from '@mui/x-date-pickers/TimePicker'
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker'
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker'
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker'

export default function RegisterPage() {
	const { push } = useRouter()

	const [value, setValue] = React.useState<Dayjs | null>(dayjs('2014-08-18T21:11:54'))

	const handleChange = (newValue: Dayjs | null) => {
		setValue(newValue)
	}

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
				<Container maxWidth='xs'>
					<LocalizationProvider dateAdapter={AdapterDayjs}>
						<Stack spacing={2} sx={{ p: 2 }} onSubmit={handleLogin} component='form'>
							<Typography variant='h6' fontWeight={600}>
								Registro
							</Typography>
							<Stack direction='row' spacing={2}>
								<IconButton sx={{ p: 0 }}>
									<Avatar sx={{ width: 60, height: 60, color: 'primary.main', backgroundColor: 'white' }}>
										<CameraAltIcon sx={{ fontSize: 30 }} />
									</Avatar>
								</IconButton>
								<Stack direction='column' alignItems='start'>
									<Typography variant='body2' align='left'>
										Agrega una foto de perfil
									</Typography>
									<Typography variant='body2' align='left'>{`* (Selfie) sin tapabocas o gafas de sol`}</Typography>
								</Stack>
							</Stack>
							<TextField
								variant='outlined'
								name='name'
								placeholder='Nombres'
								size='small'
								sx={{
									'& .MuiInputBase-root': {
										overflow: 'hidden',
										borderRadius: 1,
										backgroundColor: theme => (theme.palette.mode === 'light' ? '#fcfcfb' : '#2b2b2b'),
									},
								}}
							/>
							<TextField
								variant='outlined'
								name='surname'
								placeholder='Apellidos'
								size='small'
								sx={{
									'& .MuiInputBase-root': {
										overflow: 'hidden',
										borderRadius: 1,
										backgroundColor: theme => (theme.palette.mode === 'light' ? '#fcfcfb' : '#2b2b2b'),
									},
								}}
							/>
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
								placeholder='Contraseña'
								size='small'
								sx={{
									'& .MuiInputBase-root': {
										overflow: 'hidden',
										borderRadius: 1,
										backgroundColor: theme => (theme.palette.mode === 'light' ? '#fcfcfb' : '#2b2b2b'),
									},
									'& .MuiFormHelperText-root': {
										color: 'white',
									},
								}}
								InputProps={{
									endAdornment: (
										<InputAdornment position='end'>
											<IconButton sx={{ p: 0 }}>
												<VisibilityIcon />
											</IconButton>
										</InputAdornment>
									),
								}}
								// helperText='Minimo 8 caracteres'
							/>
							<Typography variant='caption' align='left' component='div'>
								Minimo 8 caracteres
							</Typography>
							<TextField
								variant='outlined'
								type='password'
								name='passwordRepeat'
								placeholder='Repita su contraseña'
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
											<IconButton sx={{ p: 0 }}>
												<VisibilityIcon />
											</IconButton>
										</InputAdornment>
									),
								}}
							/>
							<MobileDatePicker
								// label='Date mobile'
								inputFormat='MM/DD/YYYY'
								value={value}
								onChange={handleChange}
								renderInput={params => (
									<TextField
										size='small'
										sx={{
											fontFamily: 'Roboto',
											'& .MuiInputBase-root': {
												overflow: 'hidden',
												borderRadius: 1,
												backgroundColor: theme => (theme.palette.mode === 'light' ? '#fcfcfb' : '#2b2b2b'),
											},
										}}
										{...params}
									/>
								)}
							/>
							<Stack direction='row' spacing={1} justifyContent='space-evenly'>
								<IconButton>
									<Avatar variant='square' sx={{ backgroundColor: 'white', borderRadius: 2, width: 80, height: 60, color: 'primary.main' }}>
										<Stack alignItems='center'>
											<CameraAltIcon sx={{ fontSize: 24 }} />
											<Typography variant='caption' fontWeight={600}>Cedula</Typography>
										</Stack>
									</Avatar>
								</IconButton>
								<IconButton>
									<Avatar variant='square' sx={{ backgroundColor: 'white', borderRadius: 2, width: 80, height: 60, color: 'primary.main' }}>
										<Stack alignItems='center'>
											<CameraAltIcon sx={{ fontSize: 24 }} />
											<Typography variant='caption' fontWeight={600}>Pasaporte</Typography>
										</Stack>
									</Avatar>
								</IconButton>
							</Stack>
							<Button type='submit' variant='contained' color='warning' sx={{ '&:hover': { color: 'white' } }}>
								Registrarme
							</Button>
						</Stack>
						<Stack spacing={2} sx={{ p: 2, pt: 0 }}>
							<Button
								onClick={handleLoginWithProvider}
								variant='contained'
								sx={{ bgcolor: 'white', color: '#292929', '&:hover': { color: 'white', bgcolor: 'warning.main' } }}
							>
								Registrarme con Google
							</Button>
							<Button
								onClick={handleLoginWithProvider}
								variant='contained'
								sx={{ bgcolor: 'white', color: '#292929', '&:hover': { color: 'white', bgcolor: 'warning.main' } }}
							>
								Registrarme con Apple
							</Button>
							<Button
								onClick={handleLoginWithProvider}
								variant='contained'
								sx={{ bgcolor: 'white', color: '#292929', '&:hover': { color: 'white', bgcolor: 'warning.main' } }}
							>
								Registrarme con Microsoft
							</Button>
						</Stack>
					</LocalizationProvider>
				</Container>
			</Box>
		</>
	)
}
