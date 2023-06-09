import React from 'react';
import herofooter from "/assets/hero_footer.jpg"
import logo from "/assets/footer_logo.png"
import Button from './Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faMapMarkerAlt, faClock } from '@fortawesome/free-solid-svg-icons'
import {faFacebook, faInstagram , faTwitter} from '@fortawesome/free-brands-svg-icons'
const Footer = () => {
  return (
    <main className='pb-[10em] '>
<svg 
 style={  { 
  backgroundImage: `url(${herofooter})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  zIndex: 100
}}
className='bg-[red] mt-[-0.3px] '
xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#F5E7C1" fill-opacity="1" d="M0,256L48,218.7C96,181,192,107,288,117.3C384,128,480,224,576,245.3C672,267,768,213,864,197.3C960,181,1056,203,1152,181.3C1248,160,1344,96,1392,64L1440,32L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
</svg>
      <div className="container mt-[-1px] pt-[5em] pb-[10em]  "
       style={  { 
        backgroundImage: `url(${herofooter})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      >
        <section className='text-center' > 
        <div className='img flex justify-center mb-[1em]  ' >
      <img src={ logo} className='w-[8em] ' alt="Wavy image" />
      </div>
      <p className='text-[white] font-[500] text-[1.55em] w-[80%] my-0 mx-auto leading-[1.2em] ' >
        Stay informed about special offers </p>
        <p className='text-[white] font-[400] text-[1.1em] w-[80%] my-2 mx-auto leading-[1.2em] ' >
        Subscribe to our bews letter</p>
        <article className="inputbtn "> 
      <div className="inputdiv">
        <input type="email" placeholder='Enter Your Email' 
        className="input p-3 rounded-[1.2em] mt-[1em] bg-[white] text-[#ABABAB] " />
      </div>
      <div className="btn mt-5 ">
        <Button 
        style={{
          padding:"0.75em 1.75em"
        }}
        text="Subscribe" />
      </div>
      </article>
      <section className="info">
        <article className="infos">
          <div className="infox flex">
            <div className="icon"> 
            <FontAwesomeIcon className='text-[2em]  text-[white] ' icon={faMapMarkerAlt } />
            </div>
            <div className="text"></div>
          </div>
          <div className="infox flex">
            <div className="icon"> 
            <FontAwesomeIcon className='text-[1.7em]  text-[white] ' icon={faClock } />
            </div>
            <div className="text"></div>
          </div>
        </article>
      </section>
      </section>
    </div>
    </main>
  );
};

export default Footer;