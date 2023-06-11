import React from 'react'
import 

const Button = (props:any) => {
  return (
    <main>
        <button className= 'button text-[white] bg-[#E94242] rounded-[2em] '
         style={props.style} > 
         {props.text} 
         </button>
    </main>
  )
}

export default Button