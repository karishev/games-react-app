import React from 'react'
import { Header } from './Header'
import { BottomBar } from './BottomBar'
import { Footer } from './Footer'
import styles from '../UI/Main.module.css'

export const Main = ({}) => {
  return (
    <>
      <Header />
      <BottomBar />
      <main className={`${styles.main_content} container`}></main>
      <Footer />
    </>
  )
}
