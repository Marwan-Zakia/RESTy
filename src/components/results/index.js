import React from 'react';
import ReactJson from 'react-json-view'

import "rsuite/dist/rsuite.min.css"
 export default function Results (data){

//  console.log(data);
 

    return (
      <section>
        <ReactJson src={data} />
     
      </section>
      
  
    );
  
}


