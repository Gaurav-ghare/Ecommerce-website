import React,{useContext, useState} from 'react'
import logo from '../assets/logo.png'
import cart_icon from '../assets/cart_icon.png';
import './Navbar.css'
import { Link } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';

const Navbar=()=> {
  let[menu,setMenu]=useState("shop");
    let{getTotalItem}=useContext(ShopContext)
  return (

  
    <div className='navbar'>
      <div className='nav-logo'>
        <img src={logo}alt="" />
        <p>SHOPPER</p>
        </div>
        <ul className='nav-list'>
          <li onClick={()=>setMenu ("shop")}><Link to={'/'} style={{textDecoration:"none"}}>Shop</Link> {menu==="shop"? <hr />:<></>}</li>
          <li onClick={()=>setMenu ("mens")}><Link to={'/mens'} style={{textDecoration:"none"}}>Mens</Link> {menu==="mens"? <hr />:<></>}</li>
          <li onClick={()=>setMenu ("womens")}><Link to={'/womens'} style={{textDecoration:"none"}}>Womens</Link> {menu==="womens"? <hr />:<></>}</li>
          <li onClick={()=>setMenu ("kids")}><Link to={'/kids'} style={{textDecoration:"none"}}>Kids</Link> {menu==="kids"? <hr />:<></>}</li>
       </ul>
<div className="nav-cart">
  <Link to="login"><button>Login</button></Link>
  <Link to="/cart"> <img src={cart_icon}alt=""/></Link>
 <div className='nav-cart-count'>{getTotalItem()}</div>
</div>
 </div>
  )
}

export default Navbar
