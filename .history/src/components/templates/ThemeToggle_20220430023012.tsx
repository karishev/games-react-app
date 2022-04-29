import React, { useContext } from 'react'
import Switch from '@mui/material/Switch'
import styles from '../UI/modules/Header.module.css'
import { ThemeContext } from '../templates/Main'

const label = { inputProps: { 'aria-label': 'Switch demo' } }
// export const ThemeToggle = () => {
//   const { theme, setTheme } = useContext(ThemeContext)
//   const handleThemeToggle = () => {
//     setTheme(theme === 'light' ? 'dark' : 'light')
//   }
//   return (
//     <div>
//       <Switch
//         {...label}
//         defaultChecked={false}
//         className={styles.switch}
//         onChange={handleThemeToggle}
//         checked={theme === 'dark'}
//       />
//     </div>
//   )
// }
