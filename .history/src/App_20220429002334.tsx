import { Routes, Route } from 'react-router-dom'
import { Main } from './Components/Layout/Main'
import Favorites from './Pages/Favorites'
import { Home } from './Pages/Home'

const App = () => {
  return (
    <Main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </Main>
  )
}

export default App
