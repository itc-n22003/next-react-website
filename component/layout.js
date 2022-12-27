import Header from 'component/header'
import Footer from 'component/footer'

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}
export default Layout
