import React,{useContext} from 'react'
import dropdown_icon from'../Component/assets/dropdown_icon.png'

import Item from '../Component/Item/Item'
import { ShopContext } from '../Context/ShopContext'
import '../Pages/Css/ShopCategory.css'

const ShopCategory = (props) => {
  let {all_product} = useContext(ShopContext)
  return (
    <div className='shopContext'>
      <img src={props.banner}alt=""/>
      <div className='shop-category-indexSort'>
        <p> 
            <span> Showing 1-12</span> Out of 36 Products
        </p>
        <div className='shopCategory-sort'>
            Sort by<img src={dropdown_icon}alt=""/>
        </div>
      </div>
      <div className='shopCategory-products'>
        {all_product.map((item,i)=>{

            if(props.category === item.category){
            return<Item key={i} id={item.id} name={item.name} image={item.image}
                        new_price={item.new_price}
                        old_price={item.old_price} />
            }else{
                return null;
            }
        })}
      </div>
      <div className="shopCatogory-button">
        <button>Explore More</button>
      </div>
    </div>      
  )
}

export default ShopCategory
