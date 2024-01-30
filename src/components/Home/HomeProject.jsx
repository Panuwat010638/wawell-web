'use client'
import Image from "next/image"
import Link from "next/link"
import { useState,useEffect } from "react"
import img001 from "../../../public/assets/Images/Home/Project/img001.png"

const data = [
  {image:img001,alt:'SETTHASIRI, Taveewatana',title:'SETTHASIRI, Taveewatana',client:'SETTHASIRI, Taveewatana',category:'Residential',Year:'2023',detail:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. '},
  {image:img001,alt:'SETTHASIRI, Taveewatana',title:'SETTHASIRI, Taveewatana',client:'SETTHASIRI, Taveewatana',category:'Residential',Year:'2023',detail:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. '},
  {image:img001,alt:'SETTHASIRI, Taveewatana',title:'SETTHASIRI, Taveewatana',client:'SETTHASIRI, Taveewatana',category:'Residential',Year:'2023',detail:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. '},
  {image:img001,alt:'SETTHASIRI, Taveewatana',title:'SETTHASIRI, Taveewatana',client:'SETTHASIRI, Taveewatana',category:'Residential',Year:'2023',detail:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. '},
  {image:img001,alt:'SETTHASIRI, Taveewatana',title:'SETTHASIRI, Taveewatana',client:'SETTHASIRI, Taveewatana',category:'Residential',Year:'2023',detail:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. '},
]

export default function HomeProject() {
  const [activeIndex, setActiveIndex] = useState(0);

    const updateActiveIndex = (newIndex) => {
        if (newIndex < 0) {
            newIndex = React.Children.count(children) - 1;
        } else if (newIndex > 4) {
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
    <div className='bg-[#FCFCFC]'>
      <div className='max-w-6xl mx-auto px-6 xl:px-0 py-[40px] sm:py-[48px] md:py-[56px] lg:py-[60px] xl:py-[64px]'>
        <div className='flex flex-col justify-center w-full h-full gap-y-[24px] md:gap-y-[36px] xl:gap-y-[42px]'>
          {/* Header */}
          <div className="flex justify-between items-center w-full gap-x-[24px]">
            <h2 className='text-[20px] sm:text-[24px] md:text-[24px] lg:text-[30px] xl:text-[36px] text-[#223B61] font-[600] leading-[125%] uppercase'>
              our projects
            </h2>
            <Link href={'#'} className="group flex items-center gap-x-[8px]">
              <p className='text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px] text-[#070709] font-[500] leading-[125%] tracking-[4px]'>
                view all
              </p>
              <svg className="group-hover:translate-x-2 transition-all duration-500" xmlns="http://www.w3.org/2000/svg" width="24" height="2" viewBox="0 0 24 2" fill="none">
                <path d="M0 1H24" stroke="#ABB1C1"/>
              </svg>
            </Link>
          </div>

          {/* Content */}
          <div className="flex flex-col md:flex-row w-full h-full md:h-[400px] lg:h-[500px]">
            {/* Image */}
            <div className="flex flex-col w-full md:w-[70%] h-[200px] ss:h-[250px] sm:h-[300px] md:h-full relative">
              {data?.slice(0,5).map((item,index)=>(
                <div key={index} className={`flex justify-center items-center w-full h-full absolute top-0 transition-all duration-500 ${activeIndex==index ? "opacity-100":"opacity-0"}`}>
                  <Image className="object-cover object-center w-full h-full" src={item?.image} alt={item?.alt} quality={100} width={840} height={500}/>
                </div>
              ))}
            </div>

            {/* Text */}
            <div className="flex flex-col justify-between bg-[#f1efe9] w-full md:w-[30%] h-[280px] ss:h-[260px] sm:h-[300px] md:h-full p-[16px] ss:p-[20px] sm:p-[24px] md:p-[32px] lg:p-[36px] xl:p-[40px] relative">
              {/* Text Content */}
              <div className="flex flex-col w-full h-full relative">
                {data?.slice(0,5).map((item,index)=>(
                  <div key={index} className={`flex flex-col w-full gap-y-[16px] absolute top-0 transition-all duration-500 ${activeIndex==index ? "opacity-100":"opacity-0"}`}>
                      <h3 className='text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px] text-[#14142A] font-[500] leading-[125%]'>
                          {item?.title}
                      </h3>
                      <div className="flex flex-col w-full">
                        <p className='text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px] text-[#545867] font-[400] leading-[125%]'>
                          {`Client: ${item?.client}`}
                        </p>
                        <p className='text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px] text-[#545867] font-[400] leading-[125%]'>
                          {`Category: ${item?.category}`}
                        </p>
                        <p className='text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px] text-[#545867] font-[400] leading-[125%]'>
                          {`Year: ${item?.Year}`}
                        </p>
                      </div>
                      <p className='text-[14px] lg:text-[16px] xl:text-[18px] text-[#545867] font-[400] leading-[125%]'>
                          {item?.detail}
                      </p>
                      
                  </div>
                ))}
              </div>
              {/* Dot */}
              <div className="flex justify-center md:justify-between items-center gap-x-[1%] sm:gap-x-[8px] md:gap-x-[1%]">
                {data?.slice(0,5).map((item,index)=>(
                  <div key={index} className={`flex w-[19.2%] sm:w-[40px] md:w-[19.2%] h-[4px] rounded-[20px] ${activeIndex == index ? "bg-[#545867]":"bg-[#ABB1C1]"}`}/>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
