import React, { useState } from 'react'
import axios from "axios"
import Nav from './component/Nav';
import Main from './component/Main';
import ErrorPage from './component/ErrorPage';

function App() {
const [country,setCountry] = useState("nigeria")
const [info, setInfo ] = useState({})
const [isloading , setloading ] = useState(false)
const [err, setErr ] = useState("")

function handleChange(e){
  setCountry(e.target.value)
  return console.log(country)
 
}


  
const options = {
  method: 'GET',
  url: `https://world-covid-19-data-base.p.rapidapi.com/individual_country_data/${country}`,
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
    'X-RapidAPI-Host': 'world-covid-19-data-base.p.rapidapi.com'
  }
};



function fetchData(){
  setloading(true)
  axios.request(options).then(function (response) {
    setInfo(response.data);
    setloading(false)
    
  }).catch(function (errorState) {
    setErr("Error 404: No such country found! Maybe wrong spelling")
    setloading(false)
    
  });
}



  return (
    <>
    { err ? <ErrorPage err ={err}/> :(
      <div className ="container">
        <Nav country = {country} 
          handleChange={handleChange} 
          fetchData={fetchData} />
        <Main info={info} isloading={isloading} />
     </div>) 
   }
      
   </>
    
  )
}

export default App
