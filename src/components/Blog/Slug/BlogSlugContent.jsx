"use client"
import client from "../../../../client"
import groq from "groq"
import { Image } from "@nextui-org/react"
import { useState,useEffect } from "react"
import Link from "next/link"
import { PortableText } from "@portabletext/react"

import imageUrlBuilder from '@sanity/image-url'

const builder = imageUrlBuilder(client)
function urlFor(source) {
  return builder.image(source)
}
const ptComponents = {

    block: { 
        h1: ({ children }) => <h1 id={`${children}`} className="text-3xl md:text-5xl leading-snug font-semibold text-[#14142A] mt-[24px] mb-4">{children}</h1>,
        h2: ({ children }) => <h2 id={`${children}`} className="text-[18px] md:text-2xl scroll-mt-[100px] leading-snug font-semibold text-[#14142A] mt-[24px] mb-4">{children}</h2>,
        h3: ({ children }) => <h3 id={`${children}`} className="text-xl leading-snug font-semibold text-[#14142A] mt-[24px] mb-4">{children}</h3>,
        h4: ({ children }) => <h4 id={`${children}`} className="text-xl leading-snug font-semibold text-[#14142A] mt-[24px] mb-4">{children}</h4>,
        h5: ({ children }) => <h5 id={`${children}`} className="text-lg leading-snug font-semibold text-[#14142A] mt-[24px] mb-4 text-center">{children}</h5>,
        normal: ({ children }) => <p className="font-sarabun list-decimal text-[14px] md:text-lg text-[#545867] font-[300] mb-2 md:mb-[32px] whitespace-pre-line">{children}</p>
    },
    types: {
        image: ({ value }) => {
            if (!value?.asset?._ref) {
                return null
            }
  
            return (
                <div className="flex w-full h-full aspect-auto my-8">
                    <Image
                        className=" w-full md:h-full object-contain object-center"
                        alt={value.alt || 'blog image'}
                        radius="none"
                        loading="lazy"
                        src={urlFor(value).width(1024).height(768).auto('format').format('webp').url()}
                    />
                </div>
            )
        },},
        marks: {
          link: ({ value, children }) => <a className="text-lg text-[#0000ef] font-[400] tracking-[0.02em] whitespace-pre-line transition-all duration-500 hover:underline" href={value?.href} target="_blank" rel={'noreferrer'}>{children}</a>,
          strong: ({ children }) => <strong className="  font-[700]">{children}</strong>,
      },
        list: {
        bullet: ({ children }) =>
            <ul className="font-sarabun ml-[48px] md:ml-[56px] list-disc text-lg text-[#14142A] font-[400] mb-2 md:mb-4 tracking-[0.02em]">
                {children}
            </ul>,
        number: ({ children }) =>
        <ol className="font-sarabun ml-[22px] md:ml-[30px] list-decimal text-lg text-[#14142A] font-[400] mb-2 md:mb-4 tracking-[0.02em]">
            {children}
        </ol>
    }
  }

export default function BlogSlugContent({data}) {
    const [centeredH2, setCenteredH2] = useState(null);

    useEffect(() => {
      const handleScroll = () => {
        const h2Elements = document.querySelectorAll('h2[id]');
  
        h2Elements.forEach((h2Element) => {
          const rect = h2Element.getBoundingClientRect();
          const isVisible = rect.top >= 0 && rect.bottom <= window.innerHeight;
  
          if (isVisible) {
            setCenteredH2(h2Element.id);
          }
        });
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
    console.log(centeredH2)
  return (
    <div className="bg-[#fcfcfc]">
        <div className="max-w-6xl mx-auto px-6 xl:px-0 py-[36px] ss:py-[40px] sm:py-[40px]">
            <div className="flex flex-col-reverse lg:flex-row w-full h-full gap-y-[24px] gap-x-[5%]">
                {/* Body Content Slug Blog */}
                <div className="flex justify-center w-full lg:w-[65%] h-auto lg:h-full">
                    <div className='w-full h-full'>
                        <PortableText
                            value={data?.body}
                            components={ptComponents}
                        />
                    </div>
                </div>

                {/* Select Head Content */}
                <div className={`flex-col w-full lg:w-[30%] h-full gap-y-[32px] lg:sticky lg:top-[100px] pb-[24px] lg:pb-0 border-b-[2px] border-solid border-[#14142A] lg:border-b-0 ${data?.headings[0] != null ? "flex":"hidden opacity-0"}`}>
                    <div className="flex items-center gap-x-[12px]">

                        <h2 className='w-full text-[18px] md:text-[24px] xl:text-[32px] text-[#223B61] font-[700] leading-[125%] pb-[16px] lg:pb-0 border-b-[2px] lg:border-b-[0px] border-solid border-[#E0E3EB]'>
                            Table of Content
                        </h2>
                    </div>

                    <ul className='flex flex-col gap-y-[20px] list-outside list-disc table-of-contents'>
                        {data.headings!=null &&
                            data.headings.map((item, index) => (
                                <li className="flex " key={index} onClick={()=>setCenteredH2(item.children[0].text)}>
                                    <a aria-label='Link to content topic' scroll={{ top:80 }} href={'#' + item.children[0].text} 
                                    className={`lg:text-[16px] xl:text-[18px] hover:text-[#223B61] font-[500]
                                    leading-[125%] transition-all duration-500 ${centeredH2 == item.children[0].text ? "text-[#223B61]":"text-[#545867] "}`}>
                                        {item.children[0].text}
                                    </a>
                                </li>
                            ))
                        }
                    </ul>
                
                </div> 
            </div>
        </div>
    </div>
  )
}
