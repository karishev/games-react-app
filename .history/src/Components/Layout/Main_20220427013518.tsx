import React from 'react'
import { Header } from './Header'
import { BottomBar } from './BottomBar'
import { Footer } from './Footer'
import styles from '../UI/Main.module.css'

type LayoutProps = {
  children: React.ReactNode
}

export const Main = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      <main className={`${styles.main_content} container`}>{children}</main>
      <Footer />
    </>
  )
}
