import React from 'react'
import {Link} from 'react-router-dom'
import bookchall from '../../../Images/drawable-xxxhdpi/Path 31939.png';
import bookchall1 from '../../../Images/drawable-xxxhdpi/Path 31754.png';
import notrich from '../../../Images/drawable-xxxhdpi/Group 34804.png';
import lev from '../../../Images/drawable-xxxhdpi/Group 32201.png';
import smlev from '../../../Images/drawable-xxxhdpi/Group 32638.png';
import coining from '../../../Images/drawable-xxxhdpi/Group 19334.png';
import copyline from '../../../Images/drawable-xxxhdpi/Group 32427.png';
import social from '../../../Images/drawable-xxxhdpi/Group 32319.png';
import gift from '../../../Images/drawable-xxxhdpi/Path 31883.png';
import smgift from '../../../Images/drawable-xxxhdpi/Path 31940.png';
import firstchoice from '../../../Images/drawable-xxxhdpi/firstchoice.png';
import lcate from '../../../Images/drawable-xxxhdpi/Path 31705.png';
import balano from '../../../Images/drawable-xxxhdpi/balano.jpg';

const Refer_Mob = () => {
  return (
    <div className="walletgetdata">
    <div className="main_account_head_1345">
         <div className="nav_mobff px-2"> 
 <div className="arrow_marge_21"><i class="fa-solid fa-arrow-left"></i> <h6 className="arrow_non"> </h6></div>
     <div className="px-2 navmob2225">
     <i class="fa-solid fa-bell"></i>
     </div>
 </div>
 <div className="allwalletmore">
     <div className="putinwallet px-3">
        <div className="subsub_garage"><img src={smgift} alt="error"/><h5>Refer & Earn</h5></div> 
         <p>Invite friends and earn rewards</p>
     </div>
     <div className="ruppess1">
     <img src={gift} alt="error"/>
     </div>
 </div>
</div>
<div className="estinav11">
    <div className="reimg">
        <h4>Refer & Earn 500 MG Coins</h4>
        <div className='coinwin'>
            <img src={coining} alt="error"/>
        </div>
        <div className="copyline">
        <img src={copyline} alt="error"/>
        </div>
        <div className="sciling">
            <img src={social} alt="error"/>
        </div>
    </div>
           </div>
</div>
  )
}

export default Refer_Mob