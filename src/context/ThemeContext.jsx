import React, { createContext } from 'react';

export const ThemeContext = createContext()

export const ThemeContextProvider = ({ children }) => {
	const isLightTheme = true
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

	return (
		<ThemeContext.Provider value={{ isLightTheme, light, dark }}>
			{ children }
		</ThemeContext.Provider>
	)
}