import Social from 'component/social'
import styles from 'styles/contact.module.css'

const Contact = () => {
  return (
    <>
      <div className={styles.stack}>
        <h3 className={styles.headig}>Contact</h3>
        <Social iconsize='30px' />
        <address>cube@web.mail.address</address>
      </div>
    </>
  )
}

export default Contact
