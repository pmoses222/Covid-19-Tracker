import React from 'react'
import {ErrorContainer} from "./errorStyles"


function ErrorPage({err}) {

    
  return (
    <>
    <ErrorContainer>
        <div className = "error">{err}</div>
    </ErrorContainer>
    </>
    
  )

  
}

export default ErrorPage