import { useState, useContext } from 'react'
import { GameList } from '../Components/Games/GameList'
import { EpisodeProps, Game } from '../model/games.model'
import { FavoritesContext } from '../Components/Context/Fav'
// styles
import styles from '../Components/UI/Favorites.module.css'
import { Store } from '../Components/Context/Store'

const Favorites = () => {
  const { episodes, favorites } = useContext(FavoritesContext)
  return (
    <section className={styles.favorite}>
      <h1>Hello</h1>
    </section>
  )
}

export default Favorites
