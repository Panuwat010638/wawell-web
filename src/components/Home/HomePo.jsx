import Image from "next/image"
import Link from "next/link"


import client from "../../../client"
import imageUrlBuilder from '@sanity/image-url'

const builder = imageUrlBuilder(client)
function urlFor(source) {
  return builder.image(source)
}

export default function HomePo({data}) {
  return (
    <div className='bg-[#fcfcfc]'>
      <div className='max-w-6xl mx-auto px-6 xl:px-0 pb-[64px] sm:pb-[56px] md:pb-[64px] lg:pb-[72px]'>
        <div className='flex flex-col justify-center items-center w-full h-full gap-y-[24px]'>
            {/* Header */}
            <div className='flex justify-center items-center w-full'>
              <h3 className='font-pop text-[24px] md:text-[24px] lg:text-[30px] xl:text-[36px] text-[#223B61] font-[500] md:font-[600] leading-[125%] uppercase '>
                PORCELAIN tiles
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 place-content-center place-items-center w-full gap-[8px]">
                {/* Left */}
                <div className='group flex justify-center items-center w-full h-full relative'>
                  <Image className="object-cover object-center w-full h-full transition-all duration-500 group-hover:brightness-50" src={urlFor(data?.po[0]?.image).format('png').url()} alt={data?.po[1]?.alt} quality={100} width={616} height={600}/>
                  <div className="flex flex-col justify-end items-end w-full h-full md:gap-y-[8px] p-[16px] md:p-[24px] z-[9] absolute top-0 opacity-100 group-hover:opacity-0 transition-all duration-500">
                    <h4 className='font-pop text-[20px] sm:text-[24px] md:text-[24px] lg:text-[28px] xl:text-[32px] text-[#FCFCFC] font-[600] leading-[125%] uppercase'>
                      {data?.po[0]?.number}
                    </h4>
                    <p className='font-pop text-[14px] md:text-[16px] text-[#FCFCFC] font-[500] leading-[125%] uppercase '>
                      {data?.po[0]?.title}
                    </p>
                  </div>
                  <div className="flex flex-col justify-end items-end w-full h-full md:gap-y-[8px] p-[16px] md:p-[24px] z-[10] absolute top-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <h4 className='font-pop text-[20px] sm:text-[24px] md:text-[24px] lg:text-[28px] xl:text-[32px] text-[#FCFCFC] font-[600] leading-[125%] uppercase'>
                      {data?.po[0]?.number}
                    </h4>
                    <p className='font-pop text-[14px] md:text-[16px] text-[#FCFCFC] font-[500] leading-[125%] uppercase '>
                      {data?.po[0]?.title}
                    </p>
                    {data?.po[0]?.detail ? (
                    <p className='text-[14px] md:text-[16px] text-[#FCFCFC] font-[400] leading-[125%] uppercase text-end'>
                      {data?.po[0]?.detail}
                    </p>
                    ):null}
                  </div>
                  <Link href={`${data?.po[0]?.link}`} className="flex justify-center items-center w-full h-full z-[11] absolute top-0">
                  </Link>
                </div>
                {/* Right */}
                <div className='group flex justify-center items-center w-full h-full relative'>
                  <Image className="object-cover object-center w-full h-full transition-all duration-500 group-hover:brightness-50" src={urlFor(data?.po[1]?.image).format('png').url()} alt={data?.po[0]?.alt} quality={100} width={616} height={600}/>
                  <div className="flex flex-col justify-end items-end w-full h-full md:gap-y-[8px] p-[16px] md:p-[24px] z-[9] absolute top-0 opacity-100 group-hover:opacity-0 transition-all duration-500">
                    <h4 className='font-pop text-[20px] sm:text-[24px] md:text-[24px] lg:text-[28px] xl:text-[32px] text-[#FCFCFC] font-[600] leading-[125%] uppercase'>
                      {data?.po[1]?.number}
                    </h4>
                    <p className='font-pop text-[14px] md:text-[16px] text-[#FCFCFC] font-[500] leading-[125%] uppercase '>
                      {data?.po[1]?.title}
                    </p>
                  </div>
                  <div className="flex flex-col justify-end items-end w-full h-full md:gap-y-[8px] p-[16px] md:p-[24px] z-[10] absolute top-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <h4 className='font-pop text-[20px] sm:text-[24px] md:text-[24px] lg:text-[28px] xl:text-[32px] text-[#FCFCFC] font-[600] leading-[125%] uppercase'>
                      {data?.po[1]?.number}
                    </h4>
                    <p className='font-pop text-[14px] md:text-[16px] text-[#FCFCFC] font-[500] leading-[125%] uppercase '>
                      {data?.po[1]?.title}
                    </p>
                    {data?.po[1]?.detail ? (
                    <p className='text-[14px] md:text-[16px] text-[#FCFCFC] font-[400] leading-[125%] uppercase text-end'>
                      {data?.po[1]?.detail}
                    </p>
                    ):null}
                    
                  </div>
                  <Link href={`${data?.po[1]?.link}`} className="flex justify-center items-center w-full h-full z-[11] absolute top-0">
                  </Link>
                </div>
            </div>
                  
        </div>
      </div>
    </div>
  )
}
