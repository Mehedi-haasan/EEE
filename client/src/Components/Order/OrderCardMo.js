import React, { useState } from 'react';
import Edit from '../Input/Edit';
import TKicon from '../Input/TKicon';
import { NavLink } from 'react-router-dom';
import Modal from '../Modal/Modal'

const OrderCardMo = ({ item, i }) => {
    const sta = ['Draft', 'Cancel'];
    const [isOpen, setIsOpen] = useState(false)
    const [stas, setStat] = useState(item?.status)

    const handleStatusChange = async (status) => {
        if (status === "Cancel") {
            setIsOpen(true);
            setStat(item?.status);
        } else {
            setStat(status);
        }
    }

    const ChangeStatus = async () => {
        const token = localStorage.getItem('token')
        const response = await fetch(`http://localhost:8050/api/product/order/update`, {
            method: 'PATCH',
            headers: {
                'authorization': token,
                'Content-type': 'application/json; charset=UTF-8',
            },
            body: JSON.stringify({ id: item?.id, status: stas }),
        });
        const data = await response.json();
    }

    return (
        <div key={i} className='p-2 w-full border-b-2 border-dashed'>
            <Modal isOpen={isOpen} onClose={() => { setIsOpen(false) }}>
                <h1 className='text-center py-5  font-semibold'>Are you sure you want to cancel order</h1>
                <div className='flex justify-evenly items-center'>
                    <button onClick={() => { setIsOpen(false) }} className='border rounded px-5 py-1 border-red-500 text-red-500'>No</button>
                    <button onClick={ChangeStatus} className='border rounded px-5 py-1'>Yes</button>
                </div>
            </Modal>
            <div className='flex justify-start items-start gap-3 w-full'>
                <div className='w-20'>
                    <img className='h-20 w-20 rounded mt-1' src={item?.product_product?.image_url} alt='afsg' />
                </div>
                <div className='w-full'>

                    <div className='flex justify-between items-center'>
                        <h1 className='font-semibold'>{item?.product_product?.name}</h1>
                        <NavLink to={`/product/feedback/${item?.product_product?.id}`}><Edit size='25px' /></NavLink>
                    </div>
                    {
                        item?.product_product?.attributes?.map((attr) => {
                            return <div key={attr.id} className='flex justify-between items-center'>
                                <h1 className='font-semibold text-xs'>{attr.name} :</h1>
                                <h1 className='text-xs'>{attr.value}</h1>
                            </div>
                        })
                    }

                    <div className='flex justify-between items-center text-xs'>
                        <h1 className='font-semibold'>Qty:</h1>
                        <h1>{item?.qty} pcs</h1>
                    </div>

                    <div className='flex justify-between items-center text-xs relative'>
                        <h1 className='font-semibold'>Price:</h1>
                        <h1 className='flex justify-end items-center gap-1 pr-3'>{item?.price}:00 <TKicon className='absolute -right-1' size={16} /></h1>
                    </div>
                    <div className='flex justify-between items-center text-xs'>
                        <h1 className='font-semibold'>Status:</h1>
                        {stas === "Confirm" || stas === "Deliverd" || stas === "Cancel" ? <div>
                            {stas}
                        </div> : <div>
                            <select value={stas} onChange={(e) => { handleStatusChange(e.target.value); }} className="text-gray-900 text-xs cursor-pointer w-full py-2">
                                {sta.map((item, i) => {
                                    return <option key={i} value={item} className={`${item === "Cancel" ? 'text-red-600' : 'text-gray-900'}`}>{item}</option>
                                })}
                            </select>
                        </div>}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderCardMo;