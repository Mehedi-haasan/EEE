import Banner from './Banner';
import TrendingProduct from '../TrendingProduct/TrandingProduct';
import AllItems from './AllItems';
import Carousel from '../HotSale/HotSale';
import ProductCategory from '../ProductCategory/ProductCategory';
import { NavLink } from 'react-router-dom';


const Home = () => {

  return (
    <div className='mx-auto '>
      <div className='bg-white w-full px-0 md:px-3 lg:px-5'><Banner /></div>

      <div className='bg-white md:px-3 lg:px-5 py-5'>
        <ProductCategory />
      </div>
      <div className='bg-white md:px-3 lg:px-5'>
        <Carousel />
      </div>
      <TrendingProduct />

      <div className='bg-gray-100 py-5'>
        <NavLink to="/allproduct" className='lg:text-lg font-semibold px-6'>All Products</NavLink>
        <AllItems />
      </div>


    </div>
  )
}

export default Home
