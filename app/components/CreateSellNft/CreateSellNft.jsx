"use client"
import React from 'react';
import Image from 'next/image';
import avatar from './image/avatar2.png';
import { cardsData } from '@/app/data/data';
import NftCard from '@/app/utils/NftCard';
import Reveals from '../Reveals/Reveals';




const CreateSellNft = () => {
    return (
        <section className='text-white  flex xlg:flex-row space-y-[50px] lg:space-y-0 flex-col justify-start xlg:items-center xlg:justify-center xl:w-[1170px] mx-5 xlg:mx-10 xl:mx-auto max-w-ful'>
            {/* left side */}
            <div className=' '>
                <Reveals>
                <h2>Create and sell <br /> your NFTs</h2>
                </Reveals>
                <Image className='mt-[57px] xlg:ml-[-95px] ' src={avatar} alt='abvtar image' />
            </div>
            {/* card right side */}
            <div className='grid  grid-cols-2 gap-2 xlg:gap-[20px]'>
                {
                    cardsData.map(data => <NftCard key={data.id} data={data} />)
                }
            </div>
        </section>
    );
};

export default CreateSellNft;