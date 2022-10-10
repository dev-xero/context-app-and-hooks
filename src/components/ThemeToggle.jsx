import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'

const ThemeToggle = () => {
	const { handleToggleTheme } = useContext(ThemeContext)
	return (
		<button onClick={handleToggleTheme}>Toggle the theme</button>
	)
}

export default ThemeToggle
