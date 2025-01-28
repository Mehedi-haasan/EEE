import React, { useState, useEffect } from 'react';
import { Icon } from "@iconify/react";

const Search = ({onChange, data}) => {
    const [isVisible, setIsVisible] = useState(true);
    // const [data, setData] = useState([]);
    // const [product, setProduct]=useState('')

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsVisible(false);
            } else {
                setIsVisible(true);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    


 


    return (
        <div>
            <div
                className={`absolute top-[42px] w-full px-2 transition-transform duration-500 ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
                    }`}
            >
                <div className="flex mx-auto w-full lg:hidden my-1">
                    <input 
                        type="text"
                        placeholder="Search for Products"
                        onChange={onChange}
                        className="mt-1 rounded w-full py-1.5 border px-2 focus:outline-none"
                    />
                    <button onClick={()=>{}} className="py-1.5 mt-1 border rounded bg-[#06D889] text-white">
                        <Icon icon="iconamoon:search" width="22px" className="mx-4" />
                    </button>
                </div>
                <div className='bg-white'>
                    {
                        data.map((item) => {
                            return <div className='flex justify-start items-start font-semibold text-lg'>
                                <img src={item.image_url} alt='jnvfg' className='h-12 w-12 rounded' />
                                <h1>{item.name}</h1>
                            </div>
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default Search;
