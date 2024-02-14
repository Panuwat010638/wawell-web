import Image from "next/image"
import Link from "next/link"
import img001 from "../../../public/assets/Images/Home/Product/img001.png"
import img002 from "../../../public/assets/Images/Home/Product/img002.png"
import client from "../../../client"
import imageUrlBuilder from '@sanity/image-url'

const builder = imageUrlBuilder(client)
function urlFor(source) {
  return builder.image(source)
}

export default function HomeProduct({data}) {
  return (
    <div className="bg-[#f1efe9]">
      <div className="max-w-full">
        <div className="flex flex-col md:flex-row justify-between items-center w-full h-full gap-x-[1%] gap-y-[8px]">
            {/* Right */}
            <div className="group flex flex-col justify-center items-center w-full md:w-[49.5%] relative">
                <Image className="object-cover object-center w-full h-full transition-all duration-500 group-hover:brightness-75" src={urlFor(data?.images[0]?.image).url()} alt={data?.images[0]?.alt} quality={100} width={720} height={500}/>
                <div className="flex flex-col justify-center items-center w-full h-full gap-y-[8px] z-[10] absolute top-0">
                    <h3 className='text-[20px] sm:text-[24px] md:text-[24px] lg:text-[30px] xl:text-[36px] text-[#FCFCFC] font-[600] leading-[125%] uppercase'>
                      {data?.images[0]?.title}
                    </h3>
                    <p className='text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px] text-[#FCFCFC] font-[400] leading-[125%] uppercase text-center'>
                      {data?.images[0]?.detail}
                    </p>
                </div>
                <Link href={data?.images[0]?.link} className="flex justify-center items-center w-full h-full z-[11] absolute top-0">
                </Link>
            </div>

            {/* Left */}
            <div className="group flex flex-col justify-center items-center w-full md:w-[49.5%] relative">
                <Image className="object-cover object-center w-full h-full transition-all duration-500 group-hover:brightness-75" src={urlFor(data?.images[1]?.image).url()} alt={data?.images[1]?.alt} quality={100} width={720} height={500}/>
                <div className="flex flex-col justify-center items-center w-full h-full gap-y-[8px] z-[10] absolute top-0">
                    <h3 className='text-[20px] sm:text-[24px] md:text-[24px] lg:text-[30px] xl:text-[36px] text-[#FCFCFC] font-[600] leading-[125%] uppercase'>
                      {data?.images[1]?.title}
                    </h3>
                    <p className='text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px] text-[#FCFCFC] font-[400] leading-[125%] uppercase text-center'>
                      {data?.images[1]?.detail}
                    </p>
                </div>
                <Link href={data?.images[1]?.link} className="flex justify-center items-center w-full h-full z-[11] absolute top-0">
                </Link>
            </div>

        </div>
      </div>
    </div>
  )
}
