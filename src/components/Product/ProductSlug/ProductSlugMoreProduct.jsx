import CardMoreProduct from "@/components/Card/CardMoreProduct"
import Link from "next/link"

export default function ProductSlugMoreProduct({product}) {
  return (
    <div className="bg-[#fcfcfc]">
      <div className="max-w-6xl mx-auto px-6 xl:px-0 pb-[56px] md:pb-[64px] lg:pb-[72px] xl:pb-[80px]">
        <div className="flex flex-col justify-start md:justify-between items-center md:items-start w-full h-full gap-x-[5%] gap-y-[32px] sm:gap-y-[40px] md:gap-y-[48px] lg:gap-y-[56px]">
          {/* Header */}
          <div className="flex justify-between items-center sm:w-full gap-x-[24px]">
            <h2 className='font-pop text-[20px] sm:text-[24px] md:text-[24px] lg:text-[30px] xl:text-[36px] text-[#223B61] font-[600] leading-[125%] uppercase'>
              related products
            </h2>
            <Link href={'/product'} className="group flex justify-center sm:justify-start items-center gap-x-[8px]">
              <p className='text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px] text-[#070709] font-[500] uppercase leading-[125%] tracking-[4px] text-end sm:text-start'>
                view all
              </p>
              <svg className="group-hover:translate-x-2 transition-all duration-500" xmlns="http://www.w3.org/2000/svg" width="24" height="2" viewBox="0 0 24 2" fill="none">
                <path d="M0 1H24" stroke="#ABB1C1"/>
              </svg>
            </Link>
          </div>

          {/* Card */}
          <div className="flex flex-wrap justify-between w-full ss:w-[75%] md:w-full gap-x-[2%] gap-y-[16px] ss:gap-y-[24px]">
            {product?.slice(0,4).map((item,index)=>(
              <CardMoreProduct key={index} item={item} index={index}/>
            ))}
          </div>  

        </div>
      </div>
    </div>
  )
}
