import Link from 'next/link'
import styles from 'styles/logo.module.css'

const Logo = ({ boxOn = false }) => {
  return (
    <Link legacyBehavior href='/'>
      <a className={boxOn ? styles.box : styles.basic}>CUBE</a>
    </Link>
  )
}
export default Logo
