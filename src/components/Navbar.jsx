import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="site-nav" aria-label="Navegação principal">
      <div className="site-nav__inner">
        <NavLink to="/" end>
          Início
        </NavLink>
        <NavLink to="/pokemon">Pokémon</NavLink>
        <NavLink to="/sobre">Sobre</NavLink>
      </div>
    </nav>
  )
}

export default Navbar