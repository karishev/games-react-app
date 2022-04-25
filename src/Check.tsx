import api from "./services/api";
import { Game } from "./model/games.model";
import { useEffect, useState } from "react";

export const Check = () => {
  const [games, setGames] = useState<Game[]>();
  useEffect(() => {
    api.games.getGames().then((response) => response && setGames(response));
    console.log(games);
  }, []);

  return (
    <>
      {games !== undefined &&
        games.map((game: Game) => {
          return <h2 key={game.id}>{game.title}</h2>;
        })}
    </>
  );
};
