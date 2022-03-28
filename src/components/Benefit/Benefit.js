import { CheckCircleIcon } from '@heroicons/react/solid';
import React from 'react';

const Benefit = ({ benefit }) => {
    return (
        <div className='flex items-center'>
            <CheckCircleIcon className='h-6 w-6 text-gray-500 mr-3'></CheckCircleIcon>
            <h1 className='text-xl'>{benefit}</h1>
        </div>
    );
};

export default Benefit;