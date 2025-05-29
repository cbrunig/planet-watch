import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/home'
import InfoPage from './components/InfoPage'
import AboutPage from './components/AboutPage'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Home />} />
          <Route
            path="/:lati/:longi"
            element={<InfoPage />} />
          <Route
            path="/about"
            element={<AboutPage />} />
          <Route
            path="*"
            element={<p>Page not found.</p>} />
        </Routes>
          <footer className='footer'>
              &copy; {new Date().getFullYear()} Planet Watch. Built with React.
          </footer>
      </BrowserRouter>
    </>
  )
}

export default App
