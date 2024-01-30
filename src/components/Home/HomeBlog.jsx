'use client'
import Image from "next/image"
import Link from "next/link"
import CardBlog from "../Card/CardBlog"
import img001 from "../../../public/assets/Images/Home/Blog/img001.png"

const data = [
  {image:img001,alt:'001',href:'#',title:'Lorem Ipsum is simply',detail:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. '},
  {image:img001,alt:'001',href:'#',title:'Lorem Ipsum is simply',detail:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. '},
  {image:img001,alt:'001',href:'#',title:'Lorem Ipsum is simply',detail:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. '},
  {image:img001,alt:'001',href:'#',title:'Lorem Ipsum is simply',detail:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. '},
  {image:img001,alt:'001',href:'#',title:'Lorem Ipsum is simply',detail:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. '},
  {image:img001,alt:'001',href:'#',title:'Lorem Ipsum is simply',detail:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. '},
]

export default function HomeBlog() {
  return (
    <div className='bg-[#FCFCFC]'>
      <div className='max-w-6xl mx-auto px-6 xl:px-0 py-[40px] sm:py-[48px] md:py-[56px] lg:py-[60px] xl:py-[64px]'>
        <div className='flex flex-col justify-center w-full h-full gap-y-[24px] md:gap-y-[36px] xl:gap-y-[42px]'>
          {/* Header */}
          <div className="flex justify-between items-center w-full gap-x-[24px]">
            <h2 className='text-[20px] sm:text-[24px] md:text-[24px] lg:text-[30px] xl:text-[36px] text-[#223B61] font-[600] leading-[125%] uppercase'>
              some of our blogs
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
          <div className="flex flex-wrap gap-x-[2%] gap-y-[24px] lg:gap-y-[36px] xl:gap-y-[48px]">
            {data.slice(0,6).map((item,index)=>(
              <CardBlog key={index} item={item} index={index}/>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
