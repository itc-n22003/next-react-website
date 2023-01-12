import styles from 'styles/social.module.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faTwitter, faFacebookF, faGithub
} from '@fortawesome/free-brands-svg-icons'

const Social = ({ iconsize = 'initial' }) => {
  return (
    <ul className={styles.list} styles={{ '--icon-size': iconsize }}>
      <li>
        <a href='https://twitter.com/'>
          <FontAwesomeIcon icon={faTwitter} />
          <span className='sr-only'>Twitter</span>
        </a>
      </li>
      <li>
        <a href='https://www.facebook.com/'>
          <FontAwesomeIcon icon={faFacebookF} />
          <span className='sr-only'>Facebook</span>
        </a>
      </li>
      <li>
        <a href='https://github.com/'>
          <FontAwesomeIcon icon={faGithub} />
          <span className='sr-only'>Github</span>
        </a>
      </li>
    </ul>
  )
}

export default Social
