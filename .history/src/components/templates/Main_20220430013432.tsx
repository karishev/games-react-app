import React from 'react'
import { Header } from './Header'
import { Footer } from './Footer'
import styles from '../UI/modules/Main.module.css'

interface LayoutProps {
  children: React.ReactNode
}

export const Main = ({ children }: LayoutProps) => {
  const [theme, setThemes] = useState('light')
  return (
    <>
      <Header />
      <main className={`${styles.main_content} container`}>{children}</main>
      <Footer />
    </>
  )
}
