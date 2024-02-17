import HomeBanner from "@/components/Home/HomeBanner";
import HomeAbout from "@/components/Home/HomeAbout";
import HomeWedo from "@/components/Home/HomeWedo";
import HomeProduct from "@/components/Home/HomeProduct";
import HomeCollection from "@/components/Home/HomeCollection";
import HomeFloor from "@/components/Home/HomeFloor";
import HomeWall from "@/components/Home/HomeWall";
import HomeProject from "@/components/Home/HomeProject";
import HomeBlog from "@/components/Home/HomeBlog";
import HomeContact from "@/components/Home/HomeContact";
import HomeMap from "@/components/Home/HomeMap";

import client from "../../client";
import groq from "groq";

export const dynamic = "force-dynamic"

async function getPosts() {

  const query = groq`*[_type == "HomePage"] | order(_createdAt desc)`
  const postsData = await client.fetch(query)
  const posts = postsData.sort((a, b) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      return dateB - dateA;
    });

  const queryProject = groq`*[_type == "caseproject"] | order(_createdAt desc){
    _id,
    title,
    detail,
    slug,
    mainImage,
    content,
    date,
    'category': category->title,
  }`
  const ProjectData = await client.fetch(queryProject)
  const project = ProjectData.sort((a, b) => {
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
      props: { posts, project,blog},revalidate:10
  }
}

export async function generateMetadata() {

  const query = groq`*[_type == 'HomePage' ][0]`
  const post = await client.fetch(query)
  
  return {
    title: post.seo?.titletag ,
    description: post.seo?.description,
    keywords: post.seo?.keywords,
  }
}


export default async function Home() {
  const posts = await getPosts();
  const data = posts.props.posts;
  const blog = posts.props.blog;
  const project = posts.props.project;
  return (
    <main>
      <HomeBanner data={data[0]?.banner}/>
      <HomeAbout data={data[0]?.HomeAbout}/>
      <HomeWedo data={data[0]?.HomeProduct}/>
      <HomeProduct data={data[0]?.HomeProduct}/>
      <HomeCollection data={data[0]?.HomeCollection}/>
      <HomeFloor data={data[0]?.HomeCollection}/>
      <HomeWall data={data[0]?.HomeCollection}/>
      <HomeProject project ={project} data={data[0].ourprojects}/>
      <HomeBlog data={data[0]?.HomeBlog} blog={blog}/>
      <HomeContact data={data[0]?.HomeContact}/>
      <HomeMap />
    </main>
  );
}
