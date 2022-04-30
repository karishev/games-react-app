import React from 'react'
import { useContext } from 'react'
import styles from '../UI/modules/Footer.module.css'
import { ThemeContext } from './Main'
import { MainTheme } from './MainTheme'

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()
  const { theme } = useContext(ThemeContext)
  const headerStyle: MainTheme = {
    dark: {
      backgroundColor: 'black',
      color: 'white',
    },
    light: {
      backgroundColor: 'lightgray',
      color: 'black',
    },
    common: {
      transition: 'all 0.5s ease',
    },
  }

  const themeStyle = {
    ...headerStyle.common,
    ...(theme === 'light' ? headerStyle.light : headerStyle.dark),
  }
  return (
    <footer style={themeStyle} className={styles.footer}>
      <div className="container">
        <p className="text-muted">
          © {currentYear}, OneLab. All rights reserved
        </p>
        <p className={styles.created}>Created with love by Ali and Shyngys</p>
      </div>
    </footer>
  )
}

export default React.memo(Footer)
