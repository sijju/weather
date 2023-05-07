import { useEffect, useState } from 'react'
import './app.css'
import React from 'react'
import axios from 'axios'
import Card from './components/Card'



function App() {
  
  const [city,setCity] = useState('')
  const [lat,setLat] = useState('')
  const [long,setLong] = useState('')
  const [data,setData] = useState([])
  const [visible,setVisible] = useState(false)
  const [type,setType] = useState('city')
  
  

  const dataSend = {
    'city' : city,
    'lat': lat,
    'long' : long
  }

  const getData = async() =>{
    
      await axios.post('https://sijju.pythonanywhere.com/api/getData',dataSend)
      
      .then(result => {
        setData(result.data.data)
        setVisible(true)
        setCity('')
        setLat('')
        setLong('')
      })
       
  }

  const handlePress = async(event) =>{
    if(event.key === 'Enter'){
     await getData()
    }
  }
  
  
  
  
  return (
  
    <div className='container'>
     
      <div className="search">
        { type === 'city' ?( 
          
          <input type="text" placeholder='Enter Your city' onChange={e=>setCity(e.target.value)} value={city} onKeyDown={handlePress} /> ) 
          : (<>
          <input className='lat' type="number" placeholder='lat' onChange={e=>setLat(e.target.value)} value={lat} onKeyDown={handlePress} />
          <input className='lat' type="number" placeholder='long' onChange={e=>setLong(e.target.value)} value={long} onKeyDown={handlePress} />

        </>
        )
      }
        <button onClick={getData} className='btn-grad'>Search</button>
      </div>
      
      
      <div className="options">
        <h6>Search by:</h6>
        <button className='btn-select' onClick={()=>setType('city')}>City name</button>
        <button className='btn-select' onClick={()=>setType('lat')}>lat&long</button>

      </div>
      
      
     {visible  && 
      <div className="details">
         <Card data={data} />
         <button className='btn-danger' onClick={()=>setVisible(false)}>Clear</button>
      </div>
      }
    </div>
   
  )
}

export default App
