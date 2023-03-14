import React from 'react'
import { useFilters } from '../hooks/useFilters'
import { PokemonTypesList } from '../types'
import { PokemonResults } from './PokemonResults'

interface Props {
  types?: PokemonTypesList
}

export const PokemonSearch: React.FC<Props> = ({ types }) => {
  const { filters, setFilters, count } = useFilters()

  const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = event.target

    setFilters({ ...filters, [name]: value })
  }

  const handleChangeType = (event: React.ChangeEvent<HTMLSelectElement>): void => {
    const { name, value } = event.target

    setFilters({ ...filters, [name]: Number(value) })
  }

  const handleFilter = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault()

    setFilters(filters)
  }

  return (
    <form onSubmit={handleFilter}>
      <label>
        <input
          name='name'
          type='text'
          placeholder='Name or number'
          onChange={handleChangeInput}
          value={filters?.name}
        />
      </label>
      <label>
        <select
          name='type'
          onChange={handleChangeType}
          value={filters?.type}
        >
          <option value='0'>Select a type</option>
          {types?.map(type => (
            <option key={type.id} value={type.id}>{type.name}</option>
          ))}
        </select>
      </label>
      <div>
        <PokemonResults count={count} />
      </div>
    </form>
  )
}
