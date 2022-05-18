import React from 'react';
import {Link} from 'react-router-dom'
import firstchoice from '../../Images/drawable-xxxhdpi/firstchoice.png';
import phone from '../../Images/drawable-xxxhdpi/telephone-9.png';
import location from '../../Images/drawable-xxxhdpi/Path 31705.png';
import message from '../../Images/drawable-xxxhdpi/Path 22984.png';
const ConfirmBook_Mob = () => {
  return (
    <div class="add_Top">
       <div className="confrimorder">
           <div className="paysuccess">
           <h6>Your order has been placed successfully!</h6>
           </div>
           <div className="subloc mt-3">
               <div className="sub_subloc">
                   <img src={firstchoice} alt="error"/>
                   <h6>Mahindra First Choice</h6>
                   <p className="loc_firtsdet"><img src={location} alt="error"/> Kandivali East  400 101</p>
                  
                   <p className="notice_confirm">We will notify you once the booking is confirmed</p>
               </div>
             
           </div>
           <div className='iconcont'>
           <p className='setallicon1'>   <img src={phone} alt="error"/></p>
              <p className='setallicon1'><img src={message} alt="error"/></p>
              </div>
      </div> 
      <div className="confirmfoot_cont">
          <Link to="/mobaccount" className="linknone"><div className="confirmfoot_sub_cont">
      <h5>Awaiting Garage Confirmation</h5>
      <p>On an average the garage takes 5 mins to confirm bookings</p>
      </div></Link>
      </div>
    </div>

  )
}

export default ConfirmBook_Mob