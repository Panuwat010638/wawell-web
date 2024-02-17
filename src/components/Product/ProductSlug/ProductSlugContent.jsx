'use client'
import { useState,useEffect } from "react"
import { Button } from "@nextui-org/react"
import Image from "next/image"
import Link from "next/link"
import client from "../../../../client"
import imageUrlBuilder from '@sanity/image-url'

const builder = imageUrlBuilder(client)
function urlFor(source) {
  return builder.image(source)
}

export default function ProductSlugContent({data}) {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div className="bg-[#fcfcfc]">
      <div className="max-w-6xl mx-auto px-6 xl:px-0 pb-[56px] md:pb-[64px] lg:pb-[72px] xl:pb-[80px]">
        <div className="flex flex-col md:flex-row justify-start md:justify-between items-center md:items-start w-full h-full gap-x-[5%] gap-y-[16px]">

          {/* Image */}
          <div className="flex w-full ss:w-[90%] sm:w-[80%] md:w-[45%] h-auto md:h-full">
              <div className="flex flex-col w-full h-[327.2px] ss:h-[388.8px] sm:h-[473.6px] md:h-[288px] lg:h-[390.4px] xl:h-[524px]  relative">
                  {data?.detail?.pattern.map((item,index)=>(
                    <div key={index} className={`flex justify-center items-center w-full h-full transition-all duration-600 ease-linear absolute top-0 ${activeIndex==index ? "opacity-100 z-[10]":"opacity-0 z-[1]"}`}>
                      <Image className=" object-cover object-center w-full h-full" src={urlFor(item?.image).url()} alt={item?.alt} width={1048} height={1048}/>
                    </div>
                  ))}
              </div>
          </div>

          {/* Content */}
          <div className="flex flex-col w-full ss:w-[90%] sm:w-[80%] md:w-[50%] h-auto md:h-full gap-y-[16px] md:gap-y-[24px]">
              {/* Name Product */}
              <div className="flex flex-col md:flex-row justify-normal md:justify-between items-center w-full gap-y-[8px] sm:gap-y-[16px] gap-x-[16px] pb-[16px] md:pb-[24px] border-b-[2px] border-solid border-[#E0E3EB]">
                  <h1 className="text-[18px] md:text-[16px] lg:text-[20px] xl:text-[24px] text-[#14142A] font-[600] leading-[125%]">
                    {data?.title}
                  </h1>
                  <div className="flex">
                    <Button size="sm" radius="full" className="group data-hover:bg-[#6F7489] flex justify-center items-center px-[24px] h-[38px] rounded-[50px] bg-[#EFF1F7] hover:bg-[#6F7489] transition-all duration-600
                    text-[16px] md:text-[14px] lg:text-[16px] text-[#6F7489] hover:text-[#EFF1F7] font-[600]">
                      Download
                    </Button>  
                  </div>
              </div>

              {/* Content */}
              <div className="flex flex-col-reverse md:flex-col w-full gap-y-[16px] md:gap-y-[24px]">
                {/* Detail */}
                <div className="flex flex-col md:flex-row w-full gap-x-[2%] gap-y-[16px]">
                    {/* Left */}
                    <div className="flex flex-col w-full md:w-[53%] gap-y-[4px] md:gap-y-[6px]">
                      {/* SE */}
                      <div className="flex gap-x-[8px] md:gap-x-[1%] w-full">
                        <div className="flex md:w-[49%]">
                          <h2 className="text-[18px] md:text-[14px] lg:text-[16px] xl:text-[18px] text-[#14142A] font-[600] leading-[125%]">
                            Series:
                          </h2>
                        </div>
                        <div className="flex md:w-[50%]">
                          <p className="text-[18px] md:text-[14px] lg:text-[16px] xl:text-[18px] text-[#14142A] font-[400] leading-[125%]">
                            {data?.collection}
                          </p>
                        </div>
                      </div>
                      {/* Material:  */}
                      <div className="flex gap-x-[8px] md:gap-x-[1%] w-full">
                        <div className="flex md:w-[49%]">
                          <h2 className="text-[18px] md:text-[14px] lg:text-[16px] xl:text-[18px] text-[#14142A] font-[600] leading-[125%]">
                            Material: 
                          </h2>
                        </div>
                        <div className="flex md:w-[50%]">
                          <p className="text-[18px] md:text-[14px] lg:text-[16px] xl:text-[18px] text-[#14142A] font-[400] leading-[125%]">
                            {`${data?.detail?.material ? (data?.detail?.material):"-"}`}
                          </p>
                        </div>
                      </div>
                      {/* Finish: */}
                      <div className="flex gap-x-[8px] md:gap-x-[1%] w-full">
                        <div className="flex md:w-[49%]">
                          <h2 className="text-[18px] md:text-[14px] lg:text-[16px] xl:text-[18px] text-[#14142A] font-[600] leading-[125%]">
                            Finish:  
                          </h2>
                        </div>
                        <div className="flex md:w-[50%]">
                          <p className="text-[18px] md:text-[14px] lg:text-[16px] xl:text-[18px] text-[#14142A] font-[400] leading-[125%]">
                            {`${data?.detail?.finish ? (data?.detail?.finish):"-"}`}
                          </p>
                        </div>
                      </div>
                      {/* Thinness: */}
                      <div className="flex gap-x-[8px] md:gap-x-[1%] w-full">
                        <div className="flex md:w-[49%]">
                          <h2 className="text-[18px] md:text-[14px] lg:text-[16px] xl:text-[18px] text-[#14142A] font-[600] leading-[125%]">
                            Thinness: 
                          </h2>
                        </div>
                        <div className="flex md:w-[50%]">
                          <p className="text-[18px] md:text-[14px] lg:text-[16px] xl:text-[18px] text-[#14142A] font-[400] leading-[125%]">
                            {`${data?.detail?.thinness ? (data?.detail?.thinness):"-"}`}
                          </p>
                        </div>
                      </div>
                      {/* Application */}
                      <div className="flex gap-x-[8px] md:gap-x-[1%] w-full">
                        <div className="flex md:w-[49%]">
                          <h2 className="text-[18px] md:text-[14px] lg:text-[16px] xl:text-[18px] text-[#14142A] font-[600] leading-[125%]">
                            Application: 
                          </h2>
                        </div>
                        <div className="flex md:w-[50%]">
                          <p className="text-[18px] md:text-[14px] lg:text-[16px] xl:text-[18px] text-[#14142A] font-[400] leading-[125%]">
                            {`${data?.detail?.application ? (data?.detail?.application):"-"}`}
                          </p>
                        </div>
                      </div>
                    </div>
                    {/* Right */}
                    <div className="flex flex-col w-full md:w-[55%] gap-y-[4px]">
                      <h2 className="text-[18px] md:text-[14px] lg:text-[16px] xl:text-[18px] text-[#14142A] font-[600] leading-[125%]">
                        Size Available: 
                      </h2>
                      <div className="flex flex-col w-full gap-y-[4px]">
                          {data?.detail?.productsize.map((item,index)=>(
                            <div key={index} className="flex items-center w-full">
                              <p className="text-[18px] md:text-[14px] lg:text-[16px] xl:text-[18px] text-[#14142A] font-[400] leading-[125%]">
                                {item?.size}/{item?.size2}
                              </p>
                            </div>
                          ))}
                      </div>
                    </div>
                </div>
                {/* Pattern */}
                <div className="flex flex-col w-full gap-y-[8px]">
                    {/* Header Pattern */}
                    <div className="flex justify-start w-full">
                      <h2 className="text-[18px] md:text-[14px] lg:text-[16px] xl:text-[18px] text-[#14142A] font-[600] leading-[125%]">
                        Pattern: 
                      </h2>
                    </div>
                    <div className="flex justify-center md:justify-start items-center gap-x-[2%]">
                      <div className="flex w-full gap-x-[2%]">
                        {data?.detail?.pattern.map((item,index)=>(
                            <div key={index} className={`flex justify-center items-center cursor-pointer w-[23.5%] md:w-[18.4%] h-full transition-all duration-600`}>
                              <Image onClick={()=>setActiveIndex(index)} className="object-scale-down object-center w-full h-full" src={urlFor(item?.image).url()} alt={item?.alt} width={98} height={98}/>
                            </div>
                          ))}
                      </div>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
