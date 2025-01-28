import React, { useState, useEffect } from 'react'
import InputComponent from '../Input/InputComponent'
import SelectionComponent from '../Input/SelectionComponent'
import Card from './Card'
import { useParams } from 'react-router-dom'
import { useDispatch ,useSelector} from 'react-redux'
import { cartLength } from '../Redux/Actions'


const Payment = () => {
   const dispatch = useDispatch()
   const auth = useSelector((state) => state?.auth?.login)
   const params = useParams();
   const [data, setData] = useState([])
   const [cartData, setCartData] = useState([])
   const [state, setState] = useState([])
   const [stateLoading, setStateLoading] = useState(false)
   const [total, setTotal] = useState(0)
   const [to, setTo] = useState(0)
   const [deliveryCharge, setDeliveryCharge] = useState(60)
   // const [values, setValues] = useState({
   //    state: 1,
   //    paramsId: params.id,
   //    qty: params.qty,
   // })

   const [values, setValues] = useState({
      name: "",
      state: 1,
      address: "",
      phone: "",
      email: "",
      charge: 60,
      qty: params.qty,
      coupon: "",
      note: "",
      paramsId: params.id,
   });

   const fetchCartData = async () => {
      const token = localStorage.getItem('token')
      const response = await fetch(`http://localhost:8050/api/product/add/to/cart`, {
         method: "GET",
         headers: {
            "authorization": token,
            'Content-type': 'application/json; charset=UTF-8',
         },
      })
      const data = await response.json();
      setCartData(data.items)
      let len = data?.items?.length;
      dispatch(cartLength({ len }))
      if (data.price) {
         setTotal(data.price)
      } else {
         setTotal(0)
      }

   }

   const fetchData = async () => {
      if (parseInt(params.id) === 0) { }
      else {
         const response = await fetch(`http://localhost:8050/api/get/single/product/variant/${params.id}`)
         const data = await response.json();
         setData(data.items);
         console.log(data.items, "dtatvy");
         setTo(data.items[0].standard_price)
      }
   }

   const getState = async () => {
      const response = await fetch(`http://localhost:8050/api/get/state`);
      const data = await response.json();
      setState(data.items)
      setStateLoading(true)
   }


   useEffect(() => {
      if (auth) {
         fetchCartData();
      }
      fetchData();
      getState()
   }, [])

   const onSelect = (value) => {
      setValues({ ...values, state: value })
      state.filter((item) => {
         if (item.id === parseInt(value)) {
            setDeliveryCharge(item.charge)
         }
      })

   }


   const PlaceOrder = async (e) => {
      const token = localStorage.getItem('token')
      const response = await fetch(`http://localhost:8050/api/product/place/order`, {
         method: "POST",
         headers: {
            "authorization": token,
            accept: 'application/json',
            "Content-Type": "application/json"
         },
         body: JSON.stringify(values)
      });
      const data = await response.json();
      console.log(data)

   }


   const CreatePayment = async (e) => {
      e.preventDefault();
      const token = localStorage.getItem('token');

      // Check for required fields
      const requiredFields = ["name", "state", "address", "phone", "email", "charge", "qty"];
      const isAllFieldsPresent = requiredFields.every(field => values[field]);

      if (!isAllFieldsPresent) {
         alert("All required fields must be filled out.");
         return; // Prevent the request if any required field is missing
      }

      console.log("create payment", values);

      const response = await fetch(`http://localhost:8050/api/create/payment`, {
         method: "POST",
         headers: {
            "authorization": token,
            "Content-Type": "application/json"
         },
         body: JSON.stringify(values)
      });

      const data = await response.json();
      console.log(data);
      window.location.replace(data.url);
   };


   return (
      <div className='bg-white'>
         <div className='py-6'>

            <div>
               <div className='grid grid-cols-12  rounded py-5 w-full md:w-[80%] mx-auto'>
                  <div className='grid col-span-12 lg:col-span-6 my-3'>
                     <div className='w-[94%] mx-auto'>
                        <h1 className='text-2xl py-5 font-semibold'>Billing Details</h1>

                        <InputComponent isRequered={true} onChange={(value) => { setValues({ ...values, name: value }) }} label={"Full Name"} placeholder={"Full Name"} type={"text"} />
                        <InputComponent isRequered={true} onChange={(value) => { setValues({ ...values, address: value }) }} label={"Address"} placeholder={"Full Address"} type={"text"} />
                        {stateLoading ? <SelectionComponent options={state} label={"State"} onSelect={onSelect} /> : <span />}
                        <InputComponent isRequered={true} onChange={(value) => { setValues({ ...values, city: value }) }} label={"Town/City"} type={"text"} placeholder={"Town/City"} />
                        <InputComponent isRequered={true} onChange={(value) => { setValues({ ...values, phone: value }) }} label={"Phone"} type={"phone"} placeholder={"Phone"} />
                        <InputComponent isRequered={true} onChange={(value) => { setValues({ ...values, email: value }) }} label={"Email"} type={"email"} placeholder={"Email"} />
                        <InputComponent isRequered={true} onChange={(value) => { setValues({ ...values, coupon: value }) }} label={"Coupon"} type={"text"} placeholder={"Enter your coupon"} />
                        <InputComponent isRequered={true} onChange={(value) => { setValues({ ...values, note: value }) }} label={"Note"} type={"text"} placeholder={"Note"} />

                     </div>
                  </div>


                  <div className='grid col-span-12 lg:col-span-6 my-3'>
                     <div className=' w-[94%] mx-auto'>
                        <h1 className='text-2xl font-bold text-center my-5'>Your Order</h1>

                        {data?.map(({ name, standard_price }) => {
                           return <Card lebel={name} value={standard_price} qty={params.qty} />
                        })}

                        {cartData?.map(({ qty, product_product }) => {
                           return <Card key={product_product?.id} lebel={product_product.name} value={product_product.standard_price} qty={qty} />
                        })}

                        <Card lebel={"Subtotal"} value={total + (to * params?.qty)} />

                        <Card lebel={"Delivery Charge"} value={deliveryCharge} />


                        <Card lebel={"Total"} value={total + (to * params?.qty) + deliveryCharge} />

                        <p className='px-1 py-3 text-sm italic'>Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our privacy policy.</p>
                        <button onClick={CreatePayment} className='block mx-auto py-2 w-full border rounded my-6 font-semibold text-white bg-black hover:bg-red-500'>Payment</button>
                     </div>

                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Payment
