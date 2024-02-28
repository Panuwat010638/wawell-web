import CardBlog from "@/components/Card/CardBlog"

export default function BlogSlugMoreBlog({blog}) {
  return (
    <div className='bg-[#fcfcfc]'>
        <div className='max-w-6xl mx-auto px-6 xl:px-0 py-[40px] ss:py-[48px] sm:py-[56px] md:py-[64px] lg:py-[72px] xl:py-[80px]'>
            <div className='flex flex-col w-full h-full gap-y-[24px] sm:gap-y-[36px] md:gap-y-[40px] lg:gap-y-[48px]'>
                {/* Header */}
                <div className='flex justify-center items-center w-full'>
                    <h2 className='font-pop text-[20px] sm:text-[24px] md:text-[24px] lg:text-[30px] xl:text-[36px] text-[#223B61] font-[600] leading-[125%] uppercase  pb-[16px] sm:pb-[20px] md:pb-[24px] lg:pb-[32px] border-b-[2px] border-solid border-[#d3d6de]'>
                        related blogs
                    </h2>
                </div>
                {/* Card */}
                {/* Content */}
                <div className="flex flex-wrap items-center w-full gap-x-[2%] gap-y-[24px]">
                    {blog?.slice(0, 3).map((item,index)=>(
                        <CardBlog item={item} index={index} key={index}/>
                    ))}
                </div>
            </div>
        </div>
    </div>
  )
}
