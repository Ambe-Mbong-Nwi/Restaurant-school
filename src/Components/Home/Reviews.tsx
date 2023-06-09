import React from 'react'
import burger1 from "../../../public/assets/floating_burger_02.png"
import "./Home.css"
import bent1 from "../../../public/assets/reviews_01.png"
import bent2 from "../../../public/assets/reviews_02.png"
import bent3 from "../../../public/assets/reviews_03.png"
import bent4 from "../../../public/assets/reviews_04.png"

const ReviewsProp=(props:any)=>{
    return(
        <main style={props.style} className='text-[#F5E7C1] mt-[1.5em] ' >
        <div className="img-div">
            <img src={props.src} alt="cureved image" />
        </div>
        <p className="quote font-['Rakkas'] mt-[1.5em] font-[200] text-[2.65em] leading-[1.1em] ">
             <span> "</span> {props.quote }<span> "</span></p>
        <h5 className="signature mt-[0.5em] mb-[3em] "> {props.signature} </h5>
        </main>
    )
}

const Reviews = () => {
  return (
    <main>
        <section className="review-section bg-[#e84242]  pb-[3em]  ">
        <h1 className="Review-head  text-[6em] text-center  text-[#F4E6C0] leading-[0.75em] 
     font-['Rakkas']  pt-[1em] pb-[1.5em]  relative ">
        Reviews
      </h1>
      <div className="nmnm  ">
        <img src={burger1} alt="" className="hero-img w-[25em] relative bottom-[14em] " />
      </div>
      <div className="consume mt-[-13em] px-[1.5em] ">
        <ReviewsProp
        src={bent1}
        quote="I don't remember a single mouthful I didn't enjoy!"
        signature="@casey"
        />
        <ReviewsProp
        // style={{border:"solid 1px black"    }}
        src={bent2}
        quote="Pretty impressive! Legit taste of burgers!!!"
        signature="@mark_twin"
        />
       <ReviewsProp
        src={bent3}
        quote="Eatsy burgers are some of the most tastiest burgers I've had!"
        signature="@sarah_composer"
        />
         <ReviewsProp
        src={bent4}
        quote="Awesome service and even better burgers!"
        signature="@honeyb"
        />
      </div>
        </section>
    </main>
  )
}

export default Reviews