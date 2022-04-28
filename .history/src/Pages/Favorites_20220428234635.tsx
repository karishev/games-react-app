import { useState, useContext } from 'react'
import { GameList } from '../Components/Games/GameList'
import { Game } from '../model/games.model'
// styles
import styles from './Favorites.module.css'
import { Store } from '../Components/Context/Store'

const Favorites = () => {
  const [games, setGames] = useState<Game[]>([])
  const { state, dispatch } = useContext(Store)

  return (
    <section className={styles.favorite}>
      <h1 className="title">Your Favorite Games</h1>
      {totalFavorites === 0 ? (
        <p className={styles.feedback}>No favorite games yet!</p>
      ) : (
        <GameList games={state} />
      )}
    </section>
  )
}

export default Favorites
