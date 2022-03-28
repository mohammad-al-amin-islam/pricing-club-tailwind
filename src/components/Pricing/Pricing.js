import React from 'react';
import PricingOption from '../PricingOption/PricingOption';

const Pricing = () => {
    const deals = [
        { id: 1, name: 'Free', price: 0 },
        { id: 2, name: 'Regular', price: 9.99 },
        { id: 3, name: 'Premium', price: 19.99 }
    ]
    return (
        <div className='bg-indigo-300 mt-5 p-5'>
            <h1 className='text-5xl font-serif text-white'>Best Deal of the town</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque fugiat, voluptatibus numquam animi eius omnis id voluptate? Animi, obcaecati dolores.</p>
            <div className='grid md:grid-cols-3 gap-5'>
                {
                    deals.map(opt => <PricingOption
                        key={opt.id}
                        option={opt}
                    ></PricingOption>)
                }
            </div>
        </div>
    );
};

export default Pricing;