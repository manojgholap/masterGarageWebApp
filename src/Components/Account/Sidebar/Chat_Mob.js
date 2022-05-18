import React from 'react'
import {Link} from 'react-router-dom'
import lev from '../../../Images/drawable-xxxhdpi/Group 32201.png';
import smlev from '../../../Images/drawable-xxxhdpi/Group 32638.png';
import chatwithme from '../../../Images/drawable-xxxhdpi/Group 34784.png';
import adi from '../../../Images/drawable-xxxhdpi/Mask Group 66.png';
import ali from '../../../Images/drawable-xxxhdpi/Mask Group 68.png';
import khu from '../../../Images/drawable-xxxhdpi/Mask Group 69.png';
import dee from '../../../Images/drawable-xxxhdpi/Mask Group 84.png';


const Chat_Mob = () => {
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
        <div className="subsub_garage"><img src={smlev} alt="error"/><h5>Chats</h5></div> 
         <p>Manage all your conversations at one place</p>
     </div>
     <div className="ruppess1">
     <img src={lev} alt="error"/>
     </div>
 </div>
</div>
<div className="estinav">
            </div>
            <div>
             <div className="allchatMain mb-2">
                 <p className='lastmessage'>Last message 21/01/2021</p>
               <Link to="/Fastage_Mob" className="likdeco"> <div className="chat1">
                     <p className="client"><img src={adi} alt="error"/></p>
                     <div className="subadi">
                         <h5>Aditya Mishra-Service Advisor</h5>
                         <p>Mahindra First Choice, Kandivali East  400 101</p>
                    </div>
                    <p className='chatwithme'><img src={chatwithme} alt="error"/></p>
                </div></Link> 
                <p className='lastchatend'>We have diagnosed your vehicle and needs some 
additional fittings...</p>
             </div>
             <div className="allchatMain mb-2">
                 <p className='lastmessage'>Last message 21/01/2021</p>
                 <div className="chat1">
                     <p className="client"><img src={ali} alt="error"/></p>
                     <div className="subadi">
                         <h5>Alex Morgan- Technician</h5>
                         <p>Mahindra First Choice, Kandivali East  400 101</p>
                    </div>
                    <p className='chatwithme'><img src={chatwithme} alt="error"/></p>
                </div>
                <p className='lastchatend'>We have diagnosed your vehicle and needs some 
additional fittings...</p>
             </div>
             <div className="allchatMain mb-2">
                 <p className='lastmessage'>Last message 21/01/2021</p>
                 <div className="chat1">
                     <p className="client"><img src={khu} alt="error"/></p>
                     <div className="subadi">
                         <h5>Kumar Gaurav- Owner</h5>
                         <p>Mahindra First Choice, Kandivali East  400 101</p>
                    </div>
                    <p className='chatwithme'><img src={chatwithme} alt="error"/></p>
                </div>
                <p className='lastchatend'>We have diagnosed your vehicle and needs some 
additional fittings...</p>
             </div>
             <div className="allchatMain mb-2">
                 <p className='lastmessage'>Last message 21/01/2021</p>
                 <div className="chat1">
                     <p className="client"><img src={dee} alt="error"/></p>
                     <div className="subadi">
                         <h5>Deepam Sama- Detailer</h5>
                         <p>Mahindra First Choice, Kandivali East  400 101</p>
                    </div>
                    <p className='chatwithme'><img src={chatwithme} alt="error"/></p>
                </div>
                <p className='lastchatend'>We have diagnosed your vehicle and needs some 
additional fittings...</p>
             </div>
            </div>
</div>
  )
}

export default Chat_Mob