'use client'
import { useState,useEffect } from "react"
import CardProduct from "../Card/CardProduct"

export default function SearchContent({data,product}) {
    const [filterProduct,setProduct]=useState(product)
    const [value,setValue] = useState('')
    const qp = router.toString()||'/search'
    const text=qp.replace("search=", "");
    const text2=decodeURIComponent(text)
    const textQuery=text2.replace("+", " ");
    useEffect(() => {
       if(textQuery!='/search'){
        setValue(textQuery)
       }else {
        setCat('porcelain TILES')
       }
      
     }, [pathname,qp]);
  return (
    <section className="bg-[#fcfcfc]">
        <div className="max-w-6xl mx-auto px-6 xl:px-0 pt-[40px] sm:pt-[48px] md:pt-[56px] lg:pt-[64px] xl:pt-[72px] pb-[56px] md:pb-[64px] lg:pb-[72px] xl:pb-[80px]">
            <div className="flex flex-col w-full h-full gap-y-[24px] sm:gap-y-[32px] md:gap-y-[54px]">

                <div className="hidden md:flex flex-wrap w-[68%] lg:w-[73%] gap-x-[2%] md:gap-y-[36px] h-full">
                    {filterProduct?.map((item,index)=>(
                        <CardProduct key={index} item={item} index={index}/>
                    ))}
                </div>
            </div>
        </div>
    </section>
  )
}
