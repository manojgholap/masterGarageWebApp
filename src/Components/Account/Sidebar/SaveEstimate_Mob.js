import React from 'react';
import {Link} from 'react-router-dom'
import scan from '../../../Images/drawable-xxxhdpi/Path 31771.png';
import vehical from '../../../Images/balano.jpg';
import del from '../../../Images/drawable-xxxhdpi/Group 31583.png';
import fast from '../../../Images/drawable-xxxhdpi/netc-fastag-logo-vector.png';
import challen from '../../../Images/drawable-xxxhdpi/Path 31913.png';
import insuren from '../../../Images/drawable-xxxhdpi/Path 31758.png';
import pucc from '../../../Images/drawable-xxxhdpi/Group 32377.png';
import cehalen from '../../../Images/drawable-xxxhdpi/Path 31916.png';
import cal from '../../../Images/drawable-xxxhdpi/Path 31912.png';
import setting from '../../../Images/drawable-xxxhdpi/Path 32645.png';
const SaveEstimate_Mob = () => {
  return (
    <div className="add_Top">
    <div className="nav_mob"> 
<div className="arrow_marge"><i class="fa-solid fa-arrow-left"></i> <h6 className="arrow_non"> Alcazar</h6></div>
      <div className="px-3">
          <i class="fa-solid fa-bell"></i>
      </div>
</div>

<div className="vehical_card">
                <img className="scanner" src={scan} alt="error"/>
                    <img src={vehical} alt="error"/>
                
                <div className="detail_veh">
                    <h5>Alcazar</h5>
                    <small>MH 01 AB 3827</small>
                    <p>AMIT JOSHI</p>
                </div>
                <img className="deldel" src={del} alt="error"/>
            </div>
            <div className="estiback">
              <div className='estimate_1 m-3'>
                <div className="estimat">
                      <img src={fast} alt="error"/>
                      <h6 className="rechare">Recharge</h6>
                </div>
                <p>Balance: <small>₹459</small></p>
              </div>
              <div className='estimate_11 m-3'>
                <div className="estimat21">
                <small>  <img src={challen} alt="error"/> Challen</small>
                      <h6 className="rechare">view</h6>
                </div>
                <p>Balance: <small>₹459</small></p>
              </div>
              <div className='estimate_12 m-3'>
                <div className="estimat21">
                      <small><img src={insuren} alt="error"/> Insurance</small>
                      <h6 className="rechare">Renew</h6>
                     
                </div>
                <p>Validity: <small>28, Feb 2018</small></p>
              </div>
              <div className='estimate_13 m-3'>
                <div className="estimat21">
                    <small><img src={pucc} alt="error"/> PUCC</small>  
                   <h6 className="rechare">Update</h6>
                </div>
                <p>Validity: <small>28, Feb 2018</small></p>
              </div>
            </div>
            <div className="estinav">
              <ul>
              <Link to="/SaveEstimate_Mob" className="estilink">  <li>Saved Estimates</li></Link>
               <Link to="/RecentOrderEsti_Mob"  className="estilink"> <li>Recent Orders</li></Link>
         
              </ul>
            </div>
            <div>
             

              <div className="mainEsti">
              <div className="infoesti">
                <img src={cehalen} alt="error"/><h5>4 ESTIMATES</h5>
              </div>
                <ul>
                  <li className='calin'><img src={cal} alt="error"/>
                  <div className="calin1">
                    <small>Saved on</small>
                    <p>21/01/2021  at  11.00 AM</p>
                  </div>
                  </li>
                </ul>
                <ul>
                  <li className='calin'><img src={setting} alt="error"/>
                  <div className="calin1">
                    <small>Services</small>
                    <p>Basic Service, Car Inspection, Starter Motor 
Repair + 1 more</p>
                  </div>
                  </li>
                </ul>

                <div className="m-3 viewesti12">
                  <button>VIEW ESTIMATES</button>
                </div>
              </div>
            </div>
</div>
  )
}

export default SaveEstimate_Mob