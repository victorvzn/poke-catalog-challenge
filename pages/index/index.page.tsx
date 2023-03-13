import React from 'react'

import { IndexPage } from '../../components/IndexPage'

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

      <IndexPage pokemons={pokemons} />
    </>
  )
}
