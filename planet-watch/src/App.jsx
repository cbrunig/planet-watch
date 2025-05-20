import { BrowserRouter, Route, Routes } from 'react-router'
import './App.css'
import Home from './components/home'
import InfoPage from './components/InfoPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Home />} />
        <Route
          path="/location/:cityName"
          element={<InfoPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
