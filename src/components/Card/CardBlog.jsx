import Image from "next/image"
import Link from "next/link"

export default function CardBlog({item,index}) {
  return (
    <div key={index} className="group flex flex-col gap-y-[16px] md:gap-y-[24px] w-full ss:w-[49%] sm:w-[49%] md:w-[32%] relative">
      <div className="flex justify-center items-center w-full h-auto ss:h-[155px] sm:h-[212px] md:h-[170px] lg:h-[230px] xl:h-[292px] overflow-hidden">
        <Image className=" object-cover object-center w-full h-full transition-all duration-500 group-hover:scale-110" src={item?.image} alt={item?.alt} quality={100} width={398} height={292}/>
      </div>
      <div className="flex flex-col gap-y-[4px]">
        <h3 className='text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px] text-[#070709] font-[500] leading-[125%] line-clamp-1'>
          {item?.title}
        </h3>
        <p className='text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px] text-[#545867] font-[400] leading-[125%] line-clamp-2'>
          {item?.detail}
        </p>
      </div>
      <Link href={item?.href} className="flex w-full h-full z-[10] absolute top-0">

      </Link>
    </div>
  )
}
