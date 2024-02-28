"use client"
import Link from "next/link"
import Image from "next/image"
import {Accordion, AccordionItem,Dropdown, DropdownTrigger, DropdownMenu, DropdownItem,Button} from "@nextui-org/react";
import { usePathname } from 'next/navigation'
import { useRouter } from 'next/navigation'
import { useState,useEffect } from "react"
import logo from "../../../public/assets/Images/Navbar/logo.png"
import client from "../../../client"
import imageUrlBuilder from '@sanity/image-url'

const builder = imageUrlBuilder(client)
function urlFor(source) {
  return builder.image(source)
}

export default function Navbar({data}) {
    const pathname = usePathname();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [scrollPosition, setScrollPosition] = useState(0);
    const [showSubMenu, setShowSubMenu] = useState(false);
    const [showSubMenuTimeout, setShowSubMenuTimeout] = useState(null);

    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    useEffect(() => {
      // เพิ่ม event listener เมื่อ component ถูก mount
      window.addEventListener('scroll', handleScroll);

      // ลบ event listener เมื่อ component ถูก unmount
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

  // ปรับแต่งสี BG ตาม scrollPosition ตามที่คุณต้องการ
  const bgColor = scrollPosition > 80 ? 'bg-[#1C2532]' : 'bg-transparent';
  // Function เมื่อเอาเมาส์ไปชี้ที่หัวข้อ
  const handleMouseEnter = () => {
    setShowSubMenu(true);
    clearTimeout(showSubMenuTimeout);
  };

  // Function เมื่อเอาเมาส์ออกจากทั้งหัวข้อหลักและ Submenu
  const handleMouseLeave = () => {
    setShowSubMenuTimeout(
      setTimeout(() => {
        setShowSubMenu(false);
      }, 300) // หน่วงเวลา 2 วินาทีก่อนปิด Submenu
    );
  };

  // Function เมื่อเอาเมาส์ไปชี้ที่ Submenu
  const handleSubMenuMouseEnter = () => {
    clearTimeout(showSubMenuTimeout);
  };

  // Function เมื่อเอาเมาส์ออกจาก Submenu
  const handleSubMenuMouseLeave = () => {
    handleMouseLeave(); // ใช้ function เดียวกับเมื่อเอาเมาส์ออกจากหัวข้อหลัก
  };
 
  return (
    <div className="z-[100] fixed top-0 w-screen">
        {/* Desktop */}
        <header className='hidden md:block'>
            <nav className={`${pathname=="/" ? `${bgColor}`:'bg-[#1C2532]'} transition-colors duration-500`}>
                <div className='max-w-6xl mx-auto px-4 xl:px-0'>
                    <div className='flex justify-between items-center min-w-full h-[80px]'>
                        {/* Logo  */}
                        <Link href="/" className='flex justify-center items-center'>
                          <Image className="object-contain object-center w-[110px] h-[40px]" alt="Logo wawell" src={logo} quality={100} width={logo.width} height={logo.height} />
                           
                        </Link>
                        <ul className="flex items-center h-full gap-x-[24px] lg:gap-x-[42px]">
                          {data?.slice(0,data?.length).map((item,index)=>(
                            <div key={index} className={`justify-center items-center cursor-pointer relative z-[100] ${item?.status== true ? "flex":"hidden"}`}>
                            {item?.showsubmenu == true ? 
                              (<div className="flex justify-center items-center">
                                  <Link href={`${item?.href}`} 
                                    onMouseEnter={handleMouseEnter}
                                    onMouseLeave={handleMouseLeave}
                                    className={`font-pop text-[14px] lg:text-[16px] xl:text-[18px] cursor-pointer font-[400] leading-[125%] text-center transition-colors duration-500 hover:text-[#997F53] uppercase pb-1 ${pathname== `${item?.href}` ? "text-[#997F53] border-b-[2px] border-solid border-[#997F53]":"text-[#FCFCFC]"}`}>
                                    {item?.title}
                                  </Link>
                                  <div 
                                  onMouseEnter={handleSubMenuMouseEnter}
                                  onMouseLeave={handleSubMenuMouseLeave} 
                                  className={`w-screen justify-center px-6 xl:px-0 py-[32px] bg-[#f1efe9] transition-all duration-1000 fixed top-[80px] left-0 ${showSubMenu ? 'flex' : ' hidden opacity-0'}`}>
                                    <div className="flex w-full xl:w-[1152px] gap-x-[2%]">
                                      {item?.submenu?.map((item,index)=>(
                                        <div key={index} className="flex flex-col w-[49%] gap-y-[8px]">
                                            <Link href={item?.href} className="font-pop text-[16px] md:text-[14px] lg:text-[16px] xl:text-[18px] text-[#1C2532] font-[500] leading-[125%] uppercase">
                                                {item?.title}
                                            </Link>
                                            <Link href={item?.href} className="flex justify-center items-center w-full overflow-hidden">
                                                <Image className="object-scale-down object-center w-full scale-100 hover:scale-110 transition-all duration-500" src={urlFor(item?.image).url()} alt={item?.alt} 
                                                quality={100} priority width={604} height={166}/>
                                            </Link>
                                        </div>
                                      ))}
                                        
                                    </div>
                                  </div>
                                </div>
                            )
                              :
                              (
                                <Link href={`${item?.href}`} className={`font-pop text-[14px] lg:text-[16px] xl:text-[18px] cursor-pointer font-[400] leading-[125%] text-center transition-colors duration-500 hover:text-[#997F53] uppercase pb-1 ${pathname== `${item?.href}` ? "text-[#997F53] border-b-[2px] border-solid border-[#997F53]":"text-[#FCFCFC]"}`}>
                                  {item?.title}
                                </Link>
                              )}
                          </div>
                          ))}
                          
                        </ul>
                        
                    </div>
                </div>
            </nav>
        </header>

        {/* Mobile */}
        <header className='block md:hidden'>
            <nav className={`bg-[#1C2532]`}>
                <div className="max-w-full">
                    <div className="flex flex-col justify-between items-center min-w-full h-full shadow-md">
                      {/* Nav Menu */}
                      <div className="flex justify-between items-center w-full h-[80px] px-6">
                        {/* Logo พี่ป็อป */}
                        <Link href="/" className='flex justify-center items-center'>
                          <Image className="object-contain object-center" src={logo} alt="Logo wawell" quality={100} width={100} height={32} />
                        </Link>
                        {/* Menu Button Mobile */}
                        <div className="flex items-center h-full">
                          <button
                            type="button"
                            className="flex items-center justify-center h-full"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                          >
                            <div className='flex flex-col justify-center items-center gap-y-[4px]'>
                              <div className={`flex w-[24px] h-[2px] bg-[#ffffff] rounded-[0.25px] transition-all duration-500 ${mobileMenuOpen==true ? 'translate-y-[7px] rotate-45':'translate-y-0 rotate-0'}`}></div>
                              <div className='flex justify-center items-center h-[2px] overflow-hidden'>
                                  <div className={`flex w-[12px] h-full rounded-l-[0.25px] bg-[#ffffff] transition-all duration-500 ${mobileMenuOpen==true ? '-translate-x-full opacity-0':'translate-x-0 opacity-100'}`}></div>
                                  <div className={`flex w-[12px] h-full rounded-r-[0.25px] bg-[#ffffff] transition-all duration-500 ${mobileMenuOpen==true ? 'translate-x-[110%] opacity-0':'translate-x-0 opacity-100'}`}></div>
                              </div>
                              <div className={`flex w-[24px] h-[2px] bg-[#ffffff] rounded-[0.25px] transition-all duration-500 ${mobileMenuOpen==true ? '-translate-y-[5px] -rotate-45':'translate-y-0 rotate-0'}`}></div>
                            </div>
                          </button>
                        </div>
                      </div>

                      {/* Menu */}
                      <div className={`flex flex-col w-full h-screen bg-[#e7e5df] px-6 pb-[42px] fixed top-[78px] z-[101] transition-all duration-500 transform ${mobileMenuOpen==true ? 'translate-x-0':'-translate-x-full'}`}>
                        <ul className="flex flex-col h-full pt-[36px]">
                          {data?.slice(0,data?.length).map((item,index)=>(
                            <li key={index} onClick={()=>setMobileMenuOpen(!mobileMenuOpen)} className={`${item?.status== true ? "flex":"hidden"} items-center ${item?.showsubmenu == true ? "py-0":"py-[16px]"}  border-b-[1.25px] border-solid border-[#ABB1C1]`}>
                               {item?.showsubmenu == true ? 
                               (
                                <Accordion >
                                  <AccordionItem key="1" aria-label={item?.title} classNames={{indicator:"rotate-90" }} title={
                                    <Link href={item?.href} className={`font-pop px-[24px] text-[18px] sm:text-[22px] font-[500] leading-[125%] transition-colors duration-500 hover:text-[#997F53] uppercase py-0 ${pathname== `${item?.href}` ? "text-[#997F53]":"text-[#1C2532]"}`}>
                                      {item?.title}
                                    </Link>
                                    }>
                                      <div className="flex flex-col w-full gap-y-[24px]">
                                         {item?.submenu?.map((item,index)=>(
                                         <Link onClick={()=>setMobileMenuOpen(!mobileMenuOpen)} key={index} href={item?.href} className={`font-pop px-[32px] text-[18px] sm:text-[22px] font-[400] leading-[125%] transition-colors duration-500 hover:text-[#997F53] uppercase pb-1 ${pathname== `${item?.href}` ? "text-[#997F53]":"text-[#545867]"}`}>
                                           {item?.title}
                                         </Link>
                                        ))}
                                      </div>
                            
                                  </AccordionItem>
                                </Accordion>
                               ):(
                                <Link onClick={()=>setMobileMenuOpen(!mobileMenuOpen)} href={item?.href} className={`font-pop px-[32px] text-[18px] sm:text-[22px] font-[500] leading-[125%] transition-colors duration-500 hover:text-[#997F53] uppercase pb-1 ${pathname== `${item?.href}` ? "text-[#997F53]":"text-[#1C2532]"}`}>
                                  {item?.title}
                                </Link>
                               )}
                                
                            </li>
                          ))}
                          <div className='flex justify-center items-center w-full gap-x-[8px] pt-[40px]'>
                            <p className='font-pop text-[14px] md:text-[16px] text-[#14142A] font-[400] leading-[125%]'>
                              {`Follow Us: `}
                            </p>
                            <a href={data?.social?.ig} target='_blank' className=' cursor-pointer'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none">
                                  <path d="M12 9.52C11.5095 9.52 11.03 9.66545 10.6222 9.93795C10.2144 10.2105 9.89648 10.5978 9.70878 11.0509C9.52107 11.5041 9.47196 12.0028 9.56765 12.4838C9.66334 12.9649 9.89954 13.4068 10.2464 13.7536C10.5932 14.1005 11.0351 14.3367 11.5162 14.4323C11.9972 14.528 12.4959 14.4789 12.9491 14.2912C13.4022 14.1035 13.7895 13.7856 14.062 13.3778C14.3346 12.97 14.48 12.4905 14.48 12C14.48 11.6743 14.4159 11.3518 14.2912 11.0509C14.1666 10.7501 13.9839 10.4767 13.7536 10.2464C13.5233 10.0161 13.2499 9.83341 12.9491 9.70878C12.6482 9.58415 12.3257 9.52 12 9.52V9.52ZM21.93 7.07C21.9247 6.29776 21.7825 5.53257 21.51 4.81C21.3093 4.28126 20.9987 3.80109 20.5988 3.40119C20.1989 3.00128 19.7187 2.69072 19.19 2.49C18.4674 2.21746 17.7022 2.07526 16.93 2.07C15.64 2 15.26 2 12 2C8.74 2 8.36 2 7.07 2.07C6.29776 2.07526 5.53257 2.21746 4.81 2.49C4.28126 2.69072 3.80109 3.00128 3.40119 3.40119C3.00128 3.80109 2.69072 4.28126 2.49 4.81C2.21746 5.53257 2.07526 6.29776 2.07 7.07C2 8.36 2 8.74 2 12C2 15.26 2 15.64 2.07 16.93C2.08076 17.705 2.22277 18.4725 2.49 19.2C2.68983 19.7263 3.00013 20.2037 3.4 20.6C3.79819 21.0023 4.27939 21.3129 4.81 21.51C5.53257 21.7825 6.29776 21.9247 7.07 21.93C8.36 22 8.74 22 12 22C15.26 22 15.64 22 16.93 21.93C17.7022 21.9247 18.4674 21.7825 19.19 21.51C19.7206 21.3129 20.2018 21.0023 20.6 20.6C20.9999 20.2037 21.3102 19.7263 21.51 19.2C21.7823 18.4739 21.9244 17.7055 21.93 16.93C22 15.64 22 15.26 22 12C22 8.74 22 8.36 21.93 7.07V7.07ZM19.39 15.07C19.3579 15.6871 19.2262 16.295 19 16.87C18.8059 17.3497 18.5173 17.7854 18.1514 18.1514C17.7854 18.5173 17.3497 18.8059 16.87 19C16.2895 19.2136 15.6783 19.3318 15.06 19.35C14.27 19.35 14.06 19.35 12 19.35C9.94 19.35 9.73 19.35 8.94 19.35C8.32173 19.3318 7.71049 19.2136 7.13 19C6.6341 18.8157 6.18628 18.5217 5.82 18.14C5.45767 17.7813 5.17784 17.3479 5 16.87C4.78556 16.2901 4.67061 15.6782 4.66 15.06C4.66 14.27 4.66 14.06 4.66 12C4.66 9.94 4.66 9.73 4.66 8.94C4.67061 8.32183 4.78556 7.70988 5 7.13C5.18428 6.6341 5.47827 6.18628 5.86 5.82C6.22033 5.45962 6.65326 5.18009 7.13 5C7.71049 4.78641 8.32173 4.66821 8.94 4.65V4.65C9.73 4.65 9.94 4.65 12 4.65C14.06 4.65 14.27 4.65 15.06 4.65C15.6783 4.66821 16.2895 4.78641 16.87 5C17.3659 5.18428 17.8137 5.47827 18.18 5.86C18.5423 6.21875 18.8222 6.65213 19 7.13C19.2136 7.71049 19.3318 8.32173 19.35 8.94C19.35 9.73 19.35 9.94 19.35 12C19.35 14.06 19.42 14.27 19.39 15.06V15.07ZM17.79 7.63C17.6709 7.30698 17.4832 7.01364 17.2398 6.77021C16.9964 6.52678 16.703 6.33906 16.38 6.22C15.9365 6.06626 15.4693 5.99179 15 6C14.22 6 14 6 12 6C10 6 9.78 6 9 6C8.52827 6.00461 8.06107 6.09263 7.62 6.26C7.30193 6.37366 7.01169 6.55371 6.76858 6.7882C6.52547 7.02269 6.33506 7.30624 6.21 7.62C6.06478 8.06537 5.99383 8.5316 6 9C6 9.78 6 10 6 12C6 14 6 14.22 6 15C6.00991 15.4712 6.09777 15.9375 6.26 16.38C6.37906 16.703 6.56678 16.9964 6.81021 17.2398C7.05364 17.4832 7.34698 17.6709 7.67 17.79C8.09667 17.9469 8.54565 18.0347 9 18.05V18.05C9.78 18.05 10 18.05 12 18.05C14 18.05 14.22 18.05 15 18.05C15.4717 18.0454 15.9389 17.9574 16.38 17.79C16.703 17.6709 16.9964 17.4832 17.2398 17.2398C17.4832 16.9964 17.6709 16.703 17.79 16.38C17.9574 15.9389 18.0454 15.4717 18.05 15C18.05 14.22 18.05 14 18.05 12C18.05 10 18.05 9.78 18.05 9C18.0503 8.5278 17.9621 8.05972 17.79 7.62V7.63ZM12 15.82C11.4988 15.82 11.0026 15.7211 10.5397 15.529C10.0768 15.3369 9.6563 15.0554 9.30238 14.7005C8.94846 14.3457 8.66803 13.9245 8.47714 13.4611C8.28626 12.9977 8.18868 12.5012 8.19 12V12C8.19 11.2441 8.4143 10.5051 8.83449 9.87669C9.25468 9.24828 9.85187 8.75866 10.5505 8.46983C11.2491 8.181 12.0177 8.10594 12.7589 8.25415C13.5002 8.40236 14.1808 8.76717 14.7147 9.30241C15.2485 9.83764 15.6116 10.5192 15.7578 11.2609C15.9041 12.0026 15.827 12.771 15.5363 13.4688C15.2457 14.1666 14.7545 14.7625 14.125 15.1811C13.4955 15.5996 12.7559 15.822 12 15.82V15.82ZM16 8.93C15.7789 8.9066 15.5744 8.80222 15.4257 8.63697C15.277 8.47172 15.1947 8.25729 15.1947 8.035C15.1947 7.81271 15.277 7.59828 15.4257 7.43303C15.5744 7.26778 15.7789 7.1634 16 7.14V7.14C16.2211 7.1634 16.4256 7.26778 16.5743 7.43303C16.723 7.59828 16.8053 7.81271 16.8053 8.035C16.8053 8.25729 16.723 8.47172 16.5743 8.63697C16.4256 8.80222 16.2211 8.9066 16 8.93Z" fill="#223B61"/>
                                </svg>
                              </a>
                              <a href={data?.social?.facebook} target='_blank' className=' cursor-pointer'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none">
                                  <path d="M20.9 2H3.1C2.80826 2 2.52847 2.11589 2.32218 2.32218C2.11589 2.52847 2 2.80826 2 3.1V20.9C2 21.0445 2.02845 21.1875 2.08373 21.321C2.13901 21.4544 2.22004 21.5757 2.32218 21.6778C2.42433 21.78 2.54559 21.861 2.67905 21.9163C2.81251 21.9715 2.95555 22 3.1 22H12.68V14.25H10.08V11.25H12.68V9C12.6261 8.47176 12.6885 7.93813 12.8627 7.43654C13.0369 6.93495 13.3188 6.47755 13.6885 6.09641C14.0582 5.71528 14.5068 5.41964 15.0028 5.23024C15.4989 5.04083 16.0304 4.96225 16.56 5C17.3383 4.99521 18.1163 5.03528 18.89 5.12V7.82H17.3C16.04 7.82 15.8 8.42 15.8 9.29V11.22H18.8L18.41 14.22H15.8V22H20.9C21.0445 22 21.1875 21.9715 21.321 21.9163C21.4544 21.861 21.5757 21.78 21.6778 21.6778C21.78 21.5757 21.861 21.4544 21.9163 21.321C21.9715 21.1875 22 21.0445 22 20.9V3.1C22 2.95555 21.9715 2.81251 21.9163 2.67905C21.861 2.54559 21.78 2.42433 21.6778 2.32218C21.5757 2.22004 21.4544 2.13901 21.321 2.08373C21.1875 2.02845 21.0445 2 20.9 2V2Z" fill="#223B61"/>
                                </svg>
                              </a>
                              <a href={data?.social?.line} target='_blank' className=' cursor-pointer'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none">
                                  <path d="M13.78 9.46C13.7301 9.46 13.6807 9.46983 13.6346 9.48893C13.5885 9.50802 13.5466 9.53601 13.5113 9.5713C13.476 9.60659 13.448 9.64848 13.4289 9.69458C13.4098 9.74068 13.4 9.7901 13.4 9.84V11.51L12 9.65C11.9651 9.5934 11.9167 9.54639 11.8591 9.51321C11.8014 9.48004 11.7365 9.46175 11.67 9.46C11.6201 9.46 11.5707 9.46983 11.5246 9.48893C11.4785 9.50802 11.4366 9.53601 11.4013 9.5713C11.366 9.60659 11.338 9.64848 11.3189 9.69458C11.2998 9.74068 11.29 9.7901 11.29 9.84V12.68C11.29 12.7299 11.2998 12.7793 11.3189 12.8254C11.338 12.8715 11.366 12.9134 11.4013 12.9487C11.4366 12.984 11.4785 13.012 11.5246 13.0311C11.5707 13.0502 11.6201 13.06 11.67 13.06V13.06C11.7199 13.06 11.7693 13.0502 11.8154 13.0311C11.8615 13.012 11.9034 12.984 11.9387 12.9487C11.974 12.9134 12.002 12.8715 12.0211 12.8254C12.0402 12.7793 12.05 12.7299 12.05 12.68V11L13.44 12.91C13.4754 12.9633 13.5285 13.0023 13.59 13.02C13.6361 13.0303 13.6839 13.0303 13.73 13.02C13.7739 13.0359 13.8206 13.0424 13.8671 13.039C13.9137 13.0355 13.959 13.0222 14 13L14.1 12.93C14.1702 12.8576 14.2096 12.7608 14.21 12.66V9.84C14.2105 9.7856 14.1993 9.73173 14.1771 9.68203C14.155 9.63234 14.1224 9.58798 14.0816 9.55195C14.0409 9.51592 13.9929 9.48907 13.9408 9.47321C13.8888 9.45734 13.8339 9.45284 13.78 9.46V9.46ZM9.2 12.27H8.14V9.84C8.14 9.73922 8.09996 9.64256 8.0287 9.5713C7.95744 9.50004 7.86078 9.46 7.76 9.46V9.46C7.65922 9.46 7.56256 9.50004 7.4913 9.5713C7.42004 9.64256 7.38 9.73922 7.38 9.84V12.68C7.38 12.7808 7.42004 12.8774 7.4913 12.9487C7.56256 13.02 7.65922 13.06 7.76 13.06H9.2C9.30172 13.06 9.39944 13.0203 9.4723 12.9493C9.54515 12.8783 9.58739 12.7817 9.59 12.68V12.68C9.59272 12.6271 9.58464 12.5743 9.56626 12.5246C9.54788 12.475 9.51958 12.4296 9.48309 12.3912C9.4466 12.3528 9.40268 12.3223 9.35402 12.3015C9.30535 12.2806 9.25294 12.2699 9.2 12.27V12.27ZM10.31 9.46C10.2083 9.45997 10.1106 9.49968 10.0377 9.57067C9.96485 9.64166 9.92261 9.73831 9.92 9.84V12.68C9.92261 12.7817 9.96485 12.8783 10.0377 12.9493C10.1106 13.0203 10.2083 13.06 10.31 13.06V13.06C10.4108 13.06 10.5074 13.02 10.5787 12.9487C10.65 12.8774 10.69 12.7808 10.69 12.68V9.84C10.69 9.73922 10.65 9.64256 10.5787 9.5713C10.5074 9.50004 10.4108 9.46 10.31 9.46V9.46ZM17.91 2H6.09C5.00608 2.00264 3.9673 2.4344 3.20085 3.20085C2.4344 3.9673 2.00264 5.00608 2 6.09V17.91C2.00264 18.9939 2.4344 20.0327 3.20085 20.7992C3.9673 21.5656 5.00608 21.9974 6.09 22H17.91C18.9939 21.9974 20.0327 21.5656 20.7992 20.7992C21.5656 20.0327 21.9974 18.9939 22 17.91V6.09C21.9974 5.00608 21.5656 3.9673 20.7992 3.20085C20.0327 2.4344 18.9939 2.00264 17.91 2V2ZM18.22 14.28C18.1806 14.3396 18.1372 14.3964 18.09 14.45V14.45C17.8515 14.7435 17.5835 15.0115 17.29 15.25C15.29 17.12 11.93 19.36 11.48 19.01C11.03 18.66 12.12 17.25 10.95 17.01C10.867 17.0205 10.783 17.0205 10.7 17.01C7.26 16.53 4.7 14.12 4.7 11.23C4.7 7.98 7.99 5.35 12.04 5.35C16.09 5.35 19.38 7.98 19.38 11.23C19.3453 12.3478 18.9369 13.4217 18.22 14.28V14.28ZM16.51 9.47H15C14.8992 9.47 14.8026 9.51004 14.7313 9.5813C14.66 9.65256 14.62 9.74922 14.62 9.85V12.69C14.62 12.7399 14.6298 12.7893 14.6489 12.8354C14.668 12.8815 14.696 12.9234 14.7313 12.9587C14.7666 12.994 14.8085 13.022 14.8546 13.0411C14.9007 13.0602 14.9501 13.07 15 13.07H16.48C16.5299 13.07 16.5793 13.0602 16.6254 13.0411C16.6715 13.022 16.7134 12.994 16.7487 12.9587C16.784 12.9234 16.812 12.8815 16.8311 12.8354C16.8502 12.7893 16.86 12.7399 16.86 12.69V12.69C16.86 12.5892 16.82 12.4926 16.7487 12.4213C16.6774 12.35 16.5808 12.31 16.48 12.31H15.45V11.71H16.51C16.6117 11.7074 16.7083 11.6652 16.7793 11.5923C16.8503 11.5194 16.89 11.4217 16.89 11.32V11.32C16.89 11.2192 16.85 11.1226 16.7787 11.0513C16.7074 10.98 16.6108 10.94 16.51 10.94H15.45V10.33H16.51C16.6108 10.33 16.7074 10.29 16.7787 10.2187C16.85 10.1474 16.89 10.0508 16.89 9.95C16.9057 9.89252 16.9077 9.83215 16.8958 9.77377C16.8839 9.71538 16.8584 9.66062 16.8214 9.61389C16.7844 9.56717 16.737 9.52981 16.6829 9.50481C16.6288 9.47981 16.5696 9.46789 16.51 9.47V9.47Z" fill="#223B61"/>
                                </svg>
                              </a>
                          </div>

                        </ul>
                        
                      </div>

                      

                      
                    </div>
                </div>
            </nav>
        </header>

    </div>
  )
}
