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
export interface IState {
  episodes: Array<IEpisode>
  favorites: Array<IEpisode>
}

export interface IAction {
  type: string
  payload: any
}

export interface IEpisodeProps {
  episodes: Array<IEpisode>
  store: { state: IState; dispatch: any }
  toggleFavAction: (state: IState, dispatch: any, episode: IEpisode) => IAction
  favorites: Array<IEpisode>
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
