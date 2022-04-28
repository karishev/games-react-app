import { Action, Game, State } from '../../model/games.model'

export const fetchDataAction = async (dispatch: any) => {
  const URL = 'https://free-to-play-games-database.p.rapidapi.com/api'
  const data = await fetch(URL)
  const dataJSON = await data.json()
  return dispatch({
    type: 'FETCH_DATA',
    payload: dataJSON._embedded.episodes,
  })
}

export const toggleFavAction = (
  state: State,
  dispatch: any,
  episode: Game | any
): Action => {
  const episodeInFav = state.favorites.includes(episode)
  let dispatchObj = {
    type: 'ADD_FAV',
    payload: episode,
  }
  if (episodeInFav) {
    const favWithoutEpisode = state.favorites.filter(
      (fav: Game) => fav.id !== episode.id
    )
    dispatchObj = {
      type: 'REMOVE_FAV',
      payload: favWithoutEpisode,
    }
  }
  return dispatch(dispatchObj)
}
