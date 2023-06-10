import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBars } from '@fortawesome/free-solid-svg-icons'
import navicon from "/assets/logo.png"

const Navbar = () => {
  return (
    <main className='Navbar'>
      {/* build the mobile screen size navbar  */}
      <section className="mobile-navbar flex lg:hidden ">
        <div className="left1"> <FontAwesomeIcon 
        className='text-[1.85em] mr-[0.5em] ml-[1em] mt-[0.4em] text-[#4D4D4D] ' icon={faBars} /> </div>
        <div className="right">
          <div className="icon  ">
            <img src={navicon} alt="" className="nav-icon h-[3em]" />
          </div>
        </div> 
      </section>
      {/* build the  desktop screen size navbar */}
      <section className="desktop-navbarx hidden lg:flex 
      lg:justify-between lg:mx-[2em] lg:py-[0.75em] lg:rounded-[3em]
      lg:absolute lg:w-[95%] lg:bg-[white] lg:my-[1em] lg:px-[2em]
      ">
        <div className="leff flex justify-between  flex-[50%] ">
        <article className="icon  flex-[30%] ">
            <img src={navicon} alt="" className="nav-icon h-[4em]" />
          </article>
          <article className="navlinks flex  flex-[70%]
           justify-evenly  pt-[1em] text-[black] font-900  ">  
          <div className="navlink cursor-pointer ">HOME</div>
          <div className="navlink cursor-pointer">BLOG</div>
          <div className="navlink cursor-pointer">BLOG</div>
          <div className="navlink cursor-pointer">SHOP</div>
          </article>
        </div>
        <div className="right flex-[50%] flex justify-end ">
          <button className="btn text-[#e84242] border-[2px] px-[2.5em] border-[#e84242]
          rounded-[5em]  ">VIEW FULL MENU</button>
        </div>
      </section>
    </main>
  )
}

export default Navbar