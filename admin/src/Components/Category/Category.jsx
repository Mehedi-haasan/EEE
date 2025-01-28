import React, { useState } from 'react';
import Search from '../../icons/Search';
import Invoice from '../Invoice/Invoice';

const Category = () => {
    const [data, setData] = useState([])

    return (
        <div className='relative'>
            <div className='flex justify-between items-center py-3 px-4'>
                <div>
                    <h1 className='font-semibold'>Sell Product</h1>
                </div>
                <div className='relative border rounded'>
                    <input type='text' placeholder='Enter invoice number' onChange={()=>{}} className='px-2 py-1 rounded focus:outline-none' />
                    <Search className='absolute right-1 top-1.5' />
                </div>
            </div>

            <Invoice data={data} />
        </div>
    );
};

export default Category;