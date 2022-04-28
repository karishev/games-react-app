import { useState, useContext } from 'react'
import { GameList } from '../Components/Games/GameList'
import { EpisodeProps, Game } from '../model/games.model'
// styles
import styles from '../Components/UI/Favorites.module.css'
import { Store } from '../Components/Context/Store'

const Favorites = () => {
  return (
    <section className={styles.favorite}>
      <h1>Hello</h1>
    </section>
  )
}

export default Favorites
