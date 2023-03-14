import React from 'react'

import { PokemonList, PokemonTypesList } from '../types'

import { PokemonSearch } from './PokemonSearch'
import { Pokemons } from '../components/Pokemons'

interface Props {
  pokemons: PokemonList
  types: PokemonTypesList
}

export const IndexPage: React.FC<Props> = ({ pokemons, types }) => {
  return (
    <>
      <PokemonSearch types={types} />

      <Pokemons pokemons={pokemons} />
    </>
  )
}
