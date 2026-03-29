import React from 'react'
// import './Breadcrumb.css'
import arrow_icon from'../assets/breadcrum_arrow.png'

const Breadcrum = ({product}) => {
    console.log(product)
  return (
    <div className='breadcrum'>
      <span> Home</span><img src={arrow_icon}alt=""/>
        <span> Shop</span><img src={arrow_icon}alt=""/>
        <span> {product.category}</span><img src={arrow_icon}alt=""/>
    <span> {product.name}</span>
    </div>
  )
}

export default Breadcrum
