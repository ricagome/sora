import * as React from 'react'
import { ThemeProvider as MUIThemeProvider, createTheme } from '@mui/material/styles'
import { RFC } from '../types'
import { CssBaseline } from '@mui/material'

const ColorModeContext = React.createContext({ toggleColorMode: () => {} })

export default function ThemeProvider(props: RFC) {
	const [mode, setMode] = React.useState<'light' | 'dark'>('light')
	const colorMode = React.useMemo(
		() => ({
			toggleColorMode: () => {
				setMode(prevMode => (prevMode === 'light' ? 'dark' : 'light'))
			},
		}),
		[]
	)

	const theme = React.useMemo(
		() =>
			createTheme({
				palette: {
					mode,
					warning: {
						main: '#FF9F0A',
					},
				},
				typography: {
					fontFamily: 'inherit',
					button: {
						textTransform: 'none',
					},
				},
			}),
		[mode]
	)

	return (
		<ColorModeContext.Provider value={colorMode}>
			<MUIThemeProvider theme={theme}>
				<CssBaseline />
				{props.children}
			</MUIThemeProvider>
		</ColorModeContext.Provider>
	)
}
