import api from "./services/api";
import { Game } from "./model/games.model";
import { GameDetails } from "./model/game.model";
import { useEffect, useState } from "react";

const fetchGames = async () => {
  try {
    const games = await api.games.getGames();
    return games;
  } catch (error) {
    console.log("Error: " + error);
  } finally {
    console.log("Finished");
  }
};

const fetchGame = async (id: number) => {
  try {
    const game = await api.game.getGame(id);
    return game;
  } catch (error) {
    console.log("Error: " + error);
  } finally {
    console.log("Finished");
  }
};

export const Check = () => {
  const [games, setGames] = useState<Game[]>();
  const [game, setGame] = useState<GameDetails>();
  useEffect(() => {
    fetchGames().then((response) => response && setGames(response));
    fetchGame(1).then((response) => response && setGame(response));
  }, []);

  return (
    <>
      {game && <h1>{game.description}</h1>}
      {games !== undefined &&
        games.map((game: Game) => {
          return <h2 key={game.id}>{game.title}</h2>;
        })}
    </>
  );
};
