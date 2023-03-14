import React from 'react'

import '../../styles/index.scss'

import { IndexPage } from '../../components/IndexPage'
import { Header } from '../../components/Header'

import { PokemonList, PokemonTypesList } from '../../types'

interface Props {
  pokemons: PokemonList
  types: PokemonTypesList
}

export const Page: React.FC<Props> = ({ pokemons, types }) => {
  return (
    <>
      <Header />

      <IndexPage pokemons={pokemons} types={types} />
    </>
  )
}
