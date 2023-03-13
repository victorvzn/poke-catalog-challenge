import React from 'react'
import { render, screen, cleanup, fireEvent } from '@testing-library/react'
import { describe, it, beforeEach, expect } from 'vitest'

export interface Pokemon {
  id: number
  name: string
}

interface Props {
  pokemons: Pokemon[]
}

export const Pokemons: React.FC<Props> = ({ pokemons }) => {
  return (
    <>
      {pokemons?.map(pokemon => (
        <div key={pokemon.id}>{pokemon.name}</div>
      ))}
    </>
  )
}

describe('Pokemons', () => {
  beforeEach(cleanup)

  // it('should render', () => {
  //   render(<Pokemons pokemons={[]} />)
  // })

  it('should render a pokemon name', () => {
    const mockPokemons = [{
      id: 1,
      name: 'pokemon one'
    }]

    render(<Pokemons pokemons={mockPokemons} />)

    screen.getByText('pokemon one')
  })

  // it('should render another pokemon', () => {
  //   const mockPokemons = [{
  //     id: 1,
  //     name: 'pokemon two'
  //   }]

  //   render(<Pokemons pokemons={mockPokemons} />)

  //   screen.getByText('pokemon two')
  // })

  it('should render multiple pokemon names', () => {
    const pokemons = [
      {
        id: 1,
        name: 'pokemon one'
      },
      {
        id: 2,
        name: 'pokemon two'
      }
    ]

    render(<Pokemons pokemons={pokemons} />)

    screen.getByText('pokemon one')
    screen.getByText('pokemon two')
  })
})
