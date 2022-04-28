import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import FavoritesContextProvider from './Components/Context/Fav'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <BrowserRouter>
    <FavoritesContextProvider>
      <App />
    </FavoritesContextProvider>
  </BrowserRouter>
)
