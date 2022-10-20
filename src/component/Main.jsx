import React from 'react'
import { MainContainer, CaseContainer } from './mainStyles'
import { Chart as ChartJS, ArcElement, Tooltip } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import Loading from './Loading';

function Main({info ,isloading}) {

   function getmain(){
      if(isloading){
         return <Loading />
      }else{
         return( 
         <>
            <MainContainer>
             <hi className="main-title">Coronavirus Updates in <br/> {info.countryName}</hi>
             <div className="main-cards">
                <div className="card">
                   <div className="card-title">Population</div>
                   <div className="card-figure">{info.population}</div>
                </div>
                <div className="card">
                   <div className="card-title">Total Cases</div>
                   <div className="card-figure">{info.totalCases}</div>
                </div>
                <div className="card">
                   <div className="card-title">Total Tests</div>
                   <div className="card-figure">{info.totalTests}</div>
                </div>
             </div>
           </MainContainer>
           <CaseContainer>  
             <div className="analysis">
               <div className="analysis-section">
                  <hi className="analysis-title">Analysis of Cases</hi>
                  <div className="graph" style={{margin: "auto", height: "10vh", width: "20vw" }}>
                     <Doughnut data={details} />
                  </div>
               </div>
               
       
               <div className="analysis-cards">
                  <div className="case-card">
                      <div className="case-card-title">Active Cases</div>
                      <div className="case-card-figure " style={{color: '#FFF500'}}>{info.activeCases}</div>
                  </div>
       
                   <div className="case-card">
                      <div className="case-card-title">Death Cases</div>
                      <div className="case-card-figure" style={{color: '#FF0000'}}>{info.totalDeaths}</div>
                   </div>
       
                   <div className="case-card">
                      <div className="case-card-title">Recovered Cases</div>
                      <div className="case-card-figure" style={{color: '#00FF03'}}>{info.totalRecovered}</div>
                  </div>
       
                  <div className="case-card">
                      <div className="case-card-title">Test Cases</div>
                      <div className="case-card-figure">{info.tests}</div>
                  </div>
              </div>
           </div>
             
            
            </CaseContainer>
        </>)
      }
   }




ChartJS.register(ArcElement, Tooltip);

 const data =  [`${info.activeCases}`, `${info.totalDeaths}`,`${info.totalRecovered}`]
 const dynamicData = data.map((num) => parseInt(num.replace(/,/g, '')));
 

      const details =  {
         labels: [],
         datasets:[
            {
               data: dynamicData,
               backgroundColor: [
                '#FFF500',
                '#FF0000',
                '#00FF03',
               ],

               borderColor: [
                '#FFF500',
                '#FF0000',
                '#00FF03',
               ],
            },
         ],
         innerRadius: "99%",
         fontStyle:'PT Sans',
         cutoutPercentage: 90
      }

 return (
  <>
   {getmain()}
   </>

  )
}

export default Main