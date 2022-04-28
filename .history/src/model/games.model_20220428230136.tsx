export interface Game {
  id: number
  title: string
  thumbnail: string
  short_description: string
  game_url: string
  genre: string
  platform: string
  publisher: string
  developer: string
  release_date: string
  freetogame_profile_url: string
}
export interface State {
  episodes: Array<Game>
  favorites: Array<Game>
}

export interface Action {
  type: string
  payload: any
}

export interface IEpisodeProps {
  episodes: Array<Game>
  store: { state: State; dispatch: any }
  toggleFavAction: (state: State, dispatch: any, episode: Game) => Action
  favorites: Array<Game>
}

interface GamesRepsonse {
  data: Array<Game>
}

export default function (api: {
  get: (arg0: string) => Promise<GamesRepsonse>
}) {
  return {
    getGames: () =>
      api.get('/games').then((response: GamesRepsonse) => {
        return response.data
      }),
  }
}
