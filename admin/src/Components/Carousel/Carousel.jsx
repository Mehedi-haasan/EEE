import React, { useEffect, useState } from 'react';
import CarouselCard from './CarouselCard'
import Search from '../../icons/Search';
import Invoice from '../Invoice/Invoice'
import Modal from '../Input/Modal';
import MiniButton from '../Input/MiniButton';
import OrderCard from '../Order/OrderCard'

const Carousel = () => {

    const [data, setData] = useState({});
    const [allData, setAllData] = useState([])
    const [searchData, setSearchData] = useState([]);
    const [show, setShow] = useState(false)

    const SearchProduct = async (e) => {
        e.preventDefault();
        const name = e.target.value
        const token = localStorage.getItem('token')
        if (name) {
            const response = await fetch(`http://localhost:8050/api/get/product/search/${name}`, {
                method: 'GET',
                headers: {
                    'authorization': token,
                },
            });
            const data = await response.json();
            setSearchData(data.items)
        } else {
            setSearchData([]);
        }
    }

    return (
        <div className='bg-white relative'>
            <div className='flex justify-between items-center py-3 px-4'>
                <div>
                    <h1 className='font-semibold'>Sell Product</h1>
                </div>
                <div className='relative border rounded'>
                    <input type='text' placeholder='Enter product name' onChange={SearchProduct} className='px-2 py-1 rounded focus:outline-none' />
                    <Search className='absolute right-1 top-1.5' />
                </div>
            </div>

            <Modal show={show} handleClose={() => { setShow(false) }} className={`w-[500px]`}>
                <div className='flex justify-between items-center py-1'>
                    <h1>Name</h1>
                    <h1>{data?.name}</h1>
                </div>
                <div className='flex justify-between items-center py-1'>
                    <h1>Price</h1>
                    <h1>{data?.price}</h1>
                </div>
                <div className='flex justify-between items-center py-1'>
                    <h1>Qty</h1>
                    <input className='text-right focus:outline-none w-12' onChange={(e) => { setData({ ...data, qty: e.target.value }) }} placeholder={data?.qty} />
                </div>
                <div className='flex justify-end items-center py-1'>
                    <MiniButton name={`Done`} onClick={() => { setAllData([...allData, data]); setData([]); setShow(false) }} />
                </div>
            </Modal>

            <div className='absolute bg-gray-200 top-12 left-0 right-0'>
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 w-full">
                        <tr className='w-full'>
                            <th scope="col" className="px-4 py-3">
                                Product name
                            </th>
                            <th scope="col" className="px-4 py-3">
                                Category
                            </th>
                            <th scope="col" className="px-4 py-3">
                                Cost
                            </th>
                            <th scope="col" className="px-4 py-3">
                                Price
                            </th>
                            <th scope="col" className="px-4 py-3">
                                QTy
                            </th>
                            <th scope="col" className="px-4 py-3 text-right pr-5">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            searchData?.map((product) => {
                                return <CarouselCard key={product?.id} product={product} onClick={() => { setData(product); setSearchData([]); setShow(true) }} />
                            })
                        }


                    </tbody>
                </table>
            </div>

            <Invoice data={allData} />
        </div>
    );
};

export default Carousel;