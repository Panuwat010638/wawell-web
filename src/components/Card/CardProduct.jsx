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
      <div className="flex w-full">
        <Image src={urlFor(item?.mainImage?.image).url()} alt={item?.mainImage?.alt}
          width={213} height={213} radius="none"/>
      </div>
      {/* Content */}
      <div className="flex flex-col items-center w-full gap-y-[8px]">
          <h4 className="text-[14px] md:text-[16px] text-[#070709] font-[600] leading-[125%] text-center uppercase">
            {item?.collection}
          </h4>
          <p className="text-[14px] md:text-[16px] text-[#070709] font-[400] leading-[125%] text-center">
            {item?.title}
          </p>
      </div>
    </div>
  )
}
