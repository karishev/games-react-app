import { Routes, Route } from 'react-router-dom'
import { Check } from './Check'
import { Main } from './Components/Layout/Main'
import { Home } from './Pages/Home'

const App = () => {
  return (
    <Main>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Main>
  )
}

export default App
