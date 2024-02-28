import client from "../../../client"
import groq from "groq"
import SearchHeader from "@/components/Search/SearchHeader"
import SearchContent from "@/components/Search/SearchContent"
export const dynamic = "force-dynamic"

async function getPosts() {

    const query = groq`*[_type == "ProductPage"] | order(_createdAt desc)`
    const postsData = await client.fetch(query)
    const posts = postsData.sort((a, b) => {
        const dateA = new Date(a.date);
        const dateB = new Date(b.date);
        return dateB - dateA;
      });
  
    const queryProject = groq`*[_type == "product"] | order(_createdAt desc){
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
   
    return {
        props: { posts, product},revalidate:10
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

export default async function searchpage() {
    const posts = await getPosts();
    const data = posts.props.posts;
    const product = posts.props.product;
  return (
    <main>
        <div className="flex w-full h-[80px]"/>
        <SearchHeader/>
        <SearchContent data={data[0]} product={product}/>
    </main>
  )
}
