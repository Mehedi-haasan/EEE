import React from 'react'

const Heading = () => {
    return (
        <div className='grid grid-cols-12 py-3 border-b'>
            <div className='grid col-span-5'>
                <h1 className='font-bold ml-6'>Product</h1>
            </div>
            <div className='grid col-span-7'>
                <div>
                    <div className='grid grid-cols-9 font-bold'>
                        <div className='grid col-span-3'><h1 className='text-center'>Price</h1></div>
                        <div className='grid col-span-3'><h1 className='text-center'>Quantity</h1></div>
                        <div className='grid col-span-3'><h1 className='text-center'>Total</h1></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Heading
