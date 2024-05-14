import groq from "groq";
import client from "../../client";

const URL = process.env.NEXT_PUBLIC_PUBLIC_URL;

export const dynamic = 'force-dynamic'
export const revalidate = 10

export default async function sitemap() {

    const queryBlog = groq`*[_type == "blog" ] | order(publishedAt desc){
        language,
        slug,
        publishedAt,
    }`

    const getSortedPostData = await client.fetch(queryBlog,{ next: { revalidate: 10 } });
    const blog = getSortedPostData.map(({ slug, publishedAt }) => ({
        url: `${URL}/blog/${decodeURIComponent(slug.slug.current)}`,
        lastModified: publishedAt,
    }))


////////////////////////////////////////////////////////// 
const queryreviews = groq`*[_type == "products" ] | order(publishedAt desc){
    language,
    slug,
    publishedAt,
}`
const getSortedreviewsData = await client.fetch(queryreviews,{ next: { revalidate: 10 } });

const product = getSortedreviewsData.map(({ slug, publishedAt }) => ({
    url: `${URL}/product/${decodeURIComponent(slug.slug.current)}`,
    lastModified: publishedAt,
}))

////////////////////////////////////////////////////////// 
const queryproject = groq`*[_type == "products" ] | order(publishedAt desc){
    language,
    slug,
    publishedAt,
}`
const getSortedProjectsData = await client.fetch(queryproject,{ next: { revalidate: 10 } });

const project = getSortedProjectsData.map(({ slug, publishedAt }) => ({
    url: `${URL}/project/${decodeURIComponent(slug.slug.current)}`,
    lastModified: publishedAt,
}))

    const routes = ["", "/about","/blog","/contact","/product","/search","/project"].map((route) => ({
        url: `${URL}${route}`,
        lastModified: new Date().toISOString(),
    }));

    return [...routes, ...blog,...product,...project];
}