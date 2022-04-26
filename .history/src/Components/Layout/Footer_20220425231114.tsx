import { AiFillHeart } from 'react-icons/ai'
import styles from '../UI/Footer.module.css'

export const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className="container">
        <p className="text-muted">
          © {currentYear} Gametis, all rights reserved.
        </p>
        <p className={styles.created}>
          Created with{' '}
          <span>
            <AiFillHeart className={styles.heart} />
          </span>{' '}
          by Ali and Shyngys
        </p>
      </div>
    </footer>
  )
}