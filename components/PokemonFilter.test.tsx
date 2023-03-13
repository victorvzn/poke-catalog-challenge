import React, { useState } from 'react'
import { render, screen, cleanup } from '@testing-library/react'
import { describe, it, beforeEach, expect, vi } from 'vitest'
import userEvent from '@testing-library/user-event'

export const PokemonSearch: React.FC = () => {
  return null
}

describe('PokemonSearch', () => {
  it('should render', () => {
    render(<PokemonSearch />)
  })

  it('should allow writing text in a text box', async () => {
    const user = userEvent.setup()

    render(<PokemonSearch />)

    const input = screen.getByPlaceholderText('Name or number')

    await user.type(input, 'oops{backspace}{backspace}{backspace}{backspace}geodude')

    screen.debug()

    expect(input.getAttribute('value')).toBe('geodude')
  })
})
