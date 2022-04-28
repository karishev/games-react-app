import React from "react";
import { Card, CardContent, Skeleton } from "@mui/material";

export const GameListItemSkeleton: React.FC = () => {
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
        sx={{ aspectRatio: "16/9", borderRadius: 2, bgcolor: 'grey.900' }}
      />
      <CardContent>
        <Skeleton animation="wave" width="30%"  sx={{bgcolor: 'grey.900'}}/>
        <Skeleton animation="wave" width="90%" height={40} sx={{bgcolor: 'grey.900'}}/>
      </CardContent>
    </Card>
  );
};
