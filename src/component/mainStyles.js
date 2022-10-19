import styled from "styled-components"


export const MainContainer = styled.div`
margin:8em 8em;
align-items:center;
height:400px;
width:700px;
background-color:#0F1633;
color:#FFE5B4;
padding:20px 60px 0px 40px;
border-radius:10px;
.main-title{
    font-family: 'PT Sans', sans-serif;
    font-weight:400;
    text-transform: uppercase;
    font-size: 2.5rem;
}
.main-cards{
    display: flex;
    justify-content:space-between;
    margin-top:40px;
    
        .card{
            height:180px;
            width:170px;
            gap:20px;
            padding:20px;
            background-color:#152F5F;
            border-radius:5px;
        
        .card-title{
         position:relative;
         top:0
         left:0
        }
        .card-figure{
            padding-top:20px;
            font-size:2rem;
           
        }
    }
}

@media only screen and (max-width: 600px) {
    margin:2em 2em;
    align-items:center;
    text-align: center;
    height:500px;
    width:200px;
    background-color:#0F1633;
    color:#FFE5B4;
    padding:5px 20px 0px 20px;
    border-radius:5px;
    .main-title{
        font-family: 'PT Sans', sans-serif;
        font-weight:400;
        text-transform: uppercase;
        font-size: 0.5rem;
    }
    .main-cards{
        display: flex;
        flex-direction:column;
        align-content:center;
        align-items:center;
        margin-top:20px;
        
            .card{
                height:100px;
                width:90px;
                margin-top:20px;
                padding:10px;
                background-color:#152F5F;
                border-radius:5px;
                font-size: 0.5rem;
            
            .card-title{
             position:relative;
             top:0
             left:0
             font-size: 0.5rem;
            }
            .card-figure{
                padding-top:20px;
                font-size:0.75rem;
               
            }
        }
    }  
}

`
export const CaseContainer = styled.div`
margin:8em 8em;
align-items:center;
height:400px;
width:700px;
background-color:#0F1633;
color:#FFE5B4;
padding:20px 60px 5px 40px;
border-radius:30px;
.analysis{
    display:flex;
    justify-content:space-between;
    margin-top:30px;
    .analysis-section{
        align-items:center;
       
        .analysis-title{
            font-family: 'PT Sans', sans-serif;
            font-weight:400;
            text-transform: uppercase;
            font-size: 1.5rem;
            text-align:center;
            
        }
        .graph{
            display:flex;
            justify-content:center;
            padding-top:20px;
            
        }
    }
    .analysis-cards{
        display: grid;
        grid-template-columns: auto auto;
        gap:30px;
        .case-card{
                height:100px;
                width:120px;
                margin-top:20px;
                padding:10px;
                background-color:#152F5F;
                border-radius:5px;
                font-size: 0.75rem;
            .case-card-title{
                position:relative;
                top:0
                left:0
                
                
 }
            .case-card-figure{
                padding-top:20px;
                font-size:1.5rem;
                
            }
        }
    }
}

@media only screen and (max-width: 600px) {
    margin:2em 2em;
    align-items:center;
    text-align: center;
    height:900px;
    width:200px;
    background-color:#0F1633;
    color:#FFE5B4;
    padding:5px 20px 0px 20px;
    border-radius:5px;
    .analysis{
        font-family: 'PT Sans', sans-serif;
        font-weight:400;
        text-transform: uppercase;
        font-size: 0.5rem;
        display:block;
        .analysis-section{
            align-items:center;
            display:block;
            
           
            .analysis-title{
                 
                 font-weight:400;
                 text-transform: uppercase;
                 font-size: 0.5rem;
                 text-align:center;
                 
                
            }
            .graph{
                display:flex;
                justify-content:center;
                padding-top:20px;
               
                
            }
        }
        .analysis-cards{
            display: flex;
            flex-direction:column;
            align-content:center;
            align-items:center;
            margin-top:10px;
            .case-card{
                height:100px;
                width:90px;
                background-color:#152F5F;
                padding:10px;
                border-radius:5px;
                font-size:0.75rem; 
                .case-card-title{
                    font-size: 0.5rem;
                    font-weight:400;
                    position:relative;
                    top:0
                    left:0
                }
                .case-card-figure{
                    padding-top:20px;
                    font-size:0.75rem;
                    
                }
            }
        }
    }
    
}


`