import React from 'react';
import ReactJson from 'react-json-view'
import { Loader } from 'rsuite';
import "rsuite/dist/rsuite.min.css"
 export default function Results (data){

 
 

    return (
      <section>
       {/* <pre> </pre>  */}
       {data ?  <ReactJson src={data} />: <Loader/>}<Loader/>
      </section>
  
    );
  
}


