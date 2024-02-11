"use client"
import Link from "next/link"
import Image from "next/image"
import client from "../../../client"
import imageUrlBuilder from '@sanity/image-url'

const builder = imageUrlBuilder(client)
function urlFor(source) {
  return builder.image(source)
}

export default function AboutSec03({data}) {
  return (
    <div className="bg-[#fcfcfc]">
      <div className="max-w-6xl mx-auto px-6 xl:px-0 py-[40px] sm:py-[48px] md:py-[56px] lg:py-[64px] xl:py-[72px]">
        <div className='flex flex-col md:flex-row justify-between items-center w-full h-full gap-y-[50px] sm:gap-y-[60px] gap-x-[8%]'>
            {/* text */}
            <div className='flex flex-col justify-center items-center md:items-start w-full md:w-[40%] lg:w-[42%] h-full gap-y-[24px] md:gap-y-[28px] lg:gap-y-[32px] xl:gap-y-[40px]'>
              {/* Header */}
              <div className='flex flex-col md:w-[300px] items-center md:items-start gap-y-[8px]'>
                <h2 className='text-[24px] md:text-[24px] lg:text-[32px] xl:text-[36px] text-[#223B61] font-[600] leading-[125%] uppercase'>
                  {data?.header}
                </h2>
              </div>

              <p className='w-full sm:w-[80%] md:w-full text-[16px] md:text-[14px] lg:text-[16px] xl:text-[18px] text-[#7D7D7D] font-[400] leading-[160%] text-center md:text-start whitespace-pre-line'>
                {data?.detail}
              </p>
              <div className='flex items-center w-full sm:w-[60%] md:w-auto'>
                <Link href={data?.button?.link} className="flex justify-center items-center w-full md:w-auto bg-[#223B61] hover:bg-[#1C2532] transition-all duration-500 px-[32px] py-[12px] rounded-[4px]">
                  <h4 className='text-[16px] md:text-[16px] lg:text-[18px] text-[#FCFCFC] font-[400] leading-[125%]'>
                    {data?.button?.title}
                  </h4>
                </Link>
              </div>

            </div>

            {/* Image */}
            <div className="flex justify-center w-full md:w-[52%] lg:w-[50%] h-full">
                <div className="flex justify-center items-center w-full h-full md:h-[420px] lg:h-full">
                    <Image className="object-contain md:object-cover lg:object-contain object-center w-full h-full" src={urlFor(data?.images?.image).url()} alt={data?.images?.alt} width={608} height={442}/>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}
