import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/home'
import InfoPage from './components/InfoPage'

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
            path="*"
            element={<p>Page not found.</p>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
