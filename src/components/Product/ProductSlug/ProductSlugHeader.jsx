'use client'
import {Input,Modal, ModalContent, ModalHeader, ModalBody, Button, useDisclosure,} from "@nextui-org/react";
import Link from "next/link";
import { useState,useEffect,useRef } from "react";
import { IoIosSearch } from "react-icons/io";
import { redirect, useRouter } from "next/navigation";

export default function ProductSlugHeader({data}) {
    const [value, setValue] = useState("");
    const {isOpen, onOpen, onOpenChange} = useDisclosure();
    const confirmButtonRef = useRef(null);
    const router = useRouter();
 

    const handleKeyDown = (event) => {
 
      if (event.keyCode === 13 || event.keyCode === "Enter") { // Enter key
     
        redirect('/product')
        
      }
    };


  return (
    <div className="bg-[#fcfcfc]">
        <div className="max-w-6xl mx-auto px-6 xl:px-0 pt-[40px] sm:pt-[48px] md:pt-[56px] lg:pt-[64px] xl:pt-[72px] pb-[50px]">
            <div className="flex justify-between w-full h-full gap-x-[2%]">
                {/* Header & Search */}
                <div className="flex flex-col w-[60%] gap-y-[16px]">
                    <h2 className="font-pop text-[20px] sm:text-[24px] md:text-[24px] lg:text-[30px] xl:text-[36px] text-[#1C2532] font-[600] leading-[125%] uppercase">
                        OUR products
                    </h2>
                    <div className="flex gap-x-[10px]">
                        <Link href={`/product`} className="text-[14px] md:text-[16px] text-[#ABB1C1] font-[500]">
                            Product /
                        </Link>
                        <p className="text-[14px] md:text-[16px] text-[#14142A] font-[500]">
                            {data?.title}
                        </p>
                    </div>
                </div>
                <form className="hidden md:flex justify-end w-[292px] gap-y-[16px]">
                    <Input className=" placeholder:text-[#ABB1C1]" type="text" variant='bordered' 
                    placeholder="ค้นหาผลิตภัณฑ์..." 
                    value={value}
                    onValueChange={setValue}
          
                    startContent={
                        <Link href={`/product?product=${value}`}>
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
                                    <Link onPress={onClose} href={`/product?product=${value}`} size="sm" className="flex justify-center items-center w-full h-[48px] rounded-[4px] bg-[#223B61] hover:bg-[#fcfcfc] transition-all duration-500
                                        text-[16px] md:text-[14px] lg:text-[16px] xl:text-[18px] text-[#fcfcfc] hover:text-[#223B61] font-[500] border-[1px] border-solid border-[#fcfcfc] hover:border-[#223B61]">
                                        Search
                                    </Link>
                                </div> 
                            </div>    
                            
                            </ModalBody>
                   
                          </>
                        )}
                      </ModalContent>
                    </Modal>
            </div>
        </div>
    </div>
  )
}
