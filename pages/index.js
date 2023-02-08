import { getAllPosts } from 'lib/api'
import Meta from 'component/meta'
import Container from 'component/container'
import Hero from 'component/hero'
import Posts from 'component/posts'
import Pagination from 'component/pagination'
import { getPlaiceholder } from 'plaiceholder'
import { eyecatchLocal } from 'lib/constants'

const Home = ({ posts }) => {
  return (
    <Container>
      <Meta />
      <Hero
        title='CUBE'
        subtitle='アップしていくサイト'
        imageOn
      />
      <Posts posts={posts} />
      <Pagination nextUrl='/blog' nextText='More Posts' />
    </Container>
  )
}
export default Home

export async function getStaticProps () {
  const posts = await getAllPosts(4)

  for (const post of posts) {
    if (!post.hasOwnProperty('eyecatch')) {
      post.eyecatch = eyecatchLocal
    }
    const { base64 } = await getPlaiceholder(post.eyecatch.url)
    post.eyecatch.blurDataURL = base64
  }
  return {
    props: { posts }
  }
}
