import { Game } from "../../../model/games.model";
import styles from "../modules/GameListItem.module.css";
import React from "react";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";

interface PageProps {
  game: Game;
}

export const GamesListItem: React.FC<PageProps> = ({ game }) => {
  return (
    <Card
      sx={{
        maxWidth: "18rem",
        margin: "0.5rem",
        backgroundColor: "rgba(0,0,0,0)",
        boxShadow: "0",
      }}
    >
      <CardMedia
        className={styles.game_image}
        sx={{ aspectRatio: "16/9", maxWidth: "100%", borderRadius: 2 }}
        component="img"
        alt={game.title}
        image={game.thumbnail}
      />
      <CardContent>
        <Typography variant="body1" component="div" color="white">
          {game.title}
        </Typography>
        <Typography variant="body2" color="gray">
          {game.short_description.length > 80
            ? game.short_description.substring(0, 80) + "..."
            : game.short_description}
        </Typography>
      </CardContent>
    </Card>
  );
};
