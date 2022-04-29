import { ThemeContext } from '@emotion/react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import { Main } from './components/templates/Main'
import { routes } from './router/routes'

const App = () => {
  return (
    <BrowserRouter>
      <ThemeContext.Provider></ThemeContext.Provider>
      <Main>
        <Routes>
          {routes.map((route, i) => (
            <Route key={i} path={route.path} element={route.component} />
          ))}
        </Routes>
      </Main>
    </BrowserRouter>
  )
}

export default App
