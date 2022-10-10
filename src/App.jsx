import NavBar from './components/NavBar'
import BookList from './components/BookList'
import ThemeToggle from './components/ThemeToggle'
import { ThemeContextProvider } from './context/ThemeContext'
import { AuthContextProvider } from './context/AuthContext'

const App = () => {
  return (
    <div className="App">
      <ThemeContextProvider>
        <AuthContextProvider>
          <NavBar />
          <BookList />
          <ThemeToggle />
        </AuthContextProvider>
      </ThemeContextProvider>
    </div>
  )
}

export default App
