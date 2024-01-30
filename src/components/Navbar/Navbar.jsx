"use client"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from 'next/navigation'
import { useRouter } from 'next/navigation'
import { useState,useEffect } from "react"
import logo from "../../../public/assets/Images/Navbar/logo.png"

export default function Navbar({data}) {
    const pathname = usePathname();
    const router=useRouter();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [scrollPosition, setScrollPosition] = useState(0);

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
  return (
    <div className="z-[100] fixed top-0 w-screen">
        {/* Desktop */}
        <header className='hidden md:block'>
            <nav className={`${pathname=="/" ? `${bgColor}`:'bg-[#1C2532]'} transition-colors duration-500`}>
                <div className='max-w-6xl mx-auto px-4 xl:px-0'>
                    <div className='flex justify-between items-center min-w-full h-[80px]'>
                        {/* Logo  */}
                        <Link href="/" className='flex justify-center items-center'>
                          <Image className="object-contain object-center w-[110px] h-[40px]" src={logo} quality={100} width={logo.width} height={logo.height} />
                           
                        </Link>
                        <ul className="flex items-center h-full gap-x-[24px] lg:gap-x-[42px]">
                          <li className={`justify-center items-center ${data[0]?.status== 'on' ? "flex":"hidden"}`}>
                                <Link href={`${data[0]?.href}`} className={`text-[14px] lg:text-[16px] xl:text-[18px] font-[500] leading-[125%] text-center transition-colors duration-500 hover:text-[#997F53] uppercase pb-1 ${pathname== `/` ? "text-[#997F53] border-b-[2px] border-solid border-[#997F53]":"text-[#FCFCFC]"}`}>
                                  {data[0]?.title}
                                </Link>
                          </li>
                          {data?.slice(1,data?.length).map((item,index)=>(
                            <li key={index} className={`justify-center items-center ${item?.status== 'on' ? "flex":"hidden"}`}>
                                <Link href={`${item?.href}`} className={`text-[14px] lg:text-[16px] xl:text-[18px] font-[500] leading-[125%] text-center transition-colors duration-500 hover:text-[#997F53] uppercase pb-1 ${pathname== `/${item?.href}` ? "text-[#997F53] border-b-[2px] border-solid border-[#997F53]":"text-[#FCFCFC]"}`}>
                                  {item?.title}
                                </Link>
                            </li>
                          ))}
                          
                        </ul>
                    </div>
                </div>
            </nav>
        </header>

        {/* Mobile */}
        <header className='block md:hidden'>
            <nav className={`${pathname=="/" ? `${bgColor}`:'bg-[#1C2532]'}`}>
                <div className="max-w-full">
                    <div className="flex flex-col justify-between items-center min-w-full h-full shadow-md">
                      {/* Nav Menu */}
                      <div className="flex justify-between items-center w-full h-[80px] px-6">
                        {/* Logo พี่ป็อป */}
                        <Link href="/" className='flex justify-center items-center'>
                          <Image className="object-contain object-center" src={logo} quality={100} width={logo.width} height={logo.height} />
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
                      <div className={`flex flex-col w-full h-screen bg-[#081024] px-6 pb-[120px] fixed top-[78px] z-[101] transition-all duration-500 transform ${mobileMenuOpen==true ? 'translate-x-0':'-translate-x-full'}`}>
                        <ul className="flex flex-col h-full">data[0]?
                          <li onClick={()=>setMobileMenuOpen(!mobileMenuOpen)} className={`${data[0]?.status== 'on' ? "flex":"hidden"} items-center py-[16px] border-b-[1.25px] border-solid border-[#ABB1C1]`}>
                            <Link href={data[0]?.href} className={`px-[32px] text-[18px] sm:text-[22px] font-[500] leading-[125%] transition-colors duration-500 hover:text-[#997F53] uppercase pb-1 ${pathname== `/` ? "text-[#997F53] border-b-[2px] border-solid border-[#997F53]":"text-[#ABB1C1]"}`}>
                              {data[0]?.title}
                            </Link>
                          </li>
                          {data.map((item,index)=>(
                            <li key={index} onClick={()=>setMobileMenuOpen(!mobileMenuOpen)} className={`${item?.status== 'on' ? "flex":"hidden"} items-center py-[16px] border-b-[1.25px] border-solid border-[#ABB1C1]`}>
                                <Link href={item?.href} className={`px-[32px] text-[18px] sm:text-[22px] font-[500] leading-[125%] transition-colors duration-500 hover:text-[#997F53] uppercase pb-1 ${pathname== `/${item?.href}` ? "text-[#997F53] border-b-[2px] border-solid border-[#997F53]":"text-[#ABB1C1]"}`}>
                                  {item?.title}
                                </Link>
                            </li>
                          ))}

                        </ul>
                        
                      </div>

                      
                    </div>
                </div>
            </nav>
        </header>

    </div>
  )
}
