import { NavLink, useNavigate } from 'react-router-dom';
import React, { useState } from 'react'
import InputComponent from '../Input/InputComponent'
import { useDispatch } from 'react-redux';
import { IsLogin } from '../../Redux/slices/authSlice';



const Login = () => {
  const [values, setValues] = useState({
    username: "",
    password: "",
  });
  const goTo = useNavigate()
  const dispatch = useDispatch()
  const handleSubmit = async (e) => {
    const response = await fetch(`http://localhost:8050/api/auth/signin`, {
      method: "POST",
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
      body: JSON.stringify(values),
    });
    const data = await response.json();
    alert(data.message)
    localStorage.setItem('token', data.accessToken);
    dispatch(IsLogin(true))
    goTo('/')
  }



  return (
    <div className='bg-white flex justify-center items-center'>
      <div className='py-10 px-3 w-full md:w-[400px]'>
        <div className="">
          <InputComponent onChange={(value) => { setValues({ ...values, username: value }) }} label={"Your email or phone number"} type={"text"} placeholder={"Enter your email or phone number"} />
          <InputComponent onChange={(value) => { setValues({ ...values, password: value }) }} label={"Your password"} type={"password"} placeholder={"Password"} />

          <div class="flex items-start mb-5">
            <div class="flex items-center h-5">
              <input id="remember" type="checkbox" value="" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
            </div>
            <label for="remember" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
          </div>

          <button onClick={handleSubmit} class="text-white mt-8 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
        </div>
        <NavLink to={`/registration`} className="text-black block mt-10 mx-auto hover:text-[#FF0000] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-1.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Register new account</NavLink>

      </div>
    </div>
  )
}

export default Login
