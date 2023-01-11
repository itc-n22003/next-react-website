import Container from 'component/container'
import Hero from 'component/hero'

const Home = () => {
  return (
    <Container>
      <Hero
        title='CUBE'
        subtitle='アップしていくサイト'
        imageOn
      />
    </Container>
  )
}

export default Home
