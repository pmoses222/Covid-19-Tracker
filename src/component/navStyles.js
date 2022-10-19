import styled from "styled-components"

export const NavContainer = styled.div`
padding-top:0.5em;
.nav {
    display:flex;
    justify-content: space-around;
    gap:100px;
    
    .logo{
        text-transform:uppercase;
        font-weight:700;
        color:#FFE5B4;
        padding:5px;
        border:1px solid #FFE5B4;
        border-radius:10px;
    }
    .search{
        display:flex;
        justify-content:center;
        width:auto;
        cursor:pointer;
        width:30%;
       align-item:center;
        .input{
          background-color:#0F1633;
          border-radius:30px 0 0 30px;
          font-family: 'PT Sans', sans-serif;
          width:100%;
          border:none;
          outline:none;
          color:#FFE5B4;
          cursor:pointer;
          padding-left:80px;
          &:placeholder{
             font-size:0.75rem;
             font-family: 'PT Sans', sans-serif;
             text-transform:uppercase;
            }
          &:focus{
             font-size:0.75rem;
             font-family: 'PT Sans', sans-serif;
             text-transform:uppercase;
          }
           
        }
        .button{
            padding:10px;
            border:none;
            background-color:#0F1633;
            color:#FFE5B4;
            border-radius:0 30px 30px 0;
            cursor:pointer;
        }

        
    }
}

@media only screen and (max-width: 600px) {
    padding-top:0.2em;
    .nav {
        display:flex;
        justify-content: space-around;
        
        .logo{
            text-transform:uppercase;
            font-weight:400;
            font-size:0.5rem;
            color:#FFE5B4;
        }
        .search{
            display:flex;
            justify-content:center;
            cursor:pointer;
            width:30%;
            align-item:center;
            .input{
              background-color:#0F1633;
              border-radius:10px 0 0 10px;
              width:50%;
              border:none;
              outline:none;
              color:#FFE5B4;
              cursor:pointer;
              padding-left:30px;
              &::placeholder{
                 font-size:0.3rem;
                 font-family: 'PT Sans', sans-serif;
                 color:#FFE5B4;
                 text-transform:uppercase;
                 text-align:center;
                 
              }
               
            }
            .button{
                padding:5px;
                border:none;
                background-color:#0F1633;
                color:#FFE5B4;
                border-radius:0 10px 10px 0;
                cursor:pointer;
                
            }
    
            
        }
    }
  }


`

