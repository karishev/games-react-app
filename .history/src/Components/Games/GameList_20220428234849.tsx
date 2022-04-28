import { useEffect, useState } from 'react'
import styles from '../UI/GameList.module.css'
import api from '../../services/api'
import { Game } from '../../model/games.model'
import { GameItem } from './GameItem'

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

export const GameList = (props: any) => {
  const [games, setGames] = useState<Game[]>([])

  useEffect(() => {
    fetchGames().then((response) => response && setGames(response))
  }, [])

  return (
    <div className={styles.grid}>
      {games.map((game: Game) => (
        <GameItem key={game.id} game={game} />
      ))}
    </div>
  )
}
