import { NavLink } from "react-router-dom";
import TKicon from "../Input/TKicon";

const ProductCard = ({ id, image_url, name, price, standard_price }) => {

  const discount = parseInt(price) - parseInt(standard_price);
  const dis = discount * 100 / parseInt(price);


  return (
    <div className='w-full p-2 relative rounded-md mx-auto bg-white'>
      { dis > 0 && <button className='px-2 absolute top-1 right-1 z-40 rounded-full mb-1 bg-red-500 text-white'>{parseInt(dis)}%</button>}
      <div className='overflow-hidden'>
        <img src={image_url} alt='image4' className='object-cover mx-auto h-36 md:h-44 lg:h-56 rounded-md hover:scale-125 transition-all duration-1000 cursor-pointer' />
      </div>
      <h1 className='font-semibold py-1 lg:pt-3 text-sm lg:text-md'>{name}</h1>



      <div className="flex justify-start items-center">
        <h2 className='py-1 pr-1 hover:text-red-500 font-semibold flex text-sm lg:text-md'>Price:</h2>


        <div className="flex justify-start items-center relative">
          <div className="border-t-[1px] w-10 absolute top-3 border-black" />
          <h1 className="ml-[1px] text-sm lg:text-md">{price}</h1>
          <TKicon />
        </div>
        <div className="border-t-[1px] w-4 mx-1 border-black" />

        <div className="flex justify-start items-center">
          <h1 className="text-sm lg:text-md">{standard_price}</h1>
          <TKicon className="mb-1" />
        </div>
      </div>


      <div>
        <NavLink to={`/product/details/${id}`} className='border font-semibold px-1 py-1 text-white bg-[#ECBA20] rounded-lg block w-full mx-auto text-center'>Details</NavLink>
      </div>


    </div>
  );
};

export default ProductCard;
