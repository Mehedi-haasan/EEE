import { useState } from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import InvoiceCard from './InvoiceCard';
import PaymentInfo from './PaymentInfo';
import UserInfo from './UserInfo';
import PaymentTotal from './PaymentTotal';

const Invoice = ({ data }) => {

    const values = data;
    const downloadPDF = () => {
        const capture = document.querySelector('.actual-receipt');
        html2canvas(capture).then((canvas) => {
            const imgData = canvas.toDataURL('img/png');
            const doc = new jsPDF('p', 'mm', 'a4');
            const componentWidth = doc.internal.pageSize.getWidth();
            const componentHeight = doc.internal.pageSize.getHeight();
            doc.addImage(imgData, 'PNG', 0, 0, componentWidth, componentHeight);
            doc.save('receipt.pdf');
        })
    }

    const PrintfPdf = () => {

    }


    const userInfo = {
        name: "Mehedi Hasan",
        phone: "01750834062",
        address: "Uttara",
        tran_id: "5"
    }

    const Order = async () => {
        const token = localStorage.getItem('token');
        let orderData =[];
        values.map((v)=>(
            orderData.push({
                "invoice_id":75,
                "product_id":v?.id,
                "name":v?.name,
                "price":v?.price,
                "qty":v?.qty,
                "contact":"01750834062"
            })
        ))
        try {
            const response = await fetch('http://localhost:8050/api/post/order', {
                method: 'POST',
                headers: {
                    'authorization': token,
                    'Content-type': 'application/json; charset=UTF-8',
                },
                body: JSON.stringify(orderData),
            });

            const data = await response.json();
            alert(data?.message)
        } catch (error) {
            console.error('Error updating variant:', error);
        }
    }
    return (
        <div className="bg-white">

            <div className='w-full mx-auto border min-h-[90vh] rounded'>
                <div className="actual-receipt mt-4  p-10">
                    <div className='flex justify-between items-center'>
                        <img className='h-12 w-44' src='https://mir-s3-cdn-cf.behance.net/projects/404/6e4c09101656581.Y3JvcCwxMjYxLDk4Niw2OCww.jpg' alt='' />
                        <h1 className='text-5xl font-bold'>Invoice</h1>
                    </div>

                    <div className='my-10'>
                        <UserInfo info={userInfo} />
                    </div>
                    <div className='relative overflow-x-auto mb-5'>
                        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                            <thead class="text-xs text-gray-900 uppercase dark:text-gray-400">
                                <tr className='border-b-2 border-black text-lg'>
                                    <th scope="col" className="pr-6 py-2 ">Product name</th>
                                    <th scope="col" className="px-4 py-2 text-center">Quantity</th>
                                    <th scope="col" className="px-4 py-2 text-center">Unite Price</th>
                                    <th scope="col" className="pl-4 py-2 text-right">Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data?.map((item) => {
                                    return <InvoiceCard id={item?.id} name={item?.name} qty={item?.qty} price={item?.price} />
                                })}
                                <PaymentTotal data={data} />
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="flex justify-end my-3 mr-2">
                    <button onClick={Order} className='border rounded px-4 py-1.5 mx-3'>Order</button>
                </div>

                {/* receipt action */}
                <div className="flex justify-end my-3 mr-2">
                    <button onClick={downloadPDF} className='border rounded px-4 py-1.5 mx-3'>Download</button>
                    <button onClick={PrintfPdf} className='border rounded px-4 py-1.5 mr-1'>Print</button>
                </div>
            </div>



        </div>
    );
}

export default Invoice;