'use client'
import Image from "next/image"
import client from "../../../client"
import imageUrlBuilder from '@sanity/image-url'

const builder = imageUrlBuilder(client)
function urlFor(source) {
  return builder.image(source)
}

export default function AboutSec02({data}) {
 
  return (
    <div className='bg-[#fcfcfc]'>
      <div className='max-w-6xl mx-auto'>
          <div className="flex justify-center items-center w-full h-full">
              {/* Image BG Sec02 */}
              <div className="flex justify-center items-center w-full h-full">
                  <Image className="object-scale-down object-center w-full h-full" src={urlFor(data?.image).url()} 
                    alt={data?.alt} quality={100} width={1152} height={470} />
              </div>
          </div>
      </div>
    </div>
  )
}
