import React from 'react'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPlus } from '@fortawesome/free-solid-svg-icons'
import "./Home.css"
// import the reactc router dom 
import ReactDOM from 'react-dom'
import { BrowserRouter,  Routes,Route,Link} from "react-router-dom";
// import the data 
import {Data} from  "./Data"    
import MenuDetails from './MenuDetails'
// the menu button component   
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
// onClick={choosenMenu}
// BUilding the components for the diffferent menu elements and receiveing props through iit 
const Menu=(props:any)=>{
             // keep track of the menu 
             const [menu, setMenu] = useState(null);
             const choosenMenu=(data:any)=>{
                 setMenu(data)
                 console.log('====================================');
                 console.log(data);
                 console.log('====================================');
                 alert("yo bruh")
             }
    return(
        <main className="menu pb-[1.5em]  " >
        <Link to="MenuDetails" className='text-[black] '  >  
            <section  
            className="maini-menu-div bg-[#FEFEFE] cursor-pointer
            rounded-[20px] mx-[1.5em] p-[1.5em] ">
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
            </Link>
        </main>
    )
}
const Seller = (props:any) => {   
                 // keep track of the menu    
  return (
    <div>   
    <main className=' Seller Hero-main pb-[2em] overflow-hidden lg:pt-[15em] '>
    <h1 className="sellers text-[#F4E6C0]  font-['Rakkas'] text-center  pb-[1em]
    lg:text-[4em] ">Today's Menu</h1>
    <section>
        <section className="map lg:grid lg:grid-cols-3" >
               {Data.map((data,index)=>{const{ src,name,name1,price}=data;
            return(
                <section  className='menus ' key={index}>
                    <div>  
                  <Menu  name={name} src={src} name1={name1}  price={price} />
                  </div>
                </section>
            )    }   )    }
            </section>
    </section>
    </main>
    <svg className='bg-[#F5E7C1] mt-[-1px] ' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 319"><path fill="#e84242" fill-opacity="1" d="M0,160L60,160C120,160,240,160,360,176C480,192,600,224,720,208C840,192,960,128,1080,117.3C1200,107,1320,149,1380,170.7L1440,192L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path></svg>
    </div>
  )
}

export default Seller