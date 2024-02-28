import { Image } from "@nextui-org/react"
import Link from "next/link"
import client from "../../../client"
import imageUrlBuilder from '@sanity/image-url'

const builder = imageUrlBuilder(client)
function urlFor(source) {
  return builder.image(source)
}

export default function CardMoreProduct({item,index}) {
  return (
    <div className="flex flex-col w-[49%] ss:w-[49%] md:w-[23.5%] gap-y-[16px]">
      {/* Image */}
      {item?.mainImage?.image != undefined ? (
      <Link href={`/product/${encodeURIComponent(item?.slug?.slug?.current)}`} className={`flex w-full 
      ${item?.mainImage?.border == true ? "border-[1px] border-solid border-[#1C2532]":"border-[1px] border-solid border-transparent"}`}>
        <Image className="object-cover object-center h-[163px] sm:h-[183px] md:h-[213px]" src={urlFor(item?.mainImage?.image).url()} alt={item?.mainImage?.alt}
          width={290} height={290} radius="none"/>
      </Link>):(
      <div className="flex w-full">
        <Image className="object-cover object-center h-[163px] sm:h-[183px] md:h-[213px]" src={CallbackProduct} alt={`CallBack Product Card Image`}
          width={290} height={290} radius="none"/>
      </div>
      )}
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
