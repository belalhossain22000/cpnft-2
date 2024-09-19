"use client"
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination, Navigation } from 'swiper';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation'; // Import navigation styles

// Import required modules
import Image from 'next/image';
import love from './image/love.png';
import share from './image/share.png';
import img1 from './image/img1.png';
import img2 from './image/img2.png';
import img3 from './image/img3.png';
import diamond from './image/diamondbadge2.png';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';
import { IconContext } from 'react-icons';
import Reveals from '../Reveals/Reveals';

// Install Swiper modules
SwiperCore.use([Pagination, Navigation]);

const ToplistSlider = () => {
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
    const [isHoveredBtn1, setIsHoveredBtn1] = useState(false);
    const [isHoveredBtn2, setIsHoveredBtn2] = useState(false);
    const handleMouseEnterBtn1 = () => {
        setIsHoveredBtn1(true);
    };

    const handleMouseLeaveBtn1 = () => {
        setIsHoveredBtn1(false);
    };

    const handleMouseEnterBtn2 = () => {
        setIsHoveredBtn2(true);
    };

    const handleMouseLeaveBtn2 = () => {
        setIsHoveredBtn2(false);
    };
    return (
        <section className=' xl:w-[1170px] lg:h-[470px] mx-5 lg:mx-10 xl:mx-auto max-w-ful mb-[50px] lg:mt-[80px] xl:mt-[160px] text-white '>
            <div className='flex md:flex-row flex-col items-center justify-center  gap-4'>

                <div>
                <Reveals>
                    <h3>Top List Artworks</h3>
                </Reveals>
                <Reveals>
                    <p className='mt-[31px] text-[#B1B5C3]'>They can include everything from music <br /> to a website domain, but the current <br /> craze is really around digital artwork.</p>
                </Reveals>
                    <div className='lg:mt-[128px] my-[50px]'>
                        <button className='text-[46px] ' onClick={() => handleSlideChange('prev')}>
                            <IconContext.Provider
                                value={{ style: { fill: `${isHoveredBtn1 ? 'url(#gradient)' : ""}` } }}
                            >
                                <svg width="0" height="0">
                                    <linearGradient id="gradient" x1="0" y1="0" x2="100%" y2="100%">
                                        <stop offset="0%" stopColor="#D116BF" />
                                        <stop offset="100%" stopColor="#3016D1" />
                                    </linearGradient>
                                </svg>
                                <BsArrowLeft
                                    onMouseEnter={handleMouseEnterBtn1}
                                    onMouseLeave={handleMouseLeaveBtn1}
                                    height={46} width={46} />
                            </IconContext.Provider></button>


                        <button className='text-[46px] ml-1' onClick={() => handleSlideChange('next')}>
                            <IconContext.Provider
                                value={{ style: { fill: `${isHoveredBtn2 ? 'url(#gradient)' : ""}` } }}
                            >
                                <svg width="0" height="0">
                                    <linearGradient id="gradient" x1="0" y1="0" x2="100%" y2="100%">
                                        <stop offset="0%" stopColor="#D116BF" />
                                        <stop offset="100%" stopColor="#3016D1" />
                                    </linearGradient>
                                </svg>
                                <BsArrowRight
                                    onMouseEnter={handleMouseEnterBtn2}
                                    onMouseLeave={handleMouseLeaveBtn2}
                                    height={46}
                                    width={46}
                                />
                            </IconContext.Provider>
                        </button>
                    </div>
                </div>
                {/* slider */}
                <div className='w-full  md:mr-[-30%]'>
                    <Swiper

                        ref={swiperRef}
                        slidesPerView={1}
                        spaceBetween={24}
                        pagination={{
                            clickable: true,
                        }}
                        navigation={false} // Enable navigation
                        className="mySwiper"
                        breakpoints={{

                            556: {
                                slidesPerView: 1.5,
                                spaceBetween:24,
                            },
                            768: {
                                slidesPerView: 2,
                                spaceBetween:24,
                            },
                           
                            991: {
                                slidesPerView: 3,
                                spaceBetween:39,
                            },
                           
                        }}
                    >
                        <SwiperSlide>
                            <div className=' w-[326px] h-[414px] relative'>
                                <Image src={img1} alt='image' />
                                <div className='bg-[#141416] w-full h-[103px] flex justify-between items-center px-[27px] py-5 absolute bottom-[0px]
                    '>
                                    <div>
                                        <p>Jane Cooper</p>
                                        <div className='flex items-center gap-1'>
                                            <Image src={diamond} alt='image' />
                                            <p>0.13268</p>
                                        </div>
                                    </div>
                                    <div className='flex items-center gap-[10px]'>
                                        <div className='h-[31px] w-[31px] rounded-full flex items-center justify-center bg-[#23262F]'> <Image src={love} alt='image' /></div>
                                        <div className='h-[31px] w-[31px] rounded-full flex items-center justify-center bg-[#23262F]'> <Image src={share} alt='image' /></div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='w-[326px] h-[414px] relative'>
                                <Image src={img2} alt='image' />
                                <div className='bg-[#141416] w-full h-[103px] flex justify-between items-center px-[27px] py-5 absolute bottom-[0px]
                    '>
                                    <div>
                                        <p>Jane Cooper</p>
                                        <div className='flex items-center gap-1'>
                                            <Image src={diamond} alt='image' />
                                            <p>0.13268</p>
                                        </div>
                                    </div>
                                    <div className='flex items-center gap-[10px]'>
                                        <div className='h-[31px] w-[31px] rounded-full flex items-center justify-center bg-[#23262F]'> <Image src={love} alt='image' /></div>
                                        <div className='h-[31px] w-[31px] rounded-full flex items-center justify-center bg-[#23262F]'> <Image src={share} alt='image' /></div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='w-[326px] h-[414px] relative'>
                                <Image src={img3} alt='image' />
                                <div className='bg-[#141416] w-full h-[103px] flex justify-between items-center px-[27px] py-5 absolute bottom-[0px]
                    '>
                                    <div>
                                        <p>Jane Cooper</p>
                                        <div className='flex items-center gap-1'>
                                            <Image src={diamond} alt='image' />
                                            <p>0.13268</p>
                                        </div>
                                    </div>
                                    <div className='flex items-center gap-[10px]'>
                                        <div className='h-[31px] w-[31px] rounded-full flex items-center justify-center bg-[#23262F]'> <Image src={love} alt='image' /></div>
                                        <div className='h-[31px] w-[31px] rounded-full flex items-center justify-center bg-[#23262F]'> <Image src={share} alt='image' /></div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='w-[326px] h-[414px] relative'>
                                <Image src={img3} alt='image' />
                                <div className='bg-[#141416] w-full h-[103px] flex justify-between items-center px-[27px] py-5 absolute bottom-[0px]
                    '>
                                    <div>
                                        <p>Jane Cooper</p>
                                        <div className='flex items-center gap-1'>
                                            <Image src={diamond} alt='image' />
                                            <p>0.13268</p>
                                        </div>
                                    </div>
                                    <div className='flex items-center gap-[10px]'>
                                        <div className='h-[31px] w-[31px] rounded-full flex items-center justify-center bg-[#23262F]'> <Image src={love} alt='image' /></div>
                                        <div className='h-[31px] w-[31px] rounded-full flex items-center justify-center bg-[#23262F]'> <Image src={share} alt='image' /></div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>

                    </Swiper>
                </div>
            </div>

        </section>
    );
};

export default ToplistSlider;

