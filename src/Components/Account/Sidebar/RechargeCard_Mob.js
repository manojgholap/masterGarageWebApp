import React from 'react'
import {Link} from 'react-router-dom'
import otherchat from '../../../Images/drawable-xxxhdpi/Group 34984.png';
import card1 from '../../../drawable-xxxhdpi/Group 34969.png';
import card2 from '../../../drawable-xxxhdpi/Group 34970.png';
import card3 from '../../../drawable-xxxhdpi/Group 34971.png';
import fast12 from '../../../Images/ImagesAll/drawable-xxxhdpi/drawable-xxxhdpi/netc-fastag-logo-vector.png';
import fast from '../../../Images/ImagesAll/drawable-xxxhdpi/netc-fastag-logo-vector.png';
import fastlog from '../../../Images/ImagesAll/drawable-xxxhdpi/Group 30651.png';
import '../../MobileView/vehical.css'
const RechargeCard_Mob = () => {
  return (
    <div className="walletgetdata">
    <div className="main_account_head_1346">
         <div className="nav_mobff px-2"> 
 <div className="arrow_marge_21"><i class="fa-solid fa-arrow-left"></i> <h6 className="arrow_non"> </h6></div>
     <div className="px-2 navmob2226">
     <i class="fa-solid fa-bell"></i>
     </div>
 </div>
 <div className="allwalletmore">
     <div className="putinwallet px-3">
        <div className="subsub_garage"><img src={fastlog} alt="error"/><h5>FASTag</h5></div> 
         <p>Manage all your conversations at one place</p>
     </div>
     <div className="ruppess1">
     <img src={fast} alt="error"/>
     </div>
 </div>
</div>

<div className="p-2">
      <h5> Recharge your Fastag</h5>
         <div className='maincontfastMob'>
      <div className="fastageMob m-3">
          <ul className='someulfast'>
            <li>Vehicle number</li>
            <li>Chassis number</li>
          </ul>

          <input className="inputfastage" placeholder="Type your vehicle no. here"/>
         <Link to="/RechargeCoupan_Mob"> <button>Recharge</button></Link>
      </div>
      </div>
</div>
<div className="otherchatsub">
   <h5>Select from your linked tags</h5>
   <ul className="cardeslist">
      <li><img src={card1} alt="error"/></li>
      <li><img src={card2} alt="error"/></li>
      <li><img src={card3} alt="error"/></li>
   </ul>
 </div>
<div className="otherchatsub">
  <h5>Other</h5>
  <div className="otherchat"><img src={otherchat} alt="error"/></div>
</div>
<div className="otherchatsub1">
  <div><img src={fast12} alt="error"/></div>
  <h6>No tags linked yet!</h6>
<div><p>You can link your Fastag by adding your vehicle to My Garage</p></div>
</div>
</div>
  )
}

export default RechargeCard_Mob