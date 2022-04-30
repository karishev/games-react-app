import { Home } from '../components/pages/HomePage'
import { GameInformation } from '../components/pages/GameInformationPage'
import { Popular } from '../components/pages/PopularPage'
import { Favorites } from '../components/pages/FavoritesPage'
import NotFound from '../components/pages/NotFound'
import { AboutPage } from '../components/pages/AboutPage'

export const routes = [
  {
    path: '/',
    component: <Home />,
  },
  {
    path: '/games/:id',
    component: <GameInformation />,
  },
  {
    path: '/about',
    component: <AboutPage />,
  },
  {
    path: '/favorites',
    component: <Favorites />,
  },
  {
    path: '*',
    component: <NotFound />,
  },
]
