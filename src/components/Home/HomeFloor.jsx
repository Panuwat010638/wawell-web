import Image from "next/image"
import Link from "next/link"
import img001 from "../../../public/assets/Images/Home/Floor/img001.png"
import img002 from "../../../public/assets/Images/Home/Floor/img002.png"
import img003 from "../../../public/assets/Images/Home/Floor/img003.png"
import img004 from "../../../public/assets/Images/Home/Floor/img004.png"
import img005 from "../../../public/assets/Images/Home/Floor/img005.png"
import img004M from "../../../public/assets/Images/Home/Floor/img004M.png"
import img005M from "../../../public/assets/Images/Home/Floor/img005M.png"

export default function () {
  return (
    <div className='bg-[#fcfcfc]'>
      <div className='max-w-6xl mx-auto px-6 xl:px-0 pb-[32px] sm:pb-[48px] md:pb-[64px] lg:pb-[72px]'>
        <div className='flex flex-col justify-center items-center w-full h-full gap-y-[24px]'>
            {/* Header */}
            <div className='flex justify-center items-center w-full'>
              <h3 className='text-[18px] sm:text-[20px] md:text-[24px] lg:text-[28px] xl:text-[32px] text-[#223B61] font-[500] leading-[125%] text-center uppercase'>
                Floor tiles
              </h3>
            </div>

            <div className='flex flex-col md:flex-row justify-between items-center w-full h-full md:h-[380px] lg:h-[500px] xl:h-[606px]'>
              {/* Right */}
              <div className='flex flex-col w-full md:w-[50%] md:h-full'>
                {/* Right-Top */}
                <div className='group flex justify-center items-center w-full h-[50%] relative'>
                    <Image className="object-cover object-center w-full h-full transition-all duration-500 group-hover:brightness-50" src={img001} alt="Floor 001" quality={100} width={608} height={303}/>
                    <div className="flex flex-col justify-end items-end w-full h-full md:gap-y-[8px] p-[16px] md:p-[24px] z-[9] absolute top-0 opacity-100 group-hover:opacity-0 transition-all duration-500">
                      <h4 className='text-[20px] sm:text-[24px] md:text-[24px] lg:text-[28px] xl:text-[32px] text-[#FCFCFC] font-[600] leading-[125%] uppercase'>
                        01
                      </h4>
                      <p className='text-[14px] md:text-[16px] text-[#FCFCFC] font-[500] leading-[125%] uppercase text-center'>
                        TRAVERTINE
                      </p>
                    </div>
                    <div className="flex flex-col justify-end items-end w-full h-full md:gap-y-[8px] p-[16px] md:p-[24px] z-[10] absolute top-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                      <h4 className='text-[20px] sm:text-[24px] md:text-[24px] lg:text-[28px] xl:text-[32px] text-[#FCFCFC] font-[600] leading-[125%] uppercase'>
                        01
                      </h4>
                      <p className='text-[14px] md:text-[16px] text-[#FCFCFC] font-[500] leading-[125%] uppercase text-center'>
                        TRAVERTINE
                      </p>
                      <p className='text-[14px] md:text-[16px] text-[#FCFCFC] font-[400] leading-[125%] uppercase whitespace-normal xl:whitespace-pre-line text-end'>
                        {'กระเบื้องวาเวล เดคอร์ลายหินเสมือนหินธรรมชาติ ดีไซน์มีเอกลักษณ์เฉพาะ\nหรูหรา คงทน และสามารถใช้งานได้หลากหลาย'}
                      </p>
                    </div>
                    <Link href={`#`} className="flex justify-center items-center w-full h-full z-[11] absolute top-0">
                    </Link>
                </div>
                {/* Right-Bottom */}
                <div className='flex w-full h-[50%]'>
                    {/* RB R */}
                    <div className='group flex justify-center items-center w-[50%] h-full relative'>
                      <Image className="object-cover object-center w-full h-full transition-all duration-500 group-hover:brightness-50" src={img002} alt="Floor 002" quality={100} width={304} height={303}/>
                      <div className="flex flex-col justify-end items-start w-full h-full md:gap-y-[8px] p-[16px] md:p-[24px] z-[9] absolute top-0 opacity-100 group-hover:opacity-0 transition-all duration-500">
                        <h4 className='text-[20px] sm:text-[24px] md:text-[24px] lg:text-[28px] xl:text-[32px] text-[#FCFCFC] font-[600] leading-[125%] uppercase'>
                          02
                        </h4>
                        <p className='text-[14px] md:text-[16px] text-[#FCFCFC] font-[500] leading-[125%] uppercase text-center'>
                          MARBLE TILES
                        </p>
                      </div>
                      <div className="flex flex-col justify-end items-start w-full h-full md:gap-y-[8px] p-[16px] md:p-[24px] z-[10] absolute top-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                        <h4 className='text-[20px] sm:text-[24px] md:text-[24px] lg:text-[28px] xl:text-[32px] text-[#FCFCFC] font-[600] leading-[125%] uppercase'>
                          02
                        </h4>
                        <p className='text-[14px] md:text-[16px] text-[#FCFCFC] font-[500] leading-[125%] uppercase text-center'>
                          MARBLE TILES
                        </p>
                        <p className='text-[14px] md:text-[16px] text-[#FCFCFC] font-[400] leading-[125%] uppercase'>
                          กระเบื้องลายหินอ่อนที่มีความเสมือนหินธรรมชาติ การดูดซึมน้ำต่ำกว่า 0.5% และมีลวดลายสวยงาม
                        </p>
                      </div>
                      <Link href={`#`} className="flex justify-center items-center w-full h-full z-[11] absolute top-0">
                      </Link>
                    </div>
                    {/* RB L */}
                    <div className='group flex justify-center items-center w-[50%] h-full relative'>
                      <Image className="object-cover object-center w-full h-full transition-all duration-500 group-hover:brightness-50" src={img003} alt="Floor 003" quality={100} width={304} height={303}/>
                      <div className="flex flex-col justify-end items-start w-full h-full md:gap-y-[8px] p-[16px] md:p-[24px] z-[9] absolute top-0 opacity-100 group-hover:opacity-0 transition-all duration-500">
                        <h4 className='text-[20px] sm:text-[24px] md:text-[24px] lg:text-[28px] xl:text-[32px] text-[#FCFCFC] font-[600] leading-[125%] uppercase'>
                          03
                        </h4>
                        <p className='text-[14px] md:text-[16px] text-[#FCFCFC] font-[500] leading-[125%] uppercase text-center'>
                          WOOD COLLECTION
                        </p>
                      </div>
                      <div className="flex flex-col justify-end items-start w-full h-full md:gap-y-[8px] p-[16px] md:p-[24px] z-[10] absolute top-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                        <h4 className='text-[20px] sm:text-[24px] md:text-[24px] lg:text-[28px] xl:text-[32px] text-[#FCFCFC] font-[600] leading-[125%] uppercase'>
                          03
                        </h4>
                        <p className='text-[14px] md:text-[16px] text-[#FCFCFC] font-[500] leading-[125%] uppercase text-center'>
                          WOOD COLLECTION
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

              {/* Left */}
              <div className='hidden md:flex w-full md:w-[50%] h-full'>
                {/* L R */}
                <div className='group flex justify-center items-center w-[50%] md:w-full h-full relative'>
                  <Image className="object-cover object-center w-full h-full transition-all duration-500 group-hover:brightness-50" src={img004} alt="Floor 004" quality={100} width={304} height={606}/>
                  <div className="flex flex-col justify-end items-start w-full h-full md:gap-y-[8px] p-[16px] md:p-[24px] z-[9] absolute top-0 opacity-100 group-hover:opacity-0 transition-all duration-500">
                    <h4 className='text-[20px] sm:text-[24px] md:text-[24px] lg:text-[28px] xl:text-[32px] text-[#FCFCFC] font-[600] leading-[125%] uppercase'>
                      04
                    </h4>
                    <p className='text-[14px] md:text-[16px] text-[#FCFCFC] font-[500] leading-[125%] uppercase text-center'>
                      OUTDOOR ANTI-SLIP
                    </p>
                  </div>
                  <div className="flex flex-col justify-end items-start w-full h-full md:gap-y-[8px] p-[16px] md:p-[24px] z-[10] absolute top-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <h4 className='text-[20px] sm:text-[24px] md:text-[24px] lg:text-[28px] xl:text-[32px] text-[#FCFCFC] font-[600] leading-[125%] uppercase'>
                      04
                    </h4>
                    <p className='text-[14px] md:text-[16px] text-[#FCFCFC] font-[500] leading-[125%] uppercase text-center'>
                      OUTDOOR ANTI-SLIP
                    </p>
                    <p className='text-[14px] md:text-[16px] text-[#FCFCFC] font-[400] leading-[125%] uppercase'>
                      กระเบื้องใช้ภายนอกจากวาเวล เดคอร์ ลวดลายสวยงาม ค่ากันลื่นสูงถึง R11 และรูปแบบมีให้เลือกหลากหลาย
                    </p>
                  </div>
                  <Link href={`#`} className="flex justify-center items-center w-full h-full z-[11] absolute top-0">
                  </Link>
                </div>
                {/* L L */}
                <div className='group flex justify-center items-center w-[50%] md:w-full h-full relative'>
                  <Image className="object-cover object-center w-full h-full transition-all duration-500 group-hover:brightness-50" src={img005} alt="Floor 005" quality={100} width={304} height={606}/>
                  <div className="flex flex-col justify-end items-start w-full h-full md:gap-y-[8px] p-[16px] md:p-[24px] z-[9] absolute top-0 opacity-100 group-hover:opacity-0 transition-all duration-500">
                    <h4 className='text-[20px] sm:text-[24px] md:text-[24px] lg:text-[28px] xl:text-[32px] text-[#FCFCFC] font-[600] leading-[125%] uppercase'>
                      05
                    </h4>
                    <p className='text-[14px] md:text-[16px] text-[#FCFCFC] font-[500] leading-[125%] uppercase text-center'>
                      COMMERCIAL TILE
                    </p>
                  </div>
                  <div className="flex flex-col justify-end items-start w-full h-full md:gap-y-[8px] p-[16px] md:p-[24px] z-[10] absolute top-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <h4 className='text-[20px] sm:text-[24px] md:text-[24px] lg:text-[28px] xl:text-[32px] text-[#FCFCFC] font-[600] leading-[125%] uppercase'>
                      05
                    </h4>
                    <p className='text-[14px] md:text-[16px] text-[#FCFCFC] font-[500] leading-[125%] uppercase text-center'>
                      COMMERCIAL TILE
                    </p>
                    <p className='text-[14px] md:text-[16px] text-[#FCFCFC] font-[400] leading-[125%] uppercase'>
                      กระเบื้องลวดลายหลากหลายจากวาเวล เดคอร์ ลวดลายสวยงาม สามารถใช้งานได้ยาวนาน
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
                    <Image className="object-cover object-center w-full h-full transition-all duration-500 group-hover:brightness-50" src={img001} alt="Floor 001" quality={100} width={608} height={303}/>
                    <div className="flex flex-col justify-end items-end w-full h-full md:gap-y-[8px] p-[16px] md:p-[24px] z-[9] absolute top-0">
                      <h4 className='text-[20px] sm:text-[24px] md:text-[24px] lg:text-[28px] xl:text-[32px] text-[#FCFCFC] font-[600] leading-[125%] uppercase'>
                        01
                      </h4>
                      <p className='text-[14px] md:text-[16px] text-[#FCFCFC] font-[500] leading-[125%] uppercase text-center'>
                        TRAVERTINE
                      </p>
                    </div>
                    <Link href={`#`} className="flex justify-center items-center w-full h-full z-[11] absolute top-0">
                    </Link>
                </div>
                {/* Right-Bottom */}
                <div className='flex w-full h-[50%]'>
                    {/* RB R */}
                    <div className='group flex justify-center items-center w-[50%] h-full relative'>
                      <Image className="object-cover object-center w-full h-full transition-all duration-500 group-hover:brightness-50" src={img002} alt="Floor 002" quality={100} width={304} height={303}/>
                      <div className="flex flex-col justify-end items-start w-full h-full md:gap-y-[8px] p-[16px] md:p-[24px] z-[9] absolute top-0">
                        <h4 className='text-[20px] sm:text-[24px] md:text-[24px] lg:text-[28px] xl:text-[32px] text-[#FCFCFC] font-[600] leading-[125%] uppercase'>
                          02
                        </h4>
                        <p className='text-[14px] md:text-[16px] text-[#FCFCFC] font-[500] leading-[125%] uppercase text-center'>
                          MARBLE TILES
                        </p>
                      </div>
                      <Link href={`#`} className="flex justify-center items-center w-full h-full z-[11] absolute top-0">
                      </Link>
                    </div>
                    {/* RB L */}
                    <div className='group flex justify-center items-center w-[50%] h-full relative'>
                      <Image className="object-cover object-center w-full h-full transition-all duration-500 group-hover:brightness-50" src={img003} alt="Floor 003" quality={100} width={304} height={303}/>
                      <div className="flex flex-col justify-end items-start w-full h-full md:gap-y-[8px] p-[16px] md:p-[24px] z-[9] absolute top-0">
                        <h4 className='text-[20px] sm:text-[24px] md:text-[24px] lg:text-[28px] xl:text-[32px] text-[#FCFCFC] font-[600] leading-[125%] uppercase'>
                          03
                        </h4>
                        <p className='text-[14px] md:text-[16px] text-[#FCFCFC] font-[500] leading-[125%] uppercase text-center'>
                          WOOD COLLECTION
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
                  <Image className="object-cover object-center w-full h-full" src={img004M} alt="Floor 004M" quality={100} width={304} height={606}/>
                  <div className="flex flex-col justify-end items-start w-full h-full md:gap-y-[8px] p-[16px] md:p-[24px] z-[9] absolute top-0">
                    <h4 className='text-[20px] sm:text-[24px] md:text-[24px] lg:text-[28px] xl:text-[32px] text-[#FCFCFC] font-[600] leading-[125%] uppercase'>
                      04
                    </h4>
                    <p className='text-[14px] md:text-[16px] text-[#FCFCFC] font-[500] leading-[125%] uppercase text-center'>
                      OUTDOOR ANTI-SLIP
                    </p>
                  </div>
                  <Link href={`#`} className="flex justify-center items-center w-full h-full z-[11] absolute top-0">
                  </Link>
                </div>
                {/* L L */}
                <div className='flex justify-center items-center w-[50%] h-full relative'>
                  <Image className="object-cover object-center w-full h-full" src={img005M} alt="Floor 005M" quality={100} width={304} height={606}/>
                  <div className="flex flex-col justify-end items-start w-full h-full md:gap-y-[8px] p-[16px] md:p-[24px] z-[9] absolute top-0">
                    <h4 className='text-[20px] sm:text-[24px] md:text-[24px] lg:text-[28px] xl:text-[32px] text-[#FCFCFC] font-[600] leading-[125%] uppercase'>
                      05
                    </h4>
                    <p className='text-[14px] md:text-[16px] text-[#FCFCFC] font-[500] leading-[125%] uppercase text-center'>
                      COMMERCIAL TILE
                    </p>
                  </div>
                  <Link href={`#`} className="flex justify-center items-center w-full h-full z-[11] absolute top-0">
                  </Link>
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}
