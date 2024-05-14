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
  
    const queryProject = groq`*[_type == "products"] | order(_createdAt desc){
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
    const ogImageUrl = post?.seo?.openGraphImage != undefined ? urlFor(post?.seo?.openGraphImage).width(1200).height(630).fit('scale').auto('format').format('webp').url():null;
    return {
      title: post.seo?.titletag ,
      description: post.seo?.description,
      keywords: post.seo?.keywords,
      alternates: {
        canonical: `/search`,
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
