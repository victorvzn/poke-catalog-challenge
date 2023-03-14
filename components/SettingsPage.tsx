import React, { useEffect, useState } from 'react'

export const SettingsPage: React.FC = () => {
  const [theme, setTheme] = useState('')

  useEffect(() => {
    const tmp = window.localStorage.getItem('theme') ?? ''
    setTheme(tmp)
  }, [theme])

  const modes = [
    {
      id: 'light',
      name: 'Light mode'
    },
    {
      id: 'dark',
      name: 'Dark mode'
    },
    {
      id: 'unicorn',
      name: 'Unicorn mode'
    }
  ]

  return (
    <>
      <main className='container'>
        <section className='container__section'>

          <div className='settings-modes'>
            <header>
              <h3>Themes</h3>
              <p>Select a theme</p>
            </header>

            {modes.map(mode => (
              <div
                className={`settings-mode ${(theme === mode.id) ? 'setting-mode--active' : ''}`}
                key={mode.id}
                onClick={() => {
                  setTheme(mode.id)
                  localStorage.setItem('theme', mode.id)
                  document.body.classList.toggle(theme)
                }}
              >
                {mode.name}
              </div>
            ))}
          </div>

        </section>
      </main>

      <footer className='footer'>
        <a href='https://victorvillazon.com'>Victor Villazón</a> - <strong>March 2023</strong>
      </footer>
    </>
  )
}
