import React from 'react';
import {Link} from 'react-router-dom'
import back from '../../../Images/drawable-xxxhdpi/Group 36369.png';
import rig from '../../../Images/drawable-xxxhdpi/Group 36370.png';
import gpbtn from '../../../Images/drawable-xxxhdpi/Group 36381.png';
import obj from '../../../Images/drawable-xxxhdpi/OBJECTS.png';
import log from '../../../Images/drawable-xxxhdpi/Group 26594.png';
import google from '../../../Images/drawable-xxxhdpi/Group 30821.png';
import play from '../../../Images/drawable-xxxhdpi/Group 30822.png';

const OtpVeri__Mob = () => {
  return (
    <div className='walletgetdata'>
    <div className="transtop">
        <ul>
        <li className="mastergeg"><img src={log} alt="error"/> <p>Master Garage</p></li>
            <li className='paygog'><img src={google} alt="error"/></li>
            <li className='paygog'><img src={play} alt="error"/></li>
        </ul>
  </div>
        <div className="mainlogtag">
         
            <div className="reginput_12">

                <div className="activelog13">
            <h5>Verify Tag !</h5>
            <p>No need to leave your phone number on the dashboard anymore</p>
            </div>
            <div className="bakkdeg m-5">
            <div className="allinput_filed1">
              <div>
                  <div className="headotp">
                      <h6>Enter Otp</h6>
                      <ul className="otpsubmit">
                          <li><input/></li>
                          <li><input/></li>
                          <li><input/></li>
                          <li><input/></li>
                          <li><input/></li>
                      </ul>
                      <div className="sendupsend px-3"><p>Otp has Resend</p> <Link to="#" className="sendagain">Resend</Link></div>
                  </div>

                  <div>
                      <ul className="m-4">
                          <div className="contodetail px-3">
                              <h6>Name</h6>
                              <p>Seema Prasad</p>
                          </div>
                          <div className="contodetail px-3">
                              <h6>Vehical No.</h6>
                              <p>MH8973478</p>
                          </div>
                          <div className="contodetail px-3">
                              <h6>Contact No.</h6>
                              <p>8462347203473</p>
                          </div>
                          <div className="contodetail px-3">
                              <h6>At Contact No.</h6>
                              <p>3904248647</p>
                          </div>
                      </ul>
                  </div>
              </div>
           </div>
     
               <div className="upadte_profile13">
             <Link to="/ActiveTab_Mob">  <button>Submit</button></Link>
               </div>
       </div>
       <img src={back} alt="error"/>
            </div>
        </div>
 
   </div>
  )
}

export default OtpVeri__Mob