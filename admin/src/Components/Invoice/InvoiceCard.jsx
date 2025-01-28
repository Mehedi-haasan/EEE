import React from 'react'

const InvoiceCard = ({ id, name, qty, price }) => {
    return (
        <tr className="bg-white dark:bg-gray-800 border-b">
            <th scope="row" className="pr-6 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {name}
            </th>
            <td className="px-6 py-3 text-center">
                {qty}
            </td>
            <td className="px-6 py-3 text-center">
                {price}
            </td>
            <td className="pl-6 py-3 text-right">
                {price * qty} tk
            </td>
        </tr>
    )
}

export default InvoiceCard
