import React from 'react'
import './Left.css'
import { IoLocationOutline } from "react-icons/io5";

const Left = ({setcity,weatherapi}) => {

    const handleCityChange = (e) => {
      console.log(e.target.value);
      setcity(e.target.value);
    };

  return (
 
  <>
  {
   Object.keys(weatherapi).map(()=>{

      return(
        
          <div className='left'>
          <div className="input">
      <input type="text" defaultValue={'new delhi'} onChange={handleCityChange} placeholder='Search any city' />
      <IoLocationOutline color='white'  size={20}/>
      </div>
      
      <div className="day-icon">
      
      </div>
      
      <div className="temprature">
      {weatherapi.current.temp_c}°c <img src={weatherapi.current.condition.icon} alt="" />
      </div>
      <div className="city-name">
        {weatherapi.location.name}
      </div>
      
      <div className="date">
       
      </div>
      </div>
        
      )
    })
  }
  </> 

  )
}

export default Left
