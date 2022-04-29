import { GamesList } from '../UI/molecules/GamesList'
import { BiSearch } from 'react-icons/bi'
import styles from '../UI/modules/Home.module.css'

export const Home = () => {
  return (
    <>
      <form className={styles.form}>
        <label>
          <BiSearch className={styles.search_icon} />
          <input
            // onChange={(e) => setSearchTerm(e.target.value)}
            type="search"
            placeholder="Search for games"
            className={styles.input}
          />
        </label>
      </form>
      <GamesList />
    </>
  )
}
