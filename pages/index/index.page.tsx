import React from 'react'

import { PokemonList, PokemonTypesList } from '../../types'

interface Props {
  pokemons: PokemonList
  types: PokemonTypesList
}

export const Page: React.FC<Props> = ({ pokemons }) => {
  console.log(pokemons)
  return (
    <>
      <h1>Poké Catalog Challenge</h1>

      {JSON.stringify(pokemons)}
    </>
  )
}
