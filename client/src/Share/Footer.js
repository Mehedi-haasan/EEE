import React, { useState, useEffect } from 'react'
import { Icon } from "@iconify/react";
import { NavLink } from 'react-router-dom'
import MessageBar from './MessageBar';


const Footer = () => {


  const [info, setInfo] = useState({});
  const GetCompanyInfo = async () => {
    const token = localStorage.getItem('token')
    const response = await fetch(`http://localhost:8050/api/get/company/info`, {
      method: 'GET',
      headers: {
        'authorization': token,
        'Content-type': 'application/json; charset=UTF-8',
      }
    });
    const data = await response.json();
    setInfo(data?.items)
  }

  useEffect(() => {
    GetCompanyInfo()
  }, [])


  return (
    <div className='bg-white relative'>

      <hr />

      <div className='lg:flex justify-between items-start w-full lg:w-[95%] gap-4 mx-auto pb-5'>

        <div className='mb-6 pb-5 ml-5'>
          <div className='flex py-3 mt-5'>
            <h1 className='font-semibold text-2xl'>{info?.name}</h1>
          </div>
          <p className="pt-1">Name Shop is an Online Shopping Mall .</p>
          <p>in Bangladesh We deliver various types of Unique &</p>
          <p> Quality products all over Bangladesh.</p>


          <div className="mt-">
            <h1 className="font-semibold text-xl py-2">See Our New Updates</h1>
            <div className="flex gap-3">
              <a href={info?.fb_url || "https://www.facebook.com"} target="_blank" rel="noopener noreferrer" className="text-white">
                <Icon icon="logos:facebook" width="27px" />
              </a>
              <a href={info?.wh_url || "https://www.instagram.com"} target="_blank" rel="noopener noreferrer" className="text-white">
                <Icon icon="skill-icons:instagram" width="27px" />
              </a>
              <a href={info?.yu_url || "https://www.youtube.com"} target="_blank" rel="noopener noreferrer" className="text-white">
                <Icon icon="logos:youtube-icon" width="33px" />
              </a>
              <a href={info?.tw_url || "https://www.twitter.com"} target="_blank" rel="noopener noreferrer" className="text-white">
                <Icon icon="skill-icons:twitter" width="27px" />
              </a>
            </div>
          </div>
        </div>


        <div className=' ml-5'>
          <h1 className=' text-2xl text-black font-semibold pt-8 '>Importants</h1>
          <a href='jiuds' className='hover:text-red-500 flex pt-4 pb-1'>Case Study</a>
          <NavLink to="/liveChat" className='hover:text-red-500 flex py-1'>Live chat</NavLink>
          <NavLink to={`/productrequest`} className='hover:text-red-500 flex py-1'>Product Request</NavLink>
          <NavLink to="/privacypolicy" className='hover:text-red-500 flex py-1'>Privacy Policy</NavLink>
        </div>



        <div className='ml-5'>
          <h1 className=' text-2xl font-semibold pt-8'>Offer Box</h1><br />
          <h1 className='text-sm'>Use coupon NEWDAY <br />Get 15/- Discount!</h1>
        </div>


      </div>
      <hr />
      <div className=' w-full md:w-[90%] lg:w-[70%] gap-4 mx-auto'>
        <div><h1 className='py-5 font-medium text-center'>© Copyright 2023 Name Shop | Design and Devolop By Creator</h1></div>
        <div>

        </div>
      </div>
      {/* <MessageBar /> */}


    </div>
  )
}

export default Footer
