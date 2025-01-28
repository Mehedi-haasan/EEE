import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import Loadingicon from '../Input/Loadingicon'
import Card from '../Payment/Card';
import Heading from './Heading';
import CartProducts from './CartProducts';
import SelectionComponent from '../Input/SelectionComponent';
import { addCart } from '../../Redux/slices/CartSlice';

const Cart = () => {
  const dispatch = useDispatch();
  const [state, setState] = useState([])
  const [cartData, setCartData] = useState([])
  const [charge, setCharge] = useState(60);
  const [loading, setLoading] = useState(false)
  const [show, setShow] = useState(false)
  const [total, setTotal] = useState(0)

  const cart = useSelector(state => state?.cart?.data)

  const getState = async () => {
    const response = await fetch(`http://localhost:8050/api/get/state`);
    const data = await response.json();
    setState(data.items);
  }

  useEffect(() => {
    getState();
  }, [])

  useEffect(() => {
    setCartData(cart);
    let total = 0;
    cart?.map((item) => {
      let amount = item.product_product.standard_price * item.qty;
      total = total + amount
    })
    setTotal(total)
    console.log(cart, total)
  }, [cart])




  const handleClick = (value) => {
    let newData = cartData.map(item => {
      if (item.id === parseInt(value.id)) {
        return { ...item, qty: value.value };
      }
      return item;
    });
    setCartData(newData);
    dispatch(addCart(newData))
  };

  const onSelect = (value) => {
    state.filter((item) => {
      if (item.id === parseInt(value)) {
        setCharge(item.charge)
      }
    })
    setShow(false)
  }



  return (
    <div className='bg-white py-2 md:py-4 lg:py-10'>
      {
        loading ? <div className='flex justify-center items-center '>
          <Loadingicon size={50} />
        </div> : <div>
              {
                cart?.length > 0 ? <div className='grid grid-cols-12 gap-3 w-full md:w-[94%] lg:w-[90%] mx-auto'>
                <div className='grid col-span-12 md:col-span-8 xl:col-span-9'>
                  <div className='p-2'>
                    <div className='hidden lg:block'><Heading /></div>
    
                    {
                      cartData.map(({ id, qty, product_product }) => {
                        return <CartProducts id={id} qty={qty} product_product={product_product} onClick={handleClick} />
                      })
                    }
    
                  </div>
                </div>
    
    
                <div className='grid col-span-12 md:col-span-4 xl:col-span-3 rounded'>
                  <div className='p-2'>
                    <div className='bg-white border rounded p-3'>
                      <h1 className='text-3xl py-5 '>Cart Totals</h1>
                      <Card lebel={"Subtotal"} value={total} />
                      <Card lebel={"Delivery Charge"} value={charge} />
                      <div className="flex justify-between items-center">
                        <button onClick={() => { setShow(!show) }} className='ml-auto font-semibold text-red-500'>Change Address</button>
                      </div>
    
                      {
                        show ? <SelectionComponent options={state} label={"State"} onSelect={onSelect} /> : <span />
                      }
    
                      <Card lebel={"Total"} value={total + charge} />
                      <NavLink to={`/payments/${0}/${0}`} className='border block mx-auto rounded text-center py-2 bg-red-500 hover:bg-black font-semibold text-white my-6'>Proceed to Checkout</NavLink>
                    </div>
                  </div>
                </div>
              </div> : <div className='flex justify-center items-center h-[50vh]'>
                <h1 className='text-center'>No Data</h1>
              </div>
              }
        </div>
      }
    </div>
  )
}

export default Cart



