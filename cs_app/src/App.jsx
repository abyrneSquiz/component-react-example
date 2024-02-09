import React from "react";
import './default.scss';

function ModuleComp() {
 
  let data = true;
  /** Render component */
  return (
    <div>
      {data ? ( 
      <div>
        <h2>Hello</h2>
        <p>World wide</p>
       </div>
      )
       : (
        <div>Loading......</div>
      )}
    </div>
  );
}

export default ModuleComp;
