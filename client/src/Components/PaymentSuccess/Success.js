import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Invoice from '../Invoice/Invoice';

const Success = () => {

    const params = useParams();
    const [data, setData] = useState([])
    const getOrder = async () => {
        const token = localStorage.getItem('token')
        const response = await fetch(`http://localhost:8050/api/get/user/order/${params.tran_id}`, {
            method: 'GET',
            headers: {
                "authorization": token,
                'Content-type': 'application/json; charset=UTF-8',
            },
        });
        const data = await response.json()
        setData(data.items);
    }

    useEffect(() => {
        getOrder()
    }, [])


    console.log(data);
    return (
        <div className='bg-white flex justify-center items-center'>
            <div className='pb-5'>
                <h1 className='font-semibold py-5 text-center'>Payment Success</h1>
                <Invoice orderData={data || []} />
            </div>
        </div>
    );
};

export default Success;