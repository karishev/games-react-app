import api from './services/api'
import { Game } from './model/game.model'
import { useEffect, useState } from 'react'

const fetchGames = async () => {
  try {
    const games = await api.games.getGames()
    return games
  } catch (error) {
    console.log('Error: ' + error)
  } finally {
    console.log('Finished')
  }
}

export const Check = () => {
  const [games, setGames] = useState<Game[]>()
  useEffect(() => {
    fetchGames().then((response) => response && setGames(response))
  }, [])

  return (
    <>
      {games !== undefined &&
        games.map((game: Game) => {
          return <h2 key={game.id}>{game.title}</h2>
        })}
    </>
  )
}
