import React from 'react'
import { NavLink, useParams } from 'react-router-dom'
import styles from '../UI/modules/Header.module.css'
import { IoGameController } from 'react-icons/io5'

export const Header:React.FC = () => {
  const activeStyle = {
    color: '#fff',
  }
  const i = useParams()

  console.log(i);

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
                //   style={({ isActive }) => ({
                //     color: isActive ? activeStyle : null,
                //   })}
              >
                Catalog
              </NavLink>
            </li>
            <li>
              {/* <NavLink
                to="popular"
                // style={({ isActive }) => (isActive ? activeStyle : null)}
              > */}
                Popular
              {/* </NavLink> */}
            </li>
            <li>
              {/* <NavLink
                to="favorites"
                // style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                Favorites */}
              {/* </NavLink> */}
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
