import NavBar from './components/NavBar'
import BookList from './components/BookList'
import ThemeToggle from './components/ThemeToggle'
import { ThemeContextProvider } from './context/ThemeContext'

const App = () => {
  return (
    <div className="App">
      <ThemeContextProvider>
        <NavBar />
        <BookList />
        <ThemeToggle />
      </ThemeContextProvider>
    </div>
  )
}

export default App
