import React from "react";
import {
  Card,
  CardContent,
  Skeleton,
} from "@mui/material";

export const GameListItemSkeleton: React.FC = () => {
  return (
    <Card sx={{ maxWidth: "18rem", margin: "0.8rem" }}>
      <Skeleton
        animation="wave"
        variant="rectangular"
        width="18rem"
        height="auto"
        sx={{ aspectRatio: "16/9" }}
      />
      <CardContent>
        <Skeleton animation="wave" width="30%" />
        <Skeleton animation="wave" width="90%" height={40} />
      </CardContent>
    </Card>
  );
};
