import Container from 'component/container'
import Header from 'component/header'
import Footer from 'component/footer'

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main>
        <Container>{children}</Container>
      </main>
      <Footer />
    </>
  )
}
export default Layout
