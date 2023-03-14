import React from 'react'

import { Pokemon } from './Pokemon'

import { PokemonList } from '../types'

interface Props {
  pokemons: PokemonList
}

export const Pokemons: React.FC<Props> = ({ pokemons }) => {
  return (
    <>
      {pokemons?.map(pokemon => (
        <Pokemon key={pokemon.id} pokemon={pokemon} />
      ))}
    </>
  )
}
