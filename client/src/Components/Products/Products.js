import React from 'react'
import { v4 as uuidv4 } from "uuid";
import ProductCard from './ProductCard';


const Product = ({data}) => {

    return (
        <div className='bg-[#F6F6F6]'>

            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6  mx-auto w-[97%] gap-2 md:gap-4 lg:gap-5 mt-3'>
                {data?.map(({ id, category_id, description, image_url, name, price, standard_price }) => (
                    <div key={uuidv4()} className="grid duration-300 mx-auto border shadow w-full bg-white rounded-lg">
                        <ProductCard id={id} category_id={category_id} description={description} image_url={image_url} name={name} price={price} standard_price={standard_price} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Product
