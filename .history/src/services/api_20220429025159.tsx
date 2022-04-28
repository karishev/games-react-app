import axios from 'axios'
import games from '../model/games.model'
import game from '../model/game.model'

const api = axios.create({
  baseURL: 'https://free-to-play-games-database.p.rapidapi.com/api',
  headers: {
    'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com',
    'X-RapidAPI-Key': '8c77c25eb1msh4f11a270f840a84p123b1ejsnc07b53f3a8ff',
  },
})

export default {
  games: games(api),
  game: games(api),
}
