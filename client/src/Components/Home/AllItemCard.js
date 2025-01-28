import { NavLink } from 'react-router-dom';


const AllItemCart = ({ id, heading, price, image, category }) => {

     return (
          <div className='w-full grid grid-cols-12'>
               <div className='overflow-hidden grid col-span-3'>
                    <img src={image} alt='image4' className='h-20  w-20 rounded-md hover:scale-125 transition-all duration-1000 cursor-pointer' />
               </div>

               <div className="grid col-span-9 ml-3 lg:ml-5">
                    <div>
                         <NavLink className='font-semibold hover:text-red-500 mt-2 text-md text-gray-700'>{heading}</NavLink>
                         <p className='text-sm text-red-500 flex'>Price:<span className="text-red-500 text-sm lg:text-md pl-1">{price} $</span></p>
                    </div>
               </div>
          </div>
     )
}

export default AllItemCart

