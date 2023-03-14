import { create } from 'zustand'

import { PokemonList, Pokemon } from '../types'

interface FavoritesStates {
  favorites: PokemonList
}

interface FavoritesActions {
  addFavorite: (pokemon: Pokemon) => void
  removeFavorite: (pokemon: Pokemon) => void
}

export const useFavoritesStore = create<FavoritesStates & FavoritesActions>((set) => ({
  favorites: [],
  addFavorite: (pokemon: Pokemon) => set(
    (state) => {
      const favoriteIndexFound = state.favorites.findIndex(favorite => favorite.id === pokemon.id)

      if (favoriteIndexFound >= 0) {
        return { favorites: [...state.favorites] }
      }

      return { favorites: [...state.favorites, pokemon] }
    }
  ),
  removeFavorite: (pokemon: Pokemon) => set(
    (state) => {
      const favorites = state.favorites.filter(favorite => favorite.id !== pokemon.id)
      const newFavorites = { favorites }
      return newFavorites
    }
  )
  // removeAllFavorites
}))
