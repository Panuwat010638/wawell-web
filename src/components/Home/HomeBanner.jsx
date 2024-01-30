'use client'
import Image from "next/image"
import Link from "next/link"
import { useState,useEffect } from "react"


export default function HomeBanner({data}) {
  const [activeIndex, setActiveIndex] = useState(0);

    const updateActiveIndex = (newIndex) => {
        if (newIndex < 0) {
            newIndex = React.Children.count(children) - 1;
        } else if (newIndex > 3) {
            newIndex = 0;
        }
        setActiveIndex(newIndex);
    }
    useEffect(() => {
        const interval = setInterval(() => {
          // เรียกใช้ฟังก์ชันเพื่อเปลี่ยนตำแหน่งทุก 5 วินาที
          updateActiveIndex(activeIndex + 1);
        }, 5000);
    
        return () => {
          // เมื่อ component ถูก unmount ให้ล้าง interval
          clearInterval(interval);
        };
      });

  return (
    <div className="bg-[#ffffff]">
      <div className="max-w-full pt-[80px] md:pt-0">
        <div className="flex flex-col justify-center items-center w-full h-full relative">

          {/* Image */}
          <div className="hidden md:flex flex-col w-full md:h-[600px] lg:h-[660px] xl:h-[720px] relative">
              {data?.images.map((item,index)=>(
                <div key={index} className={`flex justify-center items-center w-full h-full absolute top-0 transition-all duration-500 ${activeIndex==index ? "opacity-100":"opacity-0"}`}>
                  <Image className="object-cover object-center w-full h-full" src={item?.image} alt={item?.alt} quality={100} priority width={1440} height={720}/>
                </div>
              ))}
              <div className="hidden md:flex w-[40%] h-full bg-[#14142A4D] z-[10] absolute top-0">

              </div>
          </div>

          {/* ImageM */}
          <div className="flex md:hidden flex-col w-full h-[763px] relative">
              {data?.images.map((item,index)=>(
                <div key={index} className={`flex justify-center items-center w-full h-full absolute top-0 transition-all duration-500 ${activeIndex==index ? "opacity-100":"opacity-0"}`}>
                  <Image className="object-cover object-center w-full h-full" src={item?.imageM} alt={item?.alt} quality={100} priority width={1440} height={720}/>
                </div>
              ))}
          </div>

          {/* Text */}
          <div className="flex flex-col justify-start md:justify-center w-full md:w-[768px] lg:w-[1024px] xl:w-[1152px] h-full px-6 xl:px-0 z-[11] absolute top-0">
              {/* Title */}
              <div className="flex flex-col items-center md:items-start w-full gap-y-[16px]">
                  <h2 className="text-[36px] sm:text-[42px] md:text-[36px] lg:text-[42px] xl:text-[48px] text-[#FCFCFC] font-[700] leading-[125%] pt-[80px] md:pt-0">
                    {data?.title}
                  </h2>
                  <p className="text-[16px] lg:text-[20px] xl:text-[24px] text-[#FCFCFC] font-[400] leading-[125%] whitespace-pre-line">
                    {data?.detail}
                  </p>
              </div>
          </div>


          {/* Dot */}
          <div className="flex justify-center items-end w-full h-full z-[12] absolute top-0">
              <div className="flex justify-center items-center pb-[40px] gap-x-[4px] sm:gap-x-[6px] md:gap-x-[8px]">
                {data.images.map((item,index)=>(
                  <div key={index} className={`flex w-[40px] md:w-[60px] h-[4px] rounded-[20px] ${activeIndex == index ? "bg-[#545867]":"bg-[#ABB1C1]"}`}/>
                ))}
                  
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}
