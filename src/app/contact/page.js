import ContactBanner from "@/components/Contact/ContactBanner"
import ContactContent from "@/components/Contact/ContactContent"
import ContactMap from "@/components/Contact/ContactMap"
import client from "../../../client"
import groq from "groq"

async function getPosts() {

    const query = groq`*[_type == "ContactPage"] | order(_createdAt desc)`
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
  
    const query = groq`*[_type == 'ContactPage' ][0]`
    const post = await client.fetch(query)
    const ogImageUrl = post?.seo?.openGraphImage != undefined ? urlFor(post?.seo?.openGraphImage).width(1200).height(630).fit('scale').auto('format').format('webp').url():null;
    return {
      title: post.seo?.titletag ,
      description: post.seo?.description,
      keywords: post.seo?.keywords,
      alternates: {
        canonical: `/contact`,
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

export default async function Contactpage() {
    const posts = await getPosts();
    const data = posts.props.posts;
  return (
    <main>
        <ContactBanner data={data[0]?.banner}/>
        <ContactContent data={data[0]?.content}/>
        <ContactMap/>
    </main>
  )
}
