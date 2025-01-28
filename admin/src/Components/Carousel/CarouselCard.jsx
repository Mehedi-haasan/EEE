import React from 'react';
import Edit from '../../icons/Edit';
import Remove from '../../icons/Remove';

const CategoryCard = ({ product, onClick }) => {


    return (
        <tr onClick={onClick} className="bg-white cursor-pointer border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">

            <th scope="row" className="px-4 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {product?.name}
            </th>
            <td className="px-4 py-4">
                {product?.category}
            </td>
            <td className="px-4 py-4">
                {product?.price}
            </td>
            <td className="px-4 py-4">
                {product?.standard_price}
            </td>
            <td className="px-4 py-4">
                {product?.qty}
            </td>
            <td className="px-4 py-4">
                {"True"}
            </td>
            <td className="px-4 py-4" dangerouslySetInnerHTML={{ __html: product?.description }} />

            <td className="pl-4 py-4 pr-5 flex justify-end gap-2 items-center">
                <Edit size='25px' />
                <Remove size='25px' />
            </td>
        </tr>
    );
};

export default CategoryCard;