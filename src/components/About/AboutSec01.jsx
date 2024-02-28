"use client"
import Image from "next/image"
import client from "../../../client"
import imageUrlBuilder from '@sanity/image-url'

const builder = imageUrlBuilder(client)
function urlFor(source) {
  return builder.image(source)
}

export default function AboutSec01({data}) {
  return (
    <div className="bg-[#fcfcfc]">
      <div className="max-w-6xl mx-auto px-6 xl:px-0 py-[40px] sm:py-[48px] md:py-[56px] lg:py-[64px] xl:py-[72px]">
        <div className='flex justify-between items-center w-full h-full gap-x-[6%]'>
            {/* Image */}
            <div className="hidden md:flex justify-center w-full md:w-[50%] h-full gap-x-[2%]">
                <div className="flex justify-center items-center w-full md:w-[49%] h-full">
                    <Image className="object-contain md:object-cover lg:object-contain object-center w-full h-full md:h-[318px] lg:h-full" src={urlFor(data?.images[0]?.image).url()} alt={data?.images[0]?.alt} width={300} height={420}/>
                </div>
                <div className="flex justify-center items-center w-full md:w-[49%] h-full">
                  <Image className="object-contain md:object-cover lg:object-contain object-center w-full h-full md:h-[318px] lg:h-full" src={urlFor(data?.images[1]?.image).url()} alt={data?.images[1]?.alt} width={300} height={420}/>
                </div>
            </div>
            {/* text */}
            <div className='flex flex-col justify-center items-center md:items-start w-full md:w-[44%] h-full gap-y-[24px] md:gap-y-[28px] lg:gap-y-[32px] xl:gap-y-[40px]'>
              {/* Header */}
              <div className='flex flex-col md:w-[300px] items-center md:items-start gap-y-[8px] pb-[24px] md:pb-[28px] lg:pb-[32px] xl:pb-[40px] border-b-[1px] border-solid border-[#6F7489]'>
                <h3 className='text-[16px] md:text-[16px] lg:text-[20px] xl:text-[24px] text-[#223B61] font-[400] leading-[125%] uppercase text-center md:text-start'>
                  {data?.subheader}
                </h3>
                <h2 className='font-pop text-[20px] sm:text-[24px] md:text-[24px] lg:text-[30px] xl:text-[36px] text-[#223B61] font-[600] leading-[125%] uppercase'>
                  {data?.header}
                </h2>
              </div>

              <p className='w-full sm:w-[80%] md:w-full text-[16px] lg:text-[18px] text-[#7D7D7D] font-[400] leading-[160%] text-center md:text-start'>
                {data?.detail}
              </p>


            </div>
        </div>
      </div>
    </div>
  )
}
