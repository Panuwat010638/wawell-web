'use client'
import { Image } from "@nextui-org/react"
import Link from "next/link"
import client from "../../../client"
import imageUrlBuilder from '@sanity/image-url'
import { useState,useEffect,useRef } from "react"
import {Pagination, PaginationItem, PaginationCursor} from "@nextui-org/react";
import CardBlog from "../Card/CardBlog"

const builder = imageUrlBuilder(client)
function urlFor(source) {
  return builder.image(source)
}

export default function BlogContent({blog}) {
    
    
    const [highlight, setFirstArray] = useState(blog.slice(0,4));
    const [blogdata, setSecondArray] = useState(blog.slice(4));


    
    const itemsPerPage = 12;
    const [currentPage, setCurrentPage] = useState(1);
    const [startIndex,setStartIndex]=useState(0)
    const [endIndex,setEndIndex]=useState(0)

    useEffect(() => {
        const cur = Number(currentPage-1);
        const startIndex = cur * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        setStartIndex(startIndex)
        setEndIndex(endIndex)
        // ทำอย่างอื่นที่คุณต้องการที่นี่ เช่น เรียก API หรืออัพเดตสถานะอื่น ๆ
      }, [currentPage,startIndex,endIndex]);

    const lengthData = blogdata?.length
    const result = parseInt(lengthData / itemsPerPage);
    const result2 = parseInt(lengthData % itemsPerPage);

    const myElementRef = useRef(null);

    const scrollToElement = () => {
      if (myElementRef.current) {
        myElementRef.current.scrollIntoView({ behavior: "smooth" });
      }
    };
    useEffect(() => {
      // เรียกใช้ scroll เมื่อ currentPag เปลี่ยน
      scrollToElement();
    }, [currentPage]);
/////////////// Slide ///////////////////
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
      useEffect(() => {
        // เมื่อ currentPage เปลี่ยนแปลง ให้เลื่อนหน้าเว็บไปที่ด้านบน
        window.scrollTo({ top: 0});
      }, [currentPage]);
    
  return (
    <div className="bg-[#fcfcfc]">
        <div className="max-w-6xl mx-auto px-6 xl:px-0 pb-[56px] md:pb-[64px] lg:pb-[72px] xl:pb-[80px]">
            <div className="flex flex-col justify-center items-center w-full h-full pb-[56px] md:pb-[64px] gap-y-[40px] ss:gap-y-[48px] sm:gap-y-[56px] md:gap-y-[64px] lg:gap-y-[72px] xl:gap-y-[80px]">
                {/* Highlight */}
                  <div className="hidden md:flex flex-col md:flex-row sm:w-[80%] md:w-full sm:h-[600px] md:h-[360px] lg:h-[450px] xl:h-[500px]">
                    {/* Image */}
                    <div className="flex flex-col w-full md:w-[50%] h-[200px] ss:h-[250px] sm:h-[50%] md:h-[360px] lg:h-[450px] xl:h-[500px] relative">
                      {highlight?.slice(0,5).map((item,index)=>(
                        <div key={index} className={`flex justify-center items-center w-full h-full absolute top-0 transition-all duration-500 ${activeIndex==index ? "opacity-100":"opacity-0"}`}>
                          <Image className="sm:object-contain md:object-cover object-center w-full sm:h-full md:h-[360px] lg:h-[450px] xl:h-[500px]" radius="none" src={urlFor(item?.mainImage.image).url()} alt={item?.alt} quality={100} width={840} height={500}/>
                        </div>
                      ))}
                    </div>
                    
                    {/* Text */}
                    <div className="flex flex-col justify-between bg-[#f1efe9] w-full md:w-[50%] h-[280px] ss:h-[260px] sm:h-[50%] md:h-full p-[16px] ss:p-[20px] sm:p-[24px] md:p-[32px] lg:p-[36px] xl:p-[40px]">
                      {/* Text Content */}
                      <div className="flex flex-col w-full h-full relative">
                        {highlight?.slice(0,5).map((item,index)=>(
                          <div key={index} className={`flex flex-col w-full gap-y-[16px] lg:gap-y-[24px] xl:gap-y-[32px] transition-all duration-500 ${activeIndex==index ? "opacity-100 relative z-[10]":"opacity-0 absolute top-0"}`}>
                              <Link href={`/blog/${item?.slug?.slug?.current}`} className='text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px] text-[#14142A] font-[500] leading-[125%] md:pb-[16px] lg:pb-[24px] xl:pb-[32px] border-b-[2px] border-solid border-[#ABB1C1]'>
                                  {item?.title}
                              </Link>
                              <Link href={`/blog/${item?.slug?.slug?.current}`} className='text-[14px] lg:text-[16px] xl:text-[18px] text-[#545867] font-[400] leading-[125%]'>
                                  {item?.detail}
                              </Link>

                          </div>
                        ))}
                      </div>
                      {/* Dot */}
                      <div className="flex justify-center md:justify-start items-center gap-x-[4%] sm:gap-x-[8px] md:gap-x-[1%]">
                        {highlight?.slice(0,5).map((item,index)=>(
                          <div key={index} onClick={()=>setActiveIndex(index)} className={`flex w-[19.2%] sm:w-[40px] md:w-[13%] h-[4px] rounded-[20px] cursor-pointer transition-all duration-500 ${activeIndex == index ? "bg-[#545867]":"bg-[#ABB1C1]"}`}/>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex md:hidden flex-col w-full  ss:w-[340px] sm:w-[480px]">
                    {/* Image */}
                    <div className="flex flex-col w-full h-[250px] relative">
                      {highlight?.slice(0,5).map((item,index)=>(
                        <div key={index} className={`flex justify-center items-center w-full h-full absolute top-0 transition-all duration-500 ${activeIndex==index ? "opacity-100":"opacity-0"}`}>
                          <Image className="object-cover object-center h-[250px]" radius="none" src={urlFor(item?.mainImage.image).url()} alt={item?.alt} quality={100} width={840} height={500}/>
                        </div>
                      ))}
                    </div>
                    
                    {/* Text */}
                    <div className="flex flex-col justify-between bg-[#f1efe9] w-full h-[200px] ss:h-[260px] sm:h-[300px] pt-[42px] p-[16px] ss:p-[20px] sm:p-[24px]">
                      {/* Text Content */}
                      <div className="flex flex-col w-full h-full relative">
                        {highlight?.slice(0,5).map((item,index)=>(
                          <div key={index} className={`flex flex-col w-full gap-y-[16px] pt-[24px] sm:pt-0 transition-all duration-500 ${activeIndex==index ? "opacity-100 z-[10]":"opacity-0 absolute top-0 z-[0]"}`}>
                              <Link href={`/blog/${item?.slug?.slug?.current}`} className='text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px] text-[#14142A] font-[500] leading-[125%] 
                              pb-[16px] border-b-[2px] border-solid border-[#ABB1C1] line-clamp-2'>
                                  {item?.title}
                              </Link>
                              <Link href={`/blog/${item?.slug?.slug?.current}`} className='text-[14px] lg:text-[16px] xl:text-[18px] text-[#545867] font-[400] leading-[150%] line-clamp-2 ss:line-clamp-3 sm:line-clamp-none'>
                                  {item?.detail}
                              </Link>

                          </div>
                        ))}
                      </div>
                      {/* Dot */}
                      <div className="flex justify-center md:justify-between items-center gap-x-[1%] sm:gap-x-[8px] md:gap-x-[1%]">
                        {highlight?.slice(0,5).map((item,index)=>(
                          <div key={index} onClick={()=>setActiveIndex(index)} className={`flex w-[19.2%] sm:w-[40px] md:w-[19.2%] h-[4px] rounded-[20px] cursor-pointer transition-all duration-500 ${activeIndex == index ? "bg-[#545867]":"bg-[#ABB1C1]"}`}/>
                        ))}
                      </div>
                    </div>
                  </div>
               
               
                {/* Content */}
                <div className="flex flex-wrap items-center w-full gap-x-[2%] gap-y-[24px]">
                    {blogdata?.slice(startIndex, endIndex).map((item,index)=>(
                        <CardBlog item={item} index={index} key={index}/>
                    ))}
                </div>
                
                {/* Pagination */}
                {result != 0 && result2==0  ? (
                            <div className="flex justify-center lg:justify-end items-center w-full">
                                <Pagination showControls 
                                total={result} 
                                classNames={{
                                  item: "text-[#223B61]",
                                  cursor:
                                    "bg-[#223B61] text-[#fcfcfc]",
                                  next:"text-[#223B61]",
                                  prev:"text-[#223B61]",
                                  }}
                                page={currentPage}
                                onChange={setCurrentPage}
                               
                                 />
                            </div> 
                            ):result != 0 && result2!=0 ? (
                              <div className="flex justify-center lg:justify-end items-center w-full">
                              <Pagination showControls 
                              total={result+1} 
                              classNames={{
                                item: "text-[#223B61]",
                                cursor:
                                  "bg-[#223B61] text-[#fcfcfc]",
                                next:"text-[#223B61]",
                                prev:"text-[#223B61]",
                                }}
                              page={currentPage}
                              onChange={setCurrentPage}
                             
                               />
                          </div> 
                          ):null}
            </div>
        </div>
    </div>
  )
}
