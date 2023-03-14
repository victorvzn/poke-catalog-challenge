import React from 'react'

import { PokemonList, PokemonTypesList } from '../types'

import { PokemonSearch } from './PokemonSearch'
import { Pokemons } from '../components/Pokemons'
import { FiltersProvider } from '../context/filters'

interface Props {
  pokemons: PokemonList
  types: PokemonTypesList
}

export const IndexPage: React.FC<Props> = ({ pokemons, types }) => {
  return (
    <>
      <FiltersProvider>
        <PokemonSearch types={types} />

        <Pokemons pokemons={pokemons} />
      </FiltersProvider>
    </>
  )
}
