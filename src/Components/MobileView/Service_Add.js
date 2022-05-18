import React,{useState} from 'react';
import {CardBody,Input,Label, ButtonGroup, Button,Row,Col, Container,CardHeader,UncontrolledCollapse ,Card} from 'reactstrap';
import { Link,withRouter,useHistory } from 'react-router-dom';
import {useDispatch,useSelector} from 'react-redux';
import ground1 from '../../Images/drawable-xxxhdpi/Group 26044.png';
import ground2 from '../../Images/drawable-xxxhdpi/Group 26045.png';
import ground3 from '../../Images/drawable-xxxhdpi/Group 26046.png';
import ground4 from '../../Images/drawable-xxxhdpi/Group 26047.png';
import checkright from '../../Images/drawable-xxxhdpi/Path 22613.png';
import coupen from '../../Images/drawable-xxxhdpi/Path 23342.png';
import bak_late from '../../Images/drawable-xxxhdpi/Group 35364.png';
import man_watch from '../../Images/drawable-xxxhdpi/Group 35363.png';
import red_mark from '../../Images/drawable-xxxhdpi/Path 2042.png';
import man from '../../Images/drawable-xxxhdpi/Group 32085.png';
import vehical from '../../Images/balano.jpg';
import wrech from '../../Images/drawable-xxxhdpi/Group 20180.png';
import mtl from '../../Images/drawable-xxxhdpi/Group 18598.png';
import mtlarrow from '../../Images/drawable-xxxhdpi/Path 31945.png';
import firstchoice from '../../Images/drawable-xxxhdpi/firstchoice.png';
import manChoice from '../../Images/drawable-xxxhdpi/Group 32085.png';
import logo2 from '../../Images/drawable-xxxhdpi/logo2.png';
import balano from '../../Images/balano.jpg';
import ReactStars from "react-rating-stars-component";


const Service_Add = () => {
  return (
    <div className="add_Top">
    <div className="nav_mob"> 
    <div className="arrow_marge"><i class="fa-solid fa-arrow-left"></i> <h6 className="arrow_non"> Basic Service</h6></div>
          <div className="px-2">
              <i class="fa-solid fa-magnifying-glass"></i>
              <i class="fa-solid fa-bell"></i>
          </div>
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
        <div className="group_cont">
            <div>
                <img src={ground1} alt="error"/>
            </div>
            <div>
                <img src={ground2} alt="error"/>
            </div>
            <div>
                <img src={ground3} alt="error"/>
            </div>
            <div>
                <img src={ground4} alt="error"/>
            </div>
        </div>
 
        <div className="ser_add">
                <h5>Basic Service</h5>
                <div className="service_sub_ser">
                <div>
                    <div className='define_ser'><i class="fa-solid fa-gear"></i> <h6>On Suspension Noise</h6></div>
                    <div className='define_ser'><i class="fa-solid fa-clipboard-list"></i><h6>5 Points Checklist</h6></div>
              </div>
              <div className="cont_add1">
              <Link to="/Service_Added"><button>Add Service</button></Link>
             </div>
             </div>
            </div>
            <div className="what_do">
           <h5>What's Included ? </h5>
           <ul className="check_right">
               <li><img src={checkright} alt="error"/> Engine Oil Replacement</li>
               <li><img src={checkright} alt="error"/> Oil Filter Replacement</li>
               <li><img src={checkright} alt="error"/> Air Filter Cleaning</li>
               <li><img src={checkright} alt="error"/> Coolant Top up </li>
               <li><img src={checkright} alt="error"/> Wiper Fluid Replacement</li>
               <li><img src={checkright} alt="error"/> Battery Water Top up</li>
               <li><img src={checkright} alt="error"/> Heater/Spark plugs checking</li>
               <li><img src={checkright} alt="error"/> Car Wash</li>
               <li><img src={checkright} alt="error"/> Interior Vacuuming (Carpets & Seats)</li>
           </ul>
         </div>
         <div>
             <h5>Offers</h5>
             <div className="offer_cont">
                 <div className='offer_sub12'>
                     <div className="offer_sub1">
                     <h6><img src={coupen} alt="error"/> HAPPY100</h6>
                     <p> 100 off on first Booking</p>
                     <Link>View more</Link>
                     </div>
                 </div>
                 <div className='offer_sub'>
                 <div className="offer_sub1">
                     <h6><img src={coupen} alt="error"/> HAPPY100</h6>
                     <p> 100 off on first Booking</p>
                     <Link>View more</Link>
                     </div>
                 </div>
                 <div className='offer_sub'>
                 <div className="offer_sub1">
                     <h6><img src={coupen} alt="error"/> HAPPY100</h6>
                     <p> 100 off on first Booking</p>
                     <Link>View more</Link>
                     </div>
                 </div>
                 <div className='offer_sub'>
                 <div className="offer_sub1">
                     <h6><img src={coupen} alt="error"/> HAPPY100</h6>
                     <p> 100 off on first Booking</p>
                     <Link>View more</Link>
                     </div>
                 </div>
             </div>
         </div>
         <div className="watch_cont">
             <img src={bak_late} alt="error"/>
            <div className="watch_sub_cont">
                <div className="choice_img">
                  <img src={red_mark} alt="error"/>
                  <div className="pease_mind">
                      <h6>PEACE OF MIND</h6>
                      <p className="guarent">Guarentee Program</p>
                      <p className="assure">Assure Coverup to ₹459</p>
                  </div>
             
                </div>
                <div className='choice_man'>
                  <img src={man_watch} alt="error"/>
                </div>
            </div>
         </div>
         <div className="faq">
             <h6>FAQ's</h6>
<div>    
 <div className="toggleheader">
            <p>Can I still purchase products on MG World if I don't 
        have the mg coins balance?</p>
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
                </div>
            
            </UncontrolledCollapse>
 </div>
 <div>    
 <div className="toggleheader">
            <p>Can I still purchase products on MG World if I don't 
        have the mg coins balance?</p>
                <p id="toggler2" className="togglebtn"><i class="fas fa-chevron-down"></i></p>
            </div>
            <UncontrolledCollapse toggler="#toggler2">
                <div>
                <div className="toggletetext">
                    <div>
                        <small>MH 04 AB 3827</small>
                        <h6>Maruti Suzuki  XL6</h6>
                    </div>
                    <div>   <img src={balano} alt="error"/></div>
                </div>
                </div>
            
            </UncontrolledCollapse>
 </div>
 <div>    
 <div className="toggleheader">
            <p>Can I still purchase products on MG World if I don't 
        have the mg coins balance?</p>
                <p id="toggler3" className="togglebtn"><i class="fas fa-chevron-down"></i></p>
            </div>
            <UncontrolledCollapse toggler="#toggler3">
                <div>
                <div className="toggletetext">
                    <div>
                        <small>MH 04 AB 3827</small>
                        <h6>Maruti Suzuki  XL6</h6>
                    </div>
                    <div>   <img src={balano} alt="error"/></div>
                </div>
                </div>
            
            </UncontrolledCollapse>
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
    
    </div>
  )
}

export default Service_Add