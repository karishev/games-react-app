import React from 'react'
import { Header } from './Header'
import { BottomBar } from './BottomBar'
import { Footer } from './Footer'
import styles from '../UI/Main.module.css'

interface Main {
  children: any
}

export const Main = ({ children }) => {
  return (
    <>
      <Header />
      <BottomBar />
      <main className={`${styles.main_content} container`}>{children}</main>
      <Footer />
    </>
  )
}
