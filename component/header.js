import Container from 'component/container'
import Logo from 'component/logo'
import Nav from 'component/nav'
import styles from 'styles/header.module.css'

const Header = () => {
  return (
    <header>
      <Container large>
        <div className={styles.flexContainer}>
          <Logo boxOn />
          <Nav />
        </div>
      </Container>
    </header>
  )
}
export default Header
