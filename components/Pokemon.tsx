import React, { useEffect } from 'react'

import { Pokemon as PokemonType } from '../types'

import { useFilters } from '../hooks/useFilters'

import { useFavoritesStore } from '../stores/useFavorites'

import { PokeBallIcon, PokeBallDisabledIcon, PokeBallIconActive, HeartIcon } from '../components/Icons'

interface Props {
  pokemon: PokemonType
}

export const Pokemon: React.FC<Props> = ({ pokemon }) => {
  const { filters } = useFilters()
  const { favorites, addFavorite, removeFavorite } = useFavoritesStore((state) => state)

  const isFavorite = favorites?.some(favorite => favorite.id === pokemon.id)

  const idPadded = String(pokemon.id).padStart(4, '0')

  return (
    <>
      <div
        role='pokemon'
        className={`pokemon ${filters.view === 'list' ? 'is-collapsable' : ''} ${isFavorite ? 'pokemon--selected' : ''}`}
      >
        <div className='pokemon__header'>
          <div className='pokemon__info '>
            <figure className='pokemon__image--small'>
              <img src={pokemon.imageUrl} loading='lazy' width={54} height={54} alt={`Pokemon ${pokemon.name} image`} />
            </figure>
            <div>
              <div className='pokemon__info--title'>
                <strong className='pokemon__number'>#{idPadded}</strong>
                <span className='pokemon__name'>{pokemon.name}</span>
              </div>
              <div className='pokemon__types'>
                {pokemon.types?.map(type => (
                  <span className='pokemon__types--tag' key={type.id}>{type.name}</span>
                ))}
              </div>
            </div>
          </div>
          {
          isFavorite
            ? (
              <button
                className='pokemon__favorite is-favorite'
                data-testid='is-favorite'
                onClick={() => { removeFavorite(pokemon) }}
              >
                <HeartIcon />
              </button>
              )
            : (
              <button
                className='pokemon__favorite'
                onClick={() => { addFavorite(pokemon) }}
              >
                <PokeBallIconActive />
              </button>
              )
        }
        </div>
        <figure className='pokemon__image'>
          <img src={pokemon.imageUrl} loading='lazy' width={200} height={200} alt={`Pokemon ${pokemon.name} image`} />
        </figure>
      </div>
    </>
  )
}
