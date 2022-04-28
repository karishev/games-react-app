import { Game } from "../../../model/games.model";
import styles from "../modules/GameListItem.module.css";
import React from "react";
import {
  Button,
  Card,
  CardContent,
  CardMedia,
  styled,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import { display } from "@mui/system";

interface PageProps {
  game: Game;
}

const AddButton = styled(Button)({
  position: "relative",
  fontSize: "15px",
  fontWeight: "bold",
  backgroundColor: "#121212",
  color: "white",
  padding: "0",
  border: "1px solid white",
  borderRadius: "50%",
  aspectRatio: "1/1",
  minWidth: "30px",
  visibility: "hidden",
  zIndex: "2",
});

export const GamesListItem: React.FC<PageProps> = ({ game }) => {
  return (
    <Card
      className={styles.container}
      sx={{
        maxWidth: "18rem",
        margin: "0.5rem",
        backgroundColor: "rgba(0,0,0,0)",
        boxShadow: "0",
      }}
    >
      <div className={styles.game_image}>
        <Link to={`/games/${game.id}`}>
          <CardMedia
            sx={{ aspectRatio: "16/9", maxWidth: "100%", borderRadius: 2 }}
            component="img"
            alt={game.title}
            image={game.thumbnail}
          />
        </Link>
      </div>
      <div className={styles.add}>
        <AddButton
          className={styles.add_icon}
          onClick={() => {
            console.log("salam");
          }}
        >
          +
        </AddButton>
      </div>
      <CardContent>
        <Link to={`/games/${game.id}`}>
          <Typography variant="body1" component="div" color="white">
            {game.title}
          </Typography>
        </Link>
        <Typography variant="body2" color="gray">
          {game.short_description.length > 80
            ? game.short_description.substring(0, 80) + "..."
            : game.short_description}
        </Typography>
      </CardContent>
    </Card>
  );
};
