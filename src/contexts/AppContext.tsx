import * as React from 'react'
import { RFC } from '../types'

interface AppContextType {}

export const AppContext = React.createContext<AppContextType>({} as AppContextType)

export default function AppProvider(props: RFC) {
	const value: AppContextType = {}
	return <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
}
