import React, { useEffect, useState } from 'react';
import OrderCard from './OrderCard';
import OrderCardMo from './OrderCardMo';

const Order = () => {
    const [data, setData] = useState([])

    const getOrder = async () => {
        const token = localStorage.getItem('token')
        const response = await fetch(`http://localhost:8050/api/get/user/order`, {
            method: 'GET',
            headers: {
                "authorization": token,
                'Content-type': 'application/json; charset=UTF-8',
            },
        });
        const data = await response.json()
        setData(data.items)
    }

    useEffect(() => {
        getOrder()
    }, [])

    return (
        <div className='bg-white min-h-[50vh]'>
            {data && data?.length > 0 ? <div className='bg-white min-h-[50vh]'>
                <div className='hidden md:block w-full overflow-x-auto pt-3'>
                    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 pt-3">
                        <thead className="min-w-[1000px] text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr className='shadow'>
                                <th scope="col" className="pl-4">
                                    <div className="flex items-center">
                                        <input id="checkbox-all-search" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                        <label for="checkbox-all-search" className="sr-only">checkbox</label>
                                    </div>
                                </th>
                                <th scope="col" className="pl-1 py-3">
                                    Product name
                                </th>
                                <th scope="col" className="px-3 py-3">
                                    Image
                                </th>
                                <th scope="col" className="px-3 py-3">
                                    Attribute
                                </th>
                                <th scope="col" className="px-3 py-3">
                                    Price
                                </th>
                                <th scope="col" className="px-3 py-3">
                                    QTy
                                </th>
                                <th scope="col" className="px-3 py-3">
                                    Status
                                </th>
                                <th scope="col" className="px-3 py-3">
                                    Note
                                </th>
                                <th scope="col" className="px-3 py-3 text-right pr-5">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data?.map((item, i) => {
                                    return <OrderCard key={i} item={item} />
                                })
                            }
                        </tbody>
                    </table>
                </div>


                <div className='md:hidden'>
                    {data?.map((item, i) => {
                        return <OrderCardMo key={i} item={item} />
                    })}
                </div>


            </div> : <h1 className='text-center text-lg md:text-3xl font-bold pt-[15vh]'>You don't have any order</h1>}
        </div>
    );
};

export default Order;