import Meta from 'component/meta'
import Container from 'component/container'
import Hero from 'component/hero'

const Home = () => {
  return (
    <Container>
      <Meta />
      <Hero
        title='CUBE'
        subtitle='アップしていくサイト'
        imageOn
      />
    </Container>
  )
}

export default Home
