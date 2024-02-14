

export default function HomeCollection({data}) {
  return (
    <div className='bg-[#fcfcfc]'>
      <div className='max-w-6xl mx-auto px-6 xl:px-0 py-[32px] sm:py-[48px] md:py-[64px] lg:py-[72px] xl:py-[90px]'>
        <div className='flex flex-col justify-center items-center w-full h-full gap-y-[24px]'>
            {/* Header */}
            <div className='flex flex-col items-center w-full ss:w-[80%] sm:w-[70%] md:w-full gap-y-[24px]'>
              <h2 className='text-[20px] sm:text-[24px] md:text-[24px] lg:text-[30px] xl:text-[36px] text-[#223B61] font-[600] leading-[125%] uppercase'>
                {data?.header}
              </h2>
              <p className='text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px] text-[#545867] font-[400] leading-[160%] whitespace-normal lg:whitespace-pre-line text-center'>
                {data?.detail}
              </p>
            </div>

            <svg xmlns="http://www.w3.org/2000/svg" width="187" height="2" viewBox="0 0 187 2" fill="none">
              <path d="M0 1H187" stroke="#6F7489"/>
            </svg>

        </div>
      </div>
    </div>
  )
}
