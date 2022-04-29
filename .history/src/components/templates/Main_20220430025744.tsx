import React from 'react'
import { Header } from './Header'
import { Footer } from './Footer'
import styles from '../UI/modules/Main.module.css'
import { useState, createContext } from 'react'
import { MainTheme } from './MainTheme'
interface LayoutProps {
  children: React.ReactNode
}

interface ThemeContext {
  theme: string
  setTheme: any
}

export const ThemeContext = createContext({} as ThemeContext)

export const Main = ({ children }: LayoutProps) => {
  const [theme, setTheme] = useState('light')
  const headerStyle: MainTheme = {
    dark: {
      backgroundColor: '#161515ed',
      color: 'white',
    },
    light: {
      backgroundColor: '#f8f7f7',
      color: 'black',
    },
    common: {
      transition: 'background-color 0.02s ease',
    },
  }

  const mainStyle = {
    ...headerStyle.common,
    ...(theme === 'light' ? headerStyle.light : headerStyle.dark),
  }
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <>
        <Header />
        <main style={mainStyle} className={`${styles.main_content} container`}>
          {children}
        </main>
        <Footer />
      </>
    </ThemeContext.Provider>
  )
}
