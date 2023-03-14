import { useContext } from 'react'
import { FiltersContext } from '../context/filters'
import { PokemonContextType, PokemonList } from '../types'

export const useFilters = (): PokemonContextType => {
  // const [filters, setFilters] = useState<useFiltersState['filters']>(INITIAL_FILTER_STATE)
  const { filters, setFilters, count, setCount } = useContext(FiltersContext)

  const filterPokemons = (pokemons: PokemonList): PokemonList => {
    if (filters?.name === undefined && filters?.type === undefined) {
      return pokemons
    }

    const filteredPokemons = pokemons.filter(pokemon => {
      const pokemonIdTypes = pokemon.types?.map(type => type.id)

      const filterByname = filters.name === '' || pokemon.name?.includes(filters.name)
      const filterByType = filters.type === 0 || pokemonIdTypes?.includes(Number(filters?.type))

      return filterByname && filterByType
    })

    setCount(filteredPokemons.length ?? 0)

    return filteredPokemons
  }

  return {
    filters,
    setFilters,
    filterPokemons,
    count,
    setCount
  }
}
