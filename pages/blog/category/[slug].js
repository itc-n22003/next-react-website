import { getAllCategories, getAllPostsByCategory } from 'lib/api'
import Container from 'component/container'
import PostHeader from 'component/post-header'
import Posts from 'component/posts'
import { getPlaiceholder } from 'plaiceholder'
import { eyecatchLocal } from 'lib/constants'

const Categories = ({ name, posts }) => {
  return (
    <Container>
      <PostHeader title={name} subtitle='Blog Categories' />
      <Posts posts={posts} />
    </Container>
  )
}
export default Categories

export async function getStaticPaths () {
  const allCats = await getAllCategories()
  return {
    paths: allCats.map(({ slug }) => `/blog/category/${slug}`),
    fallback: false
  }
}

export async function getStaticProps (context) {
  const catSlug = context.params.slug
  const allCats = await getAllCategories()
  const cat = allCats.find(({ slug }) => slug === catSlug)

  const posts = await getAllPostsByCategory(cat.id)

  for (const post of posts) {
    if (!post.hasOwnProperty('eyecatch')) {
      post.eyecatch = eyecatchLocal
    }

    const { base64 } = await getPlaiceholder(post.eyecatch.url)
    post.eyecatch.blurDataURL = base64
  }
  return {
    props: {
      name: cat.name,
      posts
    }
  }
}
