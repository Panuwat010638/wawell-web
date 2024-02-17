import groq from "groq"
import client from "../../../../client"
import ProductSlugHeader from "@/components/Product/ProductSlug/ProductSlugHeader"
import ProductSlugContent from "@/components/Product/ProductSlug/ProductSlugContent"
import ProductSlugMoreProduct from "@/components/Product/ProductSlug/ProductSlugMoreProduct"

export async function getStaticParams() {
    const paths = [] = await client.fetch(
        `*[_type == "product" && defined(slug.currenct)][].slug.current`
    )

    return paths.map(path => ({
        slug: decodeURIComponent(path.toString())
    }))
}

async function getPosts(params) {
   
    const slug  = decodeURIComponent(params.slug)
    const query = groq`*[_type == "product" && slug.slug.current == '${slug}'][0]{
        _id,
        title,
        detail,
        slug,
        mainImage,
        size,
        date,
        'category': category->title,
        'collection': collection->title,
      }`
    const posts = await client.fetch(query, slug)

    const queryBlog = groq`*[_type == "product" && slug.slug.current != '${slug}'] | order(_createdAt desc){
        _id,
        title,
        detail,
        slug,
        mainImage,
        size,
        date,
        'category': category->title,
        'collection': collection->title,
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
  const query = groq`*[_type == "product" && slug.slug.current == '${slug}'][0]`

  const post = await client.fetch(query, slug)
  const title = post?.seo?.titletag||""
  const description =post?.seo?.description||""
  const keywords =post?.seo?.keywords||""
 
  return {
    title: title,
    description: description,
    keywords:keywords 
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
