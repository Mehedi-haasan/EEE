import React, { useState, useEffect } from 'react'
import Product from '../Products/Products'
import { NavLink } from 'react-router-dom'

const Trending_Product = () => {
    const [data, setData] = useState([]);
    const fetchData = async () => {
        const response = await fetch(`http://localhost:8050/api/get/product/trending`)
        const data = await response.json();
        console.log(data);
        setData(data.items);
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className='bg-gray-100 pb-3 lg:pb-5'>
            <div className='flex justify-between items-center py-8 mx-5'>
                <div className='border-b-2 border-red-500'>
                    <h1 className='font-bold text-lg  lg:text-2xl py-1'>TRENDING PRODUCTS</h1>
                </div>
                <div className='border-b-2 border-red-500 '>
                    <NavLink to="/allproduct" className='lg:text-lg font-semibold'>View All Products</NavLink>
                </div>
            </div>
            <Product data={data} />

            {data?.length > 12 && <button className='block border font-semibold rounded-lg py-2 px-5 mx-auto my-5 bg-white'>Load More Product</button>}
        </div>
    )
}

export default Trending_Product
