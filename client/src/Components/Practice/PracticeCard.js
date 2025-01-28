import { Icon } from "@iconify/react";
import { useDispatch} from 'react-redux'
import { addImage, sendColour, sendData, sendInput, sendSize,PracticeSize,sendrULES} from '../Redux/Actions';
import { useNavigate } from 'react-router-dom';




const PracticeCard = ({id, heading, image, input, colour, size, price, rating, stock, category, discount,rules}) => {
  
  const dispatch = useDispatch();
  const details = useNavigate();

  

  const handleDetails =()=>{
     dispatch(sendData({id, heading, price, rating, stock, category, discount}));
    dispatch(addImage({image}))
    dispatch(sendColour({colour}))
    dispatch(sendSize({size}))
    dispatch(sendrULES({rules}))
    dispatch(sendInput({input}))
    dispatch(PracticeSize({size}));
    details("/PracriceDetailsCard");
  }

  return (
         <div className='w-full '>
                 <div>{discount && <button className='px-2 rounded-full mb-1 bg-red-500 text-white'>{discount}%</button>}</div>
                 <div className='overflow-hidden'>
                    <img src={image[0].image} alt='image4' className='w-full h-48 lg:h-56 rounded-md hover:scale-125 transition-all duration-1000 cursor-pointer'/>
                 </div>
                 <h1 className='font-bold my-2 text-xl'>{heading}</h1>
                
                 <div className="flex text-right float-right mt-1">
                      <Icon icon="solar:star-bold" width="20px" className="text-[#FFA500]"/>
                      <Icon icon="solar:star-bold" width="20px" className="text-[#FFA500]"/>
                      <Icon icon="solar:star-bold" width="20px" className="text-[#FFA500]"/>
                      <Icon icon="solar:star-bold" width="20px" className="text-[#FFA500]"/>
                      <Icon icon="solar:star-bold" width="20px" className="text-[#FFA500]"/>
                 </div>
                 <h2 className='text-lg mb-1 hover:text-red-500 font-bold'>Price: {price}$</h2>
                 {
                  stock ? <h3 className='mt-1 font-semibold text-lg flex'><Icon icon="icon-park-solid:correct" className='mt-1 mr-1 text-red-500'/> In Stock</h3>:<h3 className='mt-1 font-semibold'>Out of Stock</h3>
                 }
                 
           
              <div>
                
                   <button onClick={handleDetails} className='border font-semibold px-2 py-2 text-white bg-[#ECBA20] rounded-lg block w-full mx-auto text-center'>Details</button> 
                
              </div>

           
        </div>
  )
}

export default PracticeCard

