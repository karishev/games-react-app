import { Card, Skeleton, CardContent } from "@mui/material";
import React, { useContext } from "react";
import { ThemeContext } from "../../templates/Main";
import { MainTheme } from "../../templates/MainTheme";

const GameInfoSkeleton: React.FC = () => {
  const { theme } = useContext(ThemeContext);
  const headerStyle: MainTheme = {
    dark: {
      backgroundColor: "#696969",
    },
    light: {
      backgroundColor: "#D7D6D6",
    },
    common: {},
  };

  const themeStyle = {
    ...headerStyle.common,
    ...(theme === "light" ? headerStyle.light : headerStyle.dark),
  };
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
      }}
    >
      <Card
        sx={{
          maxWidth: "50vw",
          margin: "0.5rem",
          backgroundColor: "rgba(0,0,0,0)",
          boxShadow: "0",
        }}
      >
        <Skeleton
          animation="wave"
          width="30%"
          height="4rem"
          style={themeStyle}
        />
        <Skeleton
          animation="wave"
          variant="rectangular"
          width="50vw"
          height="auto"
          style={themeStyle}
          sx={{ aspectRatio: "16/9", borderRadius: 2 }}
        />
        <CardContent>
          <Skeleton animation="wave" width="30%" style={themeStyle} />
          <Skeleton
            animation="wave"
            width="90%"
            height={40}
            style={themeStyle}
          />
        </CardContent>
      </Card>
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
        <Skeleton
          animation="wave"
          variant="rectangular"
          width="20rem"
          height="auto"
          style={themeStyle}
          sx={{ aspectRatio: "16/9", borderRadius: 2 }}
        />

        <CardContent sx={{ padding: "0 8px", width: "100%" , marginTop: "1rem"}}>
          <Skeleton
            animation="wave"
            width="100%"
            height="1.5rem"
            style={themeStyle}
            sx={{ marginTop: "0.5rem" }}
          />
          <Skeleton
            animation="wave"
            width="100%"
            height="1.5rem"
            style={themeStyle}
            sx={{ marginTop: "0.5rem" }}
          />
          <Skeleton
            animation="wave"
            width="100%"
            height="1.5rem"
            style={themeStyle}
            sx={{ marginTop: "0.5rem" }}
          />
          <Skeleton
            animation="wave"
            width="100%"
            height="1.5rem"
            style={themeStyle}
            sx={{ marginTop: "0.5rem" }}
          />
        </CardContent>
      </Card>
    </div>
  );
};

export default React.memo(GameInfoSkeleton);
