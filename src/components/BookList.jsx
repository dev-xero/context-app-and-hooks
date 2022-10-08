import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'

const BookList = () => {
  const { isLightTheme, light, dark } = useContext(ThemeContext)
  const theme = isLightTheme ? light : dark
  return (
    <div
      className="book-list"
      style={{ color: theme.syntax, backgroundColor: theme.bg }}
    >
      <ul>
        <li style={{ backgroundColor: theme.ui }}>The Way of Kings</li>
        <li style={{ backgroundColor: theme.ui }}>The Name of the Wind</li>
        <li style={{ backgroundColor: theme.ui }}>The Final Empire</li>
      </ul>
    </div>
  )
}

export default BookList
