import { Image } from "@nextui-org/react"
import Link from "next/link"
import client from "../../../client"
import imageUrlBuilder from '@sanity/image-url'

const builder = imageUrlBuilder(client)
function urlFor(source) {
  return builder.image(source)
}

export default function CardProduct({item,index}) {
  return (
    <div className="flex flex-col w-full ss:w-[32%] md:w-[23.5%] gap-y-[16px]">
      {/* Image */}
      <Link href={`/product/${encodeURIComponent(item?.slug?.slug?.current)}`} className="flex w-full">
        <Image src={urlFor(item?.mainImage?.image).url()} alt={item?.mainImage?.alt}
          width={213} height={213} radius="none"/>
      </Link>
      {/* Content */}
      <div className="flex flex-col items-center w-full gap-y-[8px]">
          <Link href={`/product/${encodeURIComponent(item?.slug?.slug?.current)}`} className="text-[14px] md:text-[16px] text-[#070709] font-[600] leading-[125%] text-center uppercase">
            {item?.collection}
          </Link>
          <Link href={`/product/${encodeURIComponent(item?.slug?.slug?.current)}`} className="text-[14px] md:text-[16px] text-[#070709] font-[400] leading-[125%] text-center">
            {item?.title}
          </Link>
      </div>
    </div>
  )
}
