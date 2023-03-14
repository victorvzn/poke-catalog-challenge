import React from 'react'

import { Pokemon } from './Pokemon'

import { useFilters } from '../hooks/useFilters'

import { PokemonList } from '../types'

interface Props {
  pokemons: PokemonList
}

export const Pokemons: React.FC<Props> = ({ pokemons }) => {
  const { filterPokemons } = useFilters()

  const filteredPokemons = filterPokemons?.(pokemons)

  return (
    <>
      {filteredPokemons?.map(pokemon => (
        <Pokemon key={pokemon.id} pokemon={pokemon} />
      ))}
    </>
  )
}
