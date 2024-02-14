import { Image } from "@nextui-org/react"
import Link from "next/link"
import client from "../../../client"
import imageUrlBuilder from '@sanity/image-url'

const builder = imageUrlBuilder(client)
function urlFor(source) {
  return builder.image(source)
}

export default function CardProject({item,index}) {
  console.log(item?.category)
  return (
    <div key={index} className="group flex flex-col justify-center items-center w-full h-full sm:w-[50%] md:w-[33.33%] relative">
        <div className="flex justify-center items-center w-full h-full z-[5]">
            <Image className="object-cover object-center min-w-full h-full sm:h-[235px] md:h-[188px] lg:h-[250px] xl:h-[328px]" src={urlFor(item?.mainImage?.image).format("webp").url()} alt={item?.mainImage?.alt} radius="none" width={960} height={656}/>
        </div>
        <div className="flex justify-center items-end w-full h-full p-6 bg-gradient-to-t from-[#1d1d1d65] to-transparent opacity-100 group-hover:opacity-0 absolute top-0 z-[6]">
            <h3 className="text-[16px] md:text-[16px] xl:text-[20px] text-[#fcfcfc] font-[600] leading-[125%] text-center uppercase">
              {item?.title}
            </h3>
        </div>
        <div className="flex flex-col justify-center items-start w-full h-full gap-y-[24px] lg:px-[80px] py-6 bg-[#fcfcfce3] absolute top-0 z-[7] opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out">
            <h4 className="text-[16px] md:text-[16px] xl:text-[20px] text-[#223B61] font-[600] leading-[125%]">
              {item?.title}
            </h4>
            <div className="flex flex-col w-full">
              <p className="text-[14px] md:text-[16px] text-[#223B61] font-[400] leading-[125%]">
                {`Client: ${item?.content?.client}`}
              </p>
              <p className="text-[14px] md:text-[16px] text-[#223B61] font-[400] leading-[125%]">
                {`Location: ${item?.content?.location}`}
              </p>
              <p className="text-[14px] md:text-[16px] text-[#223B61] font-[400] leading-[125%] uppercase">
                {`Category: ${item?.category}`}
              </p>
              <p className="text-[14px] md:text-[16px] text-[#223B61] font-[400] leading-[125%]">
                {`Year: ${item?.content?.year}`}
              </p>
            </div>
        </div>
        <Link href={`/project/${item?.slug?.slug?.current}`} className="flex justify-center items-center w-full h-full absolute top-0 z-[8]">
        </Link>
    </div>
  )
}
