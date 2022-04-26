import { createContext, useEffect, useReducer } from 'react'

interface ContextProps {
  game: string
  gameId: number
  children: React.ReactNode
}

interface ActionInterface {
  type: "increment" | "decrement";
  count: number;
}

interface StateInterface {
  count: number;
}

export const FavoriteContext = createContext<ContextProps>({
  favorites: ,
  totalFavorites: 0,
  addToFavorite: (g: string) => {},
  gameIsFavorite: (gi: string) => {},
})

const favoriteReducer = (favorites: any[], action: { type: any; payload: any }) => {
  switch (action.type) {
    case 'ADD_FAVORITE':
      return [action.payload, ...favorites]
    case 'REMOVE_FAVORITE':
      return favorites.filter(
        (favoriteGame: { id: any }) => favoriteGame.id !== action.payload
      )
    default:
      return favorites
  }
}

export default function FavoritesContextProvider({ children }: ContextProps) {
  const [favorites, dispatch] = useReducer(favoriteReducer, [], () => {
    return JSON.parse(localStorage.getItem('favoriteGames')) ?? []
  })

  const gameIsFavorite = (gameId: any) => {
    return favorites.some((favoriteGame: { id: any }) => favoriteGame.id === gameId)
  }

  const addToFavorite = (game: { id: any }) => {
    if (gameIsFavorite(game.id)) {
      dispatch({ type: 'REMOVE_FAVORITE', payload: game.id })
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
