import React from 'react'

interface Props {
  count?: number
}

export const PokemonResults: React.FC<Props> = ({ count = 0 }) => {
  const countPadded = String(count).padStart(2, '0')

  return (
    <>
      <h4>Showing <span>{countPadded}</span> results</h4>
    </>
  )
}
