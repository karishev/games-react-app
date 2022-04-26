import styles from '../UI/GameList.module.css'
import GameItem from './GameItem'

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

interface PageProps {
  game: Game
}

const GameList = ({ items }) => {
  return (
    <div className={styles.grid}>
      {items.map((game) => (
        <GameItem key={game.id} item={game} />
      ))}
    </div>
  )
}

export default GameList
