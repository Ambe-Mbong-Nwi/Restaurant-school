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
      <section className="bottom pt-[5em] lg:flex px-[3em] lg:justify-between  ">
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
        <article className="side flex-[33%] mx-4 ">
          <p className=' text-[black] text-[2em]  ' >1500XAF </p>
          <div>
            <h2 className=' text-[black] ' >ingredients</h2>
            <p className='pt-[1em] pb-[2em]  ' >onion, oregano, bacon, cheese, ketchup, mustard, green salad</p>
            <article className='flex'>
            <input type="number" className='lg:w-[7em] py-[1em] mr-6 rounded-[1em]'  />
          <Button
          style={{paddingTop:"1em ", paddingBottom:"1em"  }}
          text="ADD TO CART "/>
          </article>
          </div>
        </article>
        <article className="side flex-[33%] ml-4 ">
       <h1 className='text-[black] text-[1.75em] font-[700] mb-7 ' >Cart</h1>
        <article className="detail1  flex  text-[black] ">
          <div className="detail-left ">
            <img src={burger1} alt="burger1" 
            className=' w-[7em] rounded-[1em] mr-5 ' />
          </div>
          <div className="name "> 
          <p className='font-[600] text-[1.1em]' >Chicken +Fried Rice</p>
          <p className='font-[300] ' >2 × 1500XAF</p> 
          </div>
          </article>
          <article className="detail-right flex w-[80%] justify-between my-3 ">
           <p className='font-[700] text-[black] '  >Subtotal</p>
           <p>1500XAF</p>
          </article>
            <article className="btn flex ">
            <div className="btn">   <Button 
             style={{paddingTop:"1em ", paddingBottom:"1em", 
             paddingLeft:"2em",paddinRight:"2em", marginRight:"0.5em"  }} 
             text="View Cart  "/></div>
            <div className="btn">  
             <Button
              style={{paddingTop:"1em ", paddingBottom:"1em" ,
              paddingLeft:"2em",paddinRight:"2em", marginLeft:"0.5em"  }}
             text="CHECKOUT "/></div>
            </article>
          
       
        </article>
      </section>
      <div className="des p-[3em] ">
          <h1 className=' text-[black] font-[700] text-[2em] ' >Description</h1>
          <p className=' text-[black] w-[70%] mt-7 '>Jerky pork chop doner, cow beef kielbasa andouille pig drumstick. 
            Swine salami capicola jowl, tongue prosciutto chuck chislic spare ribs 
            kevin turducken. Doner fatback turkey picanha, pork belly jerky leberkas
             burgdoggen. Meatloaf pork venison rump shank pork belly
             pig tri-tip spare ribs drumstick shankle hamburger chicken strip steak.</p>
        </div>
    </main>
  )
}

export default MenuDetails