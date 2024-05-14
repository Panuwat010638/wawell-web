import client from "../../../../client"
import groq from "groq"
import SlugProjectHeader from "@/components/Project/SlugProject/SlugProjectHeader"
import SlugProjectContent from "@/components/Project/SlugProject/SlugProjectContent"

export async function getStaticParams() {
    const paths = [] = await client.fetch(
        `*[_type == "caseproject" && defined(slug.currenct)][].slug.current`
    )

    return paths.map(path => ({
        slug: decodeURIComponent(path.toString())
    }))
}


async function getPosts(params) {
   
    const slug  = decodeURIComponent(params.slug)
    const query = groq`*[_type == "caseproject" && slug.slug.current == '${slug}'][0]{
        title,
        detail,
        slug,
        mainImage,
        date,
        seo,
        content,
        images,
        applicated,
        "applicated":applicated[]->{title, slug},
        'category': category->title,
    }`
    const posts = await client.fetch(query, slug)


   

    return {
        props: { posts }
     
    }
}

export async function generateMetadata({ params, searchParams }, parent) {

  const slug  = decodeURIComponent(params.slug)
  const query = groq`*[_type == "caseproject" && slug.slug.current == '${slug}'][0]`

  const post = await client.fetch(query, slug)
  const title = post?.seo?.titletag||""||post.title
  const description =post?.seo?.description||""||post.title
  const keywords =post?.seo?.keywords||""||post.title
  const ogImageUrl = post?.seo?.openGraphImage != undefined ? urlFor(post?.seo?.openGraphImage).width(1200).height(630).fit('scale').auto('format').format('webp').url():null;
 if(post?.seo==undefined){
  return {
    title: post.title,
    description: post.title,
    keywords:post.title,
    alternates: {
      canonical: `/project/${post.slug.slug.current}`,
      languages: {
        'th': '/th',
      },},
      openGraph: {
        title: post.seo?.titletag,
        description: post.seo?.description,
        images: ogImageUrl ? [ ogImageUrl ] : ['/og.png' ],
        type: 'website',
        authors: ['Wawell Decor Co.,Ltd.']
      }
  }
 }else {
  return {
    title: title,
    description: description,
    keywords:keywords,
    alternates: {
      canonical: `/project/${post.slug.slug.current}`,
      languages: {
        'th': '/th',
      },},
      openGraph: {
        title: post.seo?.titletag,
        description: post.seo?.description,
        images: ogImageUrl ? [ ogImageUrl ] : ['/og.png' ],
        type: 'website',
        authors: ['Wawell Decor Co.,Ltd.']
      }
  }
 }
  
}

export default async function ProjectSlugpage({params}) {
    const posts = await getPosts(params);
    const data = posts.props.posts;
  return (
    <main>
      <div className="flex w-full h-[80px]"/>
        <SlugProjectHeader data={data}/>
        <SlugProjectContent data={data}/>
    </main>
  )
}
