"use client"
import Link from "next/link"
import Image from "next/image"
import client from "../../../client"
import imageUrlBuilder from '@sanity/image-url'

const builder = imageUrlBuilder(client)
function urlFor(source) {
  return builder.image(source)
}

export default function ContactBanner({data}) {

  return (
    <div className="bg-[#ffffff]">
        <div className="max-w-full mx-auto pt-[80px]">
            <div className="flex flex-col w-full h-full relative">
                {/* Image BG */}
                <div className="flex justify-center items-center w-full">
                    <Image className=" object-cover sm:object-cover object-center w-full h-[180px] sm:h-[400px]" src={urlFor(data?.image).format('png').url()} 
                    alt={data?.alt} width={1440} height={400}/>
                </div>

                {/* Text Tiltle */}
                <div className="flex bg-[#00000047] justify-center items-center w-full h-full sm:items-start py-0 sm:py-[48px] md:py-[64px] lg:py-[72px] xl:py-[80px] 
                                px-6 xl:px-0 absolute top-0 z-[5]">
                    <h1 className="font-pop text-[20px] sm:text-[24px] md:text-[24px] lg:text-[30px] xl:text-[36px] text-[#fcfcfc] font-[600] leading-[125%] uppercase">
                        {data?.title}
                    </h1>
                </div>
            </div>
        </div>
    </div>
  )
}
