import ProjectHeader from "@/components/Project/ProjectHeader"
import ProjectContent from "@/components/Project/ProjectContent";
import groq from "groq";
import client from "../../../client";

export const dynamic = "force-dynamic"

async function getPosts() {

    const query = groq`*[_type == "CaseProjectPage"] | order(_createdAt desc)`
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
      const queryCategory = groq`*[_type == "categorycaseproject"] | order(_updatedAt desc)`
    const CategoryData = await client.fetch(queryCategory)
    return {
        props: { posts, project,CategoryData},revalidate:10
    }
  }
  
  export async function generateMetadata() {
  
    const query = groq`*[_type == 'CaseProjectPage' ][0]`
    const post = await client.fetch(query)
    const ogImageUrl = post?.seo?.openGraphImage != undefined ? urlFor(post?.seo?.openGraphImage).width(1200).height(630).fit('scale').auto('format').format('webp').url():null;
    return {
      title: post.seo?.titletag ,
      description: post.seo?.description,
      keywords: post.seo?.keywords,
      alternates: {
        canonical: `/project`,
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

export default async function Projectpage() {
    const posts = await getPosts();
    const data = posts.props.posts;
    const project =posts.props.project;
    const category = posts.props.CategoryData
  return (
    <main>
        <div className="flex w-full h-[80px]"/>
        <ProjectHeader data={data[0]}/>
        <ProjectContent category={category} project={project}/>
    </main>
  )
}
