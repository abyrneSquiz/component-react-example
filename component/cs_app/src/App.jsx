import React from "react";
import { useState } from 'react';
import './default.scss';


function ModuleComp({feed}) {

  let [fetchData,setFetchdata] = useState(null)

  if(!fetchData){     
    fetch(feed).then((response)=>{ return response.json() } ).then((d)=>setFetchdata(d) )
  }

  /** Render component */
  return (
    <div>
      {fetchData ? ( 
      <div>
        <h2>Quotes</h2>
        <p>From the api: {feed}</p>
        {fetchData? <ul>{fetchData.map((d,i)=>{return <li>{d.text}</li>})}</ul>: <span></span>}
       </div>
      )
       : (
        <div>Loading......</div>
      )}
    </div>
  );
}

export default ModuleComp;
