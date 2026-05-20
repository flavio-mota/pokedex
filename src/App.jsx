import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import PokemonList from './components/PokemonList'
import PokemonDetailPage from './pages/PokemonDetailPage'

function App() {
  return (
    <div className="app">
      <div className="site-shell">
        <Header />
        <Navbar />
      </div>
      <main className="app-main">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/pokemon" element={<PokemonList />} />
          <Route path="/pokemon/:id" element={<PokemonDetailPage />} />
          <Route path="/sobre" element={<AboutPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App