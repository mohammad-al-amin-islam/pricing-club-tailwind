import { ArrowRightIcon } from '@heroicons/react/solid';
import React from 'react';
import Benefit from '../Benefit/Benefit';

const PricingOption = ({ option }) => {
    const { name, price, benefits } = option;
    return (
        <div className='p-5 bg-white rounded-md mt-5 mx-3'>
            <h2 className='text-2xl py-3 bg-indigo-200 rounded'>{name}</h2>
            <p >
                <span className='text-5xl font-bold'>{price}</span>
                <span className='font-bold text-gray text-xl'>/mo</span>
            </p>
            <div>
                <h3 className='text-left text-2xl'>Benefits:</h3>
                {
                    benefits.map(benefit => <Benefit benefit={benefit}></Benefit>)
                }
            </div>
            <button className='flex justify-center w-full items-center bg-indigo-600 mt-5 rounded fw-bold py-3 text-white hover:text-slate-400'>
                Buy Now <ArrowRightIcon className='w-4 h-4 ml-2'></ArrowRightIcon>
            </button>
        </div>
    );
};

export default PricingOption;