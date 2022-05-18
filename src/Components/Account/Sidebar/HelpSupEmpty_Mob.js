import React from 'react';
import {Link} from 'react-router-dom'
import bookchall from '../../../Images/drawable-xxxhdpi/Path 31939.png';
import bookchall1 from '../../../Images/drawable-xxxhdpi/Path 31754.png';
import notrich from '../../../Images/drawable-xxxhdpi/Group 34804.png';

const HelpSupEmpty_Mob = () => {
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
                <Link to="/HelpTicke_Mob"><li className="helpme12"><button>Get Help</button></li></Link>
              </ul>
            </div>
            <div className="centeresti">
                <div>
              <img src={notrich} alt="error"/>
              <h6>No tickets found!!</h6>
        
        </div>
            </div>
</div>
  )
}

export default HelpSupEmpty_Mob