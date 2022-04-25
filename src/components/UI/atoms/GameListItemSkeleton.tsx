import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Skeleton,
  Typography,
} from "@mui/material";

export const GameListItemSkeleton: React.FC = () => {
  return (
    <Card sx={{ maxWidth: "20rem", margin: "0.8rem" }}>
      <Skeleton
        variant="rectangular"
        width="20rem"
        height="auto"
        sx={{ aspectRatio: "16/10" }}
      />
      <CardContent>
        <Skeleton width="30%" />
        <Skeleton width="90%" height={40} />
      </CardContent>
    </Card>
  );
};
