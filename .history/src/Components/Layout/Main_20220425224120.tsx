import React from 'react'
import { Header } from './Header'
import { BottomBar } from './BottomBar'
import { Footer } from './Footer'
import classes from '../UI/Main.module.css'

interface Main {
  children: any
}

export const Main = ({ children }: Main) => {
  return (
    <>
      <Header />
      <BottomBar />
      <main className={`${styles.main_content} container`}>{children}</main>
      <Footer />
    </>
  )
}
