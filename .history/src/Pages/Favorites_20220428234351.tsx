import { useContext } from 'react'
import { GameList } from '../Components/Games/GameList'

// styles
import styles from './Favorites.module.css'
import { Store } from '../Components/Context/Store'

const Favorites = () => {
  const { favorites, totalFavorites } = useContext(Store)

  return (
    <section className={styles.favorite}>
      <h1 className="title">Your Favorite Games</h1>
      {totalFavorites === 0 ? (
        <p className={styles.feedback}>No favorite games yet!</p>
      ) : (
        <GameList games={favorites} />
      )}
    </section>
  )
}

export default Favorites
