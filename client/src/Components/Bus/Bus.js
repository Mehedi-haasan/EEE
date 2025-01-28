import React, { useState } from 'react'

const Bus = () => {
    const [count, setCount] = useState(9)
    const [data, setData] = useState([
        {
            id: 1,
            name: "A",
            category:1,
            qty:2
        },
        {
            id: 2,
            name: "B",
            category:1,
            qty:2
        },
        {
            id: 3,
            name: "C",
            category:1,
            qty:2
        },
    ])



    const handleClick = (e) => {
        console.log(e.target.value)
        console.log(typeof (e.target.id))


        // setCount(count - 1)

        setData(data => {
            return data.map(item => {

                if (item.id === parseInt(e.target.id)) {
                    const updatedValues = item.values.map((value) => {
                        if (value.value === e.target.value) {
                            return {
                                ...value,
                                select: true
                            };
                        }
                        return value;
                    });
                    return {
                        ...item,
                        values: updatedValues
                    };
                }



                return item;
            });
        });

    }


    console.log(data)
    return (
        <div>
            <h1>Seat: {count}</h1>
            {
                data.map(({ id, name, values }) => {
                    return <div className='flex m-1.5'>
                        <div className='p-2'>
                            <h1>{name}</h1>
                        </div>
                        <div className='flex'>
                            {
                                values.map(({ select, value }) => (
                                    <button value={value} id={id} onClick={handleClick} className={`p-1 m-1 rounded border text-red-500  ${select === true ? "bg-red-200" : ""}`}>{value}</button>
                                ))
                            }
                        </div>
                    </div>
                })
            }
        </div>
    )
}

export default Bus
