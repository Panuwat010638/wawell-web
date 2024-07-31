'use client'
import { useState,Suspense } from "react"
import { Button,Link,Skeleton } from "@nextui-org/react"
import { Image } from "@nextui-org/react"
import client from "../../../../client"
import imageUrlBuilder from '@sanity/image-url'
import ly1 from "../../../../public/assets/Images/SlugProduct/ly1.png"
import ly2 from "../../../../public/assets/Images/SlugProduct/ly2.png"
import callback from "../../../../public/assets/Images/SlugProduct/callback.png"


const builder = imageUrlBuilder(client)
function urlFor(source) {
  return builder.image(source)
}

export default function ProductSlugContent({data}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [activePattern,setActivePattern]=useState(0)
 
  return (
    <div className="bg-[#fcfcfc]">
      <div className="max-w-6xl mx-auto px-6 xl:px-0 pb-[56px] md:pb-[64px] lg:pb-[72px] xl:pb-[80px]">
        <div className="flex flex-col lg:flex-row justify-start lg:justify-between items-center lg:items-start w-full h-full gap-x-[5%] gap-y-[16px]">

          {/* Image */}
          <div className="flex items-center w-full ss:w-[90%] sm:w-[80%] md:w-[80%] h-auto md:h-full">
            {data?.detail?.productsize[activePattern].pattern == undefined ? (
              <div className="flex flex-col w-full h-[327.2px] ss:h-[388.8px] sm:h-[473.6px] md:h-[288px] lg:h-[390.4px] xl:h-[524px]">
                {data?.mainImage?.image!=undefined ? (
                  <Suspense fallback={<Skeleton className="flex h-full w-full">
                    <div className="h-full w-full rounded-lg bg-default-300"></div>
                  </Skeleton>}>
                      <div className={`flex justify-center items-center w-full h-full`}>
                      <Image radius="none" className=" object-contain object-center w-full h-full" src={urlFor(data.mainImage?.image).url()} alt={data.mainImage?.alt} width={'100%'} height={'100%'}/>
                      </div>
                    </Suspense>
                  ):(
                    <Suspense fallback={<Skeleton>
                      <div className="h-full w-full rounded-lg bg-default-300"></div>
                    </Skeleton>}>
                      <div  className={`flex justify-center items-center w-full h-full`}>
                        <Image radius="none" className=" object-contain object-center w-full h-full" src={callback} alt={`Wawell Callback Image`} width={'100%'} height={'100%'}/>
                      </div>
                    </Suspense>
                    
                  )}
                  
              </div>
            ):(
              <div className="flex flex-col w-full items-center h-[327.2px] ss:h-[388.8px] sm:h-[473.6px] md:h-[288px] lg:h-[390.4px] xl:h-[524px]  relative">
                {data?.detail?.productsize[activePattern]?.pattern.map((item,index)=>(
                  <div key={index} className={`flex justify-center items-center w-full h-full transition-all duration-700 ease-linear absolute top-0 ${activeIndex==index ? "opacity-100 z-[10]":"opacity-0 z-[1]"}`}>
                    <Image radius="none" className=" object-contain object-center w-full h-full" src={urlFor(item?.image).url()} alt={item?.alt} width={'100%'} height={'100%'}/>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Content */}
          <div className="flex flex-col w-full ss:w-[90%] sm:w-[80%] md:w-[80%] h-auto md:h-full gap-y-[16px] md:gap-y-[24px]">
              {/* Name Product */}
              <div className="flex flex-col md:flex-row justify-normal md:justify-between items-center w-full gap-y-[8px] sm:gap-y-[16px] gap-x-[16px] pb-[16px] md:pb-[24px] border-b-[2px] border-solid border-[#E0E3EB]">
                  <h1 className="text-[18px] md:text-[16px] lg:text-[20px] xl:text-[24px] text-[#14142A] font-[700] leading-[125%] uppercase">
                    {data?.title}
                  </h1>
                  {data?.detail?.productsize[activePattern].pattern == undefined ? (
                      <div className="flex">
                        <Button as={Link} href={`${urlFor(data.mainImage?.image).url()}?dl=${data?.title}.jpg`} target="_blank" size="sm" radius="full" className="group data-hover:bg-[#6F7489] flex justify-center items-center px-[24px] h-[38px] rounded-[50px] bg-[#EFF1F7] hover:bg-[#6F7489] transition-all duration-700
                        text-[16px] md:text-[14px] lg:text-[16px] text-[#6F7489] hover:text-[#EFF1F7] font-[600]">
                          Download
                        </Button>  
                      </div>
                  ):(
                    <div className="flex">
                      <Button as={Link} href={`${urlFor(data?.detail?.productsize[activePattern]?.pattern[activeIndex].image).url()}?dl=${data?.title}.jpg`} target="_blank" size="sm" radius="full" className="group data-hover:bg-[#6F7489] flex justify-center items-center px-[24px] h-[38px] rounded-[50px] bg-[#EFF1F7] hover:bg-[#6F7489] transition-all duration-700
                      text-[16px] md:text-[14px] lg:text-[16px] text-[#6F7489] hover:text-[#EFF1F7] font-[600]">
                        Download
                      </Button>  
                    </div>
                  )}
                  
              </div>

              {/* Content */}
              <div className="flex flex-col w-full gap-y-[16px] md:gap-y-[24px]">

                  <div className="flex flex-col-reverse md:flex-col w-full gap-y-[16px] md:gap-y-[24px]">
                    {/* Detail */}
                    <div className="flex flex-col md:flex-row w-full gap-x-[2%] gap-y-[16px]">
                        {/* Left */}
                        <div className="flex flex-col w-full md:w-[53%] gap-y-[8px]">
                          {/* SE */}
                          <div className="flex gap-x-[8px] md:gap-x-[1%] w-full">
                            <div className="flex md:w-[49%]">
                              <h2 className="text-[18px] md:text-[14px] lg:text-[16px] xl:text-[18px] text-[#14142A] font-[700] leading-[125%]">
                                Series:
                              </h2>
                            </div>
                            <div className="flex md:w-[50%]">
                              <p className="text-[18px] md:text-[14px] lg:text-[16px] xl:text-[18px] text-[#14142A] font-[400] leading-[125%]">
                                {data?.series}
                              </p>
                            </div>
                          </div>
                          {/* Material: 
                          <div className="flex gap-x-[8px] md:gap-x-[1%] w-full">
                            <div className="flex md:w-[49%]">
                              <h2 className="text-[18px] md:text-[14px] lg:text-[16px] xl:text-[18px] text-[#14142A] font-[700] leading-[125%]">
                                Material: 
                              </h2>
                            </div>
                            <div className="flex md:w-[50%]">
                              <p className="text-[18px] md:text-[14px] lg:text-[16px] xl:text-[18px] text-[#14142A] font-[400] leading-[125%]">
                                {`${data?.detail?.material ? (data?.detail?.material):"-"}`}
                              </p>
                            </div>
                          </div> */}
                          
                          {/* Finish: */}
                          <div className="flex gap-x-[8px] md:gap-x-[1%] w-full">
                            <div className="flex md:w-[49%]">
                              <h2 className="text-[18px] md:text-[14px] lg:text-[16px] xl:text-[18px] text-[#14142A] font-[700] leading-[125%]">
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
                              <h2 className="text-[18px] md:text-[14px] lg:text-[16px] xl:text-[18px] text-[#14142A] font-[700] leading-[125%]">
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
                              <h2 className="text-[18px] md:text-[14px] lg:text-[16px] xl:text-[18px] text-[#14142A] font-[700] leading-[125%]">
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
                        {data?.detail?.productsize==undefined ? null:(
                         <div className="flex flex-col w-full md:w-[55%] gap-y-[4px]">
                          <h2 className="text-[18px] md:text-[14px] lg:text-[16px] xl:text-[18px] text-[#14142A] font-[700] leading-[125%]">
                            Size Available: 
                          </h2>
                          {data?.detail?.productsize==undefined ? (
                            <p className="text-[18px] md:text-[14px] lg:text-[16px] xl:text-[18px] text-[#14142A] font-[400] leading-[125%]">
                              -
                            </p>
                          ):(
                            <div className="flex flex-col w-full gap-y-[4px]">
                              {data?.detail?.productsize.map((item,index)=>(
                                <div key={index} className="flex items-center w-full">
                                  <p className="text-[18px] md:text-[14px] lg:text-[16px] xl:text-[18px] text-[#14142A] font-[400] leading-[125%]">
                                    {item?.size}/{item?.size2}
                                  </p>
                                </div>
                              ))}
                            </div>
                          )}
                          
                        </div> 
                        )}
                        
                    </div>
                    {/* Pattern */}
                    {data?.detail?.productsize[activePattern].size == undefined ? null :(
                     <div className="flex flex-col w-full gap-y-[24px]">
                        {/* Header Pattern */}
                        <div className="flex flex-col xl:flex-row justify-start xl:items-center w-full gap-x-[32px] gap-y-[16px] xl:gap-y-[32px]">
                          <h2 className="text-[18px] md:text-[14px] lg:text-[16px] xl:text-[18px] text-[#14142A] font-[700] leading-[125%]">
                            Pattern: 
                          </h2>
                          <div className="grid grid-cols-3 xl:flex flex-wrap items-center gap-[8px] sm:gap-[16px]">
                            {data?.detail?.productsize.map((item,index)=>(
                                <button onClick={()=>setActivePattern(index)} key={index} className={`group ${activePattern==index ? "bg-[#c4b293]":"bg-[#F1EFE9] hover:bg-[#c4b293]"} flex justify-center items-center w-full xl:w-auto transition-all duration-500 rounded-lg px-4 sm:px-6 py-[4px] sm:py-[6px]`}>
                                  <p className={`text-[16px] font-[400] leading-[125%] transition-all duration-500 ${activePattern == index ? "text-[#F1EFE9]":"text-[#997F53] group-hover:text-[#F1EFE9]"}`}>
                                    {item?.size?.replace( "mm", "")}
                                  </p>
                                </button>
                              ))}
                          </div>
                        </div>
                        <div className="flex justify-center md:justify-start items-center gap-x-[2%]">
                          {data?.detail?.productsize[activePattern].pattern == undefined ? null :(
                            <div className="grid grid-cols-4 md:grid-cols-6 w-full gap-[8px]">
                            {data?.detail?.productsize[activePattern].pattern.map((item,index)=>(
                              <Suspense key={index} fallback={
                                <Skeleton className="flex w-full bg-default-300 h-[80px] ss:h-[90px] sm:h-[112px] md:h-[84px] lg:h-[75px] xl:h-[90px]">
                                <div className="h-full w-full bg-default-300"></div>
                              </Skeleton>
                              }>
                                <div className={`flex justify-center items-center cursor-pointer w-full h-full transition-all duration-700`}>
                                  <Image radius="none" onClick={()=>setActiveIndex(index)} className="object-cover object-center w-full h-[80px] ss:h-[90px]  sm:h-[112px] md:h-[84px] lg:h-[75px] xl:h-[90px]" src={urlFor(item?.image).url()} alt={item?.alt ? item?.alt:`${data?.title} Size: ${item?.size}, Pattern: ${index+1}`} width={'100%'} height={'100%'}/>
                                </div>
                              </Suspense>
                                
                              ))}
                          </div>
                          )}
                          
                        </div>
                    </div> 
                    )}
                    
                            
                            
                </div>
                {/* Contact */}
                <div className="flex flex-col-reverse md:flex-row justify-start md:justify-between items-center md:items-end w-full pt-[32px] md:pt-0 gap-y-[64px]">
                  <Link href={`/contact`} className="flex w-full justify-center md:justify-start ss:w-[90%] sm:w-[80%] md:w-[49%]">
                    <Button size="sm" className="group data-hover:bg-[#fcfcfc] flex justify-center items-center w-full md:w-auto md:px-[48px] h-[48px] rounded-[4px] bg-[#223B61] hover:bg-[#fcfcfc] transition-all duration-500
                      text-[16px] md:text-[14px] lg:text-[16px] xl:text-[18px] text-[#fcfcfc] hover:text-[#223B61] font-[500] border-[1px] border-solid border-[#fcfcfc] hover:border-[#223B61]">
                      Contact Us
                    </Button>  
                  </Link>
                  <div className="flex justify-start w-full md:w-auto gap-x-[10px]">
                      <div className="flex justify-center items-center">
                        <Image radius="none" className=" object-scale-down object-center w-full h-[80px]" src={ly1} alt="มอก.2508-2555" quality={100} width={'100%'} height={'100%'}/>
                      </div>  
                      <div className="flex justify-center items-center">
                        <Image radius="none" className=" object-scale-down object-center w-full h-[80px]" src={ly2} alt="QR code มอก.2508-2555" quality={100} width={'100%'} height={'100%'}/>
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
