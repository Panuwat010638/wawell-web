import client from "../../../../client"
import Image from "next/image"
import imageUrlBuilder from '@sanity/image-url'

const builder = imageUrlBuilder(client)
function urlFor(source) {
  return builder.image(source)
}

export default function SlugProjectHeader({data}) {
  return (
    <div className='bg-[#1C2532]'>
        <div className='max-w-full'>
            <div className='flex flex-col justify-center items-center w-full h-full relative'>
              {/* Image */}
              <div className="flex justify-center items-center w-full h-full z-[5]">
                <Image className=" object-cover object-center w-full h-[400px]" src={urlFor(data?.mainImage?.image).format("png").url()} radius="none" alt={data?.mainImage?.alt} width={1690} height={400}/>
              </div>
              <div className="flex flex-col justify-end md:justify-center items-center md:items-start w-full ss:w-[480px] sm:w-[640px] md:w-[768px] lg:w-[1024px] xl:w-[1152px] h-full px-6 xl:px-0 py-[48px] md:py-0 absolute top-0 z-[10] gap-y-[16px] sm:gap-y-[20] md:gap-y-[24px] lg:gap-y-[32px]">
                  <h1 className="font-pop text-[20px] sm:text-[24px] md:text-[24px] lg:text-[30px] xl:text-[36px] text-[#fcfcfc] font-[600] leading-[125%] text-center md:text-start">
                    {data?.title}
                  </h1>
                  <p className="text-[16px] lg:text-[18px] xl:text-[20px] text-[#fcfcfc] font-[400] leading-[125%] text-center md:text-start whitespace-normal md:whitespace-pre-line">
                    {data?.detail}
                  </p>
              </div>
            </div>
        </div>
    </div>
  )
}
