import React from 'react'
import { useFilters } from '../hooks/useFilters'
import { ListIcon, ColumnsIcon } from './Icons'

interface Props {
  view?: string
}

export const PokemonView: React.FC<Props> = () => {
  const { filters, setFilters } = useFilters()

  return (
    <span>
      {JSON.stringify(filters)}
      <button onClick={() => setFilters({ ...filters, view: 'column' })}>
        <ColumnsIcon stroke={(filters.view === 'column') ? '#353535' : '#BFBFBF'} />
      </button>
      <button onClick={() => setFilters({ ...filters, view: 'list' })}>
        <ListIcon stroke={(filters.view === 'list') ? '#353535' : '#BFBFBF'} />
      </button>
    </span>
  )
}
