import React from 'react';
import {Link} from 'react-router-dom'
import bookchall from '../../../Images/drawable-xxxhdpi/Path 31939.png';
import bookchall1 from '../../../Images/drawable-xxxhdpi/Path 31754.png';
import notrich from '../../../Images/drawable-xxxhdpi/Group 34804.png';
import firstchoice from '../../../Images/drawable-xxxhdpi/firstchoice.png';
import lcate from '../../../Images/drawable-xxxhdpi/Path 31705.png';
import balano from '../../../Images/drawable-xxxhdpi/balano.jpg';

const MyTicket_Mob = () => {
  return (
    <div className="walletgetdata">
    <div className="main_account_head_13">
         <div className="nav_mobff px-2"> 
 <div className="arrow_marge_21"><i class="fa-solid fa-arrow-left"></i> <h6 className="arrow_non"> </h6></div>
     <div className="px-2 navmob222">
     <i class="fa-solid fa-bell"></i>
     </div>
 </div>
 <div className="allwalletmore">
     <div className="putinwallet px-3">
        <div className="subsub_garage"><img src={bookchall} alt="error"/><h5>Help & Support</h5></div> 
         <p>Read FAQs, Raise Help and Track Tickets</p>
     </div>
     <div className="ruppess1">
     <img src={bookchall1} alt="error"/>
     </div>
 </div>
</div>
<div className="estinav">
              <ul>
              <Link to="/MyTicket_Mob" className="estilink">  <li>My Tickets</li></Link>
               <Link to="/HelpFaq_Mob"  className="estilink"> <li>FAQs</li></Link>
                <Link><li className="helpme12"><button>Get Help</button></li></Link>
              </ul>
            </div>
            <div className="mainEsti m-3">
                  <div className="headestimatedet">
              <h6>Garage is taking too much time to complete the service</h6>
              </div>
              <div>
                  <div className="bookonof p-3">
                      <h6>Ticket No: MG1234567890 </h6>
                      <p id="statecancel">Open</p>
                  </div>
                  <div className="bookonof12 px-3">
                      <div>
                          <p>Service Schedule</p>
                          <h6>21/01/2021  at  11.00 AM</h6>
                      </div>
                      <div className="statusinfo">
                          <p>Booking ID</p>
                          <h6 id="">MG123456</h6>
                      </div>
                  </div>
                  <div className="bookonof1 p-3">
                      <div className='classmore'>
                        <p>MH 04 AB 3827</p>
                        <h6>Maruti Suzuki  XL6</h6>
                      </div>
<p><img src={balano} alt="error"/></p>
                  </div>
                  <div className="bookonof1 px-3">
                      <p className='classmore'>Basic Service, Car Inspection, Starter Motor 
Repair + 1 more</p>
<p>₹ 6459</p>
                  </div>
                
              </div>
              <div className="m-3 viewesti">
                 <Link to="#"><button>CHAT</button></Link> 
                </div>
              </div>


              <div className="mainEsti m-3">
                  <div className="headestimatedet">
              <h6>Garage is taking too much time to complete the service</h6>
              </div>
              <div>
                  <div className="bookonof p-3">
                      <h6>Ticket No: MG1234567890 </h6>
                      <p id="statecancel">Open</p>
                  </div>
                  <div className="bookonof12 px-3">
                      <div>
                          <p>Service Schedule</p>
                          <h6>21/01/2021  at  11.00 AM</h6>
                      </div>
                      <div className="statusinfo">
                          <p>Booking ID</p>
                          <h6 id="">MG123456</h6>
                      </div>
                  </div>
                  <div className="bookonof1 p-3">
                      <div className='classmore'>
                        <p>MH 04 AB 3827</p>
                        <h6>Maruti Suzuki  XL6</h6>
                      </div>
<p><img src={balano} alt="error"/></p>
                  </div>
                  <div className="bookonof1 px-3">
                      <p className='classmore'>Basic Service, Car Inspection, Starter Motor 
Repair + 1 more</p>
<p>₹ 6459</p>
                  </div>
                
              </div>
              <div className="m-3 viewesti">
                 <Link to="#"><button>CHAT</button></Link> 
                </div>
              </div>
</div>
  )
}

export default MyTicket_Mob