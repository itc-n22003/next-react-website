import { getPostBySlug } from 'lib/api'
import { extractText } from 'lib/extract-text'
import Meta from 'component/meta'
import Container from 'component/container'
import PostHeader from 'component/post-header'
import PostBody from 'component/post-body'
import { TwoColumn, TwoColumnMain, TwoColumnSidebar } from 'component/two-column'
import ConvertBody from 'component/convert-body'
import PostCategories from 'component/post-categories'
import Image from 'next/image'

export default function Schedule ({ title, publish, content, eyecatch, categories, description }) {
  return (
    <Container>
      <Meta
        pageTitie={title}
        pageDesc={description}
        pageImg={eyecatch.url}
        pageImgW={eyecatch.width}
        pageImgH={eyecatch.hright}
      />
      <article>
        <PostHeader title={title} subtitle='Blog Article' publish={publish} />
        <figure>
          <Image
            src={eyecatch.url}
            alt=''
            layout='responsive'
            width={eyecatch.width}
            height={eyecatch.height}
            sizes='(min-width: 1152px) 1152px, 100vw'
            priority
          />
        </figure>

        <TwoColumn>
          <TwoColumnMain>
            <PostBody>

              <ConvertBody contentHTML={content} />
            </PostBody>
          </TwoColumnMain>
          <TwoColumnSidebar>
            <PostCategories categories={categories} />
          </TwoColumnSidebar>
        </TwoColumn>
      </article>
    </Container>
  )
}

export async function getStaticProps () {
  const slug = 'schedule'
  const post = await getPostBySlug(slug)
  const description = extractText(post.content)

  return {
    props: {
      title: post.title,
      publish: post.publishDate,
      content: post.content,
      eyecatch: post.eyecatch,
      categories: post.categories,
      description
    }
  }
}
