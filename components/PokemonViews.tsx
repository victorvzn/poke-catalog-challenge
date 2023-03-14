import React from 'react'
import { useFilters } from '../hooks/useFilters'
import { ListIcon, ColumnsIcon, ListIconActive, ColumnsIconActive } from './Icons'

interface Props {
  view?: string
}

export const PokemonView: React.FC<Props> = () => {
  const { filters, setFilters } = useFilters()

  return (
    <section className='pokemon-views__buttons'>
      <button onClick={() => setFilters({ ...filters, view: 'column' })}>
        {
          (filters.view === 'column')
            ? <ColumnsIconActive />
            : <ColumnsIcon />
        }
      </button>
      <button onClick={() => setFilters({ ...filters, view: 'list' })}>
        {
          (filters.view === 'list')
            ? <ListIconActive />
            : <ListIcon />
        }
      </button>
    </section>
  )
}
