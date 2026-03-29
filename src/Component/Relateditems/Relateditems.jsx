import React from 'react'
import'./Relateditems.css'
import Item from '../Item/Item'
import data_product from '../assets/data'


const Relateditems = () => {
  return (
    <div className='related-items'>
        <h1>Related Items</h1>
        <hr/>
      <div className='related-item-product'>
        {data_product.map((item,i)=>{
             return <Item key={i} id={item.id} name={item.name} image={item.image}
                        new_price={item.new_price}
                        old_price={item.old_price} />
        })}
      </div>
    </div>
  )
}

export default Relateditems
