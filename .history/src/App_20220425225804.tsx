import { Children } from 'react'
import './App.css'
import { Check } from './Check'
import { Main } from './Components/Layout/Main'

const App = () => {
  return (
    <>
      <Main children={Children} />
      <Check />
    </>
  )
}

export default App
