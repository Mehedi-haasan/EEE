import React from 'react';
import data from './data.json'
import { NavLink } from 'react-router-dom';
import { Icon } from "@iconify/react";
import Menu from '../../icons/Edit';
import Charts from './Charts';
import Charts2 from './Charts2'
import Charts3 from './Charts3';
import Charts4 from './Charts4';
import Charts5 from './Chart5';
import Charts6 from './Charts6';
import Charts7 from './Charts7';



const Dashboard = () => {

    return (
        <div className=''>

            <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4  gap-5'>
                <div className='shadow-lg flex justify-around items-center p-5 rounded-lg bg-white min-h-[170px]'>
                    <div className='p-5 border rounded-full bg-[#FFF2E8]'>
                        <img src='https://cdn-icons-png.flaticon.com/128/6586/6586553.png' className='h-12 w-12 ' alt='image' />
                    </div>
                    <div className='flex justify-start items-end gap-1'>
                        <h1 className='font-bold text-5xl'>5</h1>
                        <p className='font-semibold'>New Orders</p>
                    </div>
                </div>
                <div className='shadow-lg flex justify-around items-center p-5 rounded-lg bg-white min-h-[170px]'>
                    <div className='p-5 border rounded-full bg-[#FFF2E8]'>
                        <img src='https://cdn-icons-png.flaticon.com/128/6586/6586553.png' className='h-12 w-12 ' alt='image' />
                    </div>
                    <div className='flex justify-start items-end gap-1'>
                        <h1 className='font-bold text-5xl'>2</h1>
                        <p className='font-semibold'>Customer Request</p>
                    </div>
                </div>
                <div className='shadow-lg flex justify-around items-center p-5 rounded-lg bg-white min-h-[170px]'>
                    <div className='p-5 border rounded-full bg-[#FFF2E8]'>
                        <img src='https://cdn-icons-png.flaticon.com/128/6586/6586553.png' className='h-12 w-12 ' alt='image' />
                    </div>
                    <div className='flex justify-start items-end gap-1'>
                        <h1 className='font-bold text-5xl'>50</h1>
                        <p className='font-semibold'>Customer Complains</p>
                    </div>
                </div>
                <div className='shadow-lg flex justify-around items-center p-5 rounded-lg bg-white min-h-[170px]'>
                    <div className='p-5 border rounded-full bg-[#FFF2E8]'>
                        <img src='https://cdn-icons-png.flaticon.com/128/6586/6586553.png' className='h-12 w-12 ' alt='image' />
                    </div>
                    <div className='flex justify-start items-end gap-1'>
                        <h1 className='font-bold text-5xl'>12</h1>
                        <p className='font-semibold'>Notifications</p>
                    </div>
                </div>


            </div>
            <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3  mt-8 gap-5'>
                <div className='rounded-lg'>
                    <Charts7/>
                </div>
                <div className=''>
                    <Charts2 />
                </div>
                <div>
                    <Charts3/>
                </div>
                {/* <div>
                    <Charts4/>
                </div>
                <div>
                    <Charts5/>
                </div>
                <div>
                    <Charts6/>
                </div>
                <div>
                    <Charts text={"Basic Graph 2nd"} />
                </div> */}
            </div>

        </div>
    );
};

export default Dashboard;