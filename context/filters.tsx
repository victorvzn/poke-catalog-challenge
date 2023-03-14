import React, { createContext, useState } from 'react'

import { PokemonFilter, PokemonContextType } from '../types'

const INITIAL_FILTER_STATE = { name: '', type: 0 }

export const FiltersContext = createContext<PokemonContextType>({
  filters: INITIAL_FILTER_STATE,
  setFilters: (filters: PokemonFilter) => {},
  filterPokemons: (pokemons) => [],
  count: 0,
  setCount: (count: number) => 0
})

interface Props {
  children: React.ReactNode
}

export const FiltersProvider: React.FC<Props> = ({ children }) => {
  const [filters, setFilters] = useState<PokemonFilter>(INITIAL_FILTER_STATE)
  const [count, setCount] = useState<number>(0)

  return (
    <FiltersContext.Provider value={{
      filters,
      setFilters,
      count,
      setCount
    }}
    >
      {children}
    </FiltersContext.Provider>
  )
}
