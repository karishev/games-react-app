import { createContext, useEffect, useReducer } from 'react'

export type ContextProps = {
  id: number
  game: string
  gameId: number
  totalFavorites: number
  addToFavorite: (g: string) => void
  gameIsFavorite: (gi: string) => void
}

interface Props {
  children: React.ReactNode
}

interface ActionInterface {
  type: 'ADD_FAVORITE' | 'REMOVE_FAVORITE'
  favorites: []
  payload: number
}

interface StateInterface {
  favorites: []
}

export const FavoriteContext = createContext<ContextProps>({
  id: 2,
  game: '',
  gameId: 2,
  totalFavorites: 0,
  addToFavorite: () => {},
  gameIsFavorite: () => {},
})

const favoriteReducer = (state: StateInterface, action: ActionInterface) => {
  switch (action.type) {
    case 'ADD_FAVORITE':
      return { ...state, payload: action.payload }
    case 'REMOVE_FAVORITE':
      return action.favorites.filter(
        (favoriteGame: { id: number }) => favoriteGame.id !== action.payload
      )
    default:
      return action.favorites
  }
}

export default function FavoritesContextProvider({ children }: Props) {
  const [favorites, dispatch] = useReducer(favoriteReducer, [], () => {
    return JSON.parse(localStorage.getItem('favoriteGames')) ?? []
  })

  const gameIsFavorite = (gameId: number) => {
    return favorites.some(
      (favoriteGame: { id: number }) => favoriteGame.id === gameId
    )
  }

  const addToFavorite = (game: string) => {
    if (gameIsFavorite(game.id)) {
      dispatch({ type: 'REMOVE_FAVORITE', action.payload: game.id })
    } else {
      dispatch({ type: 'ADD_FAVORITE', payload: game })
    }
  }

  useEffect(() => {
    localStorage.setItem('favoriteGames', JSON.stringify(favorites))
  }, [favorites])

  return (
    <FavoriteContext.Provider
      value={{
        favorites,
        totalFavorites: favorites.length,
        addToFavorite,
        gameIsFavorite,
      }}
    >
      {children}
    </FavoriteContext.Provider>
  )
}
