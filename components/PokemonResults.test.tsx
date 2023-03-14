import React from 'react'
import { render, screen, cleanup } from '@testing-library/react'
import { describe, it, beforeEach, expect } from 'vitest'
import userEvent from '@testing-library/user-event'

interface Props {
  count: number
}

const PokemonResults: React.FC<Props> = ({ count }) => {
  const countPadded = String(count).padStart(2, '0')

  return (
    <span>
      Showing <strong>{countPadded}</strong> results
    </span>
  )
}

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
