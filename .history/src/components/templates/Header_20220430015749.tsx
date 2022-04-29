import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import styles from '../UI/modules/Header.module.css'
import { IoGameController } from 'react-icons/io5'
import { Input } from '@mui/material'
import Switch from '@mui/material/Switch'
import { ThemeToggle } from './ThemeToggle'
import { ThemeContext } from '../templates/Main'
import { MainTheme } from './MainTheme'

export const Header: React.FC = () => {
  const label = { inputProps: { 'aria-label': 'Switch demo' } }
  const { theme } = useContext(ThemeContext)

  const headerStyle: MainTheme {
    dark: {
      backgroundColor: 'black',
      color: 'white',
    }
  }

  return (
    <header className={styles.header}>
      <div className={`${styles.container} container`}>
        <div className={styles.leftpart}>
          <NavLink to="/">
            <IoGameController className={styles.logo} />
          </NavLink>
        </div>
        <nav className={styles.navigation}>
          <ul>
            <li>
              <NavLink to="/">Catalog</NavLink>
            </li>
            <li>
              <NavLink to="popular">Popular</NavLink>
            </li>
            <li>
              <NavLink to="favorites">Favorites</NavLink>
            </li>
            <span>{theme}</span>
            <ThemeToggle />
          </ul>
        </nav>
      </div>
    </header>
  )
}
