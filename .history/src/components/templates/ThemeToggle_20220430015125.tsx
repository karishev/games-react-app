import React from 'react'
import Switch from '@mui/material/Switch'
import styles from '../UI/modules/Header.module.css'

const label = { inputProps: { 'aria-label': 'Switch demo' } }
export const ThemeToggle = () => {
  const handleThemeToggle = () => {}
  return (
    <div>
      <Switch
        {...label}
        defaultChecked={false}
        className={styles.switch}
        onChange={handleThemeToggle}
      />
    </div>
  )
}
