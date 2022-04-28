import { Home } from "../components/pages/Home";
import { GameInformation } from "../components/pages/GameInformation";
import { Popular } from "../components/pages/Popular";
import { Favorites } from "../components/pages/Favorites";

export const routes = [
  {
    path: "/",
    component: <Home />,
  },
  {
    path: "/games/:id",
    component: <GameInformation />,
  },
  {
    path: "/popular",
    component: <Popular />,
  },
  {
    path: "/favorites",
    component: <Favorites />,
  },
];
