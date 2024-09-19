"use client"
import React from 'react';
import Image from 'next/image';
import Reveals from '../components/Reveals/Reveals';

const NftCard = ({ data }) => {
    return (
        <div className=' xlg:w-[296px] md:h-[304px] px-2 py-2 md:px-[26px] md:py-[26px] hover:bg-[#141416] '>
            <div className={`${data.background} w-[64px] h-[66px] flex justify-center items-center rounded-[8px]`}>
                <Image src={data.image} alt='icon' />
            </div>
            <Reveals>
                <h4 className='mt-[28px] md:text-[20px] font-semibold leading-[31px]'>{data.title}</h4>
            </Reveals>
            <Reveals>
                <p className='mt-[16px] pb-5 md:pb-[40px] leading-[150%] text-[13px] md:text-[16px] text-[#B1B5C3]'>{data.description}</p>
            </Reveals>
        </div>
    );
};

export default NftCard;