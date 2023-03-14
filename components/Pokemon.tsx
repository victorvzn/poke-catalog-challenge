import React from 'react'

import { Pokemon as PokemonType } from '../types'

import { useFilters } from '../hooks/useFilters'

import { useFavoritesStore } from '../stores/useFavorites'

import { PokeBallIcon, PokeBallDisabledIcon } from '../components/Icons'

interface Props {
  pokemon: PokemonType
}

export const Pokemon: React.FC<Props> = ({ pokemon }) => {
  const pokemonTypes = pokemon.types?.map(type => type.name)
  const { filters } = useFilters()
  const { favorites, addFavorite, removeFavorite } = useFavoritesStore((state) => state)

  const isFavorite = favorites.some(favorite => favorite.id === pokemon.id)

  return (
    <>
      <div
        role='pokemon'
        className={filters.view === 'list' ? 'is-collapsable' : ''}
      >
        {
          isFavorite
            ? (
              <button
                data-testid='is-favorite'
                onClick={() => removeFavorite(pokemon)}
              >
                <PokeBallIcon />
              </button>
              )
            : (
              <button
                onClick={() => addFavorite(pokemon)}
              >
                <PokeBallDisabledIcon />
              </button>
              )
        }
        <h3>{pokemon.name}</h3>
        <div>{pokemonTypes?.join(', ')}</div>
        <img src={pokemon.imageUrl} loading='lazy' />
      </div>
    </>
  )
}
