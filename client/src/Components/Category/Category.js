import React, { useState, useEffect } from 'react'
import { v4 as uuidv4 } from "uuid";
import ProductCard from '../Products/ProductCard';
import { useParams } from 'react-router-dom'

const Category = () => {

    const params = useParams()
    const [data, setData] = useState([]);

    const fetchData = async () => {
        const response = await fetch(`http://localhost:8050/api/get/product/templete/by/category/${params.id}`);
        const data = await response.json();
        setData(data?.items);
    }

    useEffect(() => {
        fetchData();
    }, [params.id]);

    const [selectedOption, setSelectedOption] = useState('100 - 500 Tk');

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };

console.log(data);
    return (
        <div className='bg-white'>
            <div className='grid grid-cols-12 w-[97%] md:w-[95%] lg:w-[90%] py-8 gap-8'>
                <div className='col-span-3 ml-5 h-[55vh] hidden lg:block'>
                    <div className='border-b w-[90%] mx-auto'>
                        <h1 className='font-bold py-2'>Filter by Price</h1>
                        <h2 className='font-semibold pb-1'>Select Amount</h2>
                        <div className='grid grid-cols-12 gap-2 pb-2'>
                            <div className='grid col-span-7'>
                                <div>
                                    <select value={selectedOption} onChange={handleOptionChange} className='border focus:outline-none border-red-500 py-1 px-1 rounded'>
                                        <option value="100 - 500 Tk">100 - 500 Tk</option>
                                        <option value="500 - 1000 Tk">500 - 1000 Tk</option>
                                        <option value="1000 - 2500 Tk">1000 - 2500 Tk</option>
                                    </select>
                                </div>
                            </div>
                            <div className='grid col-span-5'><button className='border block float-right py-1 w-[75%] ml-[22%] px-2 font-semibold bg-red-500 text-white rounded'>Filter</button></div>
                        </div>

                    </div>
                    {/* <div className='border-b w-[90%] mx-auto pb-3 '>
                        <h1 className='font-semibold text-lg py-4'>Stock Status</h1>
                        <input type='checkbox' name='name' /> On Sale <br />
                        <input type='checkbox' name='name' /> In Stock
                    </div> */}
                    <div className='w-[90%] mx-auto'>
                        <h1 className='font-semibold text-lg py-3'>Top Rated Products</h1>
                        {
                            data.map((cart) => {
                                return <div key={uuidv4()} className='grid grid-cols-12 gap-2 py-2 border-b rounded mr-4'>
                                    <div className='grid col-span-3'>
                                        <img src={cart.image_url} alt='' className='h-18 w-18 rounded' />
                                    </div>
                                    <div className='grid col-span-9 ml-2'>
                                        <div>
                                            <h1 className=" text-sm font-semibold">{cart.name}</h1>
                                            <h1 className="text-sm text-red-500 font-semibold py-1">Price: {cart.price} Tk</h1>
                                        </div>

                                    </div>
                                </div>

                            })
                        }
                    </div>
                </div>
                <div className=' grid col-span-12 lg:col-span-9'>
                    <div>
                        <h1 className='font-semibold pl-3'>Home / {params?.name}</h1>
                        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mx-auto w-[97%] gap-2 mt-3'>
                            {data.map(({ id, category_id, description, image_url, name, price, standard_price }) => (
                                <div key={uuidv4()} className="grid duration-300 mx-auto border shadow p-2 w-full px-4 bg-white rounded-lg">
                                    <ProductCard key={uuidv4()} id={id} category_id={category_id} description={description} image_url={image_url} name={name} price={price} standard_price={standard_price} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Category

