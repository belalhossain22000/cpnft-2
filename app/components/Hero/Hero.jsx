"use client"
import React from 'react';
import Image from 'next/image';
import avatarImage from './image/heor-image-2.png'
import diamond from './image/diamondBadge2.svg'
import bitcoin from './image/bitcoin.svg'
import halfCircle from './image/halfCircle2.svg'
import camera from './image/Camera 4.png'
import Reveals from '../Reveals/Reveals';

const Hero = () => {
    return (
        <section className='flex md:flex-row flex-col-reverse items-center justify-between text-white xl:w-[1170px] mx-5 lg:mx-10 xl:mx-auto max-w-ful'>
            {/* left side  */}
            <div>

                <Reveals>
                    <h1 className='lg:mt-32 xm:mt-[40px]'>The Test <br />
                        world of creative & <br />
                        <span style={{
                            background: 'var(--primary-color-gradient, linear-gradient(330deg, #0047FF 0%, #F07 100%))',
                            backgroundClip: 'text',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            fontFamily: 'Righteous, sans-serif', // Provide fallback font in case Righteous is unavailable

                            fontStyle: 'normal',
                            fontWeight: 400,

                            textTransform: 'uppercase',
                        }}>
                            Digital Artwork
                        </span>
                    </h1>
                </Reveals>
                {/* btn */}
                <div className=' mt-[42px] flex items-center gap-6'>
                    <button className='transition-all duration-700 custom-button sm:px-4 px-6  py-4 rounded-[100px] text-[18px] font-medium border-[1px] border-[#FFF] '>Create Now</button>
                    <button className='transition-all duration-700 custom-button-bg sm:px-4 px-6 py-4 rounded-[100px] text-[18px] font-medium'>Explore Now</button>
                </div>
                {/* number section */}
                <div className='flex items-center gap-3 xm:gap-7 lg:my-[107px] my-[50px]'>
                    <Reveals>
                        <div>
                            <h4 className='text-[28px] font-bold leading-8'><span>35</span>k +</h4>
                            <p className='text-[18px] font-normal leading-8 text-[#B1B5C3] '>Unique Artwork</p>
                        </div>
                    </Reveals>

                    <div className='bg-[#350E46] w-[2px] h-[59px]'></div>
                    <Reveals>
                        <div>
                            <h4 className='text-[28px] font-bold leading-8'><span>1.8</span>k +</h4>
                            <p className='text-[18px] font-normal leading-8 text-[#B1B5C3] '>Regular Action</p>
                        </div>
                    </Reveals>
                    <div className='bg-[#350E46] w-[2px] h-[59px]'></div>
                    <Reveals>
                        <div>
                            <h4 className='text-[28px] font-bold leading-8'><span>95</span> +</h4>
                            <p className='text-[18px] font-normal leading-8 text-[#B1B5C3] '>Choosen Artist</p>
                        </div>
                    </Reveals>
                </div>
            </div>

            {/* right side */}
            <div className='relative w-[300px] xm:w-[500px] md:w-[570px]'>
                <Image className='md:w-[570px] h-auto object-cover' src={avatarImage} alt=' avatar image' />
                <Image className='absolute bottom-[43%] left-[-2%]' src={diamond} alt=' avatar image' />
                <Image className='absolute right-[9%] bottom-[12%]' src={bitcoin} alt=' avatar image' />
                <Image className='absolute right-[-6%] xm:right-[3%] md:right-[-6%] top-[27%] w-[100px] xlg:w-[158px]' src={halfCircle}  alt=' avatar image' />
                <Image className='absolute top-0 left-[-14%] -z-10' src={camera} alt='camera image' />
                <Image className='absolute top-[160px] right-[-92px] ' src={camera} alt='camera image' />
            </div>
        </section>
    );
};

export default Hero;
