import { createContext, useEffect, useReducer } from 'react'
import React from 'react'
import { Game } from '../../model/games.model'

interface PageProps {
  game: Game
}

export type ContextProps = {
  id: number
  game: string
  gameId: number
  totalFavorites: number
  addToFavorite: (id: string) => void
  gameIsFavorite: (id: string) => void
}

type Props = {
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
    const local = localStorage.getItem('favoriteGames')
    return JSON.parse(local) ?? []
  })

  const gameIsFavorite = (gameId: any) => {
    return favorites.some(
      (favoriteGame: { id: any }) => favoriteGame.id === gameId
    )
  }

  const addToFavorite = (game: any) => {
    if (gameIsFavorite(game.id)) {
      dispatch()
    } else {
      dispatch()
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