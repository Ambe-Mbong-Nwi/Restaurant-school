import React from 'react'
import Seller from './Seller'
import "./Home.css"
import Navbar from '../Shared/Navbar'
import Button from '../Shared/Button'
import burger1 from  "../../../public/assets/fried_rice.jpg" 

const MenuDetails = () => {
  return (
    <main className=" h-full main-section bg-[#F5E7C1]" >
      <section className="top"> 
      <article className="top-details ">
      On Home Delicious Meals 
      </article>
      <div className="navbar-comp relative top-[-33em] ">
        <Navbar/>
      </div>
      </section>
      <section className="bottom pt-[5em] flex px-[3em] justify-between  ">
        <article className="side flex-[33%] mr-5 ">
          <div className="main-img-div  ">
            <img src={burger1} alt="img" className="rounded-[1em]" />
          </div>
            <div className="sub-img-div flex justify-between mt-4"> 
            <div className="sub"> <img src={burger1} alt="img" className="rounded-[1em] px-1  " /></div>
            <div className="sub"> <img src={burger1} alt="img" className="rounded-[1em] px-1 " /></div>
            <div className="sub"> <img src={burger1} alt="img" className="rounded-[1em] px-1 " /></div>
          </div>
        </article>
        <article className="side flex-[33%]">
          <p></p>
          <div>
            <h2>ingredients</h2>
            <p> </p>
            <select name="" id=""></select>
          <Button text="ADD TO CART "/>
          </div>
        </article>
        <article className="side flex-[33%]">
       <h1>Cart</h1>
        <div className="detail">
          <div className="detail-left">
            <img src="" alt="" />
          </div>
          <div className="detail-right">
            <div className="name"></div>
            <article className="btn">
            <div className="btn">   <Button text="View Cart  "/></div>
            <div className="btn">   <Button text="ADD TO CHECKOUT "/></div>
            </article>
          </div>
        </div>
        </article>
      </section>
      <div className="des">
          <h1>Description</h1>
          <p>Jerky pork chop doner, cow beef kielbasa andouille pig drumstick. 
            Swine salami capicola jowl, tongue prosciutto chuck chislic spare ribs 
            kevin turducken. Doner fatback turkey picanha, pork belly jerky leberkas
             burgdoggen. Meatloaf pork venison rump shank pork belly
             pig tri-tip spare ribs drumstick shankle hamburger chicken strip steak.</p>
        </div>
    </main>
  )
}

export default MenuDetails