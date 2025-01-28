import React, { useState, useEffect } from 'react'
import ProductCard from '../Products/ProductCard';


const HotSale = () => {
    const [data, setData] = useState([]);
    const fetchData = async () => {
        const response = await fetch(`http://localhost:8050/api/get/hotsale`)
        const data = await response.json();
        setData(data.items);
    }

    useEffect(() => {
        fetchData();
    }, []);


    return (
        <div className='bg-[#313CBF] rounded'>
            <h1 className='font-bold text-white p-2 text-2xl'>Hot Sale</h1>
            <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 2xl:grid-cols-6  mx-auto w-[99%] gap-2 mt-1 pb-2'>
                {data.map(({ id, template_id, product_template }) => {
                    return <ProductCard id={product_template?.id} category_id={product_template?.category_id} description={product_template?.description} image_url={product_template?.image_url} name={product_template?.name} price={product_template?.price} standard_price={product_template?.price} />
                })}
            </div>

        </div>
    )
}

export default HotSale
