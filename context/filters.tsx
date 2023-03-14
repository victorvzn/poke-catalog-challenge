import React, { createContext, useState } from 'react'

import { PokemonFilter, PokemonContextType } from '../types'

const INITIAL_FILTER_STATE = { name: '', type: 0 }

export const FiltersContext = createContext<PokemonContextType>({
  filters: INITIAL_FILTER_STATE,
  setFilters: (filters: PokemonFilter) => {},
  filterPokemons: (pokemons) => []
})

interface Props {
  children: React.ReactNode
}

export const FiltersProvider: React.FC<Props> = ({ children }) => {
  const [filters, setFilters] = useState<PokemonFilter>(INITIAL_FILTER_STATE)

  return (
    <FiltersContext.Provider value={{
      filters,
      setFilters
    }}
    >
      {children}
    </FiltersContext.Provider>
  )
}
