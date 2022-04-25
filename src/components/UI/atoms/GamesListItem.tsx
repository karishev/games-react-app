import { Game } from "../../../model/games.model";
import React from "react";

interface PageProps {
    game: Game
}

export const GamesListItem: React.FC<PageProps> = ({game}) => {
  return (
    <div>
      <h1>{game.title}</h1>
    </div>
  );
};
