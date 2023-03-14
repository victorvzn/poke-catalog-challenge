import React from 'react'
import { render, screen, cleanup } from '@testing-library/react'
import { describe, it, beforeEach } from 'vitest'
import userEvent from '@testing-library/user-event'

import { Pokemon } from './Pokemon'

describe('Pokemon', () => {
  beforeEach(cleanup)

  it('should add items to a favorites list', async () => {
    const user = userEvent.setup()

    const mockPokemons = {
      id: 1,
      name: 'pokemon one',
      imageUrl: 'pokemon-one-url',
      types: [
        { id: 1, name: 'grass' },
        { id: 2, name: 'water' }
      ]
    }

    render(<Pokemon pokemon={mockPokemons} />)

    const button = screen.getByRole('button')

    await user.click(button)

    screen.getByTestId('is-favorite')
  })
})
