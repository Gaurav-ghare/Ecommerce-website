import React, { createContext, useState } from "react";
import all_product from '../Component/assets/all_product'

export  let ShopContext = createContext()

let getDefaultData=()=>{
  let cart={};
  for(let index=0;index<all_product.length;index++){
    cart[index]=0
  }
  return cart
}

export let ShopContextProvider = (props) =>{

  let [cartitems,setCartitems]=useState(getDefaultData())

  let addToCart=(itemId)=>{
    console.log(itemId);
    setCartitems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
    
  }

    let removeCart=(itemId)=>{
    console.log(itemId);
    setCartitems((prev)=>({...prev,[itemId]:prev[itemId]-1}))

  }

  let getTotalAmount=()=>{
    let totalAmount=0;
    for(let item in cartitems){
      if(cartitems[item]>0){
        let indexInfo=all_product.find((product)=>product.id===Number(item));
        totalAmount+=indexInfo.new_price * cartitems[item]
      }
    }
    return totalAmount;
  }

  let getTotalItem =()=>{
    let totalItems=0;
    for(let item in cartitems){
      if(cartitems[item]>0){
        totalItems +=cartitems[item]
      }
    }
    
      return totalItems
  }

    let contextApi = {getTotalItem,getTotalAmount,all_product,cartitems,addToCart,removeCart}
    console.log(cartitems);
    
    return<>
    <ShopContext.Provider value={contextApi}>
      {props.children}
      </ShopContext.Provider>
    </>
}