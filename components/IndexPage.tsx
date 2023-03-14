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
        <main className='container'>
          <section className='container__section'>

            <PokemonSearch types={types} />

            <Pokemons pokemons={pokemons} />

          </section>
        </main>

        <footer className='footer'>
          <a href='https://victorvillazon.com'>Victor Villazón</a> - <strong>March 2023</strong>
        </footer>
      </FiltersProvider>
    </>
  )
}
