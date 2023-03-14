import React, { useEffect, useState } from 'react'
import { Link } from '../renderer/Link'

import { MoonIcon, SunIcon } from './Icons'

export const Header: React.FC = () => {
  const [theme, setTheme] = useState('')

  useEffect(() => {
    const tmp = window.localStorage.getItem('theme') ?? ''
    setTheme(tmp)
  }, [theme])

  return (
    <header className='header'>
      <h1 className='header__title'>
        <Link href='/' className='header__link'>
          Poké Catalog
        </Link>
      </h1>

      <div className='header-buttons'>
        <figure
          className={`header__icon ${(theme === 'dark') ? 'header__icon--active' : ''}`} onClick={() => {
            localStorage.setItem('theme', 'dark')
            setTheme('dark')
            document.body.classList.remove('light')
            document.body.classList.add('dark')
          }}
        >
          <MoonIcon />
        </figure>
        <figure
          className={`header__icon ${(theme === 'light') ? 'header__icon--active' : ''}`} onClick={() => {
            localStorage.setItem('theme', 'light')
            setTheme('light')
            document.body.classList.remove('dark')
            document.body.classList.add('light')
          }}
        >
          <SunIcon />
        </figure>
      </div>
    </header>
  )
}
