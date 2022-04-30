import { Slider } from "../atoms/Slider";
import { GameDetails } from "../../../model/game.model";
import { GameInfoBasics } from "./GameInfoBasics";
import styles from "../modules/GameInfo.module.css";
import { styled, Typography } from "@mui/material";
import { SystemReqs } from "../molecules/SystemReqs";
import { ThemeContext } from "../../templates/Main";
import { MainTheme } from "../../templates/MainTheme";
import React, { useContext } from "react";
import { FavoritesContext } from "../../store/Store";

const TypographyImproved = styled(Typography)({
  marginTop: "2rem",
  fontWeight: "400",
  maxWidth: "50vw",
  color: "#F5F5F599",
  lineHeight: "25px",
});

interface Props {
  game: GameDetails;
}

const GameInfo: React.FC<Props> = ({ game }) => {

  const {addToFavorite } = useContext(FavoritesContext);

  const { theme } = useContext(ThemeContext);
  const headerStyle: MainTheme = {
    dark: {
      backgroundColor: "#161515ed",
      color: "white",
    },
    light: {
      backgroundColor: "#f8f7f7",
      color: "black",
    },
    common: {},
  };

  const themeStyle = {
    ...headerStyle.common,
    ...(theme === "light" ? headerStyle.light : headerStyle.dark),
  };

  const checked = game.description.split(". ");

  const HandleClick = () => {
    addToFavorite(game);
  }
  return (
    <div className={styles.container}>
      <div>
        <Slider
          images={game.screenshots.map((item) => item.image)}
          title={game.title}
        />

        <TypographyImproved variant="body2" style={themeStyle}>
          {game.description.substring(
            0,
            game.description.indexOf(
              checked.length > 8 ? checked[7] : checked[checked.length - 1]
            )
          )}
        </TypographyImproved>
        {checked.length > 8 && (
          <TypographyImproved variant="body2" style={themeStyle}>
            {game.description.substring(game.description.indexOf(checked[7]))}
          </TypographyImproved>
        )}
        <TypographyImproved
          variant="body1"
          style={themeStyle}
        >
          Specifications
        </TypographyImproved>
        <SystemReqs reqs={game.minimum_system_requirements} />
      </div>
      <GameInfoBasics
        id={game.id}
        game_image={game.thumbnail}
        publisher={game.publisher}
        developer={game.developer}
        release_date={game.release_date}
        platform={game.platform}
        HandleClick = {HandleClick}
      />
    </div>
  );
};

export default React.memo(GameInfo);
