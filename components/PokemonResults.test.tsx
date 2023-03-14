import React from 'react'
import { render, screen, cleanup } from '@testing-library/react'
import { describe, it, beforeEach, expect } from 'vitest'
import userEvent from '@testing-library/user-event'

describe('PokemonResults', () => {
  beforeEach(cleanup)

  it('should show results equal to 00', async () => {
    render(<PokemonResults count={0} />)

    await screen.getByText('00')
  })

  it('should show results equal to 05', async () => {
    render(<PokemonResults count={5} />)

    await screen.getByText('05')
  })

  it('should show results equal to 99', async () => {
    render(<PokemonResults count={99} />)

    await screen.getByText('99')
  })
})
