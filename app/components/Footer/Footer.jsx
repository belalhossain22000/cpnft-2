import React from 'react';
import Image from 'next/image';
import logo from './image/logo.png';
import location from './image/location.svg';
import call from './image/call.svg';
import message from './image/message.svg';
import facebook from './image/facebook.svg';
import twitter from './image/twitter.svg';
import linkedin from './image/linkedin.svg';
import send from './image/send.svg';
import Link from 'next/link';

const Footer = () => {
    return (
        <footer className=' text-white lg:mt-[145px] mt-[60px] '>
            {/* footer body */}
            <div className='flex flex-wrap space-y-5 lg:space-y-0 justify-between items-center xl:w-[1170px] mx-5 lg:mx-10 xl:mx-auto max-w-ful'>

                {/* left */}
                <div>
                    <Link href={"/"}>
                        <Image src={logo} height={48} width={144} alt="logo" />
                    </Link>
                    <p className='mt-[21px] text-[16px] leading-[150%] text-[#FEFEFE]'>NFTs, or non-fungible tokens, have <br />
                        been A Thing for a while now, but <br /> whats the meaning of NFT ? A <br /> couple of high-profile stories have <br /> made </p>
                </div>
                {/* middle */}
                <div>
                    <h5 className='text-[#FEFEFE] text-[18px] font-semibold leading-[22px]'>Service</h5>

                    <div className='mt-[30px] space-y-[17px]'>

                        <div>
                            <Link className='flex items-center gap-4' href={"/"}>
                                <div className='h-6 w-6 rounded-[50%] flex items-center justify-center bg-white'>
                                    <Image src={location} alt="logo" />
                                </div>
                                <p>1901 Thornridge Cir. Hawaii 81063</p>
                            </Link>
                        </div>

                        <div >
                            <Link className='flex items-center gap-4' href={"/"}>
                                <div className='h-6 w-6 rounded-[50%] flex items-center justify-center bg-white'>
                                    <Image src={call} alt="logo" />
                                </div>
                                <p>(907) 555-0101</p>
                            </Link>
                        </div>
                        <div >
                            <Link className='flex items-center gap-4' href={"/"}>

                                <div className='h-6 w-6 rounded-[50%] flex items-center justify-center bg-white'>
                                    <Image src={message} alt="logo" />
                                </div>
                                <p>michael.mitc@example.com</p>
                            </Link>
                        </div>
                    </div>
                </div>
                {/* right side */}
                <div>
                    <h5 className='text-[#FEFEFE] text-[18px] font-semibold'>Service</h5>
                    <div className='flex items-center gap-[14px] mt-[25px]'>
                        <Link href={"/"}>

                            <div className="bg-white w-[28px] h-[32px] rounded-md flex items-center justify-center">
                                <Image src={facebook} alt="facebook" />
                            </div>
                        </Link>
                        <Link href={"/"}>

                            <div className="bg-white w-[28px] h-[32px] rounded-md flex items-center justify-center">
                                <Image src={twitter} alt="facebook" />
                            </div>
                        </Link>
                        <Link href={"/"}>

                            <div className="bg-white w-[28px] h-[32px] rounded-md flex items-center justify-center">
                                <Image src={linkedin} alt="facebook" />
                            </div>
                        </Link>
                    </div>
                    <h5 className='mt-[47px]'>Join a Newsletter</h5>
                    {/* form */}
                    <div className='w-[296px] h-[48px] relative mt-[23px]'>
                        <input className='w-full px-[13px] py-[13px] rounded-[100px]' type="email" placeholder='Your email here' />
                        <button className='absolute right-[2px] top-[2px] bottom-[2px] h-[44px] w-[44px] rounded-[50%] flex items-center justify-center' style={{ background: "var(--primary-color-gradient, linear-gradient(330deg, #0047FF 0%, #F07 100%))" }}>
                            <Image src={send} alt='icon' />
                        </button>
                    </div>

                </div>
            </div>
            <div className='w-full bg-[#3A3E50] h-[1px] mt-[61px]'></div>
            <div className='flex items-center justify-between py-[34px] xl:w-[1170px] mx-5 lg:mx-10 xl:mx-auto max-w-ful'>
                <p>Copyright - 2021 CreativePeoples</p>
                <Link href={"/"}>
                    <p>
                        Terms & condition   |   Privacy Policy
                    </p>
                </Link>
            </div>
        </footer>
    );
};

export default Footer;