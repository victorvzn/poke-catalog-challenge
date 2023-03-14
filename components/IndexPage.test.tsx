import React from 'react'
import { render, screen, cleanup } from '@testing-library/react'
import { describe, it, beforeEach, expect, vi } from 'vitest'
import userEvent from '@testing-library/user-event'

import { IndexPage } from './IndexPage'

describe('Poké Catalog integration test', () => {
  beforeEach(cleanup)

  it('should filter pokemons by name', async () => {
    const user = userEvent.setup()

    const mockPokemons = [
      {
        id: 1,
        name: 'bulbasaur',
        imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png'
      },
      {
        id: 2,
        name: 'pikachu',
        imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png'
      },
      {
        id: 3,
        name: 'charmander',
        imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png'
      },
      {
        id: 4,
        name: 'shellder',
        imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/90.png'
      },
      {
        id: 5,
        name: 'beedrill',
        imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/15.png'
      }
    ]

    render(<IndexPage pokemons={mockPokemons} types={[]} />)

    const input = screen.getByPlaceholderText('Name or number')

    await user.type(input, 'pikachu')
    expect(screen.getAllByRole('pokemon')).toHaveLength(1)

    await user.clear(input)

    await user.type(input, 'll')
    expect(screen.getAllByRole('pokemon')).toHaveLength(5)
  })
})
