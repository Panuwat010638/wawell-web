import Image from "next/image"
import Link from "next/link"


import client from "../../../client"
import imageUrlBuilder from '@sanity/image-url'

const builder = imageUrlBuilder(client)
function urlFor(source) {
  return builder.image(source)
}

export default function HomeWall({data}) {
  return (
    <div className='bg-[#fcfcfc]'>
      <div className='max-w-6xl mx-auto px-6 xl:px-0 pb-[32px] sm:pb-[48px] md:pb-[64px] lg:pb-[72px]'>
        <div className='flex flex-col justify-center items-center w-full h-full gap-y-[24px]'>
            {/* Header */}
            <div className='flex justify-center items-center w-full'>
              <h3 className='text-[18px] sm:text-[20px] md:text-[24px] lg:text-[28px] xl:text-[32px] text-[#223B61] font-[500] leading-[125%] text-center uppercase'>
                TEXTURE tiles
              </h3>
            </div>

            <div className='flex flex-col md:flex-row justify-between items-center w-full h-full md:h-[380px] lg:h-[500px] xl:h-[606px]'>
              
              {/* Left */}
              <div className='hidden md:flex w-full md:w-[50%] h-full'>
                {/* L R */}
                <div className='group flex justify-center items-center w-[50%] md:w-full h-full relative'>
                  <Image className="object-cover object-center w-full h-full transition-all duration-500 group-hover:brightness-50" src={urlFor(data?.wall[0]?.image).format('png').url()} alt={data?.wall[0]?.alt} quality={100} width={304} height={606}/>
                  <div className="flex flex-col justify-end items-start w-full h-full md:gap-y-[8px] p-[16px] md:p-[24px] z-[9] absolute top-0 opacity-100 group-hover:opacity-0 transition-all duration-500">
                    <h4 className='text-[20px] sm:text-[24px] md:text-[24px] lg:text-[28px] xl:text-[32px] text-[#FCFCFC] font-[600] leading-[125%] uppercase'>
                      {data?.wall[0]?.number}
                    </h4>
                    <p className='text-[14px] md:text-[16px] text-[#FCFCFC] font-[500] leading-[125%] uppercase text-center'>
                      {data?.wall[0]?.title}
                    </p>
                  </div>
                  <div className="flex flex-col justify-end items-start w-full h-full md:gap-y-[8px] p-[16px] md:p-[24px] z-[10] absolute top-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <h4 className='text-[20px] sm:text-[24px] md:text-[24px] lg:text-[28px] xl:text-[32px] text-[#FCFCFC] font-[600] leading-[125%] uppercase'>
                      {data?.wall[0]?.number}
                    </h4>
                    <p className='text-[14px] md:text-[16px] text-[#FCFCFC] font-[500] leading-[125%] uppercase text-center'>
                      {data?.wall[0]?.title}
                    </p>
                    <p className='text-[14px] md:text-[16px] text-[#FCFCFC] font-[400] leading-[125%] uppercase'>
                      {data?.wall[0]?.detail}
                    </p>
                  </div>
                  <Link href={`${data?.wall[0]?.link}`} className="flex justify-center items-center w-full h-full z-[11] absolute top-0">
                  </Link>
                </div>
                {/* L L */}
                <div className='group flex justify-center items-center w-[50%] md:w-full h-full relative'>
                  <Image className="object-cover object-center w-full h-full transition-all duration-500 group-hover:brightness-50" src={urlFor(data?.wall[1]?.image).format('png').url()} alt={data?.wall[1]?.alt} quality={100} width={304} height={606}/>
                  <div className="flex flex-col justify-end items-start w-full h-full md:gap-y-[8px] p-[16px] md:p-[24px] z-[9] absolute top-0 opacity-100 group-hover:opacity-0 transition-all duration-500">
                    <h4 className='text-[20px] sm:text-[24px] md:text-[24px] lg:text-[28px] xl:text-[32px] text-[#FCFCFC] font-[600] leading-[125%] uppercase'>
                      {data?.wall[1]?.number}
                    </h4>
                    <p className='text-[14px] md:text-[16px] text-[#FCFCFC] font-[500] leading-[125%] uppercase text-center'>
                      {data?.wall[1]?.title}
                    </p>
                  </div>
                  <div className="flex flex-col justify-end items-start w-full h-full md:gap-y-[8px] p-[16px] md:p-[24px] z-[10] absolute top-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <h4 className='text-[20px] sm:text-[24px] md:text-[24px] lg:text-[28px] xl:text-[32px] text-[#FCFCFC] font-[600] leading-[125%] uppercase'>
                      {data?.wall[1]?.number}
                    </h4>
                    <p className='text-[14px] md:text-[16px] text-[#FCFCFC] font-[500] leading-[125%] uppercase text-center'>
                      {data?.wall[1]?.title}
                    </p>
                    <p className='text-[14px] md:text-[16px] text-[#FCFCFC] font-[400] leading-[125%] uppercase'>
                      {data?.wall[1]?.detail}
                    </p>
                  </div>
                  <Link href={`${data?.wall[1]?.link}`} className="flex justify-center items-center w-full h-full z-[11] absolute top-0">
                  </Link>
                </div>
              </div>

              {/* Right */}
              <div className='hidden md:flex flex-col w-full md:w-[50%] md:h-full'>
                {/* Right-Top */}
                <div className='group flex justify-center items-center w-full h-[50%] relative'>
                    <Image className="object-cover object-center w-full h-full transition-all duration-500 group-hover:brightness-50" src={urlFor(data?.wall[2]?.image).format('png').url()} alt={data?.wall[2]?.alt} quality={100} width={608} height={303}/>
                    <div className="flex flex-col justify-end items-start w-full h-full md:gap-y-[8px] p-[16px] md:p-[24px] z-[9] absolute top-0 opacity-100 group-hover:opacity-0 transition-all duration-500">
                      <h4 className='text-[20px] sm:text-[24px] md:text-[24px] lg:text-[28px] xl:text-[32px] text-[#FCFCFC] font-[600] leading-[125%] uppercase'>
                      {data?.wall[2]?.number}
                      </h4>
                      <p className='text-[14px] md:text-[16px] text-[#FCFCFC] font-[500] leading-[125%] uppercase text-center'>
                      {data?.wall[2]?.title}
                      </p>
                    </div>
                    <div className="flex flex-col justify-end items-start w-full h-full md:gap-y-[8px] p-[16px] md:p-[24px] z-[10] absolute top-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                      <h4 className='text-[20px] sm:text-[24px] md:text-[24px] lg:text-[28px] xl:text-[32px] text-[#FCFCFC] font-[600] leading-[125%] uppercase'>
                      {data?.wall[2]?.number}
                      </h4>
                      <p className='text-[14px] md:text-[16px] text-[#FCFCFC] font-[500] leading-[125%] uppercase text-center'>
                        {data?.wall[2]?.title}
                      </p>
                      <p className='text-[14px] md:text-[16px] text-[#FCFCFC] font-[400] leading-[125%] uppercase whitespace-normal xl:whitespace-pre-line'>
                        {data?.wall[2]?.detail}
                      </p>
                    </div>
                    <Link href={`${data?.wall[2]?.link}`} className="flex justify-center items-center w-full h-full z-[11] absolute top-0">
                    </Link>
                </div>
                {/* Right-Bottom */}
                <div className='flex w-full h-[50%]'>
                    {/* RB R */}
                    <div className='group flex justify-center items-center w-[50%] h-full relative'>
                      <Image className="object-cover object-center w-full h-full transition-all duration-500 group-hover:brightness-50" src={urlFor(data?.wall[3]?.image).format('png').url()} alt={data?.wall[3]?.alt} quality={100} width={304} height={303}/>
                      <div className="flex flex-col justify-end items-start w-full h-full md:gap-y-[8px] p-[16px] md:p-[24px] z-[9] absolute top-0 opacity-100 group-hover:opacity-0 transition-all duration-500">
                        <h4 className='text-[20px] sm:text-[24px] md:text-[24px] lg:text-[28px] xl:text-[32px] text-[#FCFCFC] font-[600] leading-[125%] uppercase'>
                        {data?.wall[3]?.number}
                        </h4>
                        <p className='text-[14px] md:text-[16px] text-[#FCFCFC] font-[500] leading-[125%] uppercase text-center'>
                        {data?.wall[3]?.title}
                        </p>
                      </div>
                      <div className="flex flex-col justify-end items-start w-full h-full md:gap-y-[8px] p-[16px] md:p-[24px] z-[10] absolute top-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                        <h4 className='text-[20px] sm:text-[24px] md:text-[24px] lg:text-[28px] xl:text-[32px] text-[#FCFCFC] font-[600] leading-[125%] uppercase'>
                        {data?.wall[3]?.number}
                        </h4>
                        <p className='text-[14px] md:text-[16px] text-[#FCFCFC] font-[500] leading-[125%] uppercase text-center'>
                          {data?.wall[3]?.title}
                        </p>
                        <p className='text-[14px] md:text-[16px] text-[#FCFCFC] font-[400] leading-[125%] uppercase'>
                          {data?.wall[3]?.detail}
                        </p>
                      </div>
                      <Link href={`${data?.wall[3]?.link}`} className="flex justify-center items-center w-full h-full z-[11] absolute top-0">
                      </Link>
                    </div>
                    {/* RB L */}
                    <div className='group flex justify-center items-center w-[50%] h-full relative'>
                      <Image className="object-cover object-center w-full h-full transition-all duration-500 group-hover:brightness-50" src={urlFor(data?.wall[4]?.image).format('png').url()} alt={data?.wall[4]?.alt} quality={100} width={304} height={303}/>
                      <div className="flex flex-col justify-end items-start w-full h-full md:gap-y-[8px] p-[16px] md:p-[24px] z-[9] absolute top-0 opacity-100 group-hover:opacity-0 transition-all duration-500">
                        <h4 className='text-[20px] sm:text-[24px] md:text-[24px] lg:text-[28px] xl:text-[32px] text-[#FCFCFC] font-[600] leading-[125%] uppercase'>
                        {data?.wall[4]?.number}
                        </h4>
                        <p className='text-[14px] md:text-[16px] text-[#FCFCFC] font-[500] leading-[125%] uppercase text-center'>
                        {data?.wall[4]?.title}
                        </p>
                      </div>
                      <div className="flex flex-col justify-end items-start w-full h-full md:gap-y-[8px] p-[16px] md:p-[24px] z-[10] absolute top-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                        <h4 className='text-[20px] sm:text-[24px] md:text-[24px] lg:text-[28px] xl:text-[32px] text-[#FCFCFC] font-[600] leading-[125%] uppercase'>
                        {data?.wall[4]?.number}
                        </h4>
                        <p className='text-[14px] md:text-[16px] text-[#FCFCFC] font-[500] leading-[125%] uppercase text-center'>
                          {data?.wall[4]?.title}
                        </p>
                        <p className='text-[14px] md:text-[16px] text-[#FCFCFC] font-[400] leading-[125%] uppercase'>
                          {data?.wall[4]?.detail}
                        </p>
                      </div>
                      <Link href={`${data?.wall[4]?.link}`} className="flex justify-center items-center w-full h-full z-[11] absolute top-0">
                      </Link>
                    </div>
                </div>
              </div>



              {/* LeftM */}
              <div className='flex md:hidden w-full h-full'>
                {/* L R */}
                <div className='flex justify-center items-center w-[50%] h-full relative'>
                  <Image className="object-cover object-center w-full h-full" src={urlFor(data?.wall[0]?.imageM).format('png').url()} alt={data?.wall[0]?.alt} quality={100} width={304} height={606}/>
                  <div className="flex flex-col justify-end items-start w-full h-full md:gap-y-[8px] p-[16px] md:p-[24px] z-[9] absolute top-0">
                    <h4 className='text-[20px] sm:text-[24px] md:text-[24px] lg:text-[28px] xl:text-[32px] text-[#FCFCFC] font-[600] leading-[125%] uppercase'>
                      {data?.wall[0]?.number}
                    </h4>
                    <p className='text-[14px] md:text-[16px] text-[#FCFCFC] font-[500] leading-[125%] uppercase text-center'>
                      {data?.wall[0]?.title}
                    </p>
                  </div>
                  <Link href={`${data?.wall[0]?.link}`} className="flex justify-center items-center w-full h-full z-[11] absolute top-0">
                  </Link>
                </div>
                {/* L L */}
                <div className='flex justify-center items-center w-[50%] h-full relative'>
                  <Image className="object-cover object-center w-full h-full" src={urlFor(data?.wall[1]?.imageM).format('png').url()} alt={data?.wall[1]?.alt} quality={100} width={304} height={606}/>
                  <div className="flex flex-col justify-end items-start w-full h-full md:gap-y-[8px] p-[16px] md:p-[24px] z-[9] absolute top-0">
                    <h4 className='text-[20px] sm:text-[24px] md:text-[24px] lg:text-[28px] xl:text-[32px] text-[#FCFCFC] font-[600] leading-[125%] uppercase'>
                      {data?.wall[1]?.number}
                    </h4>
                    <p className='text-[14px] md:text-[16px] text-[#FCFCFC] font-[500] leading-[125%] uppercase text-center'>
                      {data?.wall[1]?.title}
                    </p>
                  </div>
                  <Link href={`${data?.wall[1]?.link}`} className="flex justify-center items-center w-full h-full z-[11] absolute top-0">
                  </Link>
                </div>
              </div>

              {/* Right M No hover */}
              <div className='flex md:hidden flex-col w-full md:w-[50%] md:h-full'>
                {/* Right-Top */}
                <div className='group flex justify-center items-center w-full h-[50%] relative'>
                    <Image className="object-cover object-center w-full h-full transition-all duration-500 group-hover:brightness-50" src={urlFor(data?.wall[2]?.image).format('png').url()} alt={data?.wall[2]?.alt} quality={100} width={608} height={303}/>
                    <div className="flex flex-col justify-end items-start w-full h-full md:gap-y-[8px] p-[16px] md:p-[24px] z-[9] absolute top-0">
                      <h4 className='text-[20px] sm:text-[24px] md:text-[24px] lg:text-[28px] xl:text-[32px] text-[#FCFCFC] font-[600] leading-[125%] uppercase'>
                        {data?.wall[2]?.number}
                      </h4>
                      <p className='text-[14px] md:text-[16px] text-[#FCFCFC] font-[500] leading-[125%] uppercase text-center'>
                        {data?.wall[2]?.title}
                      </p>
                    </div>
                    <Link href={`${data?.wall[2]?.link}`} className="flex justify-center items-center w-full h-full z-[11] absolute top-0">
                    </Link>
                </div>
                {/* Right-Bottom */}
                <div className='flex w-full h-[50%]'>
                    {/* RB R */}
                    <div className='group flex justify-center items-center w-[50%] h-full relative'>
                      <Image className="object-cover object-center w-full h-full transition-all duration-500 group-hover:brightness-50" src={urlFor(data?.wall[3]?.image).format('png').url()} alt={data?.wall[3]?.alt} quality={100} width={304} height={303}/>
                      <div className="flex flex-col justify-end items-start w-full h-full md:gap-y-[8px] p-[16px] md:p-[24px] z-[9] absolute top-0">
                        <h4 className='text-[20px] sm:text-[24px] md:text-[24px] lg:text-[28px] xl:text-[32px] text-[#FCFCFC] font-[600] leading-[125%] uppercase'>
                        {data?.wall[3]?.number}
                        </h4>
                        <p className='text-[14px] md:text-[16px] text-[#FCFCFC] font-[500] leading-[125%] uppercase text-center'>
                        {data?.wall[3]?.title}
                        </p>
                      </div>
                      <Link href={`${data?.wall[3]?.link}`} className="flex justify-center items-center w-full h-full z-[11] absolute top-0">
                      </Link>
                    </div>
                    {/* RB L */}
                    <div className='group flex justify-center items-center w-[50%] h-full relative'>
                      <Image className="object-cover object-center w-full h-full transition-all duration-500 group-hover:brightness-50" src={urlFor(data?.wall[4]?.image).format('png').url()} alt={data?.wall[4]?.alt} quality={100} width={304} height={303}/>
                      <div className="flex flex-col justify-end items-start w-full h-full md:gap-y-[8px] p-[16px] md:p-[24px] z-[9] absolute top-0">
                        <h4 className='text-[20px] sm:text-[24px] md:text-[24px] lg:text-[28px] xl:text-[32px] text-[#FCFCFC] font-[600] leading-[125%] uppercase'>
                        {data?.wall[4]?.number}
                        </h4>
                        <p className='text-[14px] md:text-[16px] text-[#FCFCFC] font-[500] leading-[125%] uppercase text-center'>
                        {data?.wall[4]?.title}
                        </p>
                      </div>
                      <Link href={`${data?.wall[4]?.link}`} className="flex justify-center items-center w-full h-full z-[11] absolute top-0">
                      </Link>
                    </div>
                </div>
              </div>
            </div>

            {/* Button */}
            <div className='flex items-center w-full md:w-auto mt-[36px]'>
              <Link href={`${data?.button?.link}`} className="flex justify-center items-center w-full md:w-auto bg-[#223B61] hover:bg-[#1C2532] transition-all duration-500 px-[32px] py-[12px] rounded-[4px]">
                <h4 className='text-[16px] md:text-[16px] lg:text-[18px] text-[#FCFCFC] font-[400] leading-[125%]'>
                  {data?.button?.title}
                </h4>
              </Link>
            </div>
            
        </div>
      </div>
    </div>
  )
}
