import React, { useEffect, useState } from 'react'

const PaymentTotal = ({ data }) => {
    const [total, setTotal] = useState(0);
    console.log(data, "aewrtgr")
    useEffect(() => {
        let amount = data.reduce((acc, d) => acc + (parseInt(d?.price) * parseInt(d?.qty) || 0), 0); 
        setTotal(amount);
    }, [data]);

    return (
        <>
            <tr className="bg-white">
                <th scope="row" className="pr-6 py-3 ">

                </th>
                <td className="px-6 py-3 text-center">

                </td>
                <td className="px-6 py-3 text-center text-black font-semibold">
                    Subtotal
                </td>
                <td className="pl-6 py-3 text-right">
                    {total} tk
                </td>
            </tr>
            <tr className="bg-white">
                <th scope="row" className="pr-6 py-2">

                </th>
                <td className="px-6 py-2 text-center">

                </td>
                <td className="px-6 py-2 text-center border-b-2 border-black text-black font-semibold">
                    Tax
                </td>
                <td className="pl-6 py-2 text-right border-b-2 border-black">
                    35 tk
                </td>
            </tr>
            <tr className="bg-white">
                <th scope="row" className="pr-6 py-3">

                </th>
                <td className="px-6 py-3 text-center">

                </td>
                <td className="px-6 py-3 text-center text-xl text-black font-bold">
                    Total
                </td>
                <td className="pl-6 py-3 text-right">
                    {total + 35} tk
                </td>
            </tr>
        </>
    )
}

export default PaymentTotal
