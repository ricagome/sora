import { Box, Button, Container, Divider, Stack, Typography } from '@mui/material'
import { useRouter } from 'next/router'
import Head from 'next/head'
import Image from 'next/image'

export default function IndexPage() {
	const { push } = useRouter()

	const handleContinue = () => {
		push('/auth/login')
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
				<Container>
					<Box sx={{ height: '50vh', display: 'grid', placeContent: 'center' }}>
						<Image src='/assets/logo-yellow.svg' width={200} height={100} alt='logo' />
					</Box>
					<Box sx={{ position: 'relative', height: '50vh' }}>
						<Container
							maxWidth='xs'
							sx={{ position: 'absolute', bottom: '10%', left: '50%', px: 3, pb: 4, transform: 'translate(-50%,0%)' }}
						>
							<Stack width='100%' spacing={1}>
								<Typography variant='h6' fontWeight={600}>
									Beneficios con tu ingreso
								</Typography>
								<Divider
									variant='middle'
									sx={{ bgcolor: 'white', borderBottomWidth: 'medium', borderRadius: '2rem' }}
								/>
								<Typography variant='subtitle1' sx={{ pt: 2 }}>
									Acceso rapido a tus vuelos
								</Typography>
								<Typography variant='subtitle1'>Siempre podras ver tus datos</Typography>
								<Typography variant='subtitle1' sx={{ pb: 2 }}>
									Administra tu experiencia y mejora tu viaje
								</Typography>
								<Button variant='contained' color='warning' sx={{ fontWeight: 'bold' }} onClick={handleContinue}>
									Ingresar, Registrarse
								</Button>
							</Stack>
						</Container>
					</Box>
				</Container>
			</Box>
		</>
	)
}
