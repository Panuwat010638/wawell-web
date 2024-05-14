import BlogHeader from "@/components/Blog/BlogHeader"
import BlogContent from "@/components/Blog/BlogContent"
import client from "../../../client"
import groq from "groq"

export const dynamic = "force-dynamic"

async function getPosts() {

    const query = groq`*[_type == "BlogPage"] | order(_createdAt desc)`
    const postsData = await client.fetch(query)
    const posts = postsData.sort((a, b) => {
        const dateA = new Date(a.date);
        const dateB = new Date(b.date);
        return dateB - dateA;
      });

    const queryBlog = groq`*[_type == "blog"] | order(_createdAt desc)`
    const postsBlog = await client.fetch(queryBlog)
    const blog = postsBlog.sort((a, b) => {
        const dateA = new Date(a.date);
        const dateB = new Date(b.date);
        return dateB - dateA;
      });
    return {
        props: { posts,blog},revalidate:10
    }
  }
  
  export async function generateMetadata() {
  
    const query = groq`*[_type == 'BlogPage' ][0]`
    const post = await client.fetch(query)
    const ogImageUrl = post?.seo?.openGraphImage != undefined ? urlFor(post?.seo?.openGraphImage).width(1200).height(630).fit('scale').auto('format').format('webp').url():null;
    return {
      title: post.seo?.titletag ,
      description: post.seo?.description,
      keywords: post.seo?.keywords,
      alternates: {
        canonical: `/blog`,
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

export default async function Blogpage() {
    const posts = await getPosts();
    const data = posts.props.posts;
    const blog = posts.props.blog;
   
  return (
    <main>
        <div className="flex w-full h-[80px]"/>
        <BlogHeader data={data[0]?.header}/>
        <BlogContent blog={blog}/>
    </main>
  )
}
