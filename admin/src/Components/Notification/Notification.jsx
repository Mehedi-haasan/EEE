import React, { useState, useEffect } from 'react';
import NotificationCard from './NotificationCard';

const Notification = () => {
    const [data, setData] = useState([]);
    const getOrder = async () => {
        const token = localStorage.getItem('token')
        const response = await fetch(`http://localhost:8050/api/get/order`, {
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

    console.log(data);
    return (
        <div>
            <h1>Notification</h1>

            {data?.map((item) => {
                return <NotificationCard key={item?.id} item={item} />
            })}
        </div>
    );
};

export default Notification;