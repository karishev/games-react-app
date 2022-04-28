import { Link } from 'react-router-dom'
import { AiFillWindows, AiFillHeart } from 'react-icons/ai'
import { GoBrowser } from 'react-icons/go'
import { Game } from '../../model/games.model'
import styles from '../UI/GameItem.module.css'
import { Store } from '../Context/Store'
import { useContext } from 'react'

interface PageProps {
  game: Game
  props: any
}

export const GameItem: React.FC<PageProps> = ({ game, props }) => {
  const { episodes, toggleFavAction, favorites, store } = props
  const { state, dispatch } = store
  return (
    <div className={styles.card}>
      <Link to={`/games/${game.id}`} className={styles.card_header}>
        <img className={styles.thumbnail} src={game.thumbnail} alt="test" />
      </Link>
      <div className={styles.card_body}>
        <Link to={`/games/${game.id}`} className={styles.title}>
          {game.title}
        </Link>
        <p className={`${styles.description} text-muted`}>
          {game.short_description.substring(0, 70)}...
        </p>
        <div className={styles.card_footer}>
          <div>
            <span className={styles.badge}>{game.genre}</span>
            {game.platform.includes('PC (Windows)') ? (
              <AiFillWindows
                className={styles.platform_icon}
                title="Available on Windows"
              />
            ) : (
              <GoBrowser
                className={styles.platform_icon}
                title="Available on Browser"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
