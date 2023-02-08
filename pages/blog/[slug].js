import { getPostBySlug, getAllSlugs } from 'lib/api'
import { extractText } from 'lib/extract-text'
import { prevNextPost } from 'lib/prev-next-post'
import Meta from 'component/meta'
import Container from 'component/container'
import PostHeader from 'component/post-header'
import PostBody from 'component/post-body'
import { TwoColumn, TwoColumnMain, TwoColumnSidebar } from 'component/two-column'
import ConvertBody from 'component/convert-body'
import PostCategories from 'component/post-categories'
import Pagination from 'component/pagination'
import Image from 'next/image'
import { eyecatchLocal } from 'lib/constants'
import { getPlaiceholder } from 'plaiceholder'

const Post = ({ title, publish, content, eyecatch, categories, description, prevPost, nextPost }) => {
  return (
    <Container>
      <Meta
        pageTitie={title}
        pageDesc={description}
        pageImg={eyecatch.url}
        pageImgW={eyecatch.width}
        pageImgH={eyecatch.height}
      />
      <article>
        <PostHeader title={title} subtitle='Blog Article' publish={publish} />
        <figure>
          <Image
            key={eyecatch.url}
            src={eyecatch.url}
            alt=''
            layout='responsive'
            width={eyecatch.width}
            height={eyecatch.height}
            sizes='(min-width: 1152px) 1152px, 100vw'
            priority
            placeholder='blur'
            blurDataURL={eyecatch.blurDataURL}
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

        <Pagination
          prevText={prevPost.title}
          prevUrl={`/blog/${prevPost.slug}`}
          nextText={nextPost.title}
          nextUrl={`/blog/${nextPost.slug}`}
        />
      </article>
    </Container>
  )
}

export default Post

export async function getStaticPaths () {
  const allSlugs = await getAllSlugs()

  return {
    paths: allSlugs.map(({ slug }) => `/blog/${slug}`),
    fallback: false
  }
}

export async function getStaticProps (context) {
  const slug = context.params.slug
  const post = await getPostBySlug(slug)
  const description = extractText(post.content)
  const eyecatch = post.eyecatch ?? eyecatchLocal

  const { base64 } = await getPlaiceholder(eyecatch.url)
  eyecatch.blurDataURL = base64

  const allSlugs = await getAllSlugs()
  const [prevPost, nextPost] = prevNextPost(allSlugs, slug)

  return {
    props: {
      title: post.title,
      publish: post.publishDate,
      content: post.content,
      eyecatch,
      categories: post.categories,
      description,
      prevPost,
      nextPost
    }
  }
}
