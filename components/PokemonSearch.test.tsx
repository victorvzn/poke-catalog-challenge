import React, { useState } from 'react'
import { render, screen, cleanup, within } from '@testing-library/react'
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

  it('should list an empty option at first and multiple types passed by props in a select', async () => {
    // const user = userEvent.setup()

    const mockTypes = [
      { id: 1, name: 'grass' },
      { id: 2, name: 'water' },
      { id: 3, name: 'fire' }
    ]

    render(<PokemonSearch types={mockTypes} />)

    const comboBox = screen.getByRole('combobox')

    const comboBoxOptions = within(comboBox).getAllByRole('option')

    expect(comboBoxOptions).toHaveLength(4)
  })
})
