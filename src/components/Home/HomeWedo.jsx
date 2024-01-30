import React from 'react'

export default function HomeWedo() {
  return (
    <div className='bg-[#f1efe9]'>
      <div className='max-w-6xl mx-auto px-6 xl:px-0 py-[32px] sm:py-[48px] md:py-[64px] lg:py-[72px] xl:py-[90px]'>
        <div className='flex flex-col justify-center items-center w-full h-full gap-y-[32px] md:gap-y-[64px] lg:gap-y-[72px] xl:gap-y-[96px]'>
            {/* Header */}
            <div className='flex flex-col items-center md:w-[525px] gap-y-[8px] pb-[32px] md:pb-[40px] border-b-[1px] border-solid border-[#6F7489]'>
              <h3 className='text-[16px] md:text-[16px] lg:text-[20px] xl:text-[24px] text-[#223B61] font-[400] leading-[125%] uppercase'>
                what we do
              </h3>
              <h2 className='text-[20px] sm:text-[24px] md:text-[24px] lg:text-[30px] xl:text-[36px] text-[#223B61] font-[600] leading-[125%] uppercase'>
                provide the best products
              </h2>
            </div>

            {/* Content */}
            <div className='flex flex-col md:flex-row justify-between items-center md:items-start w-full gap-x-[2%] gap-y-[32px]'>
              {/* Content 001 */}
              <div className='flex flex-col items-center w-full ss:w-[80%] sm:w-[70%] md:w-[32%] gap-y-[16px]'>
                <h4 className='text-[16px] md:text-[16px] lg:text-[20px] xl:text-[24px] text-[#545867] font-[600] leading-[125%] text-center uppercase'>
                  luxurious Design
                </h4>  
                <p className='text-[16px] md:text-[16px] lg:text-[18px] text-[#545867] font-[400] leading-[125%] text-center whitespace-normal md:whitespace-pre-line'>
                  ทุกดีไซน์ในผลิตภัณฑ์ของเรา มีความสวยงาม โดดเด่นเฉพาะตัว ไม่เหมือนใคร และตอบโจทย์กับโครงสร้างทุกรูปแบบ
                </p>
              </div>

              {/* Content 002 */}
              <div className='flex flex-col items-center w-full ss:w-[80%] sm:w-[70%] md:w-[32%] gap-y-[16px]'>
                <h4 className='text-[16px] md:text-[16px] lg:text-[20px] xl:text-[24px] text-[#545867] font-[600] leading-[125%] text-center uppercase'>
                  HIGH QUALITY
                </h4>  
                <p className='text-[16px] md:text-[16px] lg:text-[18px] text-[#545867] font-[400] leading-[125%] text-center whitespace-normal md:whitespace-pre-line'>
                  อีกหนึ่งความสำคัญที่ลูกค้ามั่นใจได้คือผลิตภัณฑ์ ของเรามีคุณภาพสูง แข็งแรง คงทน มีอายุการใช้งานยืนยาว
                </p>
              </div>

              {/* Content 003 */}
              <div className='flex flex-col items-center w-full ss:w-[80%] sm:w-[70%] md:w-[32%] gap-y-[16px]'>
                <h4 className='text-[16px] md:text-[16px] lg:text-[20px] xl:text-[24px] text-[#545867] font-[600] leading-[125%] text-center uppercase'>
                  sustainable
                </h4>  
                <p className='text-[16px] md:text-[16px] lg:text-[18px] text-[#545867] font-[400] leading-[125%] text-center whitespace-normal md:whitespace-pre-line'>
                  เราเลือกเฟ้นผลิตภัณฑ์ที่มีส่วนช่วยลดภาวะโลก ร้อนที่เป็นปัญหาใหญ่ระดับโลก เพราะเราพร้อม เป็นส่วนหนึ่งในการเปลี่ยนแปลงเพื่อโลกที่ยั่งยืน
                </p>
              </div>

            </div>

        </div>
      </div>
    </div>
  )
}
