import { getAllPosts } from 'lib/api'
import Meta from 'component/meta'
import Container from 'component/container'
import Hero from 'component/hero'
import Posts from 'component/posts'
import { getPlaiceholder } from 'plaiceholder'
import { eyecatchLocal } from 'lib/constants'

const Blog = ({ posts }) => {
  return (
    <Container>
      <Meta pageTitle='ブログ' pageDesc='ブログの記事一覧' />
      <Hero
        title='Blog'
        subtitle='Recent Posts'
      />
      <Posts posts={posts} />
    </Container>
  )
}

export default Blog

export async function getStaticProps () {
  const posts = await getAllPosts()

  for (const post of posts) {
    if (!post.hasOwnProperty('eyecatch')) {
      post.eyecatch = eyecatchLocal
    }
    const { base64 } = await getPlaiceholder(post.eyecatch.url)
    post.eyecatch.blurDataURL = base64
  }
  return {
    props: {
      posts
    }
  }
}
