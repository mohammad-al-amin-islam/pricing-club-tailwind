import React from 'react';

const PricingOption = ({ option }) => {
    const { name, price } = option;
    return (
        <div className='p-5 bg-white rounded-md mt-5 mx-3'>
            <h2 className='text-2xl py-3 bg-indigo-200 rounded'>{name}</h2>
            <p >
                <span className='text-5xl font-bold'>{price}</span>
                <span className='font-bold text-gray text-xl'>/mo</span>
            </p>
        </div>
    );
};

export default PricingOption;