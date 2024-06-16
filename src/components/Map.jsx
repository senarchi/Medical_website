{/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3687.1987349392607!2d88.31715147434963!3d22.45916493712024!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a027a8377ec43f7%3A0x6bb29295c2d2b745!2sSaroj%20Gupta%20Cancer%20Center%20%26%20Research%20Institute!5e0!3m2!1sen!2sin!4v1718513500198!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}

import React from 'react'

 const Map = () => {
  return (
   
         <div className="map-container">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3687.1987349392607!2d88.31715147434963!3d22.45916493712024!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a027a8377ec43f7%3A0x6bb29295c2d2b745!2sSaroj%20Gupta%20Cancer%20Center%20%26%20Research%20Institute!5e0!3m2!1sen!2sin!4v1718513500198!5m2!1sen!2sin"
        width="100%"
        height="450"
        style={{ border: 0}}
        allowFullScreen=""
        loading="lazy"
        title="Thakurpukur Cancer Hospital Location"
        
      ></iframe>
    </div>
    
  )
}

export default Map;
