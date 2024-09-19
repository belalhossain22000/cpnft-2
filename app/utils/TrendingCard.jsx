import React from 'react';
import Image from 'next/image';
import love from '../components/TrendingCategories/image/love.png';
import share from '../components/TrendingCategories/image/share.png';
import diamondBadge from '../components/TrendingCategories/image/diamondbadge2.png'
import blueBadge from '../components/TrendingCategories/image/bluebadge.png';

const TrendingCard = ({ data }) => {
    return (
        <div className=' h-[488p] mx-auto xm:mx-0'>
            <div className='bg-[#23262F] p-2 sm:p-[13px]'>
                <div className='flex items-center gap-2 sm:gap-[13px] pb-[13px]'>
                    <Image src={data?.smallImg1} alt='image' width={102} height={86} />
                    <Image src={data?.smallImg2} alt='image' width={102} height={86} />
                    <Image src={data?.smallImg3} alt='image' width={102} height={86} />
                </div>
                <div className=''>
                    <Image src={data?.largeImg} alt='image' width={336} height={248} />
                </div>
            </div>
            {/* card footer */}
            <div className='bg-[#141416] px-[25px] py-[16px]'>
                <div className='flex items-center justify-between'>
                    <div className='flex items-center gap-[4px]'>
                        <p className='text-[11px] text-[#777E90]'>{data.name}</p>
                        <Image src={blueBadge} alt='image' />
                    </div>
                    <div className='flex items-center gap-2'>
                        <div className='bg-[#23262F] h-[26px] w-[26px] rounded-full flex items-center justify-center gap-2'>
                            <Image src={love} alt='image' />
                        </div>
                        <div className='bg-[#23262F] h-[26px] w-[26px] rounded-full flex items-center justify-center gap-2'>
                            <Image src={share} alt='image' />
                        </div>
                    </div>
                </div>
                <h4>{data.title}</h4>
                <div className='flex items-center justify-between'>
                    <div className='flex items-center gap-1'>
                        <div>
                            <Image src={diamondBadge} alt='image' />
                        </div>
                        <p>{data?.ethNum}</p>
                    </div>
                    <button className='text-[13px] custom-button font-medium px-[19px] py-[6px] border-[#777E90] border-[1.5px] rounded-[95px]'>Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default TrendingCard;