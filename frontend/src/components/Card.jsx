import React from 'react'
import './Card.css'
const Card = ({data}) => {
  const res = Object.values(data)
 
  return (
    <div className="wrapper">

      <div className="card">
       {res.length !==0 && res[0]?.code!==1006 ? <>
        <h2>{res[0]?.name},{res[0]?.country}</h2>
        <p>lat : {res[0]?.lat} | long : {res[0]?.lon}</p>
        <div className="weather">
          <h3>{res[1]?.condition.text}</h3>
          <img src={res[1]?.condition.icon} alt="icon" />
        </div>
        <div className="sun">
          <p> humidity : {res[1]?.humidity}%</p>
          <p> temp : {res[1]?.temp_c}°C</p>
          <p>wind : {res[1]?.wind_kph} kph</p>
          <p>feels_like : {res[1]?.feelslike_c}°C</p>
        </div>
       </> : res[0]?.code === 1006 ? <h3>{res[0]?.message}</h3>  :
       <>
       <h3>Something went wrong!!!</h3>
       <p>check if you entered correct details!!!</p>
       </>
       }
      </div>
      
    </div>
    
  )
}

export default Card