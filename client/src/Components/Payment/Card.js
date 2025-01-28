import React, { useState } from 'react'

const Card = ({qty,lebel,value}) => {

    return (
        <div className='grid grid-cols-2'>
            <div className='border-b'><h1 className='font-semibold py-3'>{lebel} {qty ? <span>x {qty}</span>:<span/>}</h1></div>
            <div className='border-b'><h1 className='text-right font-semibold text-red-500 py-3'>{value} Tk</h1></div>
        </div>
    )
}

export default Card
