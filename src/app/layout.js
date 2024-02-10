import { IBM_Plex_Sans_Thai } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import groq from 'groq'
import client from "../../client"
import Head from 'next/head'
import GA from './ga'

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
    title: 'Wawell Co.,Ltd' ,
    description: 'Wawell Co.,Ltd',
    keywords:'Wawell',
    metadataBase: new URL('http://wawell.com/'),
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
    authors: [{ name: 'Wawell Co.,Ltd', url: 'http://wawell.com/' }],
    creator: 'Wawell Co.,Ltd',
    publisher: 'Wawell Co.,Ltd',

    verification: {
      google: gsc?.title,
    },
  }
}



const navbar =[
  {title:'Home',href:'/',status:'on'},
  {title:'Products',href:'#',status:'on'},
  {title:'projects',href:'#',status:'on'},
  {title:'About us',href:'#',status:'on'},
  {title:'Blog',href:'#',status:'on'},
  {title:'Contact',href:'/contact',status:'on'},
]

export default async function RootLayout({ children }) {
  const posts = await getPosts();
  const gtag = posts.props.gtag;
  const facebook = posts.props.facebook;
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
        <Navbar data={navbar}/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
