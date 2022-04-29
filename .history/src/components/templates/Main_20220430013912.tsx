import React from 'react'
import { Header } from './Header'
import { Footer } from './Footer'
import styles from '../UI/modules/Main.module.css'
import { useState, createContext } from 'react'

interface LayoutProps {
  children: React.ReactNode
}

interface ThemeContext {
  theme: string
  setTheme: any
}

export const ThemeContext = createContext({} as ThemeContext)

export const Main = ({ children }: LayoutProps) => {
  const [theme, setThemes] = useState('light')
  <ThemeContext.Provider ></ThemeContext.Provider>
  return (
    <>
      <Header />
      <main className={`${styles.main_content} container`}>{children}</main>
      <Footer />
    </>
  )
}
