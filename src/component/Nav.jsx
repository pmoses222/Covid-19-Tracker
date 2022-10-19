import React from 'react'
import {FaSearch} from "react-icons/fa"
import {NavContainer} from "./navStyles"

function Nav({country,handleChange,fetchData}) {
  return (
    <NavContainer>
       <div className="nav">
            <div className="logo">
              Covid-19<br/>Tracker
            </div>
            <div className="search">
                  <input type="text" 
                  placeholder="Search your Country" 
                  className="input"
                  value = {country} 
                  onChange={handleChange}/>
                  <button 
                    className='button' 
                    onClick={fetchData}><FaSearch  />
                  </button>
            </div>      
            
        </div>
    </NavContainer>
       
    
  )
}

export default Nav