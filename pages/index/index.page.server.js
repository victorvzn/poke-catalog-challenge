// import fetch from 'node-fetch'

import pokemonList from '../../data/pokemons.json'
import pokemonTypes from '../../data/types.json'

export async function onBeforeRender (pageContext) {
  // const findType = (data, id) => data.find(pokemon => pokemon.id === id)
  // const LIMIT = 15 // ALL: 1281
  // const URL_POKEMONS = `https://pokeapi.co/api/v2/pokemon?offset=0&limit=${LIMIT}`
  // const URL_TYPES = 'https://pokeapi.co/api/v2/type'

  // console.log('Rendering...', URL_POKEMONS)

  // const response = await fetch(URL_POKEMONS)
  // const json = await response.json()
  // const pokemons = await json.results.map(async pokemon => {
  //   const id = pokemon.url.split('/').at(6)
  //   const pokemonFound = await findType(pokemonList, id)
  //   console.log(id, pokemonFound)

  //   return {
  //     id,
  //     name: pokemon.name,
  //     types: pokemonFound.types,
  //     imageUrl: pokemonFound.image
  //   }
  // })

  const pokemons = pokemonList
  const types = pokemonTypes

  // const responseTypes = await fetch(URL_TYPES)
  // const jsonTypes = await responseTypes.json()
  // const types = await jsonTypes.results.map(type => {
  //   const id = type.url.split('/').at(6)

  //   return { id, name: type.name }
  // })

  const pageProps = { pokemons, types }

  return { pageContext: { pageProps } }
}

export const passToClient = ['pageProps']
