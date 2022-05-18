import React from 'react';
import {Link} from "react-router-dom";
import congo from '../../Images/drawable-xxxhdpi/Group 32001.png';
import qrscan from '../../Images/drawable-xxxhdpi/Group 18598.png';

import './vehical.css'
const Congratulation_Mob = () => {
  return (
    <div class="add_Top">
      <div className="progressbar_1211">
      <div className="prog">   
      </div>
      <div className="pagesize1"><li></li><li>|</li><li>|</li><li>|</li><li>|</li><li></li></div>
      <div className="pagesize">
           <li>E</li>
           <li>Vehical</li>
           <li>Service</li>
           <li>Garage</li>
           <li>Basic</li>
           <li>F</li>
      </div> 
  </div>
  <div className="righttick">
    <div>
  <img src={congo} alt="error"/>
 <Link to="/mobaccount"><div className="congo_ti">
    <h5>Congratulations!</h5>
    <small>Your booking has been accepted</small>
  </div></Link> 
  </div>
  </div>
   <div>
      <div>
        <img src={qrscan} alt="error"/>
      </div>
   </div>
    </div>
  )
}

export default Congratulation_Mob