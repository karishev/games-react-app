import { createContext, useEffect, useReducer } from 'react'
import { Action, State, Game } from '../../model/games.model'

export const fetchDataAction = async (dispatch: any) => {
  const URL = 'https://free-to-play-games-database.p.rapidapi.com/api'
  const data = await fetch(URL)
  const dataJSON = await data.json()
  return dispatch({
    type: 'FETCH_DATA',
    payload: dataJSON._embedded.episodes,
  })
}

const initialState: State = {
  episodes: [],
  favorites: [],
}
type FavProps = {
  children: React.ReactNode
}

export const FavoritesContext = createContext<State | any>(initialState)

const favoriteReducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'FETCH_DATA':
      return { ...state, episodes: action.payload }
    case 'ADD_FAV':
      return { ...state, favorites: [...state.favorites, action.payload] }
    case 'REMOVE_FAV':
      return { ...state, favorites: action.payload }
    default:
      return state
  }
}

export default function FavoritesContextProvider({ children }: FavProps) {
  const [favorites, dispatch] = useReducer(favoriteReducer, initialState)

  useEffect(() => {
    localStorage.setItem('favoriteGames', JSON.stringify(favorites))
  }, [favorites])

  const gameIsFavorite = (game: Game) => {
    return favorites.some((favoriteGame) => favoriteGame.id === game.id)
  }

  const addToFavorite = (game) => {
    if (gameIsFavorite(game.id)) {
      dispatch({ type: 'REMOVE_FAVORITE', payload: game.id })
    } else {
      dispatch({ type: 'ADD_FAVORITE', payload: game })
    }
  }

  return (
    <FavoritesContext.Provider value={{ favorites, dispatch }}>
      {children}
    </FavoritesContext.Provider>
  )
}
