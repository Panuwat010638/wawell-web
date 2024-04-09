import Image from "next/image"
import Link from "next/link"


import client from "../../../client"
import imageUrlBuilder from '@sanity/image-url'

const builder = imageUrlBuilder(client)
function urlFor(source) {
  return builder.image(source)
}

export default function HomeOther({data}) {
  return (
    <div className='bg-[#fcfcfc]'>
      <div className='max-w-6xl mx-auto px-6 xl:px-0 pb-[32px] sm:pb-[48px] md:pb-[64px] lg:pb-[72px]'>
        <div className='flex flex-col justify-center items-center w-full h-full gap-y-[24px]'>
            {/* Header */}
            <div className='flex justify-center items-center w-full'>
              <h3 className='font-pop text-[24px] md:text-[24px] lg:text-[30px] xl:text-[36px] text-[#223B61] font-[500] md:font-[600] leading-[125%] uppercase '>
                other tiles
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 place-content-center place-items-center w-full gap-[8px]">
                {/* Left */}
                <div className='group flex justify-center items-center w-full h-[335px] ss:h-[420px] sm:h-[575px] md:h-[350px] lg:h-[470px] xl:h-[557px] relative'>
                  <Image className="object-cover object-center w-full h-full transition-all duration-500 group-hover:brightness-50" src={urlFor(data?.other[0]?.image).format('png').url()} alt={data?.other[0]?.alt} quality={100} width={616} height={600}/>
                  <div className="flex flex-col justify-end items-end w-full h-full md:gap-y-[8px] p-[16px] md:p-[24px] z-[9] absolute top-0 opacity-100 group-hover:opacity-0 transition-all duration-500">
                    <h4 className='font-pop text-[20px] sm:text-[24px] md:text-[24px] lg:text-[28px] xl:text-[32px] text-[#FCFCFC] font-[600] leading-[125%] uppercase'>
                      {data?.other[0]?.number}
                    </h4>
                    <p className='font-pop text-[14px] md:text-[16px] text-[#FCFCFC] font-[500] leading-[125%] uppercase '>
                      {data?.other[0]?.title}
                    </p>
                  </div>
                  <div className="flex flex-col justify-end items-end w-full h-full md:gap-y-[8px] p-[16px] md:p-[24px] z-[10] absolute top-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <h4 className='font-pop text-[20px] sm:text-[24px] md:text-[24px] lg:text-[28px] xl:text-[32px] text-[#FCFCFC] font-[600] leading-[125%] uppercase'>
                      {data?.other[0]?.number}
                    </h4>
                    <p className='font-pop text-[14px] md:text-[16px] text-[#FCFCFC] font-[500] leading-[125%] uppercase '>
                      {data?.other[0]?.title}
                    </p>
                    {data?.other[0]?.detail ? (
                    <p className='text-[14px] md:text-[16px] text-[#FCFCFC] font-[400] leading-[125%] uppercase text-end'>
                      {data?.other[0]?.detail}
                    </p>
                    ):null}
                    
                  </div>
                  <Link href={`${data?.other[0]?.link}`} className="flex justify-center items-center w-full h-full z-[11] absolute top-0">
                  </Link>
                </div>
                {/* Right */}
                <div className='group flex justify-center items-center w-full h-[335px] ss:h-[420px] sm:h-[575px] md:h-[350px] lg:h-[470px] xl:h-[557px] relative'>
                  <Image className="object-cover object-center w-full h-full transition-all duration-500 group-hover:brightness-50" src={urlFor(data?.other[1]?.image).format('png').url()} alt={data?.other[1]?.alt} quality={100} width={616} height={600}/>
                  <div className="flex flex-col justify-end items-end w-full h-full md:gap-y-[8px] p-[16px] md:p-[24px] z-[9] absolute top-0 opacity-100 group-hover:opacity-0 transition-all duration-500">
                    <h4 className='font-pop text-[20px] sm:text-[24px] md:text-[24px] lg:text-[28px] xl:text-[32px] text-[#FCFCFC] font-[600] leading-[125%] uppercase'>
                      {data?.other[1]?.number}
                    </h4>
                    <p className='font-pop text-[14px] md:text-[16px] text-[#FCFCFC] font-[500] leading-[125%] uppercase '>
                      {data?.other[1]?.title}
                    </p>
                  </div>
                  <div className="flex flex-col justify-end items-end w-full h-full md:gap-y-[8px] p-[16px] md:p-[24px] z-[10] absolute top-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <h4 className='font-pop text-[20px] sm:text-[24px] md:text-[24px] lg:text-[28px] xl:text-[32px] text-[#FCFCFC] font-[600] leading-[125%] uppercase'>
                      {data?.other[1]?.number}
                    </h4>
                    <p className='font-pop text-[14px] md:text-[16px] text-[#FCFCFC] font-[500] leading-[125%] uppercase '>
                      {data?.other[1]?.title}
                    </p>
                    {data?.other[1]?.detail ? (
                      <p className='text-[14px] md:text-[16px] text-[#FCFCFC] font-[400] leading-[125%] uppercase text-end'>
                        {data?.other[1]?.detail}
                      </p>
                    ):null}
                  </div>
                  <Link href={`${data?.other[1]?.link}`} className="flex justify-center items-center w-full h-full z-[11] absolute top-0">
                  </Link>
                </div>
            </div>

            {/* Button */}
            <div className='flex items-center w-full md:w-auto mt-[36px]'>
              <Link href={`${data?.button?.link}`} className="flex justify-center items-center w-full md:w-auto bg-[#223B61] hover:bg-[#1C2532] transition-all duration-500 px-[32px] py-[12px] rounded-[4px]">
                <h4 className='text-[16px] md:text-[16px] lg:text-[18px] text-[#FCFCFC] font-[500] leading-[125%]'>
                  {data?.button?.title}
                </h4>
              </Link>
            </div>
            
        </div>
      </div>
    </div>
  )
}
