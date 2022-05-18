import React,{useState} from 'react';
import {CardBody,Input,Label, ButtonGroup, Button,Row,Col, Container,CardHeader,UncontrolledCollapse ,Card} from 'reactstrap';
import { Link,withRouter,useHistory } from 'react-router-dom';
import {useDispatch,useSelector} from 'react-redux';
import customerService from '../../Images/drawable-xxxhdpi/Group 17600.png';
import wrech from '../../Images/drawable-xxxhdpi/Group 20180.png';
import mtl from '../../Images/drawable-xxxhdpi/Group 18598.png';
import mtlarrow from '../../Images/drawable-xxxhdpi/Path 31945.png';
import firstchoice from '../../Images/drawable-xxxhdpi/firstchoice.png';
import manChoice from '../../Images/drawable-xxxhdpi/Group 32085.png';
import logo2 from '../../Images/drawable-xxxhdpi/logo2.png';
import balano from '../../Images/balano.jpg';
import ReactStars from "react-rating-stars-component"

import './style.css'
const Mob_tracking = () => {
    const rating = {
        size: 50,
        count: 10,
        color: "black",
        activeColor: "red",
        value: 7.5,
        a11y: true,
        isHalf: true,
        emptyIcon: <i className="far fa-star" />,
        halfIcon: <i className="fa fa-star-half-alt" />,
        filledIcon: <i className="fa fa-star" />,
        onChange: newValue => {
          console.log(`Example 2: new value is ${newValue}`);
        }
      };
  return (
        <div className="Main_Mob_cont">
            <div className="cont_div">
               <div className="arrow_head">
                   <img className="arrow_down" src={mtlarrow} alt="error"/>
                   <img className="scanner" src={mtl} alt="error"/>
               </div>
               <div className="cont_Sub_div">
                   <h5>Booking Confirmed</h5>
                   <p>Waiting for Vehicle  Pick-up Schedule by Garage </p>
                   <button>Reschedule</button>
               </div>
            </div>
            <div className="moreService">
                <div  className="customerServices">
                <Link to="/Chat"><p className="custam1"><img src={customerService} alt="error"/></p></Link>
                <div className="Needhelp">
                <p>I'm Aditya, your Service Advisor</p>
                 <small>I will be helping you through this service</small>
                 </div>
                 <div className='comment_cont'><Link to="#" className="advice"><i class="far fa-comment"></i></Link><Link to="#" className="advice"><i class="fa fa-phone"></i></Link></div>
             </div>
             </div>
                <div className='book_garage'>
                <h6>Booking ID: MG1234567890 </h6>
                <div className="book_sub px-3">
                    <div sm={6} md={6} className="book_subcont">
                        <p>Booking Date & Time</p>
                        <small>21/01/2021  at  11.00 AM</small>
                    </div>
                    <div sm={6} md={6} className="book_subcont">
                        <p>Booking Date & Time</p>
                        <small>21/01/2021  at  11.00 AM</small>
                    </div>
                    </div>
                    <div className="book_sub px-3 pt-3">
                    <div sm={8} md={8} className="book_subcont">
                        <p>Pick Up & Drop Address</p>
                        <small>A-1234, CGC Residency, Near Bisleri office, <br/> <br/>
                   Andheri East, Mumbai - 400001</small>
                    </div>
                    <div sm={4} md={4} className="book_subcont1">
                        <i class="far fa-edit"></i>
                        <p>Edit</p>
                    </div>
                </div>
                <div className="">
                <button type="button" className="btn_instrction">
                <p> <img src={wrech} alt="error"/>
                 Add Service Instructions
                 </p>
                </button>
                </div>
                <div className="manundra_mob">
                    <div>
                        <img src={firstchoice} alt="error"/>
                        </div>
                        <div className="mob_mahin">
                            <p>Mahindra First Choice</p>
                            <i class="fa-solid fa-location-dot"></i><small>Kandivali East  400 101 | 900 mtrs</small>
                        </div>
                   
                    <div className="mob_icon">
                        <i class="fa-solid fa-diamond-turn-right"></i>
                    <i class="fa fa-share-alt" aria-hidden="true"></i>
                  </div>
                  </div>
                  <div className="rounded shadow-1 mb-2">
        <div className="toggleheader">
       <p>Order Details</p>
    <p id="toggler1" className="togglebtn"><i class="fas fa-chevron-down"></i></p>
  </div>
  <UncontrolledCollapse toggler="#toggler1">
    <div>
      <div className="toggletetext">
           <div>
               <small>MH 04 AB 3827</small>
               <h6>Maruti Suzuki  XL6</h6>
           </div>
           <div>   <img src={balano} alt="error"/></div>
      </div>
      <div className="toggletetext">
          <p>
          Basic Service
          </p>
          <p>₹459</p>
      </div>
      <div className="toggletetext">
          <p>
          Car Inspection
          </p>
          <p>₹459</p>
      </div>
      <div className="toggletetext">
          <p>
          Car Inspection
          </p>
          <p>₹459</p>
      </div>
      <div className="toggletetext">
          <p>
          Engine scanning
          </p>
          <p>₹459</p>
      </div>
      <div>
        <small>To Pay</small>
        <div className="toggletetext1">
          <p>
          Subtotal 
          </p>
          <p>₹459</p>
      </div>
      <div className="toggletetext1">
          <p>
          Other Charges 
          </p>
          <p>₹459</p>
      </div>
      <div className="toggletetext1">
          <p>
          Coupon Discount
          </p>
          <p>₹459</p>
      </div>
      <div className="toggletetext1">
          <p>
          MG Coins Reedemed
          </p>
          <p>₹459</p>
      </div>
      <div className="toggletetext1">
          <p>
          Taxes  
          </p>
          <p>₹459</p>
      </div>
      <div className="toggletetext1">
          <p>
          Order Total
          </p>
          <p>₹459</p>
      </div>
      <div className="toggletetext2">
          <p>
          Already Paid
          </p>
          <p>₹459</p>
      </div>
      <div className="toggletetext3">
          <h6>
          To be Paid
          </h6>
          <h6>₹459</h6>
      </div>
        </div>
    </div>
  
  </UncontrolledCollapse>
</div>
<div className="fixed_cont">
    <div className="fixed_text">
        <small>To Pay</small>
        <p>₹6,459</p>
        <small>Inclusive of all charges</small>
    </div>
    <div>
      <Link to="/Mob_Secedule"><button className='pay_Now'>PAY NOW</button></Link>
    </div>

</div>
                </div>
                <div className="cont_Mob">
                  <div className="cont_sub_Mob">
                      <img src={logo2} alt="error"/>
                      <div className="cont_con">
                          <p>Need help with your booking?</p>
                          <small>Contact our Customer Support</small>
                      </div>
                      </div>
                      <div className="messages_cont">
                      <i class="fa-solid fa-comment-dots"></i>
                      </div>
                </div>
                <div className='last_cont'>
                    <div className="manchoice">
                         <img src={manChoice} alt="error"/>
                    </div>
                    <div className="rat_cont">
                        <h5>Rate Your MG Experience</h5>
                        <p>Are you feeling good about Master Garage?</p>
                        <p className="rat_star">
                        <ReactStars
                            count={5}
                            onChange={rating}
                         
                            size={24}
                            activeColor="#ffd700"
                            />
                            </p>
                    </div>
                </div>
             </div>
  )
}

export default Mob_tracking