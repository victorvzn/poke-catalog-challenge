import React from 'react'
import { render, screen, cleanup, fireEvent } from '@testing-library/react'
import { describe, it, beforeEach, expect } from 'vitest'

export const Pokemons: React.FC = () => {
  return null
}

describe('Pokemons', () => {
  it('should render', () => {
    render(<Pokemons />)
  })
})
