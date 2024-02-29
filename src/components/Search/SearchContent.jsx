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
    console.log(filterProduct)
  return (
    <section className="bg-[#fcfcfc]">
        <div className="max-w-6xl mx-auto px-6 xl:px-0 pt-[40px] sm:pt-[48px] md:pt-[56px] lg:pt-[64px] xl:pt-[72px] pb-[56px] md:pb-[64px] lg:pb-[72px] xl:pb-[80px]">
            <div className="flex flex-col w-full h-full gap-y-[24px] sm:gap-y-[32px] md:gap-y-[54px]">
                {filterProduct[0]==undefined ? (
                <div className="flex justify-center items-center w-full h-[400px]">
                    <Image className=" object-scale-down  object-center w-full h-full" 
                    alt="Search" width={196} height={142} quality={100}
                    src={Search}/>
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
