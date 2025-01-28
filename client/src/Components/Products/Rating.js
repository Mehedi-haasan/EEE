import React, { useEffect, useState } from 'react';
import Star from '../Input/Star';
import Clock from '../Icon/Clock';
import { useSelector } from 'react-redux';


const Rating = ({ id, ratingdata }) => {
    const [values, setValues] = useState({
        product_id: id,
        star: 1,
        comment: ''
    })
    const auth = useSelector((state) => state?.auth?.login)
    const [ratingData, setRatingData] = useState([])
    const data = [1, 2, 3, 4, 5];
    useEffect(() => {
        setValues({ ...values, product_id: id })
    }, [id])
    useEffect(() => {
        if (ratingdata) {
            setRatingData(ratingdata)
        } else {
            setRatingData([])
        }
    }, [ratingData])

    const handleSubmit = async () => {
        const token = localStorage.getItem('token')
        const response = await fetch(`http://localhost:8050/api/create/rating`, {
            method: 'POST',
            headers: {
                "authorization": token,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(values)
        });
        const data = await response.json();
    }

    return (
        <div>
            <div>
                {ratingData.map((item) => {
                    return <div key={item.id} className='my-3'>

                        <div className='flex justify-start items-start gap-2'>
                            <div>
                                <img src='https://cdn-icons-png.flaticon.com/128/149/149071.png' className='h-10 w-10 rounded-full' alt='gjkb' />
                            </div>
                            <div>
                                <h1 className='font-semibold'>{item?.user?.first_name} {item?.user?.last_name}</h1>
                                <div className='flex justify-start items-center gap-1'>
                                    <Clock size='13px' />
                                    <h1 className='text-xs'>5 min ago</h1>
                                </div>
                                <div className='flex justify-start items-center gap-[1px] text-sm mt-1'>
                                    <h1 className='text-sm'>Rating :</h1>
                                    {
                                        data.map((star) => {
                                            return <Star className={`${item.star >= star ? 'text-[#ECBA20]' : ''} cursor-pointer h-3 w-3`} />
                                        })
                                    }
                                </div>
                                <div className='flex justify-start items-center gap-2'>
                                    <h1 className='text-sm'>Comment : </h1>
                                    <p className='text-sm'>{item?.comment}</p>
                                </div>

                            </div>
                        </div>

                    </div>
                })}
            </div>
            {
                auth && <div className='mt-5'>
                    <div className='flex justify-start items-center gap-2 py-2'>
                        <h1 className='font-semibold'>Rating :</h1>
                        {
                            data.map((item) => {
                                return <Star onClick={() => { setValues({ ...values, star: item }) }} id={item} className={`${values.star >= item ? 'text-[#ECBA20]' : ''} cursor-pointer`} />
                            })
                        }
                    </div>
                    <h1 className='font-semibold pb-1'>Enter your comment here</h1>
                    <textarea onChange={(e) => { setValues({ ...values, comment: e.target.value }) }} type={'text'} placeholder={'Enter your comment here'} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:outline-none focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                    <button onClick={handleSubmit} className='border rounded px-4 py-1.5 mt-2 font-semibold'>Submit</button>
                </div>
            }
        </div>
    );
};

export default Rating;