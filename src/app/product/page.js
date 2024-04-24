import client from "../../../client"
import groq from "groq"
import Product from "@/components/Product/Product"

export const dynamic = "force-dynamic"

async function getPosts() {

    const query = groq`*[_type == "ProductPage"] | order(_createdAt desc)`
    const postsData = await client.fetch(query)
    const posts = postsData.sort((a, b) => {
        const dateA = new Date(a.date);
        const dateB = new Date(b.date);
        return dateB - dateA;
      });
  
    const queryProject = groq`*[_type == "product" && title != "Bianco - WBDA206 Test 01"] | order(_createdAt desc){
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
    const ProjectData = await client.fetch(queryProject)
    const product = ProjectData.sort((a, b) => {
        const dateA = new Date(a.date);
        const dateB = new Date(b.date);
        return dateB - dateA;
      });
      const queryCollection = groq`*[_type == "collectionproduct"] | order(_createdAt asc){
        _id,
        title,
        'category': category->title,
      }`
      const collection = await client.fetch(queryCollection)
      const queryCategory = groq`*[_type == "categoryproduct"] | order(_createdAt desc) `
      const category = await client.fetch(queryCategory)
    return {
        props: { posts, product,collection,category},revalidate:10
    }
  }
  
  export async function generateMetadata() {
  
    const query = groq`*[_type == 'ProductPage' ][0]`
    const post = await client.fetch(query)
    
    return {
      title: post.seo?.titletag ,
      description: post.seo?.description,
      keywords: post.seo?.keywords,
    }
  }

export default async function productpage() {
    const posts = await getPosts();
    const data = posts.props.posts;
    const product = posts.props.product;
    const collection = posts.props.collection;
    const category = posts.props.category;
  
  return (
    <main>
      <div className="flex w-full h-[80px]"/>
      <Product data={data[0]} product={product} collection={collection} category={category}/>
    </main>
  )
}
