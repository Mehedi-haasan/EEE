import React from 'react'

const ProductDescription = ({ text }) => {
    return (
        <div className='p-4 rounded-lg  border'>
            <h1 className='font-semibold text-xl'>Description</h1>
            <div
                className="rich-text-content"
                dangerouslySetInnerHTML={{ __html: text }}
            />
   
        </div>
    )
}

export default ProductDescription
