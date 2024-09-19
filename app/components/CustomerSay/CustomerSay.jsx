"use client"

import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination, Navigation } from 'swiper';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation'; // Import navigation styles

import Image from 'next/image';
import person2 from './image/person.png'
import person from './image/person2.png'
import comma from './image/comma.png'
import toy1 from './image/toy1.png'
import toy2 from './image/toy2.png'
import toy3 from './image/toy3.png'
import toy4 from './image/toy4.png'
import rightArow from './image/right-arow.svg'
import Reveals from '../Reveals/Reveals';
// Install Swiper modules
SwiperCore.use([Pagination, Navigation]);

const CustomerSay = () => {
    const swiperRef = useRef(null);

    const handleSlideChange = (direction) => {
        if (swiperRef.current) {
            const swiperInstance = swiperRef.current.swiper;
            if (direction === 'prev') {
                swiperInstance.slidePrev();
            } else if (direction === 'next') {
                swiperInstance.slideNext();
            }
        }
    };
    return (
        <section className='relative mt-[60px] lg:mt-[174px] text-white xl:w-[1170px] mx-5 lg:mx-10 xl:mx-auto max-w-ful'>
            <Swiper ref={swiperRef}
                slidesPerView={1}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                navigation={false} // Enable navigation
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className='flex md:flex-row flex-col md:items-center gap-5  xl:gap-[85px]'>

                        {/* left side */}
                        {/* person image */}
                        <div className='w-[396px] h-[444px] relative z-20'>
                            <Image className='hidden xlg:block relative z-20 h-full  w-full' src={person} alt='person' />
                            <Image className='xlg:hidden relative z-20 w-full h-full' src={person2} alt='person' />
                            <div className='absolute top-0 right-[61px] sm:right-0 z-30 w-[88px] h-[86px] bg-[#1E072F] px-[13px] py-[18px]'>
                                <Image className='' width={62} height={50} src={comma} alt='person' />
                            </div>

                        </div>
                        {/* right side */}
                        <div className='md:w-[650px] w-full'>
                            <div className='relative flex items-center justify-between'>
                                <Reveals>
                                    <h3>What Our Customer Say <br /> About Us</h3>
                                </Reveals>
                                <button className='absolute right-0 bottom-0 lg:static' onClick={() => handleSlideChange('next')}>
                                    <Image src={rightArow} alt='arrow' />
                                </button>
                            </div>
                            <Reveals>
                                <p className='text-[#B1B5C3] text-[20px] font-normal'>Tanahair is the friendliest and most efficient company <br /> ever used. The whole thing takes time to introduce the <br /> product and as a result puts forward only the best <br /> opportunities that really suit you. they help from start to <br /> finish to create a great product identity</p>
                            </Reveals>
                            <div className='mt-5 xl:mt-[56px] flex items-center justify-between'>
                                <div>
                                    <Reveals>
                                        <h4 className=' text-lg xm:text-[24px] font-semibold leading-6'>Brooklyn Simmons</h4>
                                    </Reveals>
                                    <Reveals>
                                        <p className='text-[#B1B5C3] text-[16px] mt-[12px]'>President of Sales</p>
                                    </Reveals>
                                </div>
                                {/* circlce image */}
                                <div className='flex items-center'>
                                    <div className='bg-[#FFF] h-[80px] w-[80px] rounded-[50%] flex justify-center items-center relative z-40 ml-[-10px]'>
                                        <Image src={toy1} alt='toy' />
                                    </div>
                                    <div className='bg-[#FFF] h-[60px] w-[60px] rounded-[50%] flex justify-center items-center relative z-30 ml-[-20px] md:ml-[-10px]'>
                                        <Image src={toy2} alt='toy' />
                                    </div>
                                    <div className='bg-[#FFF] h-[60px] w-[60px] rounded-[50%] flex justify-center items-center relative z-20 ml-[-20px] md:ml-[-10px]'>
                                        <Image src={toy3} alt='toy' />
                                    </div>
                                    <div className='bg-[#FFF] h-[60px] w-[60px] rounded-[50%] flex justify-center items-center relative z-10 ml-[-20px] md:ml-[-10px]'>
                                        <Image src={toy4} alt='toy' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
              
                





            </Swiper>
            {/* <div className='w-[228px] h-[212px] absolute bottom-[-38px] left-[-38px] z-80' style={{ background: "var(--primary-color-gradient, linear-gradient(330deg, #0047FF 0%, #F07 100%))" }}>

            </div> */}

        </section>
    );
};

export default CustomerSay;