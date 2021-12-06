import React from 'react';
import { Loader } from 'rsuite';
import "rsuite/dist/rsuite.min.css"
 export default function Results (data){


    return (
      
      <section>
       <pre>  
       {data ? JSON.stringify(data, undefined, 2) : <Loader/>}</pre> <Loader/>
      </section>
    );
  
}


