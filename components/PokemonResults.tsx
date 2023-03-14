import React from 'react'
import { useFilters } from '../hooks/useFilters'

interface Props {
  count?: number
}

export const PokemonResults: React.FC<Props> = ({ count = 0 }) => {
  const countPadded = String(count).padStart(2, '0')

  return (
    <span>
      Showing <strong>{countPadded}</strong> results
    </span>
  )
}
