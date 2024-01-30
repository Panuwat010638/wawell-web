import Image from "next/image"
import Link from "next/link"
import img001 from "../../../public/assets/Images/Home/Wall/img001.png"
import img002 from "../../../public/assets/Images/Home/Wall/img002.png"
import img003 from "../../../public/assets/Images/Home/Wall/img003.png"
import img004 from "../../../public/assets/Images/Home/Wall/img004.png"
import img005 from "../../../public/assets/Images/Home/Wall/img005.png"
import img001M from "../../../public/assets/Images/Home/Wall/img001M.png"
import img002M from "../../../public/assets/Images/Home/Wall/img001M.png"

export default function HomeWall() {
  return (
    <div className='bg-[#fcfcfc]'>
      <div className='max-w-6xl mx-auto px-6 xl:px-0 pb-[32px] sm:pb-[48px] md:pb-[64px] lg:pb-[72px]'>
        <div className='flex flex-col justify-center items-center w-full h-full gap-y-[24px]'>
            {/* Header */}
            <div className='flex justify-center items-center w-full'>
              <h3 className='text-[18px] sm:text-[20px] md:text-[24px] lg:text-[28px] xl:text-[32px] text-[#223B61] font-[500] leading-[125%] text-center uppercase'>
                wall tiles
              </h3>
            </div>

            <div className='flex flex-col md:flex-row justify-between items-center w-full h-full md:h-[380px] lg:h-[500px] xl:h-[606px]'>
              
              {/* Left */}
              <div className='hidden md:flex w-full md:w-[50%] h-full'>
                {/* L R */}
                <div className='group flex justify-center items-center w-[50%] md:w-full h-full relative'>
                  <Image className="object-cover object-center w-full h-full transition-all duration-500 group-hover:brightness-50" src={img001} alt="Floor 004" quality={100} width={304} height={606}/>
                  <div className="flex flex-col justify-end items-start w-full h-full md:gap-y-[8px] p-[16px] md:p-[24px] z-[9] absolute top-0 opacity-100 group-hover:opacity-0 transition-all duration-500">
                    <h4 className='text-[20px] sm:text-[24px] md:text-[24px] lg:text-[28px] xl:text-[32px] text-[#FCFCFC] font-[600] leading-[125%] uppercase'>
                      01
                    </h4>
                    <p className='text-[14px] md:text-[16px] text-[#FCFCFC] font-[500] leading-[125%] uppercase text-center'>
                      3d big panel
                    </p>
                  </div>
                  <div className="flex flex-col justify-end items-start w-full h-full md:gap-y-[8px] p-[16px] md:p-[24px] z-[10] absolute top-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <h4 className='text-[20px] sm:text-[24px] md:text-[24px] lg:text-[28px] xl:text-[32px] text-[#FCFCFC] font-[600] leading-[125%] uppercase'>
                      01
                    </h4>
                    <p className='text-[14px] md:text-[16px] text-[#FCFCFC] font-[500] leading-[125%] uppercase text-center'>
                      3d big panel
                    </p>
                    <p className='text-[14px] md:text-[16px] text-[#FCFCFC] font-[400] leading-[125%] uppercase'>
                      กระเบื้องลายไม้จากวาเวล เดคอร์ ลวดลายเป็นธรรมชาติ และมีผิวสัมผัสใกล้เคียงกับไม้จริง
                    </p>
                  </div>
                  <Link href={`#`} className="flex justify-center items-center w-full h-full z-[11] absolute top-0">
                  </Link>
                </div>
                {/* L L */}
                <div className='group flex justify-center items-center w-[50%] md:w-full h-full relative'>
                  <Image className="object-cover object-center w-full h-full transition-all duration-500 group-hover:brightness-50" src={img002} alt="Floor 005" quality={100} width={304} height={606}/>
                  <div className="flex flex-col justify-end items-start w-full h-full md:gap-y-[8px] p-[16px] md:p-[24px] z-[9] absolute top-0 opacity-100 group-hover:opacity-0 transition-all duration-500">
                    <h4 className='text-[20px] sm:text-[24px] md:text-[24px] lg:text-[28px] xl:text-[32px] text-[#FCFCFC] font-[600] leading-[125%] uppercase'>
                      02
                    </h4>
                    <p className='text-[14px] md:text-[16px] text-[#FCFCFC] font-[500] leading-[125%] uppercase text-center'>
                      REGENERATED STONE
                    </p>
                  </div>
                  <div className="flex flex-col justify-end items-start w-full h-full md:gap-y-[8px] p-[16px] md:p-[24px] z-[10] absolute top-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <h4 className='text-[20px] sm:text-[24px] md:text-[24px] lg:text-[28px] xl:text-[32px] text-[#FCFCFC] font-[600] leading-[125%] uppercase'>
                      02
                    </h4>
                    <p className='text-[14px] md:text-[16px] text-[#FCFCFC] font-[500] leading-[125%] uppercase text-center'>
                      REGENERATED STONE
                    </p>
                    <p className='text-[14px] md:text-[16px] text-[#FCFCFC] font-[400] leading-[125%] uppercase'>
                      กระเบื้องลายไม้จากวาเวล เดคอร์ ลวดลายเป็นธรรมชาติ และมีผิวสัมผัสใกล้เคียงกับไม้จริง
                    </p>
                  </div>
                  <Link href={`#`} className="flex justify-center items-center w-full h-full z-[11] absolute top-0">
                  </Link>
                </div>
              </div>

              {/* Right */}
              <div className='flex flex-col w-full md:w-[50%] md:h-full'>
                {/* Right-Top */}
                <div className='group flex justify-center items-center w-full h-[50%] relative'>
                    <Image className="object-cover object-center w-full h-full transition-all duration-500 group-hover:brightness-50" src={img003} alt="Floor 001" quality={100} width={608} height={303}/>
                    <div className="flex flex-col justify-end items-start w-full h-full md:gap-y-[8px] p-[16px] md:p-[24px] z-[9] absolute top-0 opacity-100 group-hover:opacity-0 transition-all duration-500">
                      <h4 className='text-[20px] sm:text-[24px] md:text-[24px] lg:text-[28px] xl:text-[32px] text-[#FCFCFC] font-[600] leading-[125%] uppercase'>
                        03
                      </h4>
                      <p className='text-[14px] md:text-[16px] text-[#FCFCFC] font-[500] leading-[125%] uppercase text-center'>
                        Rammed Earth
                      </p>
                    </div>
                    <div className="flex flex-col justify-end items-start w-full h-full md:gap-y-[8px] p-[16px] md:p-[24px] z-[10] absolute top-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                      <h4 className='text-[20px] sm:text-[24px] md:text-[24px] lg:text-[28px] xl:text-[32px] text-[#FCFCFC] font-[600] leading-[125%] uppercase'>
                        03
                      </h4>
                      <p className='text-[14px] md:text-[16px] text-[#FCFCFC] font-[500] leading-[125%] uppercase text-center'>
                        Rammed Earth
                      </p>
                      <p className='text-[14px] md:text-[16px] text-[#FCFCFC] font-[400] leading-[125%] uppercase whitespace-normal xl:whitespace-pre-line'>
                        {'ผนังลวดลายดินอัดจากวาเวล เดคอร์ ลวดลายมีความใกล้เคียงกับดินจริง\nและสามารถเลือกสีสันให้เหมาะกับการใช้งานได้'}
                      </p>
                    </div>
                    <Link href={`#`} className="flex justify-center items-center w-full h-full z-[11] absolute top-0">
                    </Link>
                </div>
                {/* Right-Bottom */}
                <div className='flex w-full h-[50%]'>
                    {/* RB R */}
                    <div className='group flex justify-center items-center w-[50%] h-full relative'>
                      <Image className="object-cover object-center w-full h-full transition-all duration-500 group-hover:brightness-50" src={img004} alt="Floor 002" quality={100} width={304} height={303}/>
                      <div className="flex flex-col justify-end items-start w-full h-full md:gap-y-[8px] p-[16px] md:p-[24px] z-[9] absolute top-0 opacity-100 group-hover:opacity-0 transition-all duration-500">
                        <h4 className='text-[20px] sm:text-[24px] md:text-[24px] lg:text-[28px] xl:text-[32px] text-[#FCFCFC] font-[600] leading-[125%] uppercase'>
                          04
                        </h4>
                        <p className='text-[14px] md:text-[16px] text-[#FCFCFC] font-[500] leading-[125%] uppercase text-center'>
                          stone composite
                        </p>
                      </div>
                      <div className="flex flex-col justify-end items-start w-full h-full md:gap-y-[8px] p-[16px] md:p-[24px] z-[10] absolute top-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                        <h4 className='text-[20px] sm:text-[24px] md:text-[24px] lg:text-[28px] xl:text-[32px] text-[#FCFCFC] font-[600] leading-[125%] uppercase'>
                          04
                        </h4>
                        <p className='text-[14px] md:text-[16px] text-[#FCFCFC] font-[500] leading-[125%] uppercase text-center'>
                          stone composite
                        </p>
                        <p className='text-[14px] md:text-[16px] text-[#FCFCFC] font-[400] leading-[125%] uppercase'>
                          กระเบื้องลายไม้จากวาเวล เดคอร์ ลวดลายเป็นธรรมชาติ และมีผิวสัมผัสใกล้เคียงกับไม้จริง
                        </p>
                      </div>
                      <Link href={`#`} className="flex justify-center items-center w-full h-full z-[11] absolute top-0">
                      </Link>
                    </div>
                    {/* RB L */}
                    <div className='group flex justify-center items-center w-[50%] h-full relative'>
                      <Image className="object-cover object-center w-full h-full transition-all duration-500 group-hover:brightness-50" src={img005} alt="Floor 003" quality={100} width={304} height={303}/>
                      <div className="flex flex-col justify-end items-start w-full h-full md:gap-y-[8px] p-[16px] md:p-[24px] z-[9] absolute top-0 opacity-100 group-hover:opacity-0 transition-all duration-500">
                        <h4 className='text-[20px] sm:text-[24px] md:text-[24px] lg:text-[28px] xl:text-[32px] text-[#FCFCFC] font-[600] leading-[125%] uppercase'>
                          05
                        </h4>
                        <p className='text-[14px] md:text-[16px] text-[#FCFCFC] font-[500] leading-[125%] uppercase text-center'>
                          Regular-use
                        </p>
                      </div>
                      <div className="flex flex-col justify-end items-start w-full h-full md:gap-y-[8px] p-[16px] md:p-[24px] z-[10] absolute top-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                        <h4 className='text-[20px] sm:text-[24px] md:text-[24px] lg:text-[28px] xl:text-[32px] text-[#FCFCFC] font-[600] leading-[125%] uppercase'>
                          05
                        </h4>
                        <p className='text-[14px] md:text-[16px] text-[#FCFCFC] font-[500] leading-[125%] uppercase text-center'>
                          Regular-use
                        </p>
                        <p className='text-[14px] md:text-[16px] text-[#FCFCFC] font-[400] leading-[125%] uppercase'>
                          กระเบื้องลายไม้จากวาเวล เดคอร์ ลวดลายเป็นธรรมชาติ และมีผิวสัมผัสใกล้เคียงกับไม้จริง
                        </p>
                      </div>
                      <Link href={`#`} className="flex justify-center items-center w-full h-full z-[11] absolute top-0">
                      </Link>
                    </div>
                </div>
              </div>



              {/* LeftM */}
              <div className='flex md:hidden w-full h-full'>
                {/* L R */}
                <div className='flex justify-center items-center w-[50%] h-full relative'>
                  <Image className="object-cover object-center w-full h-full" src={img001M} alt="Floor 004M" quality={100} width={304} height={606}/>
                  <div className="flex flex-col justify-end items-start w-full h-full md:gap-y-[8px] p-[16px] md:p-[24px] z-[9] absolute top-0">
                    <h4 className='text-[20px] sm:text-[24px] md:text-[24px] lg:text-[28px] xl:text-[32px] text-[#FCFCFC] font-[600] leading-[125%] uppercase'>
                      01
                    </h4>
                    <p className='text-[14px] md:text-[16px] text-[#FCFCFC] font-[500] leading-[125%] uppercase text-center'>
                      3d big panel
                    </p>
                  </div>
                  <Link href={`#`} className="flex justify-center items-center w-full h-full z-[11] absolute top-0">
                  </Link>
                </div>
                {/* L L */}
                <div className='flex justify-center items-center w-[50%] h-full relative'>
                  <Image className="object-cover object-center w-full h-full" src={img002M} alt="Floor 005M" quality={100} width={304} height={606}/>
                  <div className="flex flex-col justify-end items-start w-full h-full md:gap-y-[8px] p-[16px] md:p-[24px] z-[9] absolute top-0">
                    <h4 className='text-[20px] sm:text-[24px] md:text-[24px] lg:text-[28px] xl:text-[32px] text-[#FCFCFC] font-[600] leading-[125%] uppercase'>
                      02
                    </h4>
                    <p className='text-[14px] md:text-[16px] text-[#FCFCFC] font-[500] leading-[125%] uppercase text-center'>
                      REGENERATED STONE
                    </p>
                  </div>
                  <Link href={`#`} className="flex justify-center items-center w-full h-full z-[11] absolute top-0">
                  </Link>
                </div>
              </div>

              {/* Right M No hover */}
              <div className='flex md:hidden flex-col w-full md:w-[50%] md:h-full'>
                {/* Right-Top */}
                <div className='group flex justify-center items-center w-full h-[50%] relative'>
                    <Image className="object-cover object-center w-full h-full transition-all duration-500 group-hover:brightness-50" src={img003} alt="Floor 001" quality={100} width={608} height={303}/>
                    <div className="flex flex-col justify-end items-start w-full h-full md:gap-y-[8px] p-[16px] md:p-[24px] z-[9] absolute top-0">
                      <h4 className='text-[20px] sm:text-[24px] md:text-[24px] lg:text-[28px] xl:text-[32px] text-[#FCFCFC] font-[600] leading-[125%] uppercase'>
                        03
                      </h4>
                      <p className='text-[14px] md:text-[16px] text-[#FCFCFC] font-[500] leading-[125%] uppercase text-center'>
                        Rammed Earth
                      </p>
                    </div>
                    <Link href={`#`} className="flex justify-center items-center w-full h-full z-[11] absolute top-0">
                    </Link>
                </div>
                {/* Right-Bottom */}
                <div className='flex w-full h-[50%]'>
                    {/* RB R */}
                    <div className='group flex justify-center items-center w-[50%] h-full relative'>
                      <Image className="object-cover object-center w-full h-full transition-all duration-500 group-hover:brightness-50" src={img004} alt="Floor 002" quality={100} width={304} height={303}/>
                      <div className="flex flex-col justify-end items-start w-full h-full md:gap-y-[8px] p-[16px] md:p-[24px] z-[9] absolute top-0">
                        <h4 className='text-[20px] sm:text-[24px] md:text-[24px] lg:text-[28px] xl:text-[32px] text-[#FCFCFC] font-[600] leading-[125%] uppercase'>
                          04
                        </h4>
                        <p className='text-[14px] md:text-[16px] text-[#FCFCFC] font-[500] leading-[125%] uppercase text-center'>
                          stone composite
                        </p>
                      </div>
                      <Link href={`#`} className="flex justify-center items-center w-full h-full z-[11] absolute top-0">
                      </Link>
                    </div>
                    {/* RB L */}
                    <div className='group flex justify-center items-center w-[50%] h-full relative'>
                      <Image className="object-cover object-center w-full h-full transition-all duration-500 group-hover:brightness-50" src={img005} alt="Floor 003" quality={100} width={304} height={303}/>
                      <div className="flex flex-col justify-end items-start w-full h-full md:gap-y-[8px] p-[16px] md:p-[24px] z-[9] absolute top-0">
                        <h4 className='text-[20px] sm:text-[24px] md:text-[24px] lg:text-[28px] xl:text-[32px] text-[#FCFCFC] font-[600] leading-[125%] uppercase'>
                          05
                        </h4>
                        <p className='text-[14px] md:text-[16px] text-[#FCFCFC] font-[500] leading-[125%] uppercase text-center'>
                          Regular-use
                        </p>
                      </div>
                      <Link href={`#`} className="flex justify-center items-center w-full h-full z-[11] absolute top-0">
                      </Link>
                    </div>
                </div>
              </div>
            </div>

            {/* Button */}
            <div className='flex items-center w-full md:w-auto'>
                <Link href={'#'} className="flex justify-center items-center w-full md:w-auto bg-[#223B61] hover:bg-[#1C2532] transition-all duration-500 px-[32px] py-[12px] rounded-[4px]">
                <h4 className='text-[16px] md:text-[16px] lg:text-[18px] text-[#FCFCFC] font-[400] leading-[125%]'>
                  Explore Our Products
                </h4>
              </Link>
            </div>
        </div>
      </div>
    </div>
  )
}
