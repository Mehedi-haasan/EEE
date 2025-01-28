import React, { useState } from 'react';
import Remove from '../../icons/Remove';
import Edit from '../../icons/Edit';
import SelectionComponent from '../Input/SelectionComponent';

const OrderCard = ({ id, name, qty, state, address, status, product_product, note,paymentstatus }) => {
    const sta = ['Draft','Pending', 'Confirm','Deliverd']

    const [stas, setStat] = useState(status)

    const handleStatusChange = async (status) => {
        setStat(status)
        const token = localStorage.getItem('token')
        const response = await fetch(`http://localhost:8050/api/product/order/update`, {
            method: 'PATCH',
            headers: {
                'authorization': token,
                'Content-type': 'application/json; charset=UTF-8',
            },
            body: JSON.stringify({ id: id, status: status }),
        });
        const data = await response.json();
    }
    
    return (
        <tr key={id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <td className="w-4 p-4">
                <div className="flex items-center">
                    <input id="checkbox-table-search-1" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                    <label for="checkbox-table-search-1" className="sr-only">checkbox</label>
                </div>
            </td>
            <th scope="row" className="pl-1 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {product_product.name}
            </th>
            <td className="px-4 py-3">
                {
                    product_product.attributes.map((attr) => {
                        return <div key={attr.id} className='flex items-center gap-1'>
                            <h1 className='font-semibold'>{attr.name} :</h1>
                            <h1 className='text-xs'>{attr.value}</h1>
                        </div>
                    })
                }
            </td>
            <td className="px-4 py-4">
                {product_product.name}
            </td>
            <td className="px-4 py-4">
                {product_product.standard_price * qty}
            </td>
            <td className="px-4 py-4">
                {qty}
            </td>
            <td className="px-4 py-4">
                {name}
            </td>
            <td className="px-4 py-4">
                <div>
                    <p>{state}</p>
                    <p>{address}</p>
                </div>
            </td>
            <td className="px-4 py-4">
                <div>
                    <select value={stas} onChange={(e) => { handleStatusChange(e.target.value); }} className="text-gray-900 text-sm cursor-pointer w-full py-2">
                        {sta.map((item) => {
                            return <option key={item.id} value={item} className=''>{item}</option>
                        })}
                    </select>
                </div>
            </td>
            <td className="px-4 py-4">
                {paymentstatus || 'N/A'}
            </td>
            <td className="px-4 py-4">
                {note}
            </td>
            <td className="pl-4 py-4 pr-5 flex justify-end gap-2 items-center">
                <Edit size='25px' />
                <Remove size='25px' />
            </td>
        </tr>
    );
};

export default OrderCard;