import React from 'react'

import { Pokemon as PokemonType } from '../types'

interface Props {
  pokemon: PokemonType
}

export const Pokemon: React.FC<Props> = ({ pokemon }) => {
  const pokemonTypes = pokemon.types?.map(type => type.name)

  return (
    <>
      <div role='pokemon'>
        <h3>{pokemon.name}</h3>
        <div>{pokemonTypes?.join(', ')}</div>
        <img src={pokemon.imageUrl} loading='lazy' />
      </div>
    </>
  )
}
