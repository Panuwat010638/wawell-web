

export default function ProjectHeader({data}) {
  return (
    <div className="bg-[#fcfcfc]">
        <div className="max-w-6xl mx-auto px-6 xl:px-0 pt-[40px] sm:pt-[48px] md:pt-[56px] lg:pt-[64px] xl:pt-[72px] pb-[32px] ss:pb-[36px] md:pb-[40px] lg:pb-[48px]">
            <div className="flex flex-col justify-center items-center w-full h-full gap-y-[24px]">
                <h1 className="font-pop text-[20px] sm:text-[24px] md:text-[24px] lg:text-[30px] xl:text-[36px] text-[#14142A] font-[600] leading-[125%] uppercase">
                    {data?.header?.title}
                </h1>
                <p className="text-[14px] md:text-[16px] lg:text-[18px] text-[#545867] font-[400] leading-[150%] whitespace-normal md:whitespace-pre-line text-center">
                    {data?.header?.detail}
                </p>
            </div>
        </div>
    </div>
  )
}
