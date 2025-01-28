import React, { useState} from 'react'
import { Icon } from "@iconify/react";
import { NavLink} from "react-router-dom";
import {v4 as uuidv4} from "uuid";
import {useDispatch, useSelector } from 'react-redux'
import {buyNow} from '../Redux/Actions';



const TrailDetails = () => {
 

  const dispatch = useDispatch()
  const [message, setMessage]=useState("")
  const [addCart, setAddCart]=useState(true)
  const email = useSelector(state => state.email)
  const name = useSelector(state => state.name)
  const id = useSelector(state => state.id)
  const heading = useSelector(state => state.heading)
  
  
  const category = useSelector(state => state.category)
  const discount = useSelector(state => state.discount)


  const Input = useSelector(state => state.input)
  const input =Input[0];


  const Colour = useSelector(state => state.colour)
  const colour=Colour[0]; 
  const [selectColour, setSelectColour]=useState(colour[0].value)


  const Size = useSelector(state => state.practicesize)
  const size=Size[0]
  const [selectSize, setSelectSize]=useState(size[0].size)

  const [count, setCount]=useState(1);
  const [price, setPrice]=useState(size[0].price);

  const Image = useSelector(state => state.image2)
  const image=Image[0];
  const [picture, setPicture]=useState(image[0].image)

 
  const Rules = useSelector(state => state.rule)
  const rule = Rules[0];

  

  const handleCount =()=>{
    if(count>1){
      setCount(count-1)
    }
    else{
      setCount(1)
    }
  }


const [values, setValues]=useState({
     name:"",
     player_id:"",
})


  const handleAddCart =()=>{
      fetch('http://localhost:5500/addcart', {
        method: 'POST',
        body: JSON.stringify({
          id:id,
          heading:heading,
          discount:discount,
          price:price,
          image:picture,
          colour:selectColour,
          input:[],
          quantity:count,
          size:selectSize,
          category:category,
          email:email,
          name:name,
          player_id:values.player_id,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
})
  .then((response) => response.json())
  .then((json) =>{
    if(json === "Add to cart"){
      setMessage(json)
    }
  });
  }



  const handleBuy =()=>{
      dispatch(buyNow({id, heading, picture, price, selectSize, selectColour, category, discount,count}))
  }

  const handleRemoveCart =()=>{
    setAddCart(true);
    fetch(`http://localhost:5500/delete/cart/${id}`, {
        method: 'DELETE',
      });
  }


  
  return (
        
            <div className='pt-4 lg:pt-24 bg-white'>


            <div className='grid grid-cols-12 mx-auto gap-4 w-full md:w-[80%] lg:w-[65%]'>
    
                <div className='grid col-span-12 md:col-span-6 w-full mx-auto p-3 rounded-lg'>
                  <div className=''>
                    <div className='overflow-hidden hover:shadow-xl'>
                      <img src={picture} alt='image2' className='w-full p-1 h-72 lg:h-96 rounded-lg  transition-all duration-1000'/>
                    </div>
                    <div className='grid grid-cols-12'>
                        {image.map((image) => {
                            return  <div key={uuidv4()} className="overflow-hidden grid col-span-2">
                                    <img onClick={(e)=>{setPicture(image.image)}} src={image.image} alt='' className='w-[94%] mx-auto h-20 hover:scale-125 transition-all duration-1000 rounded'/>
                            </div>
                            })}
                      </div>
                  </div>
                </div>
                
    
                <div className='grid col-span-12 md:col-span-6 mx-auto w-full p-3 rounded-lg'>
                   <h1 className='text-3xl font-bold text-red-500'>{heading}</h1>
                   <div className="flex">
                             <Icon icon="solar:star-bold" width="22px" className="mr-1 mt-1 text-[#FFA500]"/>
                             <Icon icon="solar:star-bold" width="22px" className="mt-1 text-[#FFA500]"/>
                             <Icon icon="solar:star-bold" width="22px" className="mx-1 mt-1 text-[#FFA500]"/>
                             <Icon icon="solar:star-bold" width="22px" className="mt-1 text-[#FFA500]"/>
                             <Icon icon="solar:star-bold" width="22px" className="mx-1 mt-1 text-[#FFA500]"/>

                     </div>
                     <h2 className='text-lg font-semibold  flex'>Price: <span className='text-red-500 px-1'>{price}</span> $</h2>
                    {/* <div className='py-2'>
                        <h1 className='font-semibold'>Colour Family</h1>
                        <form className='flex'>
                        {
                          colour.map((colour)=>{
                              return <div key={uuidv4()}>
                                {
                                  selectColour === colour.value ? <div> <input type='radio' checked onClick={(e)=>{setSelectColour(colour.value);setValues({...values, colour:colour.value})}} name="colour" value={`${colour.value}`} className='mr-1'/><label className='font-semibold mr-2'>{colour.value}</label></div> : <div> <input type='radio' onClick={(e)=>{setSelectColour(colour.value);setValues({...values, colour:colour.value})}} name="colour" value={`${colour.value}`} className='mr-1'/><label className='font-semibold mr-2'>{colour.value}</label></div>
                                }
                            </div>
                             })
                           } 
                        </form>
                    </div> */}
                    <div className=''>

                    {/* <h1 className='font-semibold'>Size</h1>
                       <div className='grid grid-cols-12'>
                            {
                              size.map((size)=>{
                                return <div className='grid col-span-4'>
                                  <NavLink key={uuidv4()} onClick={(e)=>{setPrice(size.price);setSelectSize(size.size)}} className={`border mr-2 my-1 px-3 py-1 text-sm rounded text-center lg:px-5 lg:py-2${selectSize === size.size && "border-b-2 border-red-500"}`}>{size.size}</NavLink>
                                </div>
                              })
                            }
                        </div> */}



                   <div className='py-5'>
                      {
                        rule.map((rule)=>{
                         return <ol key={uuidv4()}>
                            <li className='text-sm text-gray-500 py-1 flex'><Icon icon="ph:circle-fill" width="6px" className='mt-[8px] mr-2'/> {rule.rule}</li>
                          </ol>
                        })
                       } 
                   </div>
                   

                        { <form className='py-2'>
                          {
                            input.map((input)=>{
                              return <div key={uuidv4()} className='py-1'>
                                  <h1 className='font-semibold '>{input.name}</h1>
                                  <input placeholder={input.value} type={input.type} name={input.name} className='focus:outline-none border rounded py-1 px-2' />  
                              </div>
                            })
                          }
                        </form> 
                        }
                    </div>
                    <div className='pt-2 pb-3'>
                      <h1>Player id</h1>
                      <input type='text' placeholder='Player Id' onChange={(e)=>{setValues({...values, player_id:e.target.value})}} className='focus:outline-none border rounded py-1 px-2'/>
                    </div>
                    <div>
                      {
                        message && <h1 className='font-semibold py-2 text-xl'>{message}</h1>
                      }
                    </div>
                    <div>
                         <button onClick={handleCount} className='border p-2 hover:bg-red-500'>-</button>
                         <button className='border p-2'>{count}</button>
                         <button onClick={()=>{setCount(count+1)}} className='border p-2 hover:bg-red-500'>+</button>
                         {
                          addCart ? <button onClick={handleAddCart} className='border px-3 lg:px-5 py-1 lg:py-2 ml-2 lg:ml-4 rounded-md text-white font-semibold bg-red-600'>Add to Card</button> :<button onClick={handleRemoveCart} className='border py-2 px-5 ml-4 rounded-md text-white font-semibold bg-red-600'>Remove From Card</button>
                         }
                         <NavLink to="/payments" onClick={handleBuy} className='border py-1 lg:py-2 ml-2 lg:ml-4 rounded-md bg-black text-white font-semibold px-3 lg:px-5'>Buy Now</NavLink>
                         <hr className='my-4'/>
                    </div>
                    <div className='float-right flex'>
                        <p>Share  : </p>
                        <Icon icon="logos:facebook" width="18px" className="mx-1 mt-1 text-[#FFA500]"/>
                        <Icon icon="logos:whatsapp-icon" width="18px" className="mx-1 mt-1 text-[#FFA500]"/>
                        <Icon icon="skill-icons:instagram" width="18px" className="mx-1 mt-1 text-[#FFA500]"/>
                        <Icon icon="logos:telegram" width="18px" className="mx-1 mt-1 text-[#FFA500]"/>
    
                    </div>
                  <div className='border p-4 rounded-lg'>
                    <h1 className='flex'><Icon icon="icon-park-outline:check-correct" width="18px" className="mx-1 mt-1 text-[#FFA500]"/>100% Guaranteed Service</h1>
                    <h1 className='flex'><Icon icon="ic:outline-lock" width="18px" className="mx-1 mt-1 text-[#FFA500]"/>Safe & Secured Payment</h1>
                  </div>
                  </div>
            </div>
    
            <div className='w-full md:w-[80%] lg:w-[65%] mx-auto  py-10'>
              <div className='p-4 rounded-lg shadow-lg border'>
                <h1 className='font-semibold text-xl'>Description</h1>
                <ul>
                  <li>New exclusive content every week</li>
                  <li>New original film every month</li>
                  <li>Internationally acclaimed dubbed content</li>
                  <li>High-end power-packed original series</li>
                  <li>Ad-Free Content</li>
                  <li>New exclusive content every week</li>
                </ul>
              </div>
    
    
              <div className='grid grid-cols-12 gap-4'>
              <div className='grid col-span-12 p-4 mt-4 h-96 rounded-lg shadow-lg border'>
                <h1 className='text-xl font-semibold'>Customer Reviews</h1>
                <h1 className='text-center text-5xl font-bold'>{5}</h1>
                <div className="flex mx-auto w-28">
                             <Icon icon="solar:star-bold" width="18px" className="mr-1 mt-1 text-[#FFA500]"/>
                             <Icon icon="solar:star-bold" width="18px" className="mt-1 text-[#FFA500]"/>
                             <Icon icon="solar:star-bold" width="18px" className="mx-1 mt-1 text-[#FFA500]"/>
                             <Icon icon="solar:star-bold" width="18px" className="mt-1 text-[#FFA500]"/>
                             <Icon icon="solar:star-bold" width="18px" className="mx-1 mt-1 text-[#FFA500]"/>
                     </div>
                     <p className='text-center'>{1}Review</p>
    
                     <div className="flex"><Icon icon="solar:star-bold" width="16px" className=" mt-1 text-[#FFA500]"/><Icon icon="solar:star-bold" width="16px" className="mt-1 text-[#FFA500]"/><Icon icon="solar:star-bold" width="16px" className=" mt-1 text-[#FFA500]"/><Icon icon="solar:star-bold" width="16px" className="mt-1 text-[#FFA500]"/>
                             <Icon icon="solar:star-bold" width="16px" className=" mt-1 text-[#FFA500]"/>
                             <p className='border bg-red-600 w-full rounded-full ml-[6px] h-4 mt-1 px-4'></p>{0}
                     </div>
                     <div className="flex"><Icon icon="solar:star-bold" width="16px" className=" mt-1 text-[#FFA500]"/><Icon icon="solar:star-bold" width="16px" className="mt-1 text-[#FFA500]"/><Icon icon="solar:star-bold" width="16px" className=" mt-1 text-[#FFA500]"/><Icon icon="solar:star-bold" width="16px" className="mt-1 text-[#FFA500]"/>
                        <Icon icon="ph:star-bold" width="16px" className="mt-1 text-[#FFA500]"/>
                        <p className='border bg-red-500 w-full rounded-full h-4 mt-1 ml-[6px] px-4'></p>{0}
                     </div>
                     <div className="flex"><Icon icon="solar:star-bold" width="16px" className=" mt-1 text-[#FFA500]"/><Icon icon="solar:star-bold" width="16px" className="mt-1 text-[#FFA500]"/><Icon icon="solar:star-bold" width="16px" className=" mt-1 text-[#FFA500]"/><Icon icon="ph:star-bold" width="16px" className="mt-1 text-[#FFA500]"/><Icon icon="ph:star-bold" width="16px" className="mt-1 text-[#FFA500]"/>
                     <p className='border bg-red-400 w-full rounded-full h-4 ml-[6px] mt-1 px-4'></p>{0}
                     </div>
                     <div className="flex"><Icon icon="solar:star-bold" width="16px" className=" mt-1 text-[#FFA500]"/><Icon icon="solar:star-bold" width="16px" className=" mt-1 text-[#FFA500]"/><Icon icon="ph:star-bold" width="18px" className="mt-1 text-[#FFA500]"/><Icon icon="ph:star-bold" width="16px" className="mt-1 text-[#FFA500]"/><Icon icon="ph:star-bold" width="16px" className="mt-1 text-[#FFA500]"/>
                     <p className='border bg-red-300 w-full rounded-full h-4 ml-[6px] mt-1 px-4'></p>{0}
                     </div>
                     <div className="flex"><Icon icon="solar:star-bold" width="16px" className=" mt-1 text-[#FFA500]"/><Icon icon="ph:star-bold" width="16px" className="mt-1 text-[#FFA500]"/><Icon icon="ph:star-bold" width="16px" className="mt-1 text-[#FFA500]"/><Icon icon="ph:star-bold" width="16px" className="mt-1 text-[#FFA500]"/><Icon icon="ph:star-bold" width="16px" className="mt-1 text-[#FFA500]"/>
                            <p className='border bg-red-200 w-full rounded-full ml-[6px] h-4 mt-1 px-4'></p>{0}
                     </div>
                     <h1>{1} REVIEW FOR CHORKI SUBSCRIPTION BD</h1>
    
              </div>
    
              </div>
    
               
    
            </div>
        
                  
           
          
        </div>
       
  )
}

export default TrailDetails
