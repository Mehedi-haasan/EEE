import React from 'react'
import { Icon } from "@iconify/react";
import { useState} from "react";
import { NavLink } from 'react-router-dom';
// import RenewSubscription from '../Subscription/RenewSubscription';

const About = () => {

    const [first, setFirst]=useState(true)
    const [second, setSecond]=useState(true)
    const [third, setThird]=useState(true)
    const [forth, setForth]=useState(true)
    const [fifth, setFifth]=useState(true)
    const [sixth, setSixth]=useState(true)
  return (
    <div className='bg-white'>
      <div><img src='https://fatfrogmedia.com/wp-content/uploads/2018/08/selling-online-with-an-ecommerce-store.jpg' alt='sgf' className='h-[550px]'/></div>
      <div className='grid grid-cols-12 mx-4 lg:mx-10 py-8'>

        <div className='grid col-span-12 lg:col-span-6 lg:border-r-2'>
            <h1 className='ml-5'>Information Question</h1>
            <h1 className='text-3xl ml-5 py-2'>Frequently Asked Question</h1>
            <div className='border-t-2 mx-5 py-3'>
                <div className=''>
                {/* className={`lg:flex absolute lg:static transition-all font-bold ease-in duration-700 top-[43px] text-white bg-[#06BACC] lg:hidden w-[50%] h-[100vh] py-3 pr-3 left-0 space-x-2 space-y-2 ${open1 ? "left-0" : "left-[-750px]"}`} */}
                   <h1 onClick={()=>{setFirst(!first)}} className='flex font-semibold hover:text-red-500 cursor-pointer py-2'>Will i receive the same product that i see in the picture<span><Icon icon="ep:arrow-down" className={`transition-transform mt-2 cursor-pointer float-right text-right ml-1 duration-300 ${ first ? "rotate-0" : "rotate-180" }`}/></span></h1> 
                   <div className={`${ first && "hidden"} duration-600`}>
                    <h1 className='text-[#b5b5b5]'>Yes, you will receive same product as picture.</h1>
                    <h1 className='text-[#b5b5b5]'>But sometimes color may vary a little bit because of different type of screen</h1>
                    <h1 className='text-[#b5b5b5]   '>resolutions/device display</h1>
                   </div>
                </div>
            </div>

            <div className='border-t-2 mx-5 py-3'>
                <div className=''>
                   <h1 onClick={()=>{setSecond(!second)}} className='flex font-semibold hover:text-red-500 cursor-pointer py-2'>Where can i view my sales receipt?<span><Icon icon="ep:arrow-down" className={`transition-transform mt-2 cursor-pointer float-right text-right ml-1 duration-300 ${ second ? "rotate-0" : "rotate-180" }`}/></span></h1> 
                   <div className={`${ second && "hidden"}`}>
                    {/* <h1>Where can i view my sales receipt?</h1> */}
                    <h1 className='text-[#b5b5b5]'>After placing an order, you will get an invoice with full order details to your given email </h1>
                    {/* <h1>resolutions/device display</h1> */}
                   </div>
                </div>
            </div>

            <div className='border-t-2 mx-5 py-3'>
                <div className=''>
                   <h1 onClick={()=>{setThird(!third)}} className='flex font-semibold hover:text-red-500 cursor-pointer py-2'>How can i return an item?<span><Icon icon="ep:arrow-down" className={`transition-transform mt-2 cursor-pointer float-right text-right ml-1 duration-300 ${ third ? "rotate-0" : "rotate-180" }`}/></span></h1> 
                   <div className={`${ third && "hidden"}`}>
                    {/* <h1>How can i return an item?</h1> */}
                    <h1 className='text-[#b5b5b5]'>You can only return an item if you find any defect/damage when receiving the item.<br/>
                      You can directly return to that delivery man.</h1>
                    {/* <h1>resolutions/device display</h1> */}
                   </div>
                </div>
            </div>

            <div className='border-t-2 mx-5 py-3'>
                <div className=''>
                   <h1 onClick={()=>{setForth(!forth)}} className='flex font-semibold hover:text-red-500 cursor-pointer py-2'>Will you restock items indicate as "Out of Stock?"<span><Icon icon="ep:arrow-down" className={`transition-transform mt-2 cursor-pointer float-right text-right ml-1 duration-300 ${ forth ? "rotate-0" : "rotate-180" }`}/></span></h1> 
                   <div className={`${ forth && "hidden"}`}>
                    {/* <h1>Will you restock items indicate as "Out of Stock?"</h1> */}
                    <h1 className='text-[#b5b5b5]'>Yes, we restock our sold out/out of stock item on customer demand.</h1>
                    {/* <h1>resolutions/device display</h1> */}
                   </div>
                </div>
            </div>

            <div className='border-t-2 mx-5 py-3'>
                <div className=''>
                   <h1 onClick={()=>{setFifth(!fifth)}} className='flex font-semibold hover:text-red-500 cursor-pointer py-2'>Where can i ship my order?<span><Icon icon="ep:arrow-down" className={`transition-transform mt-2 cursor-pointer float-right text-right ml-1 duration-300 ${ fifth ? "rotate-0" : "rotate-180" }`}/></span></h1> 
                   <div className={`${ fifth && "hidden"}`}>
                    {/* <h1>Where can i ship my order?</h1> */}
                    <h1 className='text-[#b5b5b5]'>Order will deliver to your given address. If your location is not in our service zone <br/> then you need to receive the delivery from courier station.</h1>
                    {/* <h1>resolutions/device display</h1> */}
                   </div>
                </div>
            </div>


            <div className='border-y-2 mx-5 py-3'>
                <div className=''>
                   <h1 onClick={()=>{setSixth(!sixth)}} className='flex font-semibold hover:text-red-500 cursor-pointer py-2'>What payment method do you have?<span><Icon icon="ep:arrow-down" className={`transition-transform mt-2 cursor-pointer float-right text-right ml-1 duration-300 ${ sixth ? "rotate-0" : "rotate-180" }`}/></span></h1> 
                   <div className={`${ sixth && "hidden"}`}>
                   
                    <h1 className='text-[#b5b5b5] py-2'>Currently we have bKash Payment Gateway.<br/>
                       Most safe and secured payment option in Bangladesh.</h1>
                    <h1 className='text-[#b5b5b5] py-1'>Benefit of payment gateway method:</h1>
                    <h1 className='py-2 text-[#b5b5b5]'>You don't need to pay extra fee (for example send money takes 5tk fee, but payment<br/> gateway has no hidden fees)</h1>
                   </div>
                </div>
            </div>
        </div>




        <div className='grid col-span-12 mx-5  lg:col-span-6'>
          <div>
            <h1>Imformation about us</h1>
            <h1 className='text-2xl py-2'>CONTACT US FOR ANY QUESTIONS</h1>
            <h1 className='py-2 text-[#b5b5b5]'>We are Online based Shop in Bangladesh.</h1>
            <h1 className='py-2 text-[#b5b5b5]'>We sell Physical & Digital Quality Products at Cheapest Price Possible.</h1>
            <h1 className='py-2 text-[#b5b5b5]'>Currently we are delivering product over whole Bangladesh.<br/>
               Home delivery & Parcel delivery  is Available.</h1>

            <h1 className='text-xl font-semibold py-6'>Contact us using <NavLink className='text-red-500 font-bold underline'>Live Chat</NavLink> Option</h1>
          </div>
        </div>
      </div>
      {/* <RenewSubscription/> */}
    </div>
  )
}

export default About
