import React from 'react'

import '../../styles/index.scss'

import { SettingsPage } from '../../components/SettingsPage'
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

      <SettingsPage />
    </>
  )
}
