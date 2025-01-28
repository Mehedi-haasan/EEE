import React from 'react'

const ProductReq = () => {
  return (
    <div className='bg-[#E3EDFD]'>

       <div className='bg-[#E3EDFD] pt-5'>
        <div className='bg-white mx-auto w-[96%] md:w-[70%] lg:w-[50%] py-4 px-6 rounded-lg'>
            <h1 className='text-2xl font-semibold py-2'>product Request</h1>
            <p className='pb-4 pt-1 text-sm'>Out of Stock Product or যে পণ্য আমাদের শপে Available নেই সেই পণ্যের জন্য Request করতে পারেন।</p>
            <hr/>

        </div>
       </div>


      <div className='bg-[#E3EDFD]'>
        <div className='bg-white mx-auto w-[96%] md:w-[70%] lg:w-[50%] my-5 py-5 px-6 rounded-lg shadow'>
            <h1 className='font-semibold py-3'>Product Name with Details (eg: color, quantity, brand)</h1>
            <input placeholder='Your answer' className='focus:outline-none border-b w-[50%] pb-2 pt-2'/>
        </div>
      </div>



      <div className='bg-[#E3EDFD]'>
        <div className='bg-white mx-auto w-[96%] md:w-[70%] lg:w-[50%] my-5 py-5 px-6 rounded-lg shadow'>
            <h1 className='font-semibold'>Product Type</h1>
            <input placeholder='Your answer' className='focus:outline-none border-b w-[50%] pb-2 pt-2'/>
        </div>
      </div>


  
     <div className='bg-[#E3EDFD] pb-5'>
        <div className='bg-white mx-auto w-[96%] md:w-[70%] lg:w-[50%] py-5 px-6 rounded-lg shadow'>
            <h1 className='font-semibold'>Phone Number</h1>
            <input placeholder='Your answer' className='focus:outline-none border-b w-[50%] pb-3 pt-2'/>
        </div>
      </div>

      <div className='bg-[#E3EDFD] pb-5'>
        <div className=' mx-auto w-[96%] md:w-[70%] lg:w-[50%] rounded-lg'>
            <button className='font-semibold border rounded-md py-2 px-6 bg-[#147FEE] text-white'>Submit</button> <button className='float-right text-[#147FEE] font-semibold'>Clear form</button>
            <p className='py-1 text-sm'>Never submit passwords through Google Forms.</p>
        </div>
      </div>

    </div>
  )
}

export default ProductReq
