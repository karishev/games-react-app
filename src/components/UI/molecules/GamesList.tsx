import { GamesListItem } from "../atoms/GamesListItem";
import { useEffect, useState } from "react";
import style from "../molecules/GamesList.module.css"
import api from "../../../services/api";
import { Game } from "../../../model/games.model";

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
export const GamesList = () => {
  const [games, setGames] = useState<Game[]>();

  useEffect(() => {
    fetchGames().then((response) => response && setGames(response));
  }, []);
  return (
    <>
      <section className={style.grid}>
        {games &&
          games.map((game: Game) => {
            return <GamesListItem key={game.id} game={game} />;
          })}
      </section>
    </>
  );
};
