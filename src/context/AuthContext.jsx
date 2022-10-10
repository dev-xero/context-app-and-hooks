import React, { createContext, useState } from 'react'

export const AuthContext = createContext()

export const AuthContextProvider = ({ children }) => {
	const [isAuthenticated, setIsAuthenticated] = useState(false)
	const toggleAuth = () => setIsAuthenticated(!isAuthenticated)

	return (
		<AuthContext.Provider value={{ toggleAuth, isAuthenticated }}>
			{ children }
		</AuthContext.Provider>
	)
}

