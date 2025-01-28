import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

const ProductCategoryCard = ({ id, name, image }) => {
    const goTo = useNavigate()
    const colors = [
        "#B9D5EA",
        "#81C784",
        "#FC987A",
        "#FCEBEB",
        "#B9D5EA",
        "#B9D5EA",
        "#81C784",
        "#FC987A",
        "#FCEBEB",
        "#B9D5EA",
        "#B9D5EA",
        "#81C784",
        "#FC987A",
        "#FCEBEB",
        "#B9D5EA",
        "#B9D5EA",
        "#81C784",
        "#FC987A",
        "#FCEBEB",
        "#B9D5EA",
        "#B9D5EA",
        "#81C784",
        "#FC987A",
        "#FCEBEB",
        "#B9D5EA"
    ];

    const colorIndex = id % colors.length;

    return (
        <div className='cursor-pointer'>
            <NavLink to={`/category/${id}/${name}`} className={`border rounded shadow-lg m-2 h-20 w-20 flex justify-center items-center`} style={{ backgroundColor: colors[colorIndex] }}>
                <div>
                    <img className='rounded-md h-14 w-14 mx-auto' src={image} alt='' />
                    {/* <h1 className='text-center font-semibold pb-1 text-sm italic'>{name}</h1> */}
                </div>
            </NavLink>
        </div>
    );
};

export default ProductCategoryCard;
