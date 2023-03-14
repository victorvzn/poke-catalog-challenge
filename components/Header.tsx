import React from 'react'

import { SettingsIcon } from './Icons'

export const Header: React.FC = () => {
  return (
    <header className='header'>
      <h1 className='header__title'>Poké Catalog</h1>

      <div className='header-buttons'>
        <figure className='header__icon'>
          <SettingsIcon />
        </figure>
      </div>
    </header>
  )
}
