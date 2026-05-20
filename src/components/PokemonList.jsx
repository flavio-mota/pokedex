import { useState } from 'react'
import PokemonCard from './PokemonCard'
import {POKEMONS} from '../data/pokemon'

function PokemonList() {
  const [pokemons] = useState(POKEMONS)
  const [filtro, setFiltro] = useState('')

  const listaFiltrada = pokemons.filter((p) =>
    p.name.toLowerCase().includes(filtro.toLowerCase())
  )

  return (
    <section
      className="pokemon-catalog"
      id="catalogo"
      aria-labelledby="catalogo-titulo"
    >
      <div className="pokemon-catalog__head">
        <h2 id="catalogo-titulo" className="pokemon-catalog__title">
          Pokémon
        </h2>
        <div className="pokemon-toolbar">
          <label htmlFor="busca">Buscar por nome</label>
          <input
            id="busca"
            className="pokemon-search"
            type="search"
            value={filtro}
            onChange={(e) => setFiltro(e.target.value)}
            placeholder="Ex.: char"
            autoComplete="off"
          />
        </div>
      </div>

      {listaFiltrada.length === 0 ? (
        <p className="pokemon-catalog__empty">
          Nenhum Pokémon encontrado. Tente outro nome na busca.
        </p>
      ) : (
        <div className="pokemon-grid">
          {listaFiltrada.map((pokemon) => (
            <PokemonCard
              key={pokemon.id}
              id={pokemon.id}
              name={pokemon.name}
              type={pokemon.type}
              imageUrl={pokemon.imageUrl}
            />
          ))}
        </div>
      )}
    </section>
  )
}

export default PokemonList
