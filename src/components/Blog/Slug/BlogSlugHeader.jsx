
import Link from "next/link";

export default function BlogSlugHeader({data}) {

  return (
    <div className='bg-[#fcfcfc]'>
        <div className='max-w-6xl mx-auto px-6 xl:px-0 pt-[36px] ss:pt-[40px] sm:pt-[40px]'>
            <div className='flex flex-col w-full h-full gap-y-[36px] ss:gap-y-[40px] sm:gap-y-[40px]'>
                {/*  */}
                <div className="flex justify-start md:items-center w-full gap-x-[4%] sm:gap-x-[2%]">
                    <div className="flex justify-start md:items-center w-[68%] sm:w-[74%] md:w-[80%] gap-x-[8px] lg:gap-x-[12px]">
                        <Link href={`/blog`} className="text-[16px] md:text-[14px] lg:text-[16px] xl:text-[18px] text-[#1C2532] hover:text-[#223B61] font-[400] leading-[125%] transition-all duration-500 cursor-pointer">
                          Blog
                        </Link>
                        <p className="text-[16px] md:text-[14px] lg:text-[16px] xl:text-[18px] text-[#1C2532] font-[400] leading-[125%]">
                            {`>`}
                        </p>

                        <p className="text-[16px] md:text-[14px] lg:text-[16px] xl:text-[18px] text-[#1C2532] font-[400] leading-[125%]">
                            เนื้อหา
                        </p>
                    </div>
                    <div className="flex justify-end md:items-center w-[28%] sm:w-[24%] md:w-[18%]">
                        <p className="text-[16px] md:text-[14px] lg:text-[16px] xl:text-[18px] text-[#1C2532] font-[400] leading-[125%]">
                            {`${data?.date[9]}${data?.date[8]}/${data?.date[6]}${data?.date[5]}/${data?.date[0]}${data?.date[1]}${data?.date[2]}${data?.date[3]}`}
                        </p>
                    </div>
                    
                </div>
                    
                  
                {/* Header Title */}
                <div className="flex justify-start items-center w-full">
                    <h1 className="text-[18px] md:text-[24px] xl:text-[32px] text-[#223B61] font-[600] leading-[125%] uppercase">
                        {data?.title}
                    </h1>
                </div>
            </div>
        </div>
    </div>
  )
}
