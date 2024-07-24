import { IBM_Plex_Sans_Thai } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import groq from 'groq'
import client from "../../client"
import Head from 'next/head'
import GA from './ga'
import { GoogleTagManager } from '@next/third-parties/google'

const iBM_Plex_Sans_Thai =  IBM_Plex_Sans_Thai(
  { 
    weight: ['400','500','600', '700'],
    style: ['normal'],
    subsets: ['latin'],
    display: 'swap',
  });

  export const revalidate = 10;
export const dynamicParams = true;

async function getPosts() {

  const query = groq`*[_type == "navbar"] | order(_createdAt desc)`
  const posts = await client.fetch(query)
  const queryF = groq`*[_type == "footer"] | order(_createdAt desc)`
  const footer = await client.fetch(queryF)

  const gtag = await client.fetch(groq`*[_type == "gaTag" ][0]`, {
    next: { revalidate: 10 },
  });
  const facebook = await client.fetch(groq`*[_type == "FacebookPixel" ][0]`, {
    next: { revalidate: 10 },
  });
  
  return {
      props: { posts,footer,facebook,gtag}
  }
}

export async function generateMetadata({ params, searchParams }, parent) {
  const gsc = await client.fetch(groq`*[_type == "gsc" ][0]`, {
    next: { revalidate: 10 },
  });

  

  return {
    title: 'Wawell Decor Co.,Ltd' ,
    description: 'Wawell Decor Co.,Ltd',
    keywords:'Wawell Decor',
    metadataBase: new URL('https://www.wawelldecor.com/'),
    robots: {
      index: true,
      follow: true,
      nocache: true,
      googleBot: {
        index: true,
        follow: false,
        noimageindex: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    authors: [{ name: 'Wawell Decor Co.,Ltd', url: 'https://www.wawelldecor.com/' }],
    creator: 'Wawell Decor Co.,Ltd',
    publisher: 'Wawell Decor Co.,Ltd',

    verification: {
      google: gsc?.title,
    },
  }
}





export default async function RootLayout({ children }) {
  const posts = await getPosts();
  const gtag = posts.props.gtag;
  const facebook = posts.props.facebook;
  const navbar = posts.props.posts;
  const footer = posts.props.footer;
  return (
    <html className={iBM_Plex_Sans_Thai.className}>
      <Head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </Head>
      <body className="block">
      <GA data={gtag?.title}/>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src={`https://www.facebook.com/tr?id=${facebook?.title}&ev=PageView&noscript=1`}
          />
        </noscript>
        <Navbar data={navbar[0].menu}/>
        {children}
        <Footer data={footer[0]}/>
        <GoogleTagManager gtmId="GTM-NVW7M84S" />
      </body>
    </html>
  );
}
