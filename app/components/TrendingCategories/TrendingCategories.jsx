"use client"
import { trendingData } from '@/app/data/data';
import TrendingCard from '@/app/utils/TrendingCard';
import React from 'react';
import Reveals from '../Reveals/Reveals';


const TrendingCategories = () => {
    return (
        <section className='text-white mt-[134px] xl:w-[1170px] mx-5 lg:mx-10 xl:mx-auto max-w-ful'>
            {/* heading and button */}
            <div className='flex items-center justify-between'>
                <Reveals>
                    <h2 className='text-[#FCFCFD] '>Trending <br />
                        in  all categories</h2>
                </Reveals>
                <button className='bg-[#23262F] transition-all duration-700 custom-button rounded-[100px] text-[18px] font-normal md:px-[36px] px-[18px] py-[10px]'>View All</button>
            </div>
            {/* card side  */}
            <div className='grid-container  xl:gap-[50px] gap-5 mt-10  xlg:mt-[68px]'>
                {
                    trendingData?.map(data => <TrendingCard key={data?.id} data={data} />)
                }
            </div>
        </section>
    );
};

export default TrendingCategories;