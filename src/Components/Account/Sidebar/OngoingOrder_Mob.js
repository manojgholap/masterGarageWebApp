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
import bookchall from '../../../Images/drawable-xxxhdpi/Path 31938.png';
import bookchall1 from '../../../Images/drawable-xxxhdpi/Path 31928.png';
import notrich from '../../../Images/drawable-xxxhdpi/Group 32433.png';
import balano from '../../../Images/drawable-xxxhdpi/balano.jpg';

const OngoingOrder_Mob = () => {
  return (
  
<div className="walletgetdata">
    <div className="main_account_head1">
         <div className="nav_mobff px-2"> 
 <div className="arrow_marge_21"><i class="fa-solid fa-arrow-left"></i> <h6 className="arrow_non"> </h6></div>
     <div className="px-2 navmob224">
     <i class="fa-solid fa-bell"></i>
     </div>
 </div>
 <div className="allwalletmore">
     <div className="putinwallet px-3">
        <div className="subsub_garage"><img src={bookchall} alt="error"/><h5>My Orders</h5></div> 
         <p>Manage all your bookings at on place</p>
     </div>
     <div className="ruppess1">
     <img src={bookchall1} alt="error"/>
     </div>
 </div>
</div>
<div className="btnservice">
    <ul className="All_Main12">
        <li><button>All</button></li>
        <li className="btnbig"><button>Services & Repairs</button></li>
        <li className="btnbig"><button>Car Wash</button></li>
        <li><button>Fastag</button></li>
        <li><button>Challans</button></li>
        <li><button>Parkings</button></li>
        <li><button>Chauffers</button></li>
        <li><button>Insurance</button></li>
        <li><button>Cars</button></li>
    </ul>
</div>
           
<div className="estinav">
              <ul>
              <Link to="/OngoingOrder_Mob" className="estilink">  <li>Ongoing Orders</li></Link>
               <Link to="/OrderHis_Mob"  className="estilink"> <li>Orders History</li></Link>
                <Link to="/HelpSupEmpty_Mob"><li className="helpme"><button>Get Help</button></li></Link>
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
                      <p>Ongoing</p>
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
                  <div className="bookonof12 px-3">
                      <div>
                          <p>Service Schedule</p>
                          <h6>21/01/2021  at  11.00 AM</h6>
                      </div>
                      <div className="statusinfo">
                          <p>Status</p>
                          <h6>Inspection & Diagnostics</h6>
                      </div>
                  </div>
              </div>
                <div className="m-3 viewesti">
                 <Link to="/OrderEmpty_Mob"><button>Track ORDER</button></Link> 
                </div>
              </div>
            </div>
</div>
  )
}

export default OngoingOrder_Mob