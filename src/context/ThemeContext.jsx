import React, { createContext, useState } from 'react';

export const ThemeContext = createContext()

export const ThemeContextProvider = ({ children }) => {
	const [isLightTheme, setIsLightTheme] = useState(true)
	const light = {
		syntax: '#555555',
		ui: '#DDDDDD',
		bg: '#EEEEEE'
	}
	const dark = {
		syntax: '#DDDDDD',
		ui: '#333333',
		bg: '#555555'
	}

	const handleToggleTheme = () => {
		setIsLightTheme(!isLightTheme)
	}

	return (
		<ThemeContext.Provider value={{ isLightTheme, handleToggleTheme, light, dark }}>
			{ children }
		</ThemeContext.Provider>
	)
}