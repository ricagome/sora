import { Box, Container, CssBaseline } from '@mui/material'
import * as React from 'react'
import { RFC } from '../../types'

export default function Layout(props: RFC) {
	return (
		<Box sx={{ bgcolor: '#003398', minHeight: '100vh' }}>
			<Container maxWidth='md'>{props.children}</Container>
		</Box>
	)
}
