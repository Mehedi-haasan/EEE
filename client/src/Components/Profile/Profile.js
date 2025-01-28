import React from "react";
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import InputComponent from '../Input/InputComponent'
import { IsLogin } from "../../Redux/slices/authSlice";




const Profile = () => {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state?.auth?.authData)


  const handleLogOut = () => {
    localStorage.setItem('token', null);
    dispatch(IsLogin(false))
  }



  return (
    <div className="bg-white">
      <div className="w-[90%] mx-auto py-10">

        <div className="grid grid-cols-12 gap-5">

          <div className="grid col-span-12 lg:col-span-4 bg-gray-100 rounded font-semibold">
            <div>
              <h1 className="text-2xl px-5 font-bold py-5">My Account</h1>
              <div className="mx-4">
                <div className="w-full border" />
              </div>
              <div className="hover:bg-gray-200 border mx-4 rounded py-1 px-6 my-2">
                <NavLink to={`/order`} >Orders</NavLink>
              </div>
              <div className="hover:bg-gray-200 border mx-4 rounded py-1 px-6 my-2">
                <NavLink to="/edit/profile" >Edit Profile</NavLink>
              </div>
              <div className="hover:bg-gray-200 border mx-4 rounded py-1 px-6 text-red-500 my-2">
                <NavLink to={`/`} onClick={handleLogOut} >LogOut</NavLink>
              </div>
            </div>

          </div>


          <div className=" p-3 grid col-span-12 lg:col-span-8 gap-5 bg-gray-100 rounded-md ">
            <div>
              <div className='bg-white'>
                <div className='pt-10 pb-4'>
                  <h1 className='text-xl md:text-2xl lg:text-4xl font-bold text-center'>My Profile</h1>
                  <div className='bg-white py-10 w-[95%] lg:w-[60%] mx-auto rounded'>

                    <div className='gap-4 bg-white w-[95%] lg:w-[92%] border-2 rounded mx-auto p-4'>
                      <div className=''>
                        <img src={userData?.image_url ? userData?.image_url : 'https://cdn-icons-png.flaticon.com/128/149/149071.png'} alt='' className='h-20 lg:h-28 w-20 lg:w-28 mx-auto rounded-full' />
                      </div>
                      <InputComponent placeholder={userData?.first_name || 'N/A'} onChange={(v) => { }} label={'First Name'} />
                      <InputComponent placeholder={userData?.last_name || 'N/A'} onChange={(v) => { }} label={'Last Name'} />
                      <InputComponent placeholder={userData?.email || 'N/A'} onChange={() => { }} label={'Email Address'} />
                      <InputComponent placeholder={userData?.username || 'N/A'} onChange={() => { }} label={'Phone'} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
};

export default Profile;

