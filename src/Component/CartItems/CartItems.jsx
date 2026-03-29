import React, { useContext } from 'react';
import removeicon from '../assets/cart_cross_icon.png';

import './Cartitems.css'
import { ShopContext } from '../../Context/ShopContext';
const CardItems = () => {

    let {getTotalAmount,cartitems, removeCart , all_product} = useContext(ShopContext)
  return (
    <div className="cartitms">
        <div className="cartitems-format-main">
            <p>Products</p>
            <p>Tittle</p>
            <p>Prices</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
        </div>
        <hr/>
        {all_product.map ((e,i)=>{
            if(cartitems[e.id]>0){
                return <React.Fragment key={i}>
            <div className="cartitems-format">
                <img src={e.image} alt="" className="carticon-product-icon" />
                <p>{e.name}</p>
                <p>${e.new_price}</p>
                <button className="cartitems-quantity">{cartitems[e.id]}</button>
                <p>${e.new_price * cartitems[e.id]}</p>
                <img src={removeicon} onClick={()=>removeCart(e.id)} alt="" className="" />
            </div>
        </React.Fragment>
            }
        })}
        <div className="cartitems-down">
            <div className="cartitems-total">
                <h1>Cart-Totals</h1>
                <div>
                    <div className="cartitems-total-item">
                        <p>Subtotal</p>
                        <p>${getTotalAmount()}</p>
                    </div>
                    <hr/>
                    <div className="cartitems-total-item">
                        <p>Shipping fee</p>
                        <p>free </p>
                    </div>
                    <hr/>
                    <div className="cartitems-total-item">
                        <h3>total</h3>
                        <h2>${getTotalAmount()}</h2>
                    </div>
                </div>
               <button>Proceed to checkout</button>
                </div>
                <div className="cartitems-promocode">
                    <p>If you have a promo code, Enter it here</p>
                    <div className="cartitems-promobox">
                        <input type="text" placeholder='Promo code' />
                        <button>Submit</button>
                         </div>
            </div>
        </div>
    </div>
  )
}

export default CardItems
