import { createContext, useEffect, useReducer } from "react";
import { Game } from "../../model/games.model";
import Reducer from "./Reducer";

interface ContextProps {
  favorites: Game[];
  amount: number;
  addToFavorite: (game: Game) => void;
  isFavorite: (id: number) => boolean;
}

const initialState = {
  favorites: [],
  amount: 0,
  addToFavorite: () => {},
  isFavorite: () => false,
};

export const FavoritesContext = createContext<ContextProps>(initialState);

interface StoreProps {
  children: React.ReactNode;
}

const initializeState = () => {
  const fromlocalStorage = JSON.parse(
    localStorage.getItem("favoriteGames") as string
  );
  return (
    (fromlocalStorage && {
      favorites: fromlocalStorage,
      amount: 0,
      addToFavorite: () => {},
      isFavorite: () => false,
    }) ||
    initialState
  );
};

export const FavoritesProvider: React.FC<StoreProps> = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initializeState());

  const isFavorite = (id: number) => {
    return state.favorites.some((game: Game) => game.id === id);
  };

  const addToFavorite = (game: Game) => {
    if (isFavorite(game.id)) {
      dispatch({ type: "REMOVE_FAVORITE", payload: game.id });
    } else {
      dispatch({ type: "ADD_FAVORITE", payload: game });
    }
  };

  useEffect(() => {
    state.favorites &&
      localStorage.setItem("favoriteGames", JSON.stringify(state.favorites));
  }, [state]);

  return (
    <FavoritesContext.Provider
      value={{
        favorites: state.favorites,
        amount: state.favorites.length,
        addToFavorite,
        isFavorite,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};
