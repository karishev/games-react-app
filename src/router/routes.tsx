import { Home } from "../components/pages/Home";
import { GameInformation } from "../components/pages/GameInformation";

export const routes = [
  {
    path: "/",
    component: <Home />,
  },
  {
    path: "/games/:id",
    component: <GameInformation />
  }
];
