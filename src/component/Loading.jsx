import React from 'react';
import { LoadingContainer } from './loadingStyles';
import { MutatingDots } from 'react-loader-spinner';


function Loading() {
  return (  
    <LoadingContainer>
      <MutatingDots 
       height="200"
       width="200"
       color= "#FFE5B4"
       secondaryColor= "#FFE5B4"
       radius='12.5'
       ariaLabel="mutating-dots-loading"
       wrapperStyle={{}}
       wrapperClass=""
       visible={true}
 />
    </LoadingContainer>
    
  )
}

export default Loading