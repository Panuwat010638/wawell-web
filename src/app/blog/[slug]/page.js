import client from "../../../../client"
import groq from "groq"

import BlogSlugBanner from "@/components/Blog/Slug/BlogSlugBanner"
import BlogSlugHeader from "@/components/Blog/Slug/BlogSlugHeader"
import BlogSlugContent from "@/components/Blog/Slug/BlogSlugContent"
import BlogSlugMoreBlog from "@/components/Blog/Slug/BlogSlugMoreBlog"

export async function getStaticParams() {
    const paths = [] = await client.fetch(
        `*[_type == "blog" && defined(slug.currenct)][].slug.current`
    )

    return paths.map(path => ({
        slug: decodeURIComponent(path.toString())
    }))
}


async function getPosts(params) {
   
    const slug  = decodeURIComponent(params.slug)
    const query = groq`*[_type == "blog" && slug.slug.current == '${slug}'][0]{
      title,
      mainImage,
      body,
      date,
      alt,
      "headings": body[length(style) == 2 && string::startsWith(style, "h2")]
  }`
    const posts = await client.fetch(query, slug)

    const queryBlog = groq`*[_type == "blog" && slug.slug.current != '${slug}'] | order(_createdAt desc)`
    const postsBlog = await client.fetch(queryBlog)
    const blog = postsBlog.sort((a, b) => {
        const dateA = new Date(a.date);
        const dateB = new Date(b.date);
        return dateB - dateA;
      });
   

    return {
        props: { posts,blog }
     
    }
}

export async function generateMetadata({ params, searchParams }, parent) {

  const slug  = decodeURIComponent(params.slug)
  const query = groq`*[_type == "blog" && slug.slug.current == '${slug}'][0]`

  const post = await client.fetch(query, slug)
  const title = post?.seo?.titletag||""||post.title
  const description =post?.seo?.description||""||post.title
  const keywords =post?.seo?.keywords||""||post.title
 if(post?.seo==undefined){
  return {
    title: post.title,
    description: post.title,
    keywords:post.title 
  }
 }else {
  return {
    title: title,
    description: description,
    keywords:keywords 
  }
 }
  
}


export default async function blogSlugpage({params}) {
    const posts = await getPosts(params);
    const data = posts.props.posts;
    const blog = posts.props.blog;

  return (
    <main>
      <div className="flex w-full h-[80px]"/>
        <BlogSlugBanner data={data}/>
        <BlogSlugHeader data={data}/>
        <BlogSlugContent data={data}/>
        <BlogSlugMoreBlog blog={blog}/>
    </main>
  )
}
