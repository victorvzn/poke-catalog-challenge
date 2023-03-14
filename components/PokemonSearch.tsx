import React, { useState } from 'react'
import { PokemonFilter, PokemonTypesList } from '../types'

const INITIAL_STATE = {
  name: '',
  type: 0
}

interface FormState {
  inputValues: PokemonFilter
}

interface Props {
  types?: PokemonTypesList
}

export const PokemonSearch: React.FC<Props> = ({ types }) => {
  const [inputValues, setInputValues] = useState<FormState['inputValues']>(INITIAL_STATE)

  const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = event.target

    setInputValues(prevState => ({ ...prevState, [name]: value }))
  }

  const handleChangeType = (event: React.ChangeEvent<HTMLSelectElement>): void => {
    const { name, value } = event.target

    setInputValues(prevState => ({ ...prevState, [name]: Number(value) }))
  }

  return (
    <form>
      <label>
        <input
          name='name'
          type='text'
          placeholder='Name or number'
          onChange={handleChangeInput}
          value={inputValues.name}
        />
      </label>

      <label>
        <select
          name='type'
          onChange={handleChangeType}
          value={inputValues?.type}
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
