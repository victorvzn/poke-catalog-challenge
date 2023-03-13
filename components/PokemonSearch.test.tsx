import React, { useState } from 'react'
import { render, screen, cleanup } from '@testing-library/react'
import { describe, it, beforeEach, expect, vi } from 'vitest'
import userEvent from '@testing-library/user-event'

import { PokemonFilter } from '../types'

const INITIAL_STATE = {
  name: ''
}

interface FormState {
  inputValue: PokemonFilter
}

export const PokemonSearch: React.FC = () => {
  const [inputValue, setInputValue] = useState<FormState['inputValue']>(INITIAL_STATE)

  const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = event.target

    setInputValue(prevState => ({ ...prevState, [name]: value }))
  }

  return (
    <form>
      <label>
        <input
          name='name'
          type='text'
          placeholder='Name or number'
          onChange={handleChangeInput}
          value={inputValue.name}
        />
      </label>
    </form>
  )
}

describe('PokemonSearch', () => {
  beforeEach(cleanup)

  it('should render', () => {
    render(<PokemonSearch />)
  })

  it('should allow writing text in a text box', async () => {
    const user = userEvent.setup()

    render(<PokemonSearch />)

    const input = screen.getByPlaceholderText('Name or number')

    await user.type(input, 'oops{backspace}{backspace}{backspace}{backspace}geodude')

    expect(input.getAttribute('value')).toBe('geodude')
  })
})
