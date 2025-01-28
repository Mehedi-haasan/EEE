
import React, { useState,useEffect } from 'react'
import {v4 as uuidv4} from "uuid";
import PracticeCard from './PracticeCard';





const Practice = () => {


  
  const url="http://localhost:5000/test";
  const [data, setData]=useState([]);
 
  
  const fetchData=async(url)=>{
    const response = await fetch(url);
    const data = await response.json();
    setData(data);    
  }

  useEffect(()=>{
    fetchData(url);
  },[]);


  return (
    <div className='bg-[#F6F6F6]'>
       
        <div className='w-full md:w-[95%] lg:w-[90%] mx-auto'>
            <div className='flex'>
               <h1 className='text-2xl mx-auto font-semibold ml-4 md:ml-0 py-10'>Practice</h1>
            </div>
        </div>
        <div className='grid grid-cols-12 mx-auto w-full md:w-[95%] lg:w-[90%] gap-2 mt-3'>
        {data.map(({id,discount,image,colour,input,size,heading,stock,price,rule,category}) => (
                <div key={uuidv4()} className="grid col-span-6 bg-white md:col-span-4 lg:col-span-4 xl:col-span-3   duration-300 mx-auto border shadow-lg p-4 w-full px-4 rounded-lg">
                  <PracticeCard id={id}  discount={discount} image={image} input={input} colour={colour} category={category} rules={rule} size={size} heading={heading} stock={stock} price={price}/>
                </div>
              ))}
        </div>
    </div>
  )
}

export default Practice
