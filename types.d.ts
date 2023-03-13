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

export type PokemonTypesList = PokemonTypes[]

export interface PokemonFilter {
  name: string
}
