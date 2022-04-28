import { useState, useContext } from 'react'
import { GameList } from '../Components/Games/GameList'
import { EpisodeProps, Game } from '../model/games.model'
// styles
import styles from '../Components/UI/Favorites.module.css'
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
      <h1>Hello</h1>
    </section>
  )
}

export default Favorites
