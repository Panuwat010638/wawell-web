import Link from "next/link"
import { Image } from "@nextui-org/react"
import img001 from "../../../public/assets/Images/Home/About/img001.png"
import client from "../../../client"
import imageUrlBuilder from '@sanity/image-url'

const builder = imageUrlBuilder(client)
function urlFor(source) {
  return builder.image(source)
}

export default function ({data}) {

  return (
    <div className='bg-[#FCFCFC]'>
      <div className='max-w-6xl mx-auto px-6 xl:px-0 py-[40px] sm:py-[48px] md:py-[56px] lg:py-[60px] xl:py-[64px]'>
        <div className='flex justify-between items-center w-full h-full gap-x-[4%]'>

          {/* text */}
          <div className='flex flex-col justify-center items-center md:items-start w-full md:w-[60%] h-full gap-y-[32px] md:gap-y-[40px]'>
            {/* Header */}
            <div className='flex flex-col md:w-[300px] gap-y-[8px] pb-[24px] md:pb-[40px] border-b-[1px] border-solid border-[#6F7489]'>
              <h3 className='text-[20px] xl:text-[24px] text-[#223B61] font-[400] leading-[125%] uppercase text-center md:text-start'>
                {data?.subheader}
              </h3>
              <h2 className='font-pop text-[24px] md:text-[24px] lg:text-[30px] xl:text-[36px] text-[#223B61] font-[600] leading-[125%] uppercase'>
                {data?.header}
              </h2>
            </div>
     
            <p className='text-[16px] lg:text-[18px] xl:text-[20px] text-[#7D7D7D] font-[400] leading-[160%] whitespace-normal lg:whitespace-pre-line text-center md:text-start'>
             {data?.detail}
            </p>

            <div className='flex items-center w-full md:w-auto'>
                <Link href={data?.button?.link} className="flex justify-center items-center w-full md:w-auto bg-[#223B61] hover:bg-[#1C2532] transition-all duration-500 px-[32px] py-[12px] rounded-[4px]">
                <h4 className='text-[16px] md:text-[16px] lg:text-[18px] text-[#FCFCFC] font-[500] leading-[125%]'>
                  {data?.button?.title}
                </h4>
              </Link>
            </div>

          </div>

          {/* Image */}
          <div className="hidden md:flex justify-center items-center w-[36%] h-full">
            <Image radius="none" className="object-scale-down object-center w-full" src={urlFor(data?.images?.image).format('webp').url()} alt="Image Home About" quality={100} width={img001.width} height={img001.height}/>
          </div>
        </div>
      </div>
    </div>
  )
}
