import React, { useState,useEffect } from 'react'
import {v4 as uuidv4} from "uuid";
import WatchCard from './WatchCard';
import Practice from '../Practice/Practice';
import { NavLink } from 'react-router-dom';


const Watch = () => {





  const data =[
    {
     id:1,
     discount:5,
     heading:"Men slim t-shirt",
     price:550,
     stock:"In Stock",
     image:[
            {
             image:"https://img.freepik.com/premium-photo/realistic-t-shirt-mockup-featuring-model-wearing-it-showcasing-how-design-looks-when-worn_911620-9046.jpg",
            },
            {
              image:"https://img.freepik.com/premium-photo/ecommerce-photo-black-tshirt-man_969419-953.jpg",
            },
            {
              image:"https://img.freepik.com/premium-photo/generative-ai-tshirt-design-people-concept-close-up-young-man-blank-black-tshirt-sh_934909-5170.jpg",
            },
            {
              image:"https://img.freepik.com/free-photo/black-t-shirt-with-word-kiri-1-it_1340-37795.jpg",
            }
     ],
     colour:[
         {
             colour:"Red",
             type:"colour",
             value:"Red",
 
         },
         {
             colour:"Yellow",
             type:"colour",
             value:"Yellow",
 
         },
         {
             colour:"White",
             type:"colour",
             value:"White",
 
         },
         {
             colour:"Black",
             type:"colour",
             value:"Black",
 
         },
     ],
     size:[
         {
             size:"S",
             price:35
         },
         {
             size:"M",
             price:60,
         },
         {
             size:"L",
             price:75,
         },
         {
             size:"X",
             price:100
         },
     
     ],
     input:[
         {
             name:"Name",
             type:"text",
             placeholder:"Enter your name"
         },
         {
             name:"Email",
             type:"email",
             placeholder:"Enter your email"
         }
     ],
     rules:[
         {
             rule:"Maximum Login 1 Device",
         },
         {
             rule:"Streaming from one device at a time",
         },
         {
             rule:"If you want to change the device you have to logout from previous device then login new device",
         },
         {
             rule:"Video Quality: Ultra-HD (up to 4k)",
         },
     ],
     rating:4,
     category:"T-Shirt",
    },
    {
     id:2,
     discount:5,
     heading:"Women slim t-shirt",
     price:550,
     stock:"In Stock",
     image:[
            {
             image:"https://img.freepik.com/premium-photo/white-tshirt-mockup-boy-girl-woman-man-2023-photo-only_873925-1460.jpg",
            },
            {
              image:"https://img.freepik.com/premium-photo/child-kid-tshirt-template-with-yellow-green-red-orange-grey-tshirt-design-with-white-background_873925-127049.jpg",
            },
            {
              image:"https://img.freepik.com/premium-photo/tshirt-mockup_925962-877.jpg",
            },
            {
              image:"https://img.freepik.com/free-photo/woman-wearing-white-t-shirt-stands-front-garage-door_1340-42568.jpg",
            }
     ],
     colour:[
         {
             colour:"Red",
             type:"colour",
             value:"Red",
 
         },
         {
             colour:"Yellow",
             type:"colour",
             value:"Yellow",
 
         },
         {
             colour:"White",
             type:"colour",
             value:"White",
 
         },
         {
             colour:"Black",
             type:"colour",
             value:"Black",
 
         },
     ],
     size:[
         {
             size:"S",
             price:35
         },
         {
             size:"M",
             price:60,
         },
         {
             size:"L",
             price:75,
         },
         {
             size:"Xl",
             price:100
         },
     ],
     input:[
         {
             name:"Name",
             type:"text",
             placeholder:"Enter your name"
         },
         {
             name:"Email",
             type:"email",
             placeholder:"Enter your email"
         }
     ],
     rules:[
         {
             rule:"Maximum Login 1 Device",
         },
         {
             rule:"Streaming from one device at a time",
         },
         {
             rule:"If you want to change the device you have to logout from previous device then login new device",
         },
         {
             rule:"Video Quality: Ultra-HD (up to 4k)",
         },
     ],
     rating:4,
     category:"T-Shirt",
    },
    {
     id:3,
     discount:5,
     heading:"Smart Watch",
     price:2499,
     stock:"In Stock",
     image:[
            {
             image:"https://img.freepik.com/premium-photo/standard-extended-generic-modern-smart-wearable-watch-wide-banner-with-blank-screen-mockup_870512-2242.jpg",
            },
            {
              image:"https://img.freepik.com/premium-photo/generic-smartwatches-isolated-colorfull-background-3d-illustration_960782-6400.jpg",
            },
            {
              image:"https://img.freepik.com/premium-photo/generic-smartwatches-isolated-colorfull-background-3d-illustration_960782-6375.jpg",
            },
            {
              image:"https://img.freepik.com/premium-photo/generic-smartwatches-isolated-colorfull-background-3d-illustration_960782-6349.jpg",
            }
     ],
     colour:[
         {
             colour:"Red",
             type:"colour",
             value:"Red",
 
         },
         {
             colour:"Yellow",
             type:"colour",
             value:"Yellow",
 
         },
         {
             colour:"White",
             type:"colour",
             value:"White",
 
         },
         {
             colour:"Black",
             type:"colour",
             value:"Black",
 
         },
     ],
     size:[
         {
             size:"25 Diamonds",
             price:35
         },
         {
             size:"50 Diamonds",
             price:60,
         },
         {
             size:"115 Diamonds",
             price:75,
         },
         {
             size:"300 Diamonds",
             price:100
         },
         {
             size:"1200 Diamonds",
             price:400,
         },
         {
             size:"Lavel Up Pass",
             price:750
         },
     ],
     input:[
         {
             name:"Name",
             type:"text",
             placeholder:"Enter your name"
         },
         {
             name:"Email",
             type:"email",
             placeholder:"Enter your email"
         }
     ],
     rules:[
         {
             rule:"Maximum Login 1 Device",
         },
         {
             rule:"Streaming from one device at a time",
         },
         {
             rule:"If you want to change the device you have to logout from previous device then login new device",
         },
         {
             rule:"Video Quality: Ultra-HD (up to 4k)",
         },
     ],
     rating:4,
     category:"Watch",
    },
    {
     id:1,
     discount:5,
     heading:"Pubg Top Up",
     price:500,
     stock:"In Stock",
     image:[
            {
             image:"https://img.freepik.com/premium-photo/galaxy-background_728173-574.jpg",
            },
            {
              image:"https://img.freepik.com/premium-photo/game-thrones-statue-man-with-sword-center-image_900321-52174.jpg",
            },
            {
              image:"https://img.freepik.com/premium-photo/sniper-rifle-hidde-visual-compose_960020-21.jpg",
            },
            {
              image:"https://img.freepik.com/premium-photo/future-robotic-army-warfare_592197-214.jpg",
            }
     ],
     colour:[
         {
             colour:"Red",
             type:"colour",
             value:"Red",
 
         },
         {
             colour:"Yellow",
             type:"colour",
             value:"Yellow",
 
         },
         {
             colour:"White",
             type:"colour",
             value:"White",
 
         },
         {
             colour:"Black",
             type:"colour",
             value:"Black",
 
         },
     ],
     size:[
         {
             size:"25 Diamonds",
             price:35
         },
         {
             size:"50 Diamonds",
             price:60,
         },
         {
             size:"115 Diamonds",
             price:75,
         },
         {
             size:"300 Diamonds",
             price:100
         },
         {
             size:"1200 Diamonds",
             price:400,
         },
         {
             size:"Lavel Up Pass",
             price:750
         },
     ],
     input:[
         {
             name:"Name",
             type:"text",
             placeholder:"Enter your name"
         },
         {
             name:"Email",
             type:"email",
             placeholder:"Enter your email"
         }
     ],
     rules:[
         {
             rule:"Maximum Login 1 Device",
         },
         {
             rule:"Streaming from one device at a time",
         },
         {
             rule:"If you want to change the device you have to logout from previous device then login new device",
         },
         {
             rule:"Video Quality: Ultra-HD (up to 4k)",
         },
     ],
     rating:4,
     category:"Game",
    },
    {
     id:78,
     discount:5,
     heading:"Pubg Top Up",
     price:550,
     stock:"In Stock",
     image:[
            {
             image:"https://img.freepik.com/free-photo/colorful-knitted-bag-still-life_23-2150709519.jpg",
            },
            {
              image:"https://img.freepik.com/free-photo/knitted-bag-bench-still-life_23-2150709487.jpg",
            },
            {
              image:"https://img.freepik.com/free-photo/close-up-knitted-bag-still-life_23-2150709647.jpg",
            },
            {
              image:"https://img.freepik.com/free-photo/close-up-knitted-bag-still-life_23-2150709523.jpg",
            }
     ],
     colour:[
         {
             colour:"Red",
             type:"colour",
             value:"Red",
 
         },
         {
             colour:"Yellow",
             type:"colour",
             value:"Yellow",
 
         },
         {
             colour:"White",
             type:"colour",
             value:"White",
 
         },
         {
             colour:"Black",
             type:"colour",
             value:"Black",
 
         },
     ],
     size:[
         {
             size:"25 Diamonds",
             price:35
         },
         {
             size:"50 Diamonds",
             price:60,
         },
         {
             size:"115 Diamonds",
             price:75,
         },
         {
             size:"300 Diamonds",
             price:100
         },
         {
             size:"1200 Diamonds",
             price:400,
         },
         {
             size:"Lavel Up Pass",
             price:750
         },
     ],
     input:[
         {
             name:"Name",
             type:"text",
             placeholder:"Enter your name"
         },
         {
             name:"Email",
             type:"email",
             placeholder:"Enter your email"
         }
     ],
     rules:[
         {
             rule:"Maximum Login 1 Device",
         },
         {
             rule:"Streaming from one device at a time",
         },
         {
             rule:"If you want to change the device you have to logout from previous device then login new device",
         },
         {
             rule:"Video Quality: Ultra-HD (up to 4k)",
         },
     ],
     rating:4,
     category:"Ladies",
    },
    {
     id:1,
     discount:5,
     heading:"Netflix Subscription",
     price:550,
     stock:"In Stock",
     image:[
            {
             image:"https://img.freepik.com/free-photo/black-gold-wheel-with-hmm-it_1340-24275.jpg",
            },
            {
              image:"https://cdn-images-1.medium.com/max/1200/1*A6kkoOVJVpXPWewg8axc5w.png",
            },
            {
              image:"https://cdn-images-1.medium.com/max/1200/1*A6kkoOVJVpXPWewg8axc5w.png",
            },
            {
              image:"https://img.freepik.com/free-photo/black-t-shirt-with-word-kiri-1-it_1340-37795.jpg",
            }
     ],
     colour:[
         {
             colour:"Red",
             type:"colour",
             value:"Red",
 
         },
         {
             colour:"Yellow",
             type:"colour",
             value:"Yellow",
 
         },
         {
             colour:"White",
             type:"colour",
             value:"White",
 
         },
         {
             colour:"Black",
             type:"colour",
             value:"Black",
 
         },
     ],
     size:[
         {
             size:"1 Month",
             price:120
         },
         {
             size:"2 Month",
             price:210,
         },
         {
             size:"3 Month",
             price:340,
         },
     ],
     input:[
         {
             name:"Name",
             type:"text",
             placeholder:"Enter your name" 
         },
         {
             name:"Email",
             type:"email",
             placeholder:"Enter your email"
         }
     ],
     rules:[
         {
             rule:"Maximum Login 1 Device",
         },
         {
             rule:"Streaming from one device at a time",
         },
         {
             rule:"If you want to change the device you have to logout from previous device then login new device",
         },
         {
             rule:"Video Quality: Ultra-HD (up to 4k)",
         },
     ],
     rating:4,
     category:"Subscription",
    }   
 ]

 const [selectedOption, setSelectedOption] = useState('100 - 500 Tk');
 const [filterData, setFilterData]=useState(data)

 const handleFilter =()=>{
    if(selectedOption === '100 - 500 Tk'){
        const data = filterData.filter((item)=>item.price > 100 && item.price <= 500)
        setFilterData(data)
    }
    if(selectedOption === '500 - 1000 Tk'){
        const data = filterData.filter((item)=>item.price > 500 && item.price <= 1000)
        setFilterData(data)
    }
    if(selectedOption === '1000 - 2500 Tk'){
        const data = filterData.filter((item)=>item.price > 1000 && item.price <= 2500)
        setFilterData(data)
    }
 }

 const handleOptionChange = (event) => {
   setSelectedOption(event.target.value);

 };

  return (
    <div className='bg-white'>
       <div className='grid grid-cols-12 w-[97%] md:w-[95%] lg:w-[90%] py-8 gap-8'>
            <div className=' grid col-span-3 ml-5 h-[55vh] hidden lg:block'>
             <div className='w-[90%] mx-auto'>
              <h1 className='font-bold py-2 text-md'>Filter by Price</h1>


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
              <div className='grid col-span-5'><button onClick={handleFilter} className='border block float-right py-1 w-[75%] ml-[22%] px-2 font-semibold bg-red-500 text-white rounded'>Filter</button></div>
              </div>
          
              
              
             </div>
             <div className='border-b w-[90%] mx-auto pb-3'>
              <h1 className='font-semibold text-lg py-2'>Stock Status</h1> 
              <input type='checkbox' name='name'/> On Sale <br/>
              <input type='checkbox' name='name'/> In Stock
             </div>
             <div className='w-[90%] mx-auto'>
              <h1 className='font-semibold text-lg py-3'>Top Rated Products</h1> 
              {
                filterData.filter((item)=> item.category === "T-Shirt").map((cart)=>{
                return <div key={uuidv4()} className='grid grid-cols-12 gap-3 py-2 border-b rounded mr-4'>
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
              <h1 className='font-semibold pl-3'>Home / Watch</h1>
                <div className='grid grid-cols-12 mx-auto  gap-2 mt-3'>
                   {data.map(({id,discount,image,colour,input,size,heading,stock,price,rule,category}) => (
                        <div key={uuidv4()} className="grid col-span-6 bg-white md:col-span-4 lg:col-span-4 xl:col-span-3 duration-300 mx-auto border shadow p-4 w-full px-4 rounded-lg">
                        <WatchCard id={id}  discount={discount} image={image} input={input} colour={colour} category={category} rules={rule} size={size} heading={heading} stock={stock} price={price}/>
                        </div>
                    ))}
                </div>
              </div>
            </div>
       </div>
    </div>
  )
}

export default Watch
