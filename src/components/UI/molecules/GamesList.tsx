import { GamesListItem } from "../atoms/GamesListItem";
import { GameListItemSkeleton } from "../atoms/GameListItemSkeleton";
import { useEffect, useState } from "react";
import style from "../molecules/GamesList.module.css";
import api from "../../../services/api";
import { Game } from "../../../model/games.model";
import { Grid} from "@mui/material";

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
        <Grid
          container
          rowSpacing={2}
          justifyContent="space-evenly"
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        >
          {games
            ? games.map((game: Game) => {
                return <GamesListItem key={game.id} game={game} />;
              })
            : Array.from(new Array(16)).map(( num: number) => {
                return <GameListItemSkeleton key={num} />;
              })}
        </Grid>
      </section>
    </>
  );
};
