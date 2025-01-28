import React, { useEffect, useState } from 'react'
import { Icon } from "@iconify/react";
import { useParams } from "react-router-dom";
import TKicon from '../Input/TKicon';
import Loadingicon from '../Input/Loadingicon';
import ProductDescription from '../Products/ProductDescription'
import Rating from '../Products/Rating';

const FeedBack = () => {
    const params = useParams();
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)


    const fetchData = async () => {
        setLoading(true)
        const response = await fetch(`http://localhost:8050/api/get/single/product/variant/${params.id}`)
        const data = await response.json();
        setData(data.items[0])
        setLoading(false)
    }

    useEffect(() => {
        fetchData();
    }, [params.id])


    return (
        <div className='pt-6 lg:pt-20 bg-white'>



            {
                loading ? <div className='flex justify-center items-center '>
                    <Loadingicon size={50} />
                </div> : <div>
                    {
                        !loading && <div>
                            <div className='grid grid-cols-12 mx-auto gap-2 lg:gap-4 w-full md:w-[80%] lg:w-[65%]'>
                                <div className='grid col-span-12 md:col-span-6 w-full mx-auto p-3 rounded-lg '>
                                    <div className='overflow-hidden'>
                                        <img src={data?.image_url} alt='image2' className='w-full mx-auto p-1 h-72 lg:h-96 rounded-lg transition-all duration-1000' />
                                    </div>
                                </div>


                                <div className='grid col-span-12 md:col-span-6 mx-auto w-full p-5 rounded-lg'>
                                    <div>
                                        <div>
                                            <h1 className='text-xl font-bold text-red-500'>{data?.name}</h1>
                                            <div className="flex my-1">
                                                {[1, 2, 3, 4, 5].map((rate) => (
                                                    <Icon icon="iwwa:star-o" width="18px" className={`mr-1 mt-1 ${rate <= 4 ? "text-[#FFA500]" : ""}`} />
                                                ))}

                                            </div>

                                            <div className="flex justify-start items-center">
                                                <h2 className='text-md py-1 pr-1 hover:text-red-500 font-semibold flex'>Price:</h2>


                                                <div className="flex justify-start items-center relative">
                                                    <div className="border-t-[1px] w-10 absolute top-3 border-black" />
                                                    <h1 className="ml-[1px] font-semibold text-red-500">{data?.price}</h1>
                                                    <TKicon className='text-red-500' />
                                                </div>
                                                <div className="border-t-[1px] w-4 mx-1 border-black" />

                                                <div className="flex justify-start items-center">
                                                    <h1 className='font-semibold'>{data?.standard_price}</h1>
                                                    <TKicon />
                                                </div>
                                            </div>


                                            <div className='py-1'>
                                                {
                                                    data?.attributes?.map((att, i) => (
                                                        <div key={i} className='my-2 flex justify-start items-center gap-2'>
                                                            <h1 className='font-semibold'>{att?.name} : </h1>
                                                            <h1>{att?.value}</h1>
                                                        </div>
                                                    ))
                                                }
                                            </div>


                                        </div>

                                    </div>

                                </div>
                            </div>

                            <div className='w-full md:w-[80%] lg:w-[65%] mx-auto  pt-10 pb-5 px-5'>
                                <ProductDescription text={data?.description} />
                            </div>
                            <div className='w-full md:w-[80%] lg:w-[65%] mx-auto  py-4 px-5'>
                                <Rating id={data?.id} ratingdata={data?.ratings} />
                            </div>
                        </div>
                    }
                </div>
            }
        </div>
    );
};

export default FeedBack;