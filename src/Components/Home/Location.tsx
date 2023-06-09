import React from 'react'
import "./Home.css"
import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';

const Location = () => {
  return (
    <main className=' pb-[7em] bg-[#F5E7C1] px-[1.5em]' >
      <section className="contetn  mt-[-1px]  pt-[5em] "> 
    <h1 className="text-[2.6em] text-[#E84242] font-['Rakkas'] font-[700] mb-[0.75em]
     " >Contactless delivery  available</h1>
          <div className="locate mb-[1em] ">
        <h2 className="locate-head font-[600] text-[1.3em] text-[black] ">Order by phone</h2>
        <p className="locate-content  text-[1.75em] text-[#E84242] font-[600] ">1-800-700-600</p>
      </div>
     <section className="locations">
      <div  className="locate mb-[1em] ">
        <h2 className="locate-head font-[600] text-[1.3em] text-[black] mb-[0.75em]">Location</h2>
        <p className="locate-content text-[#201912]">60 East 65th Street, New York</p>
      </div>

      <div  className="locate mb-[1em] ">
        <h2 className="locate-head font-[600] text-[1.3em] text-[black] mb-[0.75em] ">Delivery hours</h2>
        <h3 className="locate-head font-[500] text-[1em] text-[black]">Monday – Saturday:</h3>
        <p className="locate-content text-[#201912]">11AM – 11PM</p>
        <h3 className="locate-head font-[500] text-[1em] text-[black]  mt-[0.75em] ">Sunday:</h3>
        <p className="locate-content text-[#201912]">111AM – 08PM</p>
      </div>

      <div  className="locate mb-[1em] ">
        <h2 className="locate-head font-[600] text-[1.3em] text-[black] mb-[0.75em] ">Takeaway hours</h2>
        <h3 className="locate-head font-[500] text-[1em] text-[black]">Monday – Saturday:</h3>
        <p className="locate-content text-[#201912]">01PM – 10PM</p>
        <div className="flex mt-[0.75em]"> 
        <p className="locate-head font-[500] text-[1em] text-[black]">Sunday: </p>
        <p className="locate-content ml-1 text-[#201912] ">Closed</p>
        </div>
      </div>
     </section>   
     </section> 

     <section className="map ">
      <article className='bg-[white] p-4 rounded-[1em]' > 
<MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
  <TileLayer
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
  <Marker position={[51.505, -0.09]}>
    <Popup>
      A pretty CSS3 popup. <br /> Easily customizable.
    </Popup>
  </Marker>
</MapContainer>
</article>
     </section>
    </main>

  )
}

export default Location