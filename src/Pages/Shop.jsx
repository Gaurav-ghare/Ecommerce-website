import React from 'react'
import Hero from '../Component/Hero/Hero'
// import Item from '../Component/Item/Item'
import Popular from '../Component/Popular'
import Offers from '../Component/Offers/Offers'
import NewCollection from '../Component/Newcollection/NewCollection'
import Subscribe from '../Component/Subscribe/Subscribe'

const Shop = () => {
  return (
    <div>
      <Hero/>
      <Popular/>
      <Offers/>
      <NewCollection/>
      <Subscribe/>

    </div>
  )
}

export default Shop
