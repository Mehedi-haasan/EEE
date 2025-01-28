import React, { useEffect, useState } from 'react'
import InputComponent from '../Input/InputComponent'
import { useSelector } from 'react-redux';

const EditProfile = () => {

    const userData = useSelector((state)=>state?.auth?.authData)
    const [values, setValues] = useState({});

    const handleSubmit = async () => {
        const token = localStorage.getItem('token')
        const response = await fetch(`http://localhost:8050/api/update/single/users`, {
            method: "PATCH",
            headers: {
                "authorization": token,
                'Content-type': 'application/json; charset=UTF-8',
            },
        });
        const data = await response.json();
        setValues(data?.items)
    }

    return (
        <div className='bg-white'>
            <div className='py-10'>
                <h1 className='pb-10 text-xl md:text-2xl lg:text-4xl font-bold text-center'>Edit Profile</h1>
                <div className='bg-white py-10 w-[95%] lg:w-[60%] mx-auto rounded'>

                    <div className='gap-4 bg-white w-[95%] lg:w-[92%] border-2 rounded py-8 mx-auto p-4'>
                        <div className=''>
                            <img src='https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?size=626&ext=jpg&ga=GA1.2.834674141.1685085168&semt=ais' alt='' className='h-28 lg:h-36 w-28 lg:w-36 mx-auto rounded-full' />
                        </div>
                        <InputComponent placeholder={userData?.first_name || 'N/A'} onChange={(v) => { setValues({ ...values, first_name: v }) }} label={'Display Name'} />
                        <InputComponent placeholder={userData?.email || 'N/A'} onChange={() => { }} label={'Email Address'} />
                    </div>


                    <div className='mt-6 gap-4 bg-white w-[95%] lg:w-[92%] border-2 rounded py-8 mx-auto px-4'>

                        <h1 className='pb-10 font-bold text-3xl'>Password Change</h1>
                        <InputComponent placeholder={'Current password'} onChange={() => { }} label={'Current password (leave blank to leave unchanged)'} />
                        <InputComponent placeholder={'New password'} onChange={() => { }} label={'New password (leave blank to leave unchanged)'} />
                        <InputComponent placeholder={'Confirm new password'} onChange={() => { }} label={'Confirm new password'} />
                    </div>
                    <button onClick={handleSubmit} className='ml-[4%] border rounded bg-black hover:bg-red-500 text-white font-semibold py-2 px-6 my-5'>Save Change</button>
                </div>
            </div>
        </div>
    )
}

export default EditProfile
