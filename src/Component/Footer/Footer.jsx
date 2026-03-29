import React from 'react'
import './Footer.css'
import footer_image from '../assets/logo_big.png'
import instagram from '../assets/instagram_icon.png'
import pintester from '../assets/pintester_icon.png'
import whatsapp from '../assets/whatsapp_icon.png'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-logo'>
        <img src={footer_image} alt="" />
        <p>SHOPPER</p>

      </div>
      <ul className='footer_link'>
        <li>Company</li>
        <li>Products</li>
        <li>About</li>
        <li>Contact</li>
        <li>Offers</li>

      </ul>
      <div className='footer-social-icon'>
        <div className="footer-icon">
          <img src={instagram} alt="" />
        </div>

        <div className=" footer-icon">
          <img src={pintester} alt="" />
        </div>


        <div className=" footer-icon">
          <img src={whatsapp} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Footer
