'use client'
import { useState,useEffect,useRef } from "react"
import Image from "next/image"
import { useSearchParams,usePathname } from "next/navigation"
import CardProduct from "../Card/CardProduct"
import {Pagination,CheckboxGroup, Checkbox,Tabs,Link, Tab,Button,Input,Modal, ModalContent, ModalHeader, ModalBody, useDisclosure,} from "@nextui-org/react";
import { IoIosSearch } from "react-icons/io";
import Search from "../../../public/assets/Images/Card/Search.png"
import ProductFilterMobile from "./ProductFilterMobile";
  
export default function Product({data,product,collection,category}) {
    //////////////////////////////////////////
    const router = useSearchParams();
    const pathname = usePathname();
    const {isOpen, onOpen, onOpenChange} = useDisclosure();
    const [value, setValue] = useState("");
    const [selected, setSelected] = useState([]);
    const [selectedsize, setSelectedsize] = useState([]);
    /////////////////////////////////////////////////
    const [modalFilter,setModalFilter]=useState(false)
    const [filterActive,setFilterActive]=useState(false)
    ///Pagination ////////////////////////////////////////////////////////////
    const itemsPerPage = 28;
    const [currentPage, setCurrentPage] = useState(1);
    const [startIndex,setStartIndex]=useState(0)
    const [endIndex,setEndIndex]=useState(0)
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
        setCurrentPage(1);
    }, [cat, collection, product]);
    //////////////////////////////////////////////////////////////////////////
    //Filter Size/////////////////////////////////////////////////////////////
    const newData1 = product.map(item => {
      // เช็คว่ามี property 'detail' และ 'productsize' ในแต่ละรายการหรือไม่
      if (item.detail && item.detail.productsize) {
        return {
          ...item,
          detail: {
            ...item.detail,
            productsize: item.detail.productsize.map(sizeItem => ({
              ...sizeItem,
              size: sizeItem.size.replace(/\s/g, '')
            }))
          }
        };
      } else {
        // ถ้าไม่มี 'productsize' ให้ส่งค่าเดิมกลับไป
        return item;
      }
    });
    const newData2 = newData1.map(item => {
      // เช็คว่ามี property 'detail' และ 'productsize' ในแต่ละรายการหรือไม่
      if (item.detail && item.detail.productsize) {
        return {
          ...item,
          detail: {
            ...item.detail,
            productsize: item.detail.productsize.map(sizeItem => ({
              ...sizeItem,
              size: sizeItem.size.replace(/X/g, 'x')
            }))
          }
        };
      } else {
        // ถ้าไม่มี 'productsize' ให้ส่งค่าเดิมกลับไป
        return item;
      }
    });
    const newData = newData2.map(item => {
      // เช็คว่ามี property 'detail' และ 'productsize' ในแต่ละรายการหรือไม่
      if (item.detail && item.detail.productsize) {
        return {
          ...item,
          detail: {
            ...item.detail,
            productsize: item.detail.productsize.map(sizeItem => ({
              ...sizeItem,
              size: sizeItem.size.replace(/O/g, '0')
            }))
          }
        };
      } else {
        // ถ้าไม่มี 'productsize' ให้ส่งค่าเดิมกลับไป
        return item;
      }
    });

    const [size, setSize] = useState([...new Set(newData.flatMap(item => 
      item.detail.productsize ? 
        item.detail.productsize.map(sizeObj => sizeObj.size) : 
        []
    ))]);
    useEffect(() => {
    
        const uniqueSizes =[...new Set(newData.flatMap(item => 
          item.detail.productsize ? 
            item.detail.productsize.map(sizeObj => sizeObj.size) : 
            []
        ))];
        setSize(uniqueSizes)

      }, []);  
    //Sellect Collection/////////////////////////////////////////////////////


const handleClickFilterAndFilter2 = () => {
  // Check if either selectedsize or selected is not empty
  if (selectedsize.length !== 0 || selected.length !== 0) {
    // Filter by selected sizes
    const newData1 = product.map(item => {
      if (item.detail && item.detail.productsize) {
        return {
          ...item,
          detail: {
            ...item.detail,
            productsize: item.detail.productsize.map(sizeItem => ({
              ...sizeItem,
              size: sizeItem.size.replace(/\s/g, '')
            }))
          }
        };
      } else {
        return item;
      }
    });

    const newData2 = newData1.map(item => {
      if (item.detail && item.detail.productsize) {
        return {
          ...item,
          detail: {
            ...item.detail,
            productsize: item.detail.productsize.map(sizeItem => ({
              ...sizeItem,
              size: sizeItem.size.replace(/X/g, 'x')
            }))
          }
        };
      } else {
        return item;
      }
    });

    const newData = newData2.map(item => {
      if (item.detail && item.detail.productsize) {
        return {
          ...item,
          detail: {
            ...item.detail,
            productsize: item.detail.productsize.map(sizeItem => ({
              ...sizeItem,
              size: sizeItem.size.replace(/O/g, '0')
            }))
          }
        };
      } else {
        return item;
      }
    });

    // Filter by category if specified
    let filteredData = newData;
    if (cat) {
      filteredData = filteredData.filter(item => item.category === cat);
    }

    // Filter by selected collection if any
    if (selected.length !== 0) {
      filteredData = filteredData.filter(item => selected.includes(item.collection));
    }

    // Filter by selected sizes if any
    if (selectedsize.length !== 0) {
      filteredData = filteredData.filter(item =>
        item.detail.productsize.some(sizeObj => selectedsize.includes(sizeObj.size))
      );
    }

    setProduct(filteredData);
  } else {
    // If neither selectedsize nor selected is selected, set product to original product list
    setProduct(filterProduct);
  }

  setCurrentPage(1);
  setModalFilter(false);
};
    
    const [clear,setClear]=useState(false)
    const handleClickClear = () => {
      const filteredProduct = product.filter(item => item.category === `${cat}`);
      setProduct(filteredProduct);
      setClear(true)
      setModalFilter(false)
      setSelected([])
      setSelectedsize([])
      setCurrentPage(1);
      };

    //Pagination//////////////////////////////////////////////////////////////

    useEffect(() => {
        const cur = Number(currentPage-1);
        const startIndex = cur * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        setStartIndex(startIndex)
        setEndIndex(endIndex)
        // ทำอย่างอื่นที่คุณต้องการที่นี่ เช่น เรียก API หรืออัพเดตสถานะอื่น ๆ
      }, [currentPage,startIndex,endIndex]);
      useEffect(() => {
        // เมื่อ currentPage เปลี่ยนแปลง ให้เลื่อนหน้าเว็บไปที่ด้านบน
        window.scrollTo({ top: 0});
      }, [currentPage]);
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

     const confirmButtonRef = useRef(null);
 
  const handleKeyUp = (event) => {
    if (event.keyCode === 13 || event.keyCode === "Enter") { // Enter key
      confirmButtonRef.current.click();
      event.target.blur();
      event.preventDefault();
  
    }
  };
  const handleKeyDown = (event) => {
    if (event.keyCode === 13 || event.keyCode === "Enter") { // Enter key
      confirmButtonRef.current.click();
      event.target.blur();
      event.preventDefault();

    }
  };

  useEffect(() => {
    document.addEventListener('keyup', handleKeyUp);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keyup', handleKeyUp);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);
    
  return (
    <div className="bg-[#fcfcfc]">
        <div className="max-w-6xl mx-auto px-6 xl:px-0 pt-[40px] sm:pt-[48px] md:pt-[56px] lg:pt-[64px] xl:pt-[72px] pb-[56px] md:pb-[64px] lg:pb-[72px] xl:pb-[80px]">
            <div className="flex flex-col w-full h-full gap-y-[24px] sm:gap-y-[32px] md:gap-y-[54px]">

                {/* Header & Search */}
                <div className="flex justify-between items-center w-full gap-x-[5%]">
                    <h1 className="font-pop text-[20px] sm:text-[24px] md:text-[24px] lg:text-[30px] xl:text-[36px] text-[#1C2532] font-[600] leading-[125%] uppercase">
                        {data?.header?.header}
                    </h1>
                    <form className="hidden md:flex justify-end w-[292px] gap-y-[16px]">
                      <Input className=" placeholder:text-[#ABB1C1]" type="text" variant='bordered' 
                      placeholder="ค้นหาผลิตภัณฑ์..." 
                      value={value}
                      onValueChange={setValue}
                      startContent={
                        <Link type='submit' ref={confirmButtonRef} href={`/search?search=${value}`}>
                            <IoIosSearch className="text-2xl pointer-events-none flex-shrink-0 text-[#ABB1C1]" />
                        </Link>
                          
                      } />
                    </form>
                    <Button className="flex md:hidden" onPress={onOpen} color="none"> <IoIosSearch className="text-2xl pointer-events-none flex-shrink-0 text-[#ABB1C1]" /></Button>
                    <Modal 
                      isOpen={isOpen} 
                      onOpenChange={onOpenChange}
                      placement="center"
                      classNames={{
                        backdrop:"z-[120]",
                        wrapper:"z-[130]"}}
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
                            <div className="flex justify-end w-full sr-only">
                               <div className="flex w-[49%]">
                                    <Button type='submit' ref={confirmButtonRef} as={Link} href={`/search?search=${value}`} onPress={onClose} size="sm" className="flex justify-center items-center w-full h-[48px] rounded-[4px] bg-[#223B61] hover:bg-[#fcfcfc] transition-all duration-500
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
                        tabContent: "font-pop text-[16px] md:text-[18px] text-[#ABB1C1] font-[500] uppercase leading-[125%] group-data-[selected=true]:text-[#1A1A1A]"
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
                        <h3 className="font-pop text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px] text-[#223B61] font-[500] leading-[125%] pb-[12px] border-b-[1px] border-solid border-[#223B61]">
                            {data?.categorydetail?.collection}
                        </h3>
                        <CheckboxGroup
                          isDisabled={selected.length==5 ? true : false}
                          color="#223B61"
                          value={selected}
                          onValueChange={setSelected}
                          className="gap-y-[12px]"
                          
                        >
                        {filterCollection?.map((item,index)=>(
                              <Checkbox color="#223B61" className="text-[14px] md:text-[16px] text-[#1C2532] font-[400] leading-[125%]" value={item?.title} key={item?.title}>
                                  {item?.title}
                              </Checkbox>
                          ))}
                        </CheckboxGroup>
                        <h3 className="font-pop text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px] text-[#223B61] font-[500] leading-[125%] pb-[12px] border-b-[1px] border-solid border-[#223B61]">
                            {data?.categorydetail?.size}
                        </h3>
                        <CheckboxGroup
                          
                          color="#223B61"
                          value={selectedsize}
                          onValueChange={setSelectedsize}
                          className="gap-y-[12px]"
                          classNames={{base:"gap-y-[0.75rem] flex justify-center w-full",label:"flex justify-center items-center w-full"}}
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
                            <Button size="sm" 
                            onClick={
                              handleClickFilterAndFilter2} 
                            className="flex justify-center items-center w-full h-[48px] rounded-[4px] bg-[#223B61] hover:bg-[#fcfcfc] transition-all duration-500
                            text-[16px] md:text-[14px] lg:text-[16px] xl:text-[18px] text-[#fcfcfc] hover:text-[#223B61] font-[500] border-[1px] border-solid border-[#fcfcfc] hover:border-[#223B61]">
                              {data?.button?.button02}
                            </Button>
                          </div>
                        </div>
                    </div>
                    <ProductFilterMobile data={data} filterCollection={filterCollection} size={size} selected={selected} selectedsize={selectedsize} setSelectedsize={setSelectedsize} setSelected={setSelected} handleClickClear={handleClickClear} handleClickFilter={handleClickFilterAndFilter2}/>
                    {filterProduct[0]==undefined ? (
                    <div className="hidden md:flex flex-col justify-center items-center w-full h-[400px] gap-y-[32px]">
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
                      <div className="hidden md:flex flex-wrap w-[68%] lg:w-[73%] gap-x-[2%] md:gap-y-[36px] h-full">
                        {filterProduct?.slice(startIndex, endIndex).map((item,index)=>(
                            <CardProduct key={index} item={item} index={index}/>
                        ))}
                    </div>
                    )}
                    {filterProduct[0]==undefined ? (
                      <div className="flex md:hidden flex-col justify-center items-center w-full h-[400px] gap-y-[32px]">
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
                    <div className="flex md:hidden flex-wrap w-full ss:w-[80%] gap-x-[2%] gap-y-[16px] ss:gap-y-[24px] h-full">
                      {filterProduct?.slice(startIndex, endIndex).map((item,index)=>(
                          <CardProduct key={index} item={item} index={index}/>
                      ))}
                    </div>
                    )}
                    
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
