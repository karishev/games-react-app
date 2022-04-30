import { Grid, Typography } from "@mui/material";
import { useContext } from "react";
import { Game } from "../../model/games.model";
import style from "../UI/modules/GamesList.module.css";
import { FavoritesContext } from "../store/Store";
import { GameListItemSkeleton } from "../UI/atoms/GameListItemSkeleton";
import { GamesListItem } from "../UI/atoms/GamesListItem";
export const Favorites = () => {
  const { favorites } = useContext(FavoritesContext);

  return (
    <>
      <section className={style.grid}>
      <Typography variant="h4" sx={{marginBottom: "2rem"}}>Your Favorites</Typography>
        <Grid
          container
          rowSpacing={0.5}
          justifyContent="space-evenly"
          columnSpacing={{ xs: 1, sm: 1, md: 3 }}
        >
          {favorites
            ? favorites.map((game: Game) => {
                return <GamesListItem key={game.id} game={game} />;
              })
            : Array.from(new Array(16)).map((item, index) => {
                return <GameListItemSkeleton key={index} />;
              })
            : (favorites === )}
        </Grid>
      </section>
    </>
  );
};
