'use client'
import { useState,useEffect } from "react"
import { useSearchParams,usePathname } from "next/navigation"
import CardProduct from "../Card/CardProduct"
import {CheckboxGroup, Checkbox,Accordion, AccordionItem,Button,Modal, ModalContent, ModalHeader, ModalBody, useDisclosure,} from "@nextui-org/react";
import { IoIosSearch } from "react-icons/io";

export default function ProductFilterMobile({data,filterCollection,size,selected,selectedsize,setSelectedsize,setSelected,handleClickClear,handleClickFilter}) {
    const {isOpen, onOpen, onOpenChange} = useDisclosure();
  return (
    <div className='flex md:hidden flex-col w-full ss:w-[80%] gap-y-[16px] sm:gap-y-[24px] pb-[24px]'>
        <Button  onPress={onOpen} color="none" className="flex justify-center items-center w-full h-[48px] rounded-[4px] bg-[#F1EFE9] hover:bg-[#6F7489] transition-all duration-500
                            text-[16px] md:text-[14px] lg:text-[16px] xl:text-[18px] text-[#6F7489] hover:text-[#F1EFE9] font-[500] "> 
            FILTER
        </Button>
        <Modal 
          isOpen={isOpen} 
          onOpenChange={onOpenChange}
          placement="center"
          scrollBehavior={"inside"}
          classNames={{
                wrapper:"z-[120] flex md:hidden"}}
            >
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader className="flex flex-col gap-1 text-[16px] uppercase text-[#223B61] font-[500]">Filter</ModalHeader>
                <ModalBody className="pb-[40px]">
                <Accordion selectionMode="multiple">
                  <AccordionItem key="1" aria-label={data?.categorydetail?.collection} title={
                    <h3 className="w-full text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px] text-[#223B61] font-[500] leading-[125%] pb-[12px]">
                        {data?.categorydetail?.collection}
                      </h3>
                    }>
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
                  </AccordionItem>
                  <AccordionItem key="2" aria-label={data?.categorydetail?.size} title={
                    <h3 className="text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px] text-[#223B61] font-[500] leading-[125%] pb-[12px]">
                        {data?.categorydetail?.size}
                      </h3>
                    }>
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
                  </AccordionItem>
                </Accordion>
                
                        <div className="flex w-full gap-x-[2%] pt-[32px]">
                          {/* Clear */}
                          <div className="flex w-[49%]">
                            <Button size="sm" onPress={onClose}onClick={handleClickClear} className="group data-hover:bg-[#223B61] flex justify-center items-center w-full h-[48px] rounded-[4px] bg-[#fcfcfc] hover:bg-[#223B61] transition-all duration-500
                            text-[16px] md:text-[14px] lg:text-[16px] xl:text-[18px] text-[#223B61] hover:text-[#fcfcfc] font-[500] border-[1px] border-solid border-[#223B61]">
                            {data?.button?.button01}
                          </Button>  
                          </div>

                          {/*Filter */}
                          <div className="flex w-[49%]">
                            <Button size="sm" onPress={onClose} onClick={handleClickFilter} className="flex justify-center items-center w-full h-[48px] rounded-[4px] bg-[#223B61] hover:bg-[#fcfcfc] transition-all duration-500
                            text-[16px] md:text-[14px] lg:text-[16px] xl:text-[18px] text-[#fcfcfc] hover:text-[#223B61] font-[500] border-[1px] border-solid border-[#fcfcfc] hover:border-[#223B61]">
                              {data?.button?.button02}
                            </Button>
                          </div>
                        </div>  
                
                </ModalBody>
                
              </>
            )}
          </ModalContent>
        </Modal>
    </div>
  )
}
