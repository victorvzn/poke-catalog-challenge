import React from 'react'

import { PokemonList } from '../types'

interface Props {
  pokemons: PokemonList
}

export const Pokemons: React.FC<Props> = ({ pokemons }) => {
  return (
    <>
      {pokemons?.map(pokemon => {
        const pokemonTypes = pokemon.types?.map(pok => pok.name)
        return (
          <div key={pokemon.id}>
            {pokemon.name}
            <div>{pokemonTypes?.join(', ')}</div>
            <img src={pokemon.imageUrl} />
          </div>
        )
      })}
    </>
  )
}
