import React from 'react'

export default function BlogHeader({data}) {
  return (
    <div className='bg-[#fcfcfc]'>
        <div className='max-w-6xl mx-auto px-6 xl:px-0 py-[40px] sm:py-[48px] md:py-[56px] lg:py-[64px] xl:py-[72px]'>
            <div className='flex flex-col justify-center items-center w-full h-full gap-y-[24px]'>
                {/* Header */}
                <div className='flex flex-col justify-center items-center w-full gap-y-[24px]'>
                    <h1 className='text-[20px] sm:text-[24px] md:text-[24px] lg:text-[30px] xl:text-[36px] text-[#14142A] font-[500] leading-[125%] uppercase'>
                        {data?.header}
                    </h1>
                    <p className='text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px] text-[#545867] font-[400] leading-[125%] text-center whitespace-normal sm:whitespace-pre-line'>
                        {data?.detail}
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}
