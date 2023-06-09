import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPlus } from '@fortawesome/free-solid-svg-icons'
import "./Home.css"
import burger1 from  "../../../public/assets/fried_rice.jpg" 
import burger2 from  "../../../public/assets/nyama.jpg" 
import burger3  from "../../../public/assets/Kwakoko.jpg" 
import burger4  from "../../../public/assets/njamanjama.jpg" 
import burger5  from "../../../public/assets/spaghetti.jpg" 
import burger6  from "../../../public/assets/eru and fufu.jpg"     
import burgerA from "/assets/image_product_02.jpg"  
import burgerB from "/assets/image_product_03.jpg"
// the menu button   
export const MenuBtn=(props:any)=>{
    return(
        <main className="btn"  >
            <button style={props.style} 
            className="menu-btn rounded-[50%] py-[1.5em] px-[1.75em] border-2 bg-transparent
              border-[#e84242]  ">
            <div className="left1"> <FontAwesomeIcon className='text-[1em] text-[#e84242] ' icon={faPlus} /> </div>
       
            </button>
        </main>
    )
}

// BUilding the components for the diffferent menu elements and receiveing props through iit 
const Menu=(props:any)=>{
    return(
        <main className="menu pb-[1.5em] ">
            <section className="maini-menu-div bg-[#FEFEFE] rounded-[20px] mx-[1.5em] p-[1.5em] ">
                {/* <p className="menu-type font-[400] text-[black] "> {props.type} </p> */}
                <h1 className="menu-name text-[2em] font-[800] text-[#121212] ">{props.name} </h1>
                <h1 className="menu-nam text-[2em] font-[800] text-[#121212]">{props.name1} </h1>
                <div className="menu-img-div my-[0.5em] ">
                    <img src={props.src} alt={props.name} 
                    className="menu-img h-[15em] w-full rounded-[20px] " />
                </div>
                <section className="menu-bottom flex justify-between ">   
             
                <article className="menu-left pt-[1em] ">
                <p className="menu-price text-[2em] font-[800]"> {props.price} </p>
                <p className="menu-specs text-[15px] mt-[-0.15em] "> {props.specs} </p>
                </article>

                <article className="menu-right">
                    <MenuBtn/>
                </article>
                </section>
            </section>
        </main>
    )
}
// building the component of the cards for the menu section 
const Menu1=(props:any)=>{
    return(
        <main className="menu pb-[1.5em] "  >
            {/* pass the background image a props  */}
            <section className="maini-menu-div rounded-[20px] mx-[1.5em] p-[1.5em]  "
                style={  { 
                    backgroundImage: `url(${props.backgroundImage})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat"
            }}
                  
                  > 
                <p className="menu-type font-[400] text-[white] "> {props.type} </p>
                <h1 className="menu-name text-[2em] font-[800] text-[white]   ">{props.name} </h1>
                <h1 className="menu-nam text-[2em] font-[800] text-[white] ">{props.name1} </h1>
                <section className="menu-bottom flex justify-between" style={props.style} >   
             
                <article className="menu-left text-[white]  ">
                <p className="menu-price text-[2em] font-[800]"> {props.price} </p>
                <p className="menu-specs text-[15px] mt-[-0.15em] "> {props.specs} </p>
                </article>

                <article className="menu-right">
                    <MenuBtn  style={{background:"transparent"} } />
                </article>
                </section>
            </section>
        </main>
    )
}   

const Seller = () => {
  return (
    <div>   
    <main className=' Seller Hero-main pb-[2em] overflow-hidden lg:pt-[15em] '>
    <h1 className="sellers text-[#F4E6C0]  font-['Rakkas'] text-center  pb-[1em]
    lg:text-[4em] ">Today's Menu</h1>
    <section className="menus-seller">
        <article className="seller-div-1 lg:flex lg:mx-[1em] lg:justify-betwwen lg:mb-[2em]  ">
            <div className="lg:flex-[33%] ">
        <Menu   type="BEEF" name="Chicken " 
        src={burger1} name1="+Fried Rice" price="1500XAF" />
        </div>
        <div className="lg:flex-[33%]  ">
        <Menu type="BEEF" name="Nyama" src={burger2} name1="Sauce"
         price="2000XAF"  />
         </div>
          <div className="lg:flex-[33%]  ">
        <Menu   type="BEEF" name="Kwakoko" 
        src={burger3} name1="+Canda Sauce" price="2000XAF" />
        </div>
        </article>
        <article className="seller-div-1 lg:flex lg:mx-[1em] lg:justify-betwwen lg:mb-[2em]  ">
            <div className="lg:flex-[33%] ">
        <Menu   type="BEEF" name="Njama-Njama " 
        src={burger4} name1="+Fufu Corn" price="1500XAF" />
        </div>
        <div className="lg:flex-[33%]  ">
        <Menu type="BEEF" name="Spaghetti" src={burger5} name1="Sauté"
         price="1000XAF"  />
         </div>
          <div className="lg:flex-[33%]  ">
        <Menu   type="BEEF" name="Water.Fufu" 
        src={burger6} name1="+Eru" price="2000XAF" />
        </div>
        </article>
    </section>
    </main>
    <svg className='bg-[#F5E7C1] mt-[-1px] ' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 319"><path fill="#e84242" fill-opacity="1" d="M0,160L60,160C120,160,240,160,360,176C480,192,600,224,720,208C840,192,960,128,1080,117.3C1200,107,1320,149,1380,170.7L1440,192L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path></svg>
    </div>
  )
}

export default Seller