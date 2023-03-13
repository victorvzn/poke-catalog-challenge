import React from 'react'

import { Pokemons } from '../components/Pokemons'

import { PokemonList } from '../types'

interface Props {
  pokemons: PokemonList
}

export const IndexPage: React.FC<Props> = ({ pokemons }) => {
  return (
    <>
      <Pokemons pokemons={pokemons} />
    </>
  )
}
