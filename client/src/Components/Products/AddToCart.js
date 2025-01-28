import React, { useState } from 'react'
import { NavLink } from "react-router-dom";

const AddToCart = ({ id, qty }) => {
    const [addCart, setAddCard] = useState(true);
    const [count, setCount] = useState(1);

    const handleAddToCart = async () => {
        const token = localStorage.getItem('token')
        const response = await fetch(`http://localhost:8050/api/product/add/to/cart`, {
            method: "POST",
            headers: {
                "authorization": token,
                'Content-type': 'application/json; charset=UTF-8',
            },
            body: JSON.stringify({
                id: id,
                qty: count,

            }),
        });

        const data = await response.json();
        alert(data.message)
    }


    return (
        <div className='flex justify-start items-center gap-4'>
            <div className='flex justify-start items-center'>
                <button onClick={() => { if (count > 1) { setCount(count - 1) } else { setCount(1) } }} className='border p-2 hover:bg-red-500'>-</button>
                <button className='border p-2'>{count}</button>
                <button onClick={() => { setCount(count + 1) }} className='border p-2 hover:bg-red-500'>+</button>
            </div>

            <div className='flex justify-start items-center gap-2'>
                <button onClick={handleAddToCart} className='border px-3 lg:px-4 py-1 lg:py-2 rounded-md text-white font-semibold bg-red-600'>Add to Card</button>
                <NavLink to={`/payments/${id}/${count}`} className='border py-1 lg:py-2 rounded-md bg-black text-white font-semibold px-3 lg:px-4'>Buy Now</NavLink>
            </div>
        </div>
    )
}

export default AddToCart
