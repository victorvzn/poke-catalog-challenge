import React from 'react'
import { useFilters } from '../hooks/useFilters'
import { PokemonTypesList } from '../types'

import { SearchIcon, FilterIcon } from './Icons'

interface Props {
  types?: PokemonTypesList
}

export const PokemonSearch: React.FC<Props> = ({ types }) => {
  const { filters, setFilters } = useFilters()

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
    <form className='search-form' onSubmit={handleFilter}>
      <label className='search-form__container' htmlFor='search'>
        <SearchIcon />
        <input
          id='search'
          name='name'
          type='text'
          placeholder='Pokemon Name'
          onChange={handleChangeInput}
          value={filters?.name}
        />
      </label>
      <label className='search-form__container' htmlFor='filter'>
        <FilterIcon />
        <select
          id='filter'
          name='type'
          placeholder='Filter by type'
          onChange={handleChangeType}
          value={filters?.type}
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
