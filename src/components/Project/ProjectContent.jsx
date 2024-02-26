'use client'
import Link from "next/link"
import { useState,useEffect,useRef } from "react"
import {useSearchParams } from 'next/navigation'
import { usePathname } from 'next/navigation'
import {Pagination} from "@nextui-org/react";
import {Tabs, Tab} from "@nextui-org/react";
import CardProject from "../Card/CardProject"

export default function ProjectContent({category,project}) {
    const [cat,setCat]=useState('ALL')
    
    const itemsPerPage = 18;
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

    const lengthData = project?.length
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
    
      const router = useSearchParams();
      const pathname = usePathname();
  
      const qp = router.toString()||'/project'
      const text=qp.replace("category=", "");
      const text2=decodeURI(text)
      const textQuery1=text2.replace("+", " ");
      const textQuery=textQuery1.replace("+", " ");
      const [projectfilter,setFilteredproject]=useState(project||[])
      useEffect(() => {
          setCat(textQuery)
          if (textQuery !='/project' ) {       
              setCat(textQuery);
          } else {
           
              setCat('ALL');
              
          }
        }, [pathname,qp,router]);

        useEffect(() => {
          if(cat!='ALL'){
            
            if(textQuery == "residential"){
              
          
              const filteredProject = project.filter(item => item.category === `${cat}`);
            setFilteredproject(filteredProject);
            }else if(textQuery == "hotel and resort"){
        
              const filteredProject = project.filter(item => item.category === `${cat}`);
            setFilteredproject(filteredProject);
            }else if(textQuery == "Commercial"){
        
              const filteredProject = project.filter(item => item.category === `${cat}`);
            setFilteredproject(filteredProject);
            }
 
          }else {
            setFilteredproject(project);
        
          }
                
        }, [cat,router]);
  return (
    <div className="bg-[#fcfcfc]">
        <div className="max-w-full mx-auto pb-[56px] md:pb-[80px]">
            <div className="flex flex-col items-center w-full h-full gap-y-[40px]">
                {/* Category */}
                <div className="flex w-full sm:w-[640px] md:w-[768px] lg:w-[1024px] xl:w-[1152px] flex-col px-6 xl:px-0">
                    <Tabs 
                    defaultSelectedKey={textQuery=="residential" ? "1":textQuery=="hotel and resort"?"2":textQuery=="Commercial" ? "3":"0"}
                   
                      aria-label="Options" 
                      color="primary" 
                      variant="underlined"
                      classNames={{
                        tabList: "gap-6 w-full relative rounded-none p-0 border-b border-divider",
                        cursor: "w-full bg-[#1C2532]",
                        tab: "max-w-fit md:max-w-full px-0 h-12",
                        tabContent: "text-[16px] md:text-[18px] text-[#ABB1C1] font-[400] uppercase leading-[125%] group-data-[selected=true]:text-[#1A1A1A]"
                      }}
                    >
                    <Tab
                    onClick={()=>setCat('ALL')}
                    key={`0`}
                        title={
                          <div onClick={()=>setCat('ALL')} className="flex justify-center items-center space-x-2 min-w-[160px] md:w-auto">
                            <h2 onClick={()=>setCat('ALL')} className="w-full">ALL</h2>
                          </div>
                        }
                      >
                      </Tab>
                      {category?.map((item,index)=>(
                        <Tab
                        key={index+1}
                        onClick={()=>setCat(item?.title)}
                        title={
                          <div onClick={()=>setCat(item?.title)} className="flex justify-center items-center space-x-2 min-w-[160px] md:w-auto">
                            <h2 onClick={()=>setCat(item?.title)} className="w-full">{item?.title}</h2>
                          </div>
                        }
                      >
                      </Tab>
                      ))}

                    </Tabs>
                </div>
                    
               

                {/* Card */}
                <div className="flex flex-wrap w-full">
                    {projectfilter?.map((item,index)=>(
                        <CardProject key={index} item={item} index={index}/>
                    ))}
                </div>

                 <div className="hidden">
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
                {/* Pagination */}
                
            </div>
        </div>
    </div>
  )
}
