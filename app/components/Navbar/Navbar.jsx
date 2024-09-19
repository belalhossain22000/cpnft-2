"use client"
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import logo from './image/logo-2.svg';
import bar from './image/bar-2.svg';
import profile from './image/profile.png';
import { BiX } from 'react-icons/bi';

import Image from 'next/image';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [scrollPosition, setScrollPosition] = useState(0);
    useEffect(() => {
        const handleScroll = () => {
            const position = window.pageYOffset;
            setScrollPosition(position);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    return (
        <header className={`  pt-7 ${scrollPosition > 0 ? " bg-[#4B168C] rounded-b-md" : ""}`}>
            <div className='relative xl:w-[1170px] mx-5 lg:mx-10 xl:mx-auto max-w-ful'>
                <div className='flex justify-between  items-center'>
                    <div className='flex items-center gap-[70px]'>
                        {/* logo */}
                        <Link href={"/"}>
                            <Image src={logo} width={118} height={61} className='w-[118px] h-[61px]' alt='logo' />
                        </Link>
                        {/* navbar link*/}
                        <ul className='xlg:flex items-center gap-[48px] hidden text-[#B1B5C3]'>
                            <li className='transition-all duration-700 text-[16px] font-normal text-[#B1B5C3] hover:text-white'>
                                <Link href={"/"}>
                                    Products
                                </Link>
                            </li>
                            <li className='transition-all duration-700 text-[16px] font-normal text-[#B1B5C3] hover:text-white'>
                                <Link href={"/"}>
                                    Buy & Sell
                                </Link>
                            </li>
                            <li className='transition-all duration-700 text-[16px] font-normal text-[#B1B5C3] hover:text-white'>
                                <Link href={"/"}>
                                    About
                                </Link>
                            </li>
                            <li className='transition-all duration-700 text-[16px] font-normal text-[#B1B5C3] hover:text-white'>
                                <Link href={"/"}>
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>
                    {/* profile and hamburger */}
                    <div className='flex items-center gap-2 md:gap-[20px]'>
                        {/* right profile */}
                        <div className='text-white xlg:flex gap-[11px] items-center bg-[#0F0428] rounded-[100px] border-[1px] border-[#240958] px-[15px] py-[8px] hidden '>
                            <p>Eth 0.1235</p>
                            <Image src={profile} width={27} height={26} alt='profile' />
                        </div>
                        {/* mini device bar */}
                        <div className='xlg:hidden' onClick={() => setIsOpen(!isOpen)}>
                            {isOpen ? <BiX size={40}
                                color="#FFF" /> : <Image width={30} height={30} src={bar} alt='bar logo' />}
                        </div>
                    </div>
                </div >
            </div>
            {/* navigation for small device */}
            <div className={`absolute transition-all duration-700 z-50 top-0 ${isOpen ? "left-0" : "left-[-500px]"}  py-10 px-10 md:w-[30%] h-[105vh] bg-[#4B168C] text-white opacity-100  rounded-r-md xlg:hidden block`}>
                <ul className={` text-white space-y-5`}>
                    {/* logo */}
                    <li className='text-[16px] font-normal text-[#B1B5C3]'>
                        <Link href={"/"}>
                            <Image src={logo} width={118} height={61} className='w-[118px] h-[61px]' alt='logo' />
                        </Link>
                    </li>

                    <li className='transition-all duration-700 text-[16px] font-normal text-[#B1B5C3] hover:text-white'>
                        <Link href={"/"}>
                            Products
                        </Link>
                    </li>
                    <li className='transition-all duration-700 text-[16px] font-normal text-[#B1B5C3] hover:text-white'>
                        <Link href={"/"}>
                            Buy & Sell
                        </Link>
                    </li>
                    <li className='transition-all duration-700 text-[16px] font-normal text-[#B1B5C3] hover:text-white'>
                        <Link href={"/"}>
                            About
                        </Link>
                    </li>
                    <li className='transition-all duration-700 text-[16px] font-normal text-[#B1B5C3] hover:text-white'>
                        <Link href={"/"}>
                            Contact
                        </Link>
                    </li>
                    {/* right profile */}
                    <div className='text-white flex gap-[11px] items-center bg-[#0F0428] rounded-[100px] border-[1px] border-[#240958] pl-[15px] py-[8px] w-[140px]'>
                        <p>Eth 0.1235</p>
                        <Image src={profile} width={27} height={26} alt='profile' />
                    </div>

                </ul>
            </div>
        </header >
    );
};

export default Navbar;
