import React from 'react'
import Switch from '@mui/material/Switch'

const label = { inputProps: { 'aria-label': 'Switch demo' } }
export const ThemeToggle = () => {
  return (
    <div>
      <Switch {...label} defaultChecked />
    </div>
  )
}
