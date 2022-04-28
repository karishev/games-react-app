import { useState, useContext } from 'react'
import { GameList } from '../Components/Games/GameList'
import { Game } from '../model/games.model'
// styles
import styles from './Favorites.module.css'
import { Store } from '../Components/Context/Store'

const Favorites = () => {
  const { state, dispatch } = useContext(Store)
  const props: EpisodeProps = {
    episodes: state.favorites,
    store: { state, dispatch },
    toggleFavAction: dispatch,
    favorites: state.favorites,
  }

  return (
    <section className={styles.favorite}>
      <h1 className="title">Your Favorite Games</h1>
      {dispatch === 0 ? (
        <p className={styles.feedback}>No favorite games yet!</p>
      ) : (
        <GameList {...props} />
      )}
    </section>
  )
}

export default Favorites
