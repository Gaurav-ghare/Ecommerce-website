import React from 'react'
import './Css/LoginSignUp.css'

const LoginSignUp = () => {
  return (
    <div className='loginsignup'>
      <div className='loginsignup-container'>
        <h1>Sign Up</h1>
        <div className="loginsignup-field">
          <input type ="text" placeholder='your name'/>
          <input type ="email" placeholder='email Addres'/>
          <input type ="password" placeholder='Password'/>


        </div>
        <button>Continue</button>
        <p className='loginsignup-login'>Already have an account</p>
        <div className="loginsignup-agree">
          <input type="checkbox"/>
          <p>By continuing, I agree to the term of use and privacy policy</p>
        </div>
      </div>
      
    </div>
  )
}

export default LoginSignUp
