

export default function AboutSec04({data}) {
  return (
    <div className='bg-[#fcfcfc]'>
      <div className='max-w-6xl mx-auto px-6 xl:px-0 pb-[56px] md:pb-[64px] lg:pb-[72px] xl:pb-[80px]'>
        <div className='flex flex-col md:flex-row justify-center items-center w-full h-full gap-x-[2%] gap-y-[32px] sm:gap-y-[36px]'>
            {/* Natural Stone */}
            <div className='flex flex-col justify-center items-center w-full sm:w-[80%] md:w-[49%]'>
                <div className='flex justify-center items-center w-full py-4 rounded-[4px] bg-[#F1EFE9]'>
                    <h2 className='text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px] text-[#223B61] font-[500] leading-[125%] text-center'>
                      {data?.naturalstone?.header}
                    </h2>
                </div>
                <div className='flex flex-col justify-center items-center w-full'>
                  {data?.naturalstone?.detail.slice(0,6).map((item,index)=>(
                    <div key={index} className='flex justify-start ss:justify-center items-center w-full py-4 border-b-[1px] border-solid border-[#f1efe9]'>
                      <p className='text-[16px] md:text-[14px] lg:text-[16px] xl:text-[18px] text-[#545867] font-[400] leading-[125%]'>
                          {item?.title}
                      </p>
                    </div>
                  ))}
                </div>
            </div>
            {/* Wawell Tile */}
            <div className='flex flex-col justify-center items-center w-full sm:w-[80%] md:w-[49%]'>
                <div className='flex justify-center items-center w-full py-4 rounded-[4px] bg-[#F1EFE9]'>
                    <h2 className='text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px] text-[#223B61] font-[500] leading-[125%] text-center'>
                      {data?.WawellTile?.header}
                    </h2>
                </div>
                <div className='flex flex-col justify-center items-center w-full'>
                  {data?.WawellTile?.detail.slice(0,6).map((item,index)=>(
                    <div key={index} className='flex justify-start ss:justify-center items-center w-full py-4 border-b-[1px] border-solid border-[#f1efe9]'>
                      <p className='text-[16px] md:text-[14px] lg:text-[16px] xl:text-[18px] text-[#545867] font-[400] leading-[125%]'>
                          {item?.title}
                      </p>
                    </div>
                  ))}
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}
