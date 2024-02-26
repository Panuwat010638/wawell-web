import client from "../../../../client"
import Link from "next/link"
import { Image } from "@nextui-org/react"
import imageUrlBuilder from '@sanity/image-url'

const builder = imageUrlBuilder(client)
function urlFor(source) {
  return builder.image(source)
}

export default function SlugProjectContent({data}) {
  return (
    <div className="bg-[#fcfcfc]">
        <div className="max-w-6xl mx-auto px-6 xl:px-0 pt-[40px] md:pt-[64px] pb-[56px] md:pb-[80px]">
            <div className="flex flex-col justify-center items-center w-full h-full gap-y-[64px]">
              {/* Content */}
              <div className="flex flex-col items-center w-full gap-y-[24px]">
                {/* Content Top */}
                <div className="flex flex-col md:flex-row justify-between w-full ss:w-[90%] sm:w-[80%] md:w-full gap-y-[12px]">
                  <h2 className="text-[16px] md:text-[16px] lg:text-[20px] xl:text-[24px] text-[#14142A] font-[600] leading-[125%] uppercase">
                    {data?.title}
                  </h2>
                  <div className="flex items-center">
                    <Link href={`/project?category=${data?.category}`} className="text-[14px] sm:text-[16px] text-[#6F7489] hover:text-[#EFF1F7] font-[500] leading-[125%] flex justify-center items-center bg-[#EFF1F7] hover:bg-[#6F7489]  transition-all duration-500 rounded-[50px] px-6 py-[6px]">
                      {data?.category}
                    </Link>
                  </div>
                </div>

                {/* Content Mid */}
                <div className="flex flex-col md:flex-row md:items-center w-full ss:w-[90%] sm:w-[80%] md:w-full gap-x-[2%] gap-y-[12px]">
                  <div className="flex flex-col w-full md:w-[40%] gap-y-[12px]">
                    <p className="text-[14px] md:text-[16px] text-[#223B61] font-[400] leading-[125%]">
                      {`Client: ${data?.content?.client}`}
                    </p>
                    <p className="text-[14px] md:text-[16px] text-[#223B61] font-[400] leading-[125%]">
                      {`Location: ${data?.content?.location}`}
                    </p>
                    <p className="text-[14px] md:text-[16px] text-[#223B61] font-[400] leading-[125%]">
                      {`Year: ${data?.content?.year}`}
                    </p>
                  </div>
                  <div className="flex flex-col w-full md:w-[58%]">
                    <p className="text-[14px] md:text-[16px] lg:text-[18px] text-[#545867] font-[400] leading-[125%]">
                      {data?.detail}
                    </p>
                  </div>
                </div>

                {/* Content Bottom */}
                <div className="flex flex-col md:flex-row items-start md:items-center w-full ss:w-[90%] sm:w-[80%] md:w-full gap-x-[12px] gap-y-[12px]">
                  <h3 className="text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px] text-[#14142A] font-[400] leading-[125%]">
                    {`Applicated Items: `}
                  </h3>
                  <div className="flex flex-wrap items-center gap-x-[8px] gap-y-[8px]">
                      {data?.applicated?.map((item,index)=>(
                        <div key={index} className="flex items-center">
                          <Link href={`/product/${item?.slug?.slug?.current}`} className="text-[14px] sm:text-[16px] text-[#997F53] hover:text-[#F1EFE9] font-[500] leading-[125%] flex justify-center items-center bg-[#F1EFE9] hover:bg-[#997F53] transition-all duration-500 rounded-[50px] px-6 py-[6px]">
                            {item?.title}
                          </Link>
                        </div>
                      ))}
                    </div>
                </div>
              </div>

              {/* Image */}
              <div className="flex flex-col justify-center items-center w-full h-full gap-y-[24px]">
                {data?.images?.map((item,index)=>(
                  <div key={index} className=" flex justify-center items-center w-full h-full">
                      <Image className="object-scale-down object-center w-full h-full" src={urlFor(item?.image).format('png').url()} alt={item?.alt} radius="none" width={2880} height={1360}/>
                  </div>
                ))}
              </div>
            </div>
        </div>
    </div>
  )
}
