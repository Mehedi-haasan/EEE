import React, { useEffect, useState } from 'react'
import Product from '../Products/Products';

const AllItems = () => {
    const [data, setData] = useState([]);

    const fetchData = async () => {
        const response = await fetch(`http://localhost:8050/api/get/product/templete`);
        const data = await response.json();
        setData(data.items);
    }

    useEffect(() => {
        fetchData();
    }, []);


    return (
        <div className='bg-gray-100'>
            <Product data={data}/>
        </div>
    )
}

export default AllItems
