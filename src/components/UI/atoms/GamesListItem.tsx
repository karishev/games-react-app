import { Game } from "../../../model/games.model";
import React from "react";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";

interface PageProps {
  game: Game;
}

export const GamesListItem: React.FC<PageProps> = ({ game }) => {
  return (
    <Card sx={{ maxWidth: "20rem", margin: "0.8rem" }}>
      <CardMedia
        sx={{ aspectRatio: "16/9", maxWidth: "100%" }}
        component="img"
        alt={game.title}
        image={game.thumbnail}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {game.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {game.short_description}
        </Typography>
      </CardContent>
    </Card>
  );
};
