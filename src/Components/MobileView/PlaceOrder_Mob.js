import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import setting from '../../Images/drawable-xxxhdpi/Path 31769.png';
import nevigate from '../../Images/drawable-xxxhdpi/Path 32646.png';
import time from '../../Images/drawable-xxxhdpi/Group 31925.png';
import payment from '../../Images/drawable-xxxhdpi/Path 31862.png';
import Progress from './Progress'

const PlaceOrder_Mob = ({done}) => {
  
  return (
    <div class="add_Top">

      <div className="maintopplace">
        <h6>Placing Order</h6>
        <div>
          <ul>
            <li className="placeicon mb-3">
              <div className='setallicon'>
              <img src={setting} alt="error"/>
              </div>
              <div className="mycontain">
                <p>Garage</p>
                <small>Mahindra First Choice, Kandivali East- 400 101</small>
              </div>
            </li>
         
            <li className="placeicon mb-3">
              <div className='setallicon'>
              <img src={nevigate} alt="error"/>
              </div>
              <div className="mycontain">
                <p>Pick-Up & Drop Location</p>
                <small>A-1234, CGC Residency, Near Bisleri office,
Andheri East, Mumbai - 400001 Mahindra First Choice, Kandivali East- 400 101</small>
              </div>
            </li>
            <li className="placeicon mb-3">
              <div className='setallicon'>
              <img src={time} alt="error"/>
              </div>
              <div className="mycontain">
                <p>Service Schedule</p>
                <small>January 13 at 10-11 am </small>
              </div>
            </li>
            <li className="placeicon mb-3">
              <div className='setallicon'>
              <img src={payment} alt="error"/>
              </div>
              <div className="mycontain">
                <p>Payment</p>
                <small>Pay after Service | Online</small>
              </div>
            </li>
          </ul>

        </div>

        <div id="app" className="p-3 procancel">
	<Link to="/ConfirmBook_Mob" className="linknone">	<Progress done="70"/></Link>
   <Link to="/BookingCancle_Mob" className="linknone"><button>Cancel</button></Link> 
        </div>
       
      </div>
    </div>
  )
}

export default PlaceOrder_Mob