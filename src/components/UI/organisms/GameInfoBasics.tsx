import { Button, Card, CardContent, CardMedia } from "@mui/material";
import { InfoItem } from "../atoms/InfoItem";
import { ThemeContext } from "../../templates/Main";
import { MainTheme } from "../../templates/MainTheme";
import { useContext } from "react";
import { FavoritesContext } from "../../store/Store";

interface Props {
  id: number,
  game_image: string;
  publisher: string;
  developer: string;
  release_date: string;
  platform: string;
  HandleClick: () => void;
}

export const GameInfoBasics: React.FC<Props> = (game) => {

  const { isFavorite } = useContext(FavoritesContext);
  
  const { theme } = useContext(ThemeContext);
  const headerStyle: MainTheme = {
    dark: {
      backgroundColor: "#161515ed",
      color: "white",
      borderColor: "white",
    },
    light: {
      backgroundColor: "#f8f7f7",
      color: "black",
      borderColor: "black",
    },
    common: {},
  };

  const themeStyle = {
    ...headerStyle.common,
    ...(theme === "light" ? headerStyle.light : headerStyle.dark),
  };

  const reverseTheme = {
    ...headerStyle.common,
    ...(theme !== "light" ? headerStyle.light : headerStyle.dark),
  };
  return (
    <Card
      sx={{
        marginLeft: "2rem",
        maxWidth: "20rem",
        marginTop: "5rem",
        backgroundColor: "rgba(0,0,0,0)",
        boxShadow: "0",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <CardMedia
        sx={{
          aspectRatio: "16/9",
          maxWidth: "100%",
          borderRadius: 1,
        }}
        component="img"
        alt={game.developer}
        image={game.game_image}
      />

      <CardContent sx={{ padding: "0 8px", width: "100%" }}>
        {Object.entries(game).map(
          ([key, value]) =>
            value !== game.game_image && value !== game.id  && value !== game.HandleClick && (
              <InfoItem key={key} first={key} second={value} />
            )
        )}
      </CardContent>
      <Button
        variant="outlined"
        style={isFavorite(game.id) ? themeStyle : reverseTheme}
        sx={{
          fontWeight: "400",
          marginTop: "1rem",
          maxWidth: "90%",
        }}
        fullWidth
        onClick={() => {game.HandleClick()}}
      >
        {!isFavorite(game.id) ? "Add to Favorites" : "Remove from Favorites"}
      </Button>
    </Card>
  );
};
