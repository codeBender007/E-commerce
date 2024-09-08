import React from 'react'
import "./ProductCard.css"
import { useNavigate } from 'react-router-dom'

function ProductCard({ product }) {

  const navigate = useNavigate();
  // console.log("products pr : ",product)
  return (
    // <div onClick={() => navigate(`/product/${product.id}`)} className=' productCard w-[15rem] m-3 transition-all cursor-pointer'>
      <div onClick={() => navigate(`/product/${product?._id}`)} className=' productCard w-[15rem] m-3 transition-all cursor-pointer'>

        <div className='h-[20rem]'>
              <img className='h-full w-full object-cover' src={product.imageUrl} alt="" />
        </div>

        <div className='textPart bg-white p-3'>

            <div className=''>
                <p className='font-bold opacity-60'>{product.brand}</p>
                <p>{product.title}</p>
            </div>

            <div className='flex justify-center  space-x-2'>
                  <p className='font-semibold'>${product.discountedPrice}</p>
                  <p className='line-through opacity-50'>{product.price}</p>
                  <p className='text-green-600 font-semibold'>{product.discountPersent}% Off</p>
            </div>

        </div>
        
    </div>
  )
}

export default ProductCard
