import React,{useContext}from 'react'
import { ShopContext } from '../Context/ShopContext'
import { useParams } from 'react-router-dom';
import Breadcrum from'../Component/Breadcrum/Breadcrum'
import ProductDisplay from '../Component/ProductDisplay/ProductDisplay';
import Relateditems from '../Component/Relateditems/Relateditems';
import DescriptionBox from '../Component/DescriptionBox/DescriptionBox';

const Product = () => {
  let{all_product}=useContext(ShopContext);
  let{productId}=useParams()

  let product= all_product.find((e)=>e.id===Number(productId))
  
  return (
    <div>
      <Breadcrum product={product}/>
      <ProductDisplay product={product}/>
       <DescriptionBox/>
      <Relateditems/>
     
      </div>
  )
}

export default Product


