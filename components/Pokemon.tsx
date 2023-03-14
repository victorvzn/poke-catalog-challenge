import React from 'react'

import { Pokemon as PokemonType } from '../types'

import { useFilters } from '../hooks/useFilters'

interface Props {
  pokemon: PokemonType
}

export const Pokemon: React.FC<Props> = ({ pokemon }) => {
  const pokemonTypes = pokemon.types?.map(type => type.name)
  const { filters } = useFilters()

  return (
    <>
      <div
        role='pokemon'
        className={filters.view === 'list' ? 'is-collapsable' : ''}
      >
        <h3>{pokemon.name}</h3>
        <div>{pokemonTypes?.join(', ')}</div>
        <img src={pokemon.imageUrl} loading='lazy' />
      </div>
    </>
  )
}
