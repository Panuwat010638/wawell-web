import groq from "groq"
import client from "../../../../client"
import ProductSlugHeader from "@/components/Product/ProductSlug/ProductSlugHeader"
import ProductSlugContent from "@/components/Product/ProductSlug/ProductSlugContent"
import ProductSlugMoreProduct from "@/components/Product/ProductSlug/ProductSlugMoreProduct"

export async function getStaticParams() {
    const paths = [] = await client.fetch(
        `*[_type == "products" && defined(slug.currenct)][].slug.current`
    )

    return paths.map(path => ({
        slug: decodeURIComponent(path.toString())
    }))
}

async function getPosts(params) {
   
    const slug  = decodeURIComponent(params.slug)
    const query = groq`*[_type == "products" && slug.slug.current == '${slug}'][0]{
        _id,
        title,
        detail{
          productsize[] {
              "size":size->size,
              "size2":size->size2,
              "pattern":pattern
          },
          material,
          finish,
          thinness,
          application,
        },
        slug,
        mainImage,
        date,
        'category': category->title,
        'series': series->title,
        'collection': collection->title,
      }`
    const posts = await client.fetch(query, slug)

    const queryBlog = groq`*[_type == "products" && slug.slug.current != '${slug}'] | order(_createdAt desc){
        _id,
        title,
        detail{
          productsize[] {
              "size":size->size,
              "size2":size->size2,
              "pattern":pattern
          },
          material,
          finish,
          thinness,
          application,
        },
        slug,
        mainImage,
        date,
        'category': category->title,
        'collection': collection->title,
        'series': series->title,
      }`
    const postsBlog = await client.fetch(queryBlog)
    const product = postsBlog.sort((a, b) => {
        const dateA = new Date(a.date);
        const dateB = new Date(b.date);
        return dateB - dateA;
      });
   

    return {
        props: { posts,product }
     
    }
}

export async function generateMetadata({ params, searchParams }, parent) {

  const slug  = decodeURIComponent(params.slug)
  const query = groq`*[_type == "products" && slug.slug.current == '${slug}'][0]`

  const post = await client.fetch(query, slug)
  const title = post?.seo?.titletag||""||post.title
  const description =post?.seo?.description||""||post.title
  const keywords =post?.seo?.keywords||""||post.title
  const ogImageUrl = post?.seo?.openGraphImage != undefined ? urlFor(post?.seo?.openGraphImage).width(1200).height(630).fit('scale').auto('format').format('webp').url():null;
 if(post?.seo==undefined){
  return {
    title: post.title,
    description: post.title,
    keywords:post.title ,
    alternates: {
      canonical: `/product/${post.slug.slug.current}`,
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
      canonical: `/product/${post.slug.slug.current}`,
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


export default async function productslugpage({params}) {
    const posts = await getPosts(params);
    const data = posts.props.posts;
    const product = posts.props.product;
  return (
    <main>
        <div className="flex w-full h-[80px]"/>
        <ProductSlugHeader data={data}/>
        <ProductSlugContent data={data}/>
        <ProductSlugMoreProduct product={product}/>
    </main>
  )
}
