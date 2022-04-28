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
  favorites: [],
  totalFavorites: 0,
  addToFavorite: (game: Game) => void
  gameIsFavorite: (id: Game) => void
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

  const toggleFavAction = (
    state: State,
    dispatch: any,
    episode: Game | any
  ): Action => {
    const episodeInFav = state.favorites.includes(episode)
    let dispatchObj = {
      type: 'ADD_FAV',
      payload: episode,
    }
    if (episodeInFav) {
      const favWithoutEpisode = state.favorites.filter(
        (fav: Game) => fav.id !== episode.id
      )
      dispatchObj = {
        type: 'REMOVE_FAV',
        payload: favWithoutEpisode,
      }
    }
    return dispatch(dispatchObj)
  }

  useEffect(() => {
    localStorage.setItem('favoriteGames', JSON.stringify(favorites))
  }, [favorites])

  return (
    <FavoritesContext.Provider value={{ favorites, dispatch }}>
      {children}
    </FavoritesContext.Provider>
  )
}

/*import { createContext, useEffect, useReducer } from "react";

export const FavoritesContext = createContext({
  favorites: [],
  totalFavorites: 0,
  addToFavorite: (game) => {},
  gameIsFavorite: (gameId) => {},
});

const favoriteReducer = (favorites, action) => {
  switch (action.type) {
    case "ADD_FAVORITE":
      return [action.payload, ...favorites];
    case "REMOVE_FAVORITE":
      return favorites.filter(
        (favoriteGame) => favoriteGame.id !== action.payload
      );
    default:
      return favorites;
  }
};

export default function FavoritesContextProvider({ children }) {
  const [favorites, dispatch] = useReducer(favoriteReducer, [], () => {
    return JSON.parse(localStorage.getItem("favoriteGames")) ?? [];
  });

  const gameIsFavorite = (gameId) => {
    return favorites.some((favoriteGame) => favoriteGame.id === gameId);
  };

  const addToFavorite = (game) => {
    if (gameIsFavorite(game.id)) {
      dispatch({ type: "REMOVE_FAVORITE", payload: game.id });
    } else {
      dispatch({ type: "ADD_FAVORITE", payload: game });
    }
  };

  useEffect(() => {
    localStorage.setItem("favoriteGames", JSON.stringify(favorites));
  }, [favorites]);

  return (
    <FavoritesContext.Provider
      value={{
        favorites,
        totalFavorites: favorites.length,
        addToFavorite,
        gameIsFavorite,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
} */
