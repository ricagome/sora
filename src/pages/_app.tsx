import type { AppProps } from 'next/app'
import AppProvider from '../contexts/AppContext'
import ThemeProvider from '../contexts/ThemeContext'
import { Montserrat } from '@next/font/google'

const montserrat = Montserrat({
	subsets: ['latin'],
})

export default function App({ Component, pageProps }: AppProps) {
	return (
		<div className={montserrat.className}>
			<ThemeProvider>
				<AppProvider>
					<Component {...pageProps} />
				</AppProvider>
			</ThemeProvider>
		</div>
	)
}
