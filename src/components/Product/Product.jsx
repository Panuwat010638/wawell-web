'use client'
import { useState,useEffect } from "react"
import { useSearchParams,usePathname } from "next/navigation"
import CardProduct from "../Card/CardProduct"
import {Pagination,CheckboxGroup, Checkbox,Tabs, Tab,Button,Input,Modal, ModalContent, ModalHeader, ModalBody, useDisclosure,} from "@nextui-org/react";
import { IoIosSearch } from "react-icons/io";

import ProductFilterMobile from "./ProductFilterMobile";
  
export default function Product({data,product,collection,category}) {
    const router = useSearchParams();
    const pathname = usePathname();
    const {isOpen, onOpen, onOpenChange} = useDisclosure();
    const [value, setValue] = useState("");
    const [selected, setSelected] = useState([]);
    const [selectedsize, setSelectedsize] = useState([]);
    /////////////////////////////////////////////////
    const [modalFilter,setModalFilter]=useState(false)
    const [filterActive,setFilterActive]=useState(false)
    //Sellect Category////////////////////////////////////////////////////////
    const [cat,setCat]=useState('porcelain TILES')
    const [filterCollection,setCollection]=useState()
    const [filterProduct,setProduct]=useState(product)
    useEffect(() => {
        const filteredCollection = collection.filter(item => item.category === `${cat}`);
        setCollection(filteredCollection);
    
        const filteredProduct = product.filter(item => item.category === `${cat}`);
        setProduct(filteredProduct);
        setSelected([])
        setSelectedsize([])
    }, [cat, collection, product]);
    //////////////////////////////////////////////////////////////////////////
    //Filter Size/////////////////////////////////////////////////////////////
    const [size,setSize]=useState([...new Set(product.flatMap(item => item.detail.productsize.map(sizeObj => sizeObj.size)))])
    useEffect(() => {
    
        const uniqueSizes = [...new Set(product.flatMap(item => item.detail.productsize.map(sizeObj => sizeObj.size)))];
        setSize(uniqueSizes)

      }, []);  
    //Sellect Collection/////////////////////////////////////////////////////
    

    useEffect(() => {
      // กำหนดการเรียกใช้ handleClickFilter ในนี้
      handleClickFilter();
    }, [selected, selectedsize]);
    const handleClickFilter = () => {
      const filteredProduct = product.filter(item => item.category === `${cat}`);
      setProduct(filteredProduct);
        if(selected[0] != undefined && selectedsize[0] ==undefined){
          console.log('test11')
          const filteredData = filterProduct.filter(item => selected.includes(item.collection));
          setProduct(filteredData);
        }else if(selected[0] == undefined && selectedsize[0] != undefined){
          const filteredArray = filterProduct.filter(obj => {
            if (Array.isArray(obj.detail.productsize)) {
                for (let item of obj.detail.productsize) {
                    if (selectedsize.includes(item.size)) {
                        return true;
                    }
                }
            } else {
                if (array1.includes(obj.detail.productsize)) {
                    return true;
                }
            }
            return false;
        });
          setProduct(filteredArray);
        }else if(selected[0] != undefined  && selectedsize[0] != undefined){
          const filteredData = filterProduct.filter(item => selected.includes(item.collection));
          const filteredArray = filteredData.filter(obj => {
            if (Array.isArray(obj.detail.productsize)) {
                for (let item of obj.detail.productsize) {
                    if (selectedsize.includes(item.size)) {
                        return true;
                    }
                }
            } else {
                if (array1.includes(obj.detail.productsize)) {
                    return true;
                }
            }
            return false;
        });
          setProduct(filteredArray);
        }else{
          const filteredProduct = product.filter(item => item.category === `${cat}`);
          setProduct(filteredProduct);
          console.log('test11no')
        }
        setModalFilter(false)
        };
    
    const [clear,setClear]=useState(false)
    const handleClickClear = () => {
      const filteredProduct = product.filter(item => item.category === `${cat}`);
      setProduct(filteredProduct);
      setClear(true)
      setModalFilter(false)
      setSelected([])
      setSelectedsize([])
      };

    //Pagination//////////////////////////////////////////////////////////////
    const itemsPerPage = 28;
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

    const lengthData = filterProduct?.length
    const result = parseInt(lengthData / itemsPerPage);
    const result2 = parseInt(lengthData % itemsPerPage);
    //Path Category/////////////////////////////////////////////////////////////////////
    const qp = router.toString()||'/product'
    const text=qp.replace("category=", "");
    const text2=decodeURI(text)
    const textQuery=text2.replace("+", " ");
    useEffect(() => {
       if(textQuery!='/product'){
        setCat(textQuery)
       }else {
        setCat('porcelain TILES')
       }
      
     }, [pathname,qp]);
    
  return (
    <div className="bg-[#fcfcfc]">
        <div className="max-w-6xl mx-auto px-6 xl:px-0 pt-[40px] sm:pt-[48px] md:pt-[56px] lg:pt-[64px] xl:pt-[72px] pb-[56px] md:pb-[64px] lg:pb-[72px] xl:pb-[80px]">
            <div className="flex flex-col w-full h-full gap-y-[24px] sm:gap-y-[32px] md:gap-y-[54px]">

                {/* Header & Search */}
                <div className="flex justify-between items-center w-full gap-x-[5%]">
                    <h1 className="text-[20px] sm:text-[24px] md:text-[24px] lg:text-[30px] xl:text-[36px] text-[#1C2532] font-[600] leading-[125%] uppercase">
                        {data?.header?.header}
                    </h1>
                    <form className="hidden md:flex justify-end w-[292px] gap-y-[16px]">
                      <Input className=" placeholder:text-[#ABB1C1]" type="text" variant='bordered' 
                      placeholder="ค้นหาผลิตภัณฑ์..." 
                      value={value}
                      onValueChange={setValue}
                      startContent={
                          <IoIosSearch className="text-2xl pointer-events-none flex-shrink-0 text-[#ABB1C1]" />
                      } />
                    </form>
                    <Button className="flex md:hidden" onPress={onOpen} color="none"> <IoIosSearch className="text-2xl pointer-events-none flex-shrink-0 text-[#ABB1C1]" /></Button>
                    <Modal 
                      isOpen={isOpen} 
                      onOpenChange={onOpenChange}
                      placement="center"
                      classNames={{
                            wrapper:"z-[120]"}}
                        >
                      <ModalContent>
                        {(onClose) => (
                          <>
                            <ModalHeader className="flex flex-col gap-1 text-[16px] uppercase text-[#223B61] font-[500]">Search</ModalHeader>
                            <ModalBody className="pb-[40px]">
                            <Input className=" placeholder:text-[#ABB1C1]" type="text" variant='bordered' 
                                placeholder="ค้นหาผลิตภัณฑ์..." 
                                value={value}
                                onValueChange={setValue}
                                startContent={
                                    <IoIosSearch className="text-2xl pointer-events-none flex-shrink-0 text-[#ABB1C1]" />
                                } />
                            <div className="flex justify-end w-full">
                               <div className="flex w-[49%]">
                                    <Button onPress={onClose} size="sm" className="flex justify-center items-center w-full h-[48px] rounded-[4px] bg-[#223B61] hover:bg-[#fcfcfc] transition-all duration-500
                                        text-[16px] md:text-[14px] lg:text-[16px] xl:text-[18px] text-[#fcfcfc] hover:text-[#223B61] font-[500] border-[1px] border-solid border-[#fcfcfc] hover:border-[#223B61]">
                                        Search
                                    </Button>
                                </div> 
                            </div>    
                            
                            </ModalBody>
                   
                          </>
                        )}
                      </ModalContent>
                    </Modal>
                </div>

                {/* Filter Category */}
                <div className="flex w-full flex-col">
                    <Tabs 
                      aria-label="Options" 
                      color="primary" 
                      variant="underlined"
                      selectedKey={cat}
                      onSelectionChange={setCat}
                      classNames={{
                        tabList: "gap-6 w-full relative rounded-none p-0 border-b border-divider",
                        cursor: "w-full bg-[#1C2532]",
                        tab: "max-w-full px-0 h-12",
                        tabContent: "text-[16px] md:text-[18px] text-[#ABB1C1] font-[400] uppercase leading-[125%] group-data-[selected=true]:text-[#1A1A1A]"
                      }}
                    >
                      {category?.map((item,index)=>(
                        <Tab
                        key={item?.title}
                        
                        title={
                          <div className="flex justify-center items-center space-x-2 ss:min-w-[160px] md:w-auto">
                            <span onClick={()=>setCat(`${item?.title}`)}>{item?.title}</span>
                          </div>
                        }
                      >
                      </Tab>
                      ))}

                    </Tabs>
                </div>

                {/* Filter $ Card Product */}
                <div className="flex flex-col md:flex-row justify-between items-center md:items-start w-full gap-x-[2%]">
                    <div className="hidden md:flex flex-col bg-[#F1EFE9] w-[30%] lg:w-[25%] p-[24px] gap-y-[16px]">
                        <h3 className="text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px] text-[#223B61] font-[500] leading-[125%] pb-[12px] border-b-[1px] border-solid border-[#223B61]">
                            {data?.categorydetail?.collection}
                        </h3>
                        <CheckboxGroup
                          
                          color="#223B61"
                          value={selected}
                          onValueChange={setSelected}
                        >
                        {filterCollection?.map((item,index)=>(
                              <Checkbox color="#223B61" className="text-[14px] md:text-[16px] text-[#1C2532] font-[400] leading-[125%]" value={item?.title} key={item?.title}>
                                  {item?.title}
                              </Checkbox>
                          ))}
                        </CheckboxGroup>
                        <h3 className="text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px] text-[#223B61] font-[500] leading-[125%] pb-[12px] border-b-[1px] border-solid border-[#223B61]">
                            {data?.categorydetail?.size}
                        </h3>
                        <CheckboxGroup
                          
                          color="#223B61"
                          value={selectedsize}
                          onValueChange={setSelectedsize}
                        >
                        {size?.map((item,index)=>(
                              <Checkbox color="#223B61" className="text-[14px] md:text-[16px] text-[#1C2532] font-[400] leading-[125%]" value={item} key={item}>
                                  {item}
                              </Checkbox>
                          ))}
                        </CheckboxGroup>
                        <div className="flex w-full gap-x-[2%] pt-[32px]">
                          {/* Clear */}
                          <div className="flex w-[49%]">
                            <Button size="sm" onClick={handleClickClear} className="group data-hover:bg-[#223B61] flex justify-center items-center w-full h-[48px] rounded-[4px] bg-[#fcfcfc] hover:bg-[#223B61] transition-all duration-500
                            text-[16px] md:text-[14px] lg:text-[16px] xl:text-[18px] text-[#223B61] hover:text-[#fcfcfc] font-[500] border-[1px] border-solid border-[#223B61]">
                            {data?.button?.button01}
                          </Button>  
                          </div>

                          {/*Filter */}
                          <div className="flex w-[49%]">
                            <Button size="sm" onClick={handleClickFilter} className="flex justify-center items-center w-full h-[48px] rounded-[4px] bg-[#223B61] hover:bg-[#fcfcfc] transition-all duration-500
                            text-[16px] md:text-[14px] lg:text-[16px] xl:text-[18px] text-[#fcfcfc] hover:text-[#223B61] font-[500] border-[1px] border-solid border-[#fcfcfc] hover:border-[#223B61]">
                              {data?.button?.button02}
                            </Button>
                          </div>
                        </div>
                    </div>
                    <ProductFilterMobile data={data} filterCollection={filterCollection} size={size} selected={selected} selectedsize={selectedsize} setSelectedsize={setSelectedsize} setSelected={setSelected} handleClickClear={handleClickClear} handleClickFilter={handleClickFilter}/>
                    <div className="hidden md:flex flex-wrap w-[68%] lg:w-[73%] gap-x-[2%] md:gap-y-[36px] h-full">
                        {filterProduct?.map((item,index)=>(
                            <CardProduct key={index} item={item} index={index}/>
                        ))}
                    </div>
                    <div className="flex md:hidden flex-wrap w-full ss:w-[80%] gap-x-[2%] gap-y-[16px] ss:gap-y-[24px] h-full">
                        {filterProduct?.map((item,index)=>(
                            <CardProduct key={index} item={item} index={index}/>
                        ))}
                    </div>
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
