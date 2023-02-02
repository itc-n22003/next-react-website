import styles from 'styles/post-categories.module.css'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFolderOpen } from '@fortawesome/free-regular-svg-icons'

const PostCategories = ({ categories }) => {
  return (
    <div className={styles.flexContainer}>
      <h3 className={styles.heading}>
        <FontAwesomeIcon icon={faFolderOpen} />
        <span className='sr-only'>Categories</span>
      </h3>
      <ul className={styles.list}>
        {categories.map(({ name, slug }) => (
          <li key={slug}>
            <Link legacyBehavior href={`/blog/categories/${slug}`}>
              <a>{name}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default PostCategories
