import React from 'react'
import { createContext } from 'react'
import { Action, State } from '../../model/games.model'

const initialState: State = {
  episodes: [],
  favorites: [],
}

export const Store = createContext<State | any>(initialState)

function reducer(state: State, action: Action): State {
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

export function StoreProvider({
  children,
}: JSX.ElementChildrenAttribute): JSX.Element {
  const [state, dispatch] = React.useReducer(reducer, initialState)
  return <Store.Provider value={{ state, dispatch }}>{children}</Store.Provider>
}
