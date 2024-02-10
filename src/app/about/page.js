import AboutSec01 from "@/components/About/AboutSec01"
import AboutSec02 from "@/components/About/AboutSec02"
import AboutSec03 from "@/components/About/AboutSec03"
import AboutSec04 from "@/components/About/AboutSec04"
import client from "../../../client"
import groq from "groq"

async function getPosts() {

    const query = groq`*[_type == "AboutPage"] | order(_createdAt desc)`
    const postsData = await client.fetch(query)
    const posts = postsData.sort((a, b) => {
        const dateA = new Date(a.date);
        const dateB = new Date(b.date);
        return dateB - dateA;
      });
    return {
        props: { posts},revalidate:10
    }
  }
  
  export async function generateMetadata() {
  
    const query = groq`*[_type == 'AboutPage' ][0]`
    const post = await client.fetch(query)
    
    return {
      title: `${post.seo?.titletag ? post.seo?.titletag:"Wawell : About Page"}`,
      description: `${post.seo?.description ? post.seo?.description:"Wawell : About Page"}`,
      keywords: post.seo?.keywords,
    }
  }

export default async function Aboutpage() {
    const posts = await getPosts();
    const data = posts.props.posts;
  return (
    <main>
        <div className="flex w-full h-[80px]"/>
        <AboutSec01 data={data[0]?.sec01}/>
        <AboutSec02 data={data[0]?.sec02}/>
        <AboutSec03 data={data[0]?.sec03}/>
        <AboutSec04 data={data[0]?.sec04}/>
    </main>
  )
}
