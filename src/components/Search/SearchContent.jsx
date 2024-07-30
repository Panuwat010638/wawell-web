'use client'
import { useState,useEffect } from "react"
import CardProduct from "../Card/CardProduct"
import { useSearchParams,usePathname } from "next/navigation"
import Image from "next/image"
import Search from "../../../public/assets/Images/Card/Search.png"

export default function SearchContent({data,product}) {
    const router = useSearchParams();
    const pathname = usePathname();
    const [filterProduct,setProduct]=useState([])
    const [value,setValue] = useState('')
    const qp = router.toString()||'/search'
    const text=qp.replace("search=", "");
    const text2=decodeURIComponent(text)
    const textQuery=text2.replace("+", " ");
    useEffect(() => {
       if(textQuery!='/search'){
        setValue(textQuery)
       }else {
        setValue('')
       }
      
     }, [pathname,qp]);

     useEffect(() => {
        // ทำการกรองข้อมูล blogs โดยใช้ textQuery
        const filteredProduct = product.filter(item => item?.title.includes(textQuery));
    
        // ตั้งค่า filteredBlogs เมื่อข้อมูลถูกกรอง
        setProduct(filteredProduct);
    }, [value, textQuery]);
    
  return (
    <section className="bg-[#fcfcfc]">
        <div className="max-w-6xl mx-auto px-6 xl:px-0 pt-[40px] sm:pt-[48px] md:pt-[56px] lg:pt-[64px] xl:pt-[72px] pb-[56px] md:pb-[64px] lg:pb-[72px] xl:pb-[80px]">
            <div className="flex flex-col w-full h-full gap-y-[24px] sm:gap-y-[32px] md:gap-y-[54px]">
                {filterProduct[0]==undefined ? (
                <div className="flex flex-col justify-center items-center w-full h-[400px] gap-y-[32px]">
                    <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M29.1974 58.5823C21.4177 58.5823 14.0598 55.536 8.57645 50.0059C3.04628 44.4757 0 37.1646 0 29.3849C0 21.5583 3.04628 14.2472 8.57645 8.71705C14.0598 3.18688 21.4177 0.187469 29.1974 0.187469C36.9772 0.187469 44.3351 3.18688 49.8653 8.71705C55.3486 14.2472 58.3949 21.5583 58.3949 29.3849C58.3949 37.1646 55.3486 44.4757 49.8653 50.0059C44.3351 55.536 36.9772 58.5823 29.1974 58.5823ZM29.1974 52.0211C23.1517 52.0211 17.4341 49.6778 13.1693 45.413C8.90451 41.1014 6.51435 35.4306 6.51435 29.3849C6.51435 23.2923 8.90451 17.6216 13.1693 13.3099C17.4341 9.04512 23.1517 6.70182 29.1974 6.70182C35.2431 6.70182 40.9608 9.04512 45.2255 13.3099C54.0832 22.1676 54.0832 36.5554 45.2255 45.413C40.9608 49.6778 35.2431 52.0211 29.1974 52.0211Z" fill="#6F7489"/>
                        <path fillRule="evenodd" clipRule="evenodd" d="M56.1453 61.3474C55.7704 61.3474 55.3954 61.2068 55.1143 60.9256L48.8342 54.6456C49.9121 53.802 50.8963 52.9584 51.8336 51.9742C52.9116 50.9432 53.8489 49.8184 54.7393 48.6468L61.0662 54.9736C61.6286 55.536 61.6286 56.4265 61.0662 56.9889C60.785 57.2232 60.457 57.3638 60.082 57.3638C59.754 57.3638 59.4728 57.2701 59.2384 57.0826L57.4107 59.3322C57.645 59.8477 57.5513 60.457 57.1295 60.9256C56.8483 61.2068 56.4734 61.3474 56.1453 61.3474Z" fill="#6F7489"/>
                        <path fillRule="evenodd" clipRule="evenodd" d="M73.9074 79.8125C72.3139 79.8125 70.7674 79.2033 69.6426 78.0316L56.4264 64.8623C55.3016 63.7375 54.6924 62.191 54.6924 60.5975C54.6924 58.9572 55.3016 57.4107 56.4264 56.2859C57.5981 55.1611 59.0978 54.505 60.7381 54.505C62.3784 54.505 63.8781 55.1611 65.0497 56.2859L78.219 69.4552C80.5623 71.8453 80.5623 75.6883 78.219 78.0316C77.0474 79.2033 75.5477 79.8125 73.9074 79.8125Z" fill="#6F7489"/>
                        <path fillRule="evenodd" clipRule="evenodd" d="M19.7306 38.8518C14.4816 33.6028 14.4816 25.1201 19.7306 19.8711C20.2461 19.3087 20.2461 18.4183 19.7306 17.9027C19.1682 17.3404 18.2778 17.3404 17.7154 17.9027C11.3885 24.2296 11.3885 34.4933 17.7154 40.8201C17.9966 41.1013 18.3715 41.2419 18.6996 41.2419C19.0745 41.2419 19.4494 41.1013 19.7306 40.8201C20.2461 40.3046 20.2461 39.4142 19.7306 38.8518Z" fill="#6F7489"/>
                    </svg>
                    <p className="text-[16px] lg:text-[18px] text-[#6F7489] leading-[125%] font-[400]">
                        ไม่พบผลิตภัณฑ์ที่คุณค้นหา
                    </p>

                </div>
                ):(
                <div className="flex flex-wrap w-full sm:w-[80%] md:w-[75%] lg:w-full gap-x-[2%] md:gap-y-[36px] h-full">
                    {filterProduct?.map((item,index)=>(
                        <CardProduct key={index} item={item} index={index}/>
                    ))}
                </div>
                )}
                
            </div>
        </div>
    </section>
  )
}
