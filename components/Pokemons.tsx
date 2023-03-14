import React from 'react'

import { PokemonList } from '../types'

interface Props {
  pokemons: PokemonList
}

export const Pokemons: React.FC<Props> = ({ pokemons }) => {
  return (
    <>
      {pokemons?.map(pokemon => {
        const pokemonTypes = pokemon.types?.map(type => type.name)
        // console.log(pokemon.types)
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
