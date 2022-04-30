import React, { useContext } from "react";
import { Card, CardContent, Skeleton } from "@mui/material";
import { ThemeContext } from "../../templates/Main";
import { MainTheme } from "../../templates/MainTheme";

const GameListItemSkeleton: React.FC = () => {
  const { theme } = useContext(ThemeContext);
  const headerStyle: MainTheme = {
    dark: {
      backgroundColor: "grey.800",
    },
    light: {
      backgroundColor: "grey.200",
    },
    common: {},
  };

  const themeStyle = {
    ...headerStyle.common,
    ...(theme === "light" ? headerStyle.light : headerStyle.dark),
  };
  return (
    <Card
      sx={{
        maxWidth: "18rem",
        margin: "0.5rem",
        backgroundColor: "rgba(0,0,0,0)",
        boxShadow: "0",
      }}
    >
      <Skeleton
        animation="wave"
        variant="rectangular"
        width="18rem"
        height="auto"
        style={themeStyle}
        sx={{ aspectRatio: "16/9", borderRadius: 2 }}
      />
      <CardContent>
        <Skeleton animation="wave" width="30%" style={themeStyle} />
        <Skeleton animation="wave" width="90%" height={40} style={themeStyle} />
      </CardContent>
    </Card>
  );
};

export default React.memo(GameListItemSkeleton);