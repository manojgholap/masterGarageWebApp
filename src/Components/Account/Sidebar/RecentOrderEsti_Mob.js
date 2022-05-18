import React from 'react';
import {Link} from 'react-router-dom'
import scan from '../../../Images/drawable-xxxhdpi/Path 31771.png';
import vehical from '../../../Images/balano.jpg';
import del from '../../../Images/drawable-xxxhdpi/Group 31583.png';
import fast from '../../../Images/drawable-xxxhdpi/netc-fastag-logo-vector.png';
import challen from '../../../Images/drawable-xxxhdpi/Path 31913.png';
import insuren from '../../../Images/drawable-xxxhdpi/Path 31758.png';
import pucc from '../../../Images/drawable-xxxhdpi/Group 32377.png';
import firstchoice from '../../../Images/drawable-xxxhdpi/firstchoice.png';
import lcate from '../../../Images/drawable-xxxhdpi/Path 31705.png';


const RecentOrderEsti_Mob = () => {
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
            <div className="">

              <div className="mainEsti m-3">
                  <div className="headestimatedet">
                  <div className="estimatedetaila px-3">
                      <p className="firstchoice"><img src={firstchoice} alt="error"/></p>
                     <div className="getfirstdet">
                         <h6>Mahindra First Choice</h6>
                         <p><img src={lcate} alt="error"/> Kandivali East  400 101 | 900 mtrs</p>
                     </div>
                  </div>
              <i class="fa-solid fa-share-nodes"></i>
              <i class="fa-solid fa-diamond-turn-right"></i>
              </div>
              <div>
                  <div className="bookonof p-3">
                      <h6>Booking ID: MG1234567890 </h6>
                      <p>Ongoing</p>
                  </div>
                  <div className="bookonof1 px-3">
                      <p className='classmore'>Basic Service, Car Inspection, Starter Motor 
Repair + 1 more</p>
<p>₹ 6459</p>
                  </div>
                  <div className="bookonof12 px-3">
                      <div>
                          <p>Service Schedule</p>
                          <h6>21/01/2021  at  11.00 AM</h6>
                      </div>
                      <div className="statusinfo">
                          <p>Status</p>
                          <h6>Work in Progress</h6>
                      </div>
                  </div>
              </div>
                <div className="m-3 viewesti">
                 <Link to="/OrderEmpty_Mob"><button>Track ORDER</button></Link> 
                </div>
              </div>

              <div className="mainEsti m-3">
                  <div className="headestimatedet">
                  <div className="estimatedetaila px-3">
                      <p className="firstchoice"><img src={firstchoice} alt="error"/></p>
                     <div className="getfirstdet">
                         <h6>Mahindra First Choice</h6>
                         <p><img src={lcate} alt="error"/> Kandivali East  400 101 | 900 mtrs</p>
                     </div>
                  </div>
              <i class="fa-solid fa-share-nodes"></i>
              <i class="fa-solid fa-diamond-turn-right"></i>
              </div>
              <div>
                  <div className="bookonof p-3">
                      <h6>Booking ID: MG1234567890 </h6>
                      <p id="statecancel">Cancelled</p>
                  </div>
                  <div className="bookonof1 px-3">
                      <p className='classmore'>Basic Service, Car Inspection, Starter Motor 
Repair + 1 more</p>
<p>₹ 6459</p>
                  </div>
                  <div className="bookonof12 px-3">
                      <div>
                          <p>Service Schedule</p>
                          <h6>21/01/2021  at  11.00 AM</h6>
                      </div>
                      <div className="statusinfo">
                          <p>Status</p>
                          <h6 id="statecancel">Cancelled</h6>
                      </div>
                  </div>
              </div>
                <div className="m-3 viewestimulti">
                  <button>BOOK AGAIN</button>
                  <button>View Details</button>
                </div>
              </div>

              <div className="mainEsti m-3">
                  <div className="headestimatedet">
                  <div className="estimatedetaila px-3">
                      <p className="firstchoice"><img src={firstchoice} alt="error"/></p>
                     <div className="getfirstdet">
                         <h6>Mahindra First Choice</h6>
                         <p><img src={lcate} alt="error"/> Kandivali East  400 101 | 900 mtrs</p>
                     </div>
                  </div>
              <i class="fa-solid fa-share-nodes"></i>
              <i class="fa-solid fa-diamond-turn-right"></i>
              </div>
              <div>
                  <div className="bookonof p-3">
                      <h6>Booking ID: MG1234567890 </h6>
                      <p id="confirmbook">Completed</p>
                  </div>
                  <div className="bookonof1 px-3">
                      <p className='classmore'>Basic Service, Car Inspection, Starter Motor 
Repair + 1 more</p>
<p>₹ 6459</p>
                  </div>
                  <div className="bookonof12 px-3">
                      <div>
                          <p>Service Schedule</p>
                          <h6>21/01/2021  at  11.00 AM</h6>
                      </div>
                      <div className="statusinfo">
                          <p>Status</p>
                          <h6 id="confirmbook">Vehicle Delivered</h6>
                      </div>
                  </div>
              </div>
              <div className="m-3 viewestimulti">
                  <button>BOOK AGAIN</button>
                  <button>View Details</button>
                </div>
              </div>
            </div>
</div>
  )
}

export default RecentOrderEsti_Mob