import { useState, useContext } from 'react'
import { GameList } from '../Components/Games/GameList'
import { EpisodeProps, Game } from '../model/games.model'
import { FavoritesContext } from '../Components/Context/Fav'
// styles
import styles from '../Components/UI/Favorites.module.css'
import { Store } from '../Components/Context/Store'

const Favorites = () => {
  const { favorites, totalFavorites } = useContext(FavoritesContext)
  return (
    <section className={styles.favorite}>
      <h1 className="title">Your Favorite Games</h1>
      {totalFavorites === 0 ? (
        <p className={styles.feedback}>No favorite games yet!</p>
      ) : (
        <GameList items={favorites} />
      )}
    </section>
  )
}

export default Favorites
