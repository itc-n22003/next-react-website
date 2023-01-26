import { getPostBySlug } from 'lib/api'
import Container from 'component/container'

export default function Schedule ({ title, publish, content, eyecatch, categories }) {
  return (
    <Container>
      <h1>{title}</h1>
    </Container>
  )
}

export async function getStaticProps () {
  const slug = 'schedule'

  const post = await getPostBySlug(slug)

  return {
    props: {
      title: post.title,
      publish: post.publishData,
      content: post.content,
      eyecatch: post.eyecatch,
      categories: post.categories
    }
  }
}
