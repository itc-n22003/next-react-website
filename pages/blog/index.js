import Meta from 'component/meta'
import Container from 'component/container'
import Hero from 'component/hero'

const Blog = () => {
  return (
    <>
      <Container>
        <Meta pageTitle='ブログ' pageDesc='ブログの記事一覧' />
        <Hero
          title='Blog'
          subtitle='Recent Posts'
        />
      </Container>
    </>
  )
}
export default Blog
