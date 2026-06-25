import { CircleCheckBig } from 'lucide-react';
import React from 'react';

const DaisyPricingFeatures = ({feature}) => {
    return (
        <div>
            <p className='flex items-center gap-2'><CircleCheckBig className='text-green-300'></CircleCheckBig>{feature}</p>
        </div>
    );
};

export default DaisyPricingFeatures;