import React, { useEffect, useState } from 'react'
import ProductCategoryCard from './ProductCategoryCard'

const ProductCategory = () => {


  const [data, setData] = useState([])
  const fetchData = async () => {
    const response = await fetch(`http://localhost:8050/api/get/category`);
    const data = await response.json()
    setData(data.items)
  }
  useEffect(() => {
    fetchData()
  }, [])
  return (
    <div className='grid grid-cols-3 md:grid-cols-6 lg:grid-cols-12 gap-3 md:gap-5 lg:gap-6'>
      {
        data.map(({ id, name, image_url }) => {
          return <ProductCategoryCard id={id} name={name} image={image_url} />
        })
      }
    </div>
  )
}

export default ProductCategory
