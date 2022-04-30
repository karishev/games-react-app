import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { FavoritesProvider } from './components/store/Store'
import { SearchProvider } from './components/templates/SearchContext'
import ErrorBoundary from './components/UI/molecules/ErrorBoundary'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <FavoritesProvider>
      <SearchProvider>
        <ErrorBoundary>
          <App />
        </ErrorBoundary>
      </SearchProvider>
    </FavoritesProvider>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
