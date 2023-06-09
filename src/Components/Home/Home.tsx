import React from 'react'
import Hero from './Hero'
import Seller from './Seller'
import Popular from './Popular'
import Delivery from './Delivery'
import Reviews from './Reviews'
import Follow from './Follow'
import Location from './Location'
import AnyReactComponent from '../Shared/Footer'

const Home = () => {
  return (
    <main>
        <Hero/>
        <Seller/>
        {/* <Popular/> */}
        <Delivery/>
        {/* <Reviews/> */}
        <Follow/>
        <Location/>
        {/* <AnyReactComponent/> */}
    </main>
  )
}

export default Home