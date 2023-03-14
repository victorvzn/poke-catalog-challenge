export interface Pokemon {
  id: number
  name: string
  imageUrl?: string
  types?: PokemonTypes[]
}

export type PokemonList = Pokemon[]

export interface PokemonTypes {
  id: number
  name: string
}

export interface PokemonFilter {
  name: string
  type: number
  view: string
}

export type PokemonTypesList = PokemonTypes[]

export interface PokemonContextType {
  filters: PokemonFilter
  setFilters: (filters: PokemonFilter) => void
  filterPokemons?: (pokemons: PokemonList) => PokemonList
  count: number
  setCount: (count: number) => void
}
