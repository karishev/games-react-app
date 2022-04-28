import styles from '../UI/modules/Footer.module.css'

export const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className="container">
        <p className="text-muted">
          © {currentYear}, OneLab. All rights reserved
        </p>
        <p></p>
        <p className={styles.created}>
          Created with love by Ali and Shyngys
        </p>
      </div>
    </footer>
  )
}
