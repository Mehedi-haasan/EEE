import React, { useState,useEffect } from 'react'
import {v4 as uuidv4} from "uuid";
import TrailCard from './TrailCard';





const Practice = () => {


  
  const url="http://localhost:5000/test1";
  const [data, setData]=useState([]);
 
  
  const fetchData=async(url)=>{
    const response = await fetch(url);
    const data = await response.json();
    setData(data);    
  }

  useEffect(()=>{
    fetchData(url);
  },[]);


  const [selectedOption, setSelectedOption] = useState('100 - 500 Tk');

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className='bg-white'>
    <div className='grid grid-cols-12 w-[97%] md:w-[95%] lg:w-[90%] py-8 gap-8'>
         <div className=' grid col-span-3 ml-5 h-[55vh] hidden lg:block'>
          <div className='w-[90%] mx-auto'>
           <h1 className='font-bold py-2'>Filter by Price</h1>
           <h2 className='font-semibold pb-1'>Select Amount</h2>
              <div className='grid grid-cols-12 gap-2 pb-2'>
              <div className='grid col-span-7'>
                <div>
                  <select value={selectedOption} onChange={handleOptionChange} 
                    className='border focus:outline-none border-red-500 py-1 px-1 rounded'>
                    <option value="100 - 500 Tk">100 - 500 Tk</option>
                    <option value="500 - 1000 Tk">500 - 1000 Tk</option>
                    <option value="1000 - 2500 Tk">1000 - 2500 Tk</option>
                  </select>
                </div>
              </div>
              <div className='grid col-span-5'><button className='border block float-right py-1 w-[75%] ml-[22%] px-2 font-semibold bg-red-500 text-white rounded'>Filter</button></div>
              </div>
           
          </div>
          <div className='border-b w-[90%] mx-auto pb-3'>
           <h1 className='font-semibold text-lg py-4'>Stock Status</h1> 
           <input type='checkbox' name='name'/> On Sale <br/>
           <input type='checkbox' name='name'/> In Stock
          </div>
          <div className='w-[90%] mx-auto'>
           <h1 className='font-semibold text-lg py-3'>Top Rated Products</h1> 
           {
             data.filter((item)=> item.category === "T-Shirt").map((cart)=>{
             return <div key={uuidv4()} className='grid grid-cols-12 gap-2 py-2 border-b rounded mr-4'>
                         <div className='grid col-span-3'>
                         <img src={cart.image[0].image} alt='' className='h-20 w-20 rounded'/>
                         </div>
                         <div className='grid col-span-9'>
                         <div>
                             <h1 className=" text-sm font-semibold">{cart.heading}</h1>
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
           <h1 className='font-semibold pl-3'>Home / Accessories</h1>
             <div className='grid grid-cols-12 mx-auto  gap-2 mt-3'>
                {data.map(({id,discount,image,colour,input,size,heading,stock,price,rules,category}) => (
                     <div key={uuidv4()} className="grid col-span-6 bg-white md:col-span-4 lg:col-span-4 xl:col-span-3 duration-300 mx-auto border shadow-lg p-4 w-full px-4 rounded-lg">
                     <TrailCard id={id}  discount={discount} image={image} input={input} colour={colour} category={category} rules={rules} size={size} heading={heading} stock={stock} price={price}/>
                     </div>
                 ))}
             </div>
           </div>
         </div>
    </div>
 </div>
  )
}

export default Practice
