import Header from './components/Header'
import Navbar from './components/Navbar'
import PokemonList from './components/PokemonList'
import Footer from './components/Footer'

function App() {
  return (
    <div className="app">
      <div className="site-shell">
        <Header />
        <Navbar />
      </div>
      <main className="app-main">
        <PokemonList />
      </main>
      <Footer />
    </div>
  )
}

export default App
