import React, { useState } from 'react'
import { render, screen, cleanup, within } from '@testing-library/react'
import { describe, it, beforeEach, expect, vi } from 'vitest'
import userEvent from '@testing-library/user-event'

import { PokemonFilter, PokemonTypesList } from '../types'

const INITIAL_STATE = {
  name: '',
  type: 0
}

interface FormState {
  inputValue: PokemonFilter
}

interface Props {
  types?: PokemonTypesList
}

export const PokemonSearch: React.FC<Props> = ({ types }) => {
  const [inputValue, setInputValue] = useState<FormState['inputValue']>(INITIAL_STATE)

  const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = event.target

    setInputValue(prevState => ({ ...prevState, [name]: value }))
  }

  const handleChangeType = (event: React.ChangeEvent<HTMLSelectElement>): void => {
    const { name, value } = event.target

    setInputValue(prevState => ({ ...prevState, [name]: Number(value) }))
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

      <label>
        <select
          name='type'
          onChange={handleChangeType}
          value={inputValue?.type}
        >
          <option value='0'>Select a type</option>
          {types?.map(type => (
            <option key={type.id} value={type.id}>{type.name}</option>
          ))}
        </select>
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

  it('should show a selected value after selecting a pokemon type', async () => {
    const user = userEvent.setup()

    const mockTypes = [
      { id: 1, name: 'grass' },
      { id: 2, name: 'water' },
      { id: 3, name: 'fire' }
    ]

    const SELECTED_VALUE = '2'

    render(<PokemonSearch types={mockTypes} />)

    const comboBox = screen.getByRole('combobox')

    await user.selectOptions(comboBox, SELECTED_VALUE)

    const optionWater = screen.getByRole('option', { name: 'water' })

    expect(optionWater.getAttribute('value')).toBe(SELECTED_VALUE)
  })
})
