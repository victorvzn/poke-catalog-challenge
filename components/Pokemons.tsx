import React from 'react'

import { Pokemon } from './Pokemon'

import { useFilters } from '../hooks/useFilters'

import { PokemonList } from '../types'
import { PokemonResults } from './PokemonResults'
import { PokemonView } from './PokemonViews'

interface Props {
  pokemons: PokemonList
}

export const Pokemons: React.FC<Props> = ({ pokemons }) => {
  const { filterPokemons } = useFilters()

  const filteredPokemons = filterPokemons?.(pokemons)

  return (
    <>
      <div>
        <PokemonResults count={filteredPokemons?.length} />

        <PokemonView />
      </div>

      {filteredPokemons?.map(pokemon => (
        <Pokemon key={pokemon.id} pokemon={pokemon} />
      ))}
    </>
  )
}
