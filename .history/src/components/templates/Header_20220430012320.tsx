import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from '../UI/modules/Header.module.css'
import { IoGameController } from 'react-icons/io5'
import { Input } from '@mui/material'
import Switch from '@mui/material/Switch'
import { style } from '@mui/system'

export const Header: React.FC = () => {
  const activeStyle = {
    color: '#fff',
  }
  const label = { inputProps: { 'aria-label': 'Switch demo' } }

  return (
    <header className={styles.header}>
      <div className={`${styles.container} container`}>
        <div className={styles.leftpart}>
          <NavLink to="/">
            <IoGameController className={styles.logo} />
          </NavLink>
          {/* <Input value="aa" /> */}
        </div>
        <nav className={styles.navigation}>
          <ul>
            <li>
              <NavLink
                to="/"
                //   style={({ isActive }) => ({
                //     color: isActive ? activeStyle : null,
                //   })}
              >
                Catalog
              </NavLink>
            </li>
            <li>
              <NavLink
                to="popular"
                // style={({ isActive }) => (isActive ? activeStyle : null)}
              >
                Popular
              </NavLink>
            </li>
            <li>
              <NavLink
                to="favorites"
                // style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                Favorites
              </NavLink>
            </li>
            <Switch {...label} defaultChecked className={styles.switch} />
          </ul>
        </nav>
      </div>
    </header>
  )
}
