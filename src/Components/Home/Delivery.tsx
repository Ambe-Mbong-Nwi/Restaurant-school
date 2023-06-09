import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHamburger, faTruck ,faGlassCheers } from '@fortawesome/free-solid-svg-icons'
import bag from "../../../public/assets/homedelivery.png"
import Home from "../../../public/assets/stay_home.png"
// import { faIcon } from 'path/to/icon';
const DeliverProp=(props:any)=>{
    return(
        <main className='lg:flex lg:justify-content  ' >
            <div className="icon-div bg-[white] w-[6em] h-[6em] rounded-full
             flex justify-center items-center
             lg:w-[9em] lg:h-[6em]
             ">   
              <FontAwesomeIcon className='text-[3em] text-[#EB5A5A] ' icon={props.icon} />
              </div>
            <div className="content-div text-[black] mt-[0.35em] lg:ml-[1em] ">
                <h2 className=' text-[1.35em] font-[500] ' >{props.head} </h2>
                <p className='text-[black]' >{props.content} </p>
            </div>
        </main>
        )
}

const Delivery = () => {
  return (
    <main className='bg-[#F5E7C1] ' >
      <section className="lg:flex lg:justify-between ">  
        <article className="left lg:flex-[50%] lg:mr-[1em] ">  
        <div className="img-part bg-[#F5E7C1] pt-[3em]   ">
        <img src={bag} alt="bag"  className=' bg-[g-[green]] ' />
        </div>
        </article>

        <article className="main-section px-[1.25em]  lg:ml-[1em] pb-[5em] lg:flex-[50%]  ">
            <div className="pic pt-[4em] pb-[1em] ">
                <img src={Home } alt="home-icon" className="img-pic" />
            </div>
            <h1 className="delivery-head  font-[600]  font-['Rakkas'] text-[#E84242]
            text-[2.5em] pb-[1em] 
            lg:font-[900] lg:text-[5em]  ">Free delivery 7 days a week</h1>

        <DeliverProp
        icon={faHamburger}
        head="Choose Meal"
        content="Sesame snaps tootsie roll dessert candy canes apple pie marzipan topping toffee croissant."
        />
        <div className="v-line  "></div>
        <DeliverProp
        icon={faTruck}
        head="Delivery"
        content="Capitalize on low hanging fruit to identify a ballpark value added activity to beta t"
        />
          <div className="v-line  "></div>
       <DeliverProp
        icon={faGlassCheers}
        head="Enjoy Mealr"
        content="Praesent interdum mollis neque purus sed diam integer, in egestas nulla eget pede"
        />
        </article>
        </section>
        <svg className=' bg-[#e84242]  mt-[-1px] ' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#F5E7C1" fill-opacity="1" d="M0,128L60,128C120,128,240,128,360,138.7C480,149,600,171,720,170.7C840,171,960,149,1080,138.7C1200,128,1320,128,1380,128L1440,128L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path></svg>
    </main>
  )
}

export default Delivery