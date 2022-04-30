import { Game } from "../../model/games.model";

export interface StateType {
  favorites: Array<Game>;
}

export interface ActionType {
  type: string;
  payload: any;
}

const Reducer = (state: StateType, action: ActionType): StateType => {
  switch (action.type) {
    case "ADD_FAVORITE":
      return { ...state, favorites: [...state.favorites, action.payload] };
    case "REMOVE_FAVORITE":
      return {
        ...state,
        favorites: state.favorites.filter(
          (game: Game) => game.id !== action.payload
        ),
      };

    default:
      return state;
  }
};

export default Reducer;
