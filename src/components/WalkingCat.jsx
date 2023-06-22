import React from 'react';
import { styles } from "../styles";

function WalkingCat() {
  
  
  return (

    
    <>
    <br/><br/>
    <h2 className={`${styles.sectionHeadText} text-center`}>Example Css Animations</h2>
<div className='row items-center justify-evenly'>
    
      <div className="loader"></div>
      <div className="hourglass">
        <span className="top"></span>
        <span className="bottom"></span>
    </div>
    
     
    
    <div className="one"></div>    


      <div className="grid-container">
        
            <div className="cell a"></div>
            <div className="cell b"></div>
            <div className="cell c"></div>
        
            <div className="cell b"></div>
            <div className="cell c"></div>
            <div className="cell d"></div>
        
            <div className="cell c"></div>
            <div className="cell d"></div>
            <div className="cell e"></div>
              
    </div>
      
      
      
      </div>
    </>

  );
}

export default WalkingCat;
