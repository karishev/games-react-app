import React from 'react'
import { GameList } from '../Components/Games/GameList'
import { BiSearch } from 'react-icons/bi'
import styles from '../Components/UI/Home.module.css'
export const Home = () => {
  const currentYear = new Date().getFullYear()

  return (
    <div>
      <section>
        <div className="text-center">
          <h1 className="title">
            Best Free to Play Games for PC and Browser in {currentYear}!
          </h1>
          <p className="text-muted subtitle">
            369 free-to-play games found in our list!
          </p>
        </div>
        <form className={styles.form}>
          <label>
            <BiSearch className={styles.search_icon} />
            <input
              onChange={(e) => setSearchTerm(e.target.value)}
              type="search"
              placeholder="Search for games"
              className={styles.input}
            />
          </label>
        </form>
        {/* {debouncedSearchTerm && filteredGames.length === 0 && (
          <p className="text-center">Sorry, no games found :(</p>
        )} */}
      </section>

      <section className={styles.games_content}>
        {isPending && <Spinner />}
        {error && <p>{error}</p>}
        {allGames && (
          <GameList items={debouncedSearchTerm ? filteredGames : allGames} />
        )}
      </section>
    </div>
  )
}
