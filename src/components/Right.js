import React from 'react'
import './Right.css'

const Right = ({weatherapi}) => {
  return (
   <>
   {
    Object.keys(weatherapi).map(()=>{
      return(
        
          <div className='right'>
      
          <div className="right-title">
            Today's Highlight
          </div>
          
          <div className="box-1">
          
            <div className="box-wind">
              <div className="wind-title">
                Wind Status
              </div>
              <div className="wind-speed">
                {weatherapi.current.wind_mph}
              </div>
            </div>
          
            <div className="box-humidity">
          
              <div className="humidity-title">
                Humidity Status
              </div>
              <div className="humidity-status">
                {weatherapi.current.humidity}
              </div>
          
            </div>
            </div>
          
            <div className="box-2">
          
            <div className="box-visi">
              <div className="visi-title">
                Visibility
              </div>
              <div className="visi-speed">
                {weatherapi.current.vis_miles}
              </div>
            </div>
          
            <div className="box-air">
              
              <div className="air-title">
              Air pressure
              </div>
              <div className="air-status">
                {weatherapi.current.pressure_mb}
              </div>
          
            </div>
            </div>
          
          </div>
        
      )
    })
   }
   </>
  )
}

export default Right
