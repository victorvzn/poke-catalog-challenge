import React from 'react'
import { render, screen, cleanup, fireEvent } from '@testing-library/react'
import { describe, it, beforeEach, expect } from 'vitest'

export interface Pokemon {
  id: number
  name: string
  imageUrl?: string
}

interface Props {
  pokemons: Pokemon[]
}

export const Pokemons: React.FC<Props> = ({ pokemons }) => {
  return (
    <>
      {pokemons?.map(pokemon => (
        <div key={pokemon.id}>
          {pokemon.name}
          <img src={pokemon.imageUrl} />
        </div>
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

  it('should render a pokemon with its url image', async () => {
    const pokemons = [
      {
        id: 1,
        name: 'pokemon one',
        imageUrl: 'pokemon-one-url'
      }
    ]

    render(<Pokemons pokemons={pokemons} />)

    screen.getByText('pokemon one')

    const image = screen.getByRole('img')

    expect(image.getAttribute('src')).toBe('pokemon-one-url')
  })

  it('should render multiple pokemon with its url image each one', () => {
    const pokemons = [
      {
        id: 1,
        name: 'pokemon one',
        imageUrl: 'pokemon-one-url'
      },
      {
        id: 2,
        name: 'pokemon two',
        imageUrl: 'pokemon-two-url'
      }
    ]

    render(<Pokemons pokemons={pokemons} />)

    const images = screen.getAllByRole('img')

    const firstImage = images.at(0)
    const secondImage = images.at(1)

    expect(firstImage?.getAttribute('src')).toBe('pokemon-one-url')
    expect(secondImage?.getAttribute('src')).toBe('pokemon-two-url')
  })

  it('should render a pokemon with its pokemon types commas separated', async () => {
    const pokemons = [
      {
        id: 1,
        name: 'pokemon one',
        imageUrl: 'pokemon-one-url',
        types: [
          { id: 1, name: 'grass' },
          { id: 2, name: 'water' }
        ]
      }
    ]

    render(<Pokemons pokemons={pokemons} />)

    screen.getByText('grass, water')
  })
})
