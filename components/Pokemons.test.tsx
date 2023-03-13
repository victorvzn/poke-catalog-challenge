import React from 'react'
import { render, screen, cleanup, fireEvent } from '@testing-library/react'
import { describe, it, beforeEach, expect } from 'vitest'
import { before } from 'node:test'

export interface Pokemon {
  name: string
}

interface Props {
  pokemons?: Pokemon[]
}

export const Pokemons: React.FC<Props> = ({ pokemons }) => {
  return (
    <div>pokemon one</div>
  )
}

describe('Pokemons', () => {
  beforeEach(cleanup)

  it('should render', () => {
    render(<Pokemons />)
  })

  it('should render a pokemon name', () => {
    const mockPokemons = [{
      name: 'pokemon one'
    }]

    render(<Pokemons pokemons={mockPokemons} />)

    screen.getByText('pokemon one')
  })
})
