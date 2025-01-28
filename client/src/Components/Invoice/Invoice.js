import { useState } from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import InvoiceCard from './InvoiceCard';
import PaymentInfo from './PaymentInfo';
import UserInfo from './UserInfo';
import PaymentTotal from './PaymentTotal';

const Invoice = ({orderData}) => {


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

    const data = [
        {
            id: 1,
            name: "Smart Watch",
            qty: 2,
            price: 550,
        },
        {
            id: 2,
            name: "Black t-shirt",
            qty: 1,
            price: 350,
        },
        {
            id: 3,
            name: "Hand bag",
            qty: 3,
            price: 550,
        },
        {
            id: 4,
            name: "Smart Watch",
            qty: 1,
            price: 550,
        },
    ]
    return (
        <div className="border p-4 bg-white">

            <div className='w-[800px] mx-auto border rounded'>
                <div className="actual-receipt mt-4  p-10">
                    <div className='flex justify-between items-center'>
                        <img className='h-12 w-44' src='https://mir-s3-cdn-cf.behance.net/projects/404/6e4c09101656581.Y3JvcCwxMjYxLDk4Niw2OCww.jpg' alt='' />
                        <h1 className='text-5xl font-bold'>Invoice</h1>
                    </div>

                    <div className='my-10'> <UserInfo info={orderData[0]}/></div>
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
                                {orderData?.map((item) => {
                                    return <InvoiceCard id={item?.id} name={item?.product_product?.name} qty={item?.qty} price={item?.price} />
                                })}
                                <PaymentTotal />
                            </tbody>
                        </table>
                    </div>
                    <PaymentInfo info={orderData[0]}/>
                </div>
                {/* receipt action */}
                <div className="flex my-3 mr-2" style={{ justifyContent: 'flex-end' }}>
                    <button onClick={downloadPDF} className='border rounded px-4 py-1.5 mx-3'>Download</button>
                    <button onClick={PrintfPdf} className='border rounded px-4 py-1.5 mr-1'>Print</button>
                </div>
            </div>



        </div>
    );
}

export default Invoice;