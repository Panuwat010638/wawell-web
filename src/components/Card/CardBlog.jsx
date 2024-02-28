import { Image } from "@nextui-org/react"
import Link from "next/link"
import client from "../../../client"
import imageUrlBuilder from '@sanity/image-url'

const builder = imageUrlBuilder(client)
function urlFor(source) {
  return builder.image(source)
}

export default function CardBlog({item,index}) {
  return (
    <div key={index} className="group flex flex-col gap-y-[16px] md:gap-y-[24px] w-full ss:w-[49%] sm:w-[49%] md:w-[32%] h-full relative">
      <div className="flex justify-center items-center min-w-full h-full overflow-hidden">
        <Image className="object-cover object-center min-w-full h-[250px] ss:h-[140px] sm:h-[180px] md:h-[170px] lg:h-[230px] xl:h-[292px] transition-all duration-500 group-hover:scale-110" radius='none' isZoomed src={urlFor(item?.mainImage?.image).url()} alt={item?.mainImage?.alt} quality={100} width={796} height={584}/>
      </div>
      <div className="flex flex-col gap-y-[8px]">
        <h3 className='text-[14px] md:text-[16px] lg:text-[18px] text-[#070709] font-[500] leading-[125%] line-clamp-1'>
          {item?.title}
        </h3>
        <p className='text-[14px] md:text-[16px] lg:text-[18px] text-[#545867] font-[400] leading-[125%] line-clamp-2'>
          {item?.detail}
        </p>
      </div>
      <Link href={`/blog/${item?.slug?.slug?.current}`} className="flex w-full h-full z-[10] absolute top-0">

      </Link>
    </div>
  )
}
