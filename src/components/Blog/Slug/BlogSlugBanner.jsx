'use client'
import Image from "next/image"
import client from "../../../../client"
import imageUrlBuilder from '@sanity/image-url'

const builder = imageUrlBuilder(client)
function urlFor(source) {
  return builder.image(source)
}

export default function BlogSlugBanner({data}) {

  return (
    <div className="bg-[#fcfcfc]">
        <div className="max-w-full mx-auto">
            <div className="flex justify-center items-center w-full h-full">
                <div className="flex justify-center items-center w-full">
                    <Image className="object-scale-down object-center w-full h-full" src={urlFor(data?.mainImage?.image).format('png').url()}
                        alt={data?.mainImage?.alt} quality={100}
                        width={1440} height={400}/>
                </div>
            </div>
        </div>
    </div>
  )
}
