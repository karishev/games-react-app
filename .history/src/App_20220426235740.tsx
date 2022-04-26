import './App.css'
import { Check } from './Check'
import { Main } from './Components/Layout/Main'
import { Home } from './Pages/Home'

const App = () => {
  return (
    <Main>
      <Home />
      <Check />
    </Main>
  )
}

export default App
