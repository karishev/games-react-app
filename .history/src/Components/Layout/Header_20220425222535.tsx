import { FC } from 'react'
import { NavLink } from 'react-router-dom'
import { IoGameController } from 'react-icons/io5'
import styles from './Header.module.css'

type HeaderProps = {
  isActive: boolean
}

export const Header = (HeaderProps: { isActive }) => {
  const activeStyle = {
    color: '#fff',
  }

  return (
    <header className={styles.header}>
      <div className={`${styles.container} container`}>
        <NavLink to="/">
          <IoGameController className={styles.logo} />
        </NavLink>
        <nav className={styles.navigation}>
          <ul>
            <li>
              <NavLink
                to="/"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="popular"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                Popular
              </NavLink>
            </li>
            <li>
              <NavLink
                to="favorites"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                Favorites
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
