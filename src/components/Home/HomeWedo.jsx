import React from 'react'

export default function HomeWedo({data}) {
  return (
    <div className='bg-[#f1efe9]'>
      <div className='max-w-6xl mx-auto px-6 xl:px-0 py-[32px] sm:py-[48px] md:py-[64px] lg:py-[72px] xl:py-[90px]'>
        <div className='flex flex-col justify-center items-center w-full h-full gap-y-[32px] md:gap-y-[64px] lg:gap-y-[72px] xl:gap-y-[96px]'>
            {/* Header */}
            <div className='flex flex-col items-center md:w-[525px] gap-y-[8px] pb-[32px] md:pb-[40px] border-b-[1px] border-solid border-[#6F7489]'>
              <h3 className='text-[16px] md:text-[16px] lg:text-[20px] xl:text-[24px] text-[#223B61] font-[400] leading-[125%] uppercase'>
                {data?.subheader}
              </h3>
              <h2 className='text-[20px] sm:text-[24px] md:text-[24px] lg:text-[30px] xl:text-[36px] text-[#223B61] font-[600] leading-[125%] uppercase'>
                {data?.header}
              </h2>
            </div>

            {/* Content */}
            <div className='flex flex-col md:flex-row justify-between items-center md:items-start w-full gap-x-[2%] gap-y-[32px]'>
              {data?.wedo?.map((item,index)=>(
                <div key={index} className='flex flex-col items-center w-full ss:w-[80%] sm:w-[70%] md:w-[32%] gap-y-[16px]'>
                  <h4 className='text-[16px] md:text-[16px] lg:text-[20px] xl:text-[24px] text-[#545867] font-[600] leading-[125%] text-center uppercase'>
                    {item?.title}
                  </h4>  
                  <p className='text-[16px] md:text-[16px] lg:text-[18px] text-[#545867] font-[400] leading-[125%] text-center whitespace-normal md:whitespace-pre-line'>
                    {item?.detail}
                  </p>
                </div>
              ))}
              

              

            </div>

        </div>
      </div>
    </div>
  )
}
