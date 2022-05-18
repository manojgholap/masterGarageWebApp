import React from 'react';
import {Link} from 'react-router-dom'
import back from '../../../Images/drawable-xxxhdpi/Group 36369.png';
import rig from '../../../Images/drawable-xxxhdpi/Group 36370.png';
import gpbtn from '../../../Images/drawable-xxxhdpi/Group 36381.png';
import obj from '../../../Images/drawable-xxxhdpi/OBJECTS.png';
import log from '../../../Images/drawable-xxxhdpi/Group 26594.png';
import google from '../../../Images/drawable-xxxhdpi/Group 30821.png';
import play from '../../../Images/drawable-xxxhdpi/Group 30822.png';

const ContactOwnerVeh_Mob = () => {
  return (
    <div className='walletgetdata'>
    <div className="transtop">
        <ul>
        <li className="mastergeg"><img src={log} alt="error"/> <p>Master Garage</p></li>
            <li className='paygog'><img src={google} alt="error"/></li>
            <li className='paygog'><img src={play} alt="error"/></li>
        </ul>
  </div>
        <div>
         
            <div className="reginput_12">
          <div className="activelog11">
               <img src={obj} alt="erro"/>
            </div>
            <div className="bakkdeg12">
            <div className="allinput_filed1">
          
           <div className="p-3">
             <div className="somedetails_21">  
           <h4>Contact Vehical Owner !</h4>
           <h3>Praveen Tiwari | <small>MH230313 23</small></h3>
           <p>Select a reason why you want to contact vehical owner</p>
           </div>
           <div className="input_field12">
           <div className="radioSelection mb-3">
                <div className="inputredi1">
                <input type="radio" name="gender" value="F" /><input placeholder="enter name" className="inputtext"/>
                </div>
            </div>
            <div className="radioSelection mb-3">
                <div className="inputredi1">
                <input type="radio" name="gender" value="F" /><input placeholder="enter name" className="inputtext"/>
                </div>
            </div>
            <div className="radioSelection mb-3">
                <div className="inputredi1">
                <input type="radio" name="gender" value="F" /><input placeholder="enter name" className="inputtext"/>
                </div>
            </div>
            <div className="radioSelection mb-3">
                <div className="inputredi1">
                <input type="radio" name="gender" value="F" /><input placeholder="enter name" className="inputtext"/>
                </div>
            </div>
            <div className="radioSelection mb-3">
                <div className="inputredi1">
                <input type="radio" name="gender" value="F" /><input placeholder="enter name" className="inputtext"/>
                </div>
            </div>
            <div className="radioSelection mb-3">
                <div className="inputredi1">
                <input type="radio" name="gender" value="F" /><input placeholder="enter name" className="inputtext"/>
                </div>
            </div>
           </div>
           </div>
           </div>
     
               <div className="upadte_profile">
             <Link to="/OtpVeri__Mob"><img src={gpbtn} alt="error"/></Link>
               </div>
       </div>
       <div  className="mainlogtag1">
       <img src={back} alt="error"/>
       </div>
            </div>
        </div>
 
   </div>
  )
}

export default ContactOwnerVeh_Mob