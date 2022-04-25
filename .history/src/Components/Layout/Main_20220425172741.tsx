import React from 'react'
import { Header } from './Header'
import { BottomBar } from './BottomBar'
import { Footer } from './Footer'

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
