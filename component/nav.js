import Link from 'next/link'
import styles from 'styles/nav.module.css'

export default function Nav () {
  return (
    <nav>
      <ul className={styles.list}>
        <li>
          <Link legacyBehavior href='/'>
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link legacyBehavior href='/about'>
            <a>About</a>
          </Link>
        </li>
        <li>
          <Link legacyBehavior href='/blog'>
            <a>Blog</a>
          </Link>
        </li>
      </ul>
    </nav>
  )
}
