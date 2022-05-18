import React,{useState} from 'react';
import {Button,Row,Col, Container} from 'reactstrap';
import { connect } from 'react-redux';
import { Link,withRouter } from 'react-router-dom';
import man from '../../Images/drawable-xxxhdpi/Group 32085.png';
import './style.css'

const Timedate_sched = () => {
  return (
    <div className="add_Top">
    <div className="nav_mob"> 
        <div className="arrow_marge"><i class="fa-solid fa-arrow-left"></i> <h6 className="arrow_non"> Secure Checkout</h6></div>

        </div>

        <div className="progressbar">
            <div className="prog">   
            </div>
            <div className="pagesize1"><li></li><li>|</li><li>|</li><li>|</li><li>|</li><li></li></div>
            <div className="pagesize">
                <li>E</li>
                <li>Vehical</li>
                <li>Service</li>
                <li>Garage</li>
                <li>Basic</li>
                <li>F</li>
            </div>
            </div>
          <div className='scroolevent'>
            <div className="">
                <div className="addpick">
                    <h5>Add Pick Up Location</h5>
                    <Link to="#">view saved addresses</Link>
                </div>

        <div className="inputser_garage1212 p-2">
        <i class="fa-solid fa-location-dot"></i>
                <input
                    className='Searchinput1212'
                        type="text"
                        placeholder="Type your address here...."
                       
                    />
                  </div>
      </div>

      <div className="scedule_Sub_head">
          <h5>Select your preferred Date & Time</h5>
          <div className="main_calender">
              <div className="calender12">
                  <p>JAN</p>
                  <h5>12</h5>
                  <p>Wednesday</p>
              </div>
              <div className="calender">
                  <p>JAN</p>
                  <h5>12</h5>
                  <p>Wednesday</p>
              </div>
              <div className="calender">
                  <p>JAN</p>
                  <h5>12</h5>
                  <p>Wednesday</p>
              </div>
              <div className="calender">
                  <p>JAN</p>
                  <h5>12</h5>
                  <p>Wednesday</p>
              </div>
              <div className="calender">
                  <p>JAN</p>
                  <h5>12</h5>
                  <p>Wednesday</p>
              </div>
              <div className="calender">
                  <p>JAN</p>
                  <h5>12</h5>
                  <p>Wednesday</p>
              </div>
              <div className="calender">
                  <p>JAN</p>
                  <h5>12</h5>
                  <p>Wednesday</p>
              </div>
          </div>
      </div>
      <div className="slot_head">
          <h6>Pick a Time Slot <small>(9 slots available)</small></h6>
          <div className="wrapper">
             <div className="timeslot m-3">
                 <p>7 to 8 am</p>
             </div>
             <div className="timeslot m-3">
                 <p>7 to 8 am</p>
             </div>
             <div className="timeslot m-3">
                 <p>7 to 8 am</p>
             </div>
             <div className="timeslot m-3">
                 <p>7 to 8 am</p>
             </div>
             <div className="timeslot m-3">
                 <p>7 to 8 am</p>
             </div>
             <div className="timeslot m-3">
                 <p>7 to 8 am</p>
             </div>
             <div className="timeslot m-3">
                 <p>7 to 8 am</p>
             </div>
             <div className="timeslot m-3">
                 <p>7 to 8 am</p>
             </div>
             <div className="timeslot m-3">
                 <p>7 to 8 am</p>
             </div>
             <div className="timeslot m-3">
                 <p>7 to 8 am</p>
             </div>
             <div className="timeslot m-3">
                 <p>7 to 8 am</p>
             </div>
             <div className="timeslot m-3">
                 <p>7 to 8 am</p>
             </div>
          </div>
      </div>
      <div className="noteme p-3">
          <p>Note:<small> Post placing the order, we will connect you with the garage to take 
care of your car service, your booking is subject to approval by garage</small></p>
      </div>
</div>
      <div className='addVehical_foot'>
         <div>
             <img src={man} alt="error"/>
         </div>
         <div className="sub_details">
             <h6>Trouble with Booking, Reach us!</h6>
             <p>we will help you complete the booking</p>
             <button>Speak Now</button>
         </div>
    </div>

    <div className="payontime">
        <div className="payontimesub">
            <h5>₹6,459</h5>
            <Link to="#">View Detailed Bill</Link>
        </div>
       <Link to="/SelectPayment_mob"> <button>Select Payment Method</button></Link>
    </div>
        </div>
  )
}

export default Timedate_sched