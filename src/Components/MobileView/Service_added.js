import React,{useState,useEffect} from 'react';
import axios from 'axios';
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

import balano from '../../Images/balano.jpg';
import loc from '../../Images/drawable-xxxhdpi/Path 31705.png';
import save from '../../Images/drawable-xxxhdpi/Path 31710.png';
import coupan from '../../Images/drawable-xxxhdpi/coupan.png';

import notsure from '../../Images/drawable-xxxhdpi/Group 29661.png';
import next from '../../Images/drawable-xxxhdpi/Group 31585.png';
import car from '../../Images/drawable-xxxhdpi/Path 31698.png';
import line from '../../Images/drawable-xxxhdpi/Line 1036.png';

const Service_added = () => {
   
        const[services,setServices]=useState([])
    
        const url="http://65.2.127.249/garage/getoutletAll.php"
    
        useEffect(()=>{
        axios.get(url)
        .then(res=>{
          console.log(res.data)
          setServices(res.data)
        })
        .catch(err=>{
          console.log(err)
        })
        },[])
    
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
              <div className="cont_add12">
              <Link to="/Service_Added"><button>Added</button></Link>
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
    <div className='scrollbox21 px-2'>

    <Link to="/Estimate_Mob"><img src={line} alt="error" className='linealltestimoney'/></Link>
           {services.map((ser=>(
            <div className='addbg132'>
              
                <div className="widhtprop">
                   
            <div className="car_des">
                <div className="sizecar">
               <img src={ser.imageUri} alt="error"></img>
                </div>
           
            <div className='px-3'>
              <div>
                    <Link to="/" style={{textDecoration:'none'}}>
                      <h5 className='poppi'>{ser.name}</h5>
                    </Link>
                    <div className="intstuction">
                      <div>
                            <small className=''> <img src={loc} alt="error"/> Kandivali East  400 101 | 900 mtrs</small>
                            <svg xmlns="http://www.w3.org/2000/svg" width="103" height="15" viewBox="0 0 103 15">
                            <g id="Group_29651" data-name="Group 29651" transform="translate(0.005)">
                                <path id="Polygon_64" data-name="Polygon 64" d="M6.6,1.916a1,1,0,0,1,1.809,0L9.6,4.447a1,1,0,0,0,.751.561l2.738.424a1,1,0,0,1,.564,1.685l-2.039,2.1a1,1,0,0,0-.27.856l.468,2.9a1,1,0,0,1-1.469,1.035l-2.359-1.3a1,1,0,0,0-.964,0l-2.359,1.3A1,1,0,0,1,3.19,12.978l.468-2.9a1,1,0,0,0-.27-.856l-2.039-2.1a1,1,0,0,1,.564-1.685L4.65,5.008A1,1,0,0,0,5.4,4.447Z" transform="translate(-0.005)" fill="#f90"/>
                                <path id="Polygon_65" data-name="Polygon 65" d="M6.6,1.916a1,1,0,0,1,1.809,0L9.6,4.447a1,1,0,0,0,.751.561l2.738.424a1,1,0,0,1,.564,1.685l-2.039,2.1a1,1,0,0,0-.27.856l.468,2.9a1,1,0,0,1-1.469,1.035l-2.359-1.3a1,1,0,0,0-.964,0l-2.359,1.3A1,1,0,0,1,3.19,12.978l.468-2.9a1,1,0,0,0-.27-.856l-2.039-2.1a1,1,0,0,1,.564-1.685L4.65,5.008A1,1,0,0,0,5.4,4.447Z" transform="translate(21.995)" fill="#f90"/>
                                <path id="Polygon_66" data-name="Polygon 66" d="M6.6,1.916a1,1,0,0,1,1.809,0L9.6,4.447a1,1,0,0,0,.751.561l2.738.424a1,1,0,0,1,.564,1.685l-2.039,2.1a1,1,0,0,0-.27.856l.468,2.9a1,1,0,0,1-1.469,1.035l-2.359-1.3a1,1,0,0,0-.964,0l-2.359,1.3A1,1,0,0,1,3.19,12.978l.468-2.9a1,1,0,0,0-.27-.856l-2.039-2.1a1,1,0,0,1,.564-1.685L4.65,5.008A1,1,0,0,0,5.4,4.447Z" transform="translate(65.995)" fill="#f90"/>
                                <path id="Polygon_67" data-name="Polygon 67" d="M6.6,1.916a1,1,0,0,1,1.809,0L9.6,4.447a1,1,0,0,0,.751.561l2.738.424a1,1,0,0,1,.564,1.685l-2.039,2.1a1,1,0,0,0-.27.856l.468,2.9a1,1,0,0,1-1.469,1.035l-2.359-1.3a1,1,0,0,0-.964,0l-2.359,1.3A1,1,0,0,1,3.19,12.978l.468-2.9a1,1,0,0,0-.27-.856l-2.039-2.1a1,1,0,0,1,.564-1.685L4.65,5.008A1,1,0,0,0,5.4,4.447Z" transform="translate(87.995)" fill="#f90"/>
                                <path id="Polygon_68" data-name="Polygon 68" d="M6.6,1.916a1,1,0,0,1,1.809,0L9.6,4.447a1,1,0,0,0,.751.561l2.738.424a1,1,0,0,1,.564,1.685l-2.039,2.1a1,1,0,0,0-.27.856l.468,2.9a1,1,0,0,1-1.469,1.035l-2.359-1.3a1,1,0,0,0-.964,0l-2.359,1.3A1,1,0,0,1,3.19,12.978l.468-2.9a1,1,0,0,0-.27-.856l-2.039-2.1a1,1,0,0,1,.564-1.685L4.65,5.008A1,1,0,0,0,5.4,4.447Z" transform="translate(43.995)" fill="#f90"/>
                            </g>
                            </svg>
                    </div>
                    <div className='saveinfo'>
                      <img src={save} alt="error"/>
                  </div>
               </div> 
             </div>  
            </div>
       </div>
       <div className="intstuct px-3">
         <div className="small_sub">
           <small><img src={car} alt="error"/> <img src={next} alt="error"/>  Free Pick-up & Drop </small>
           </div>
         <div className="instruct_price py-0">
           <p>₹ 6459 <img src={notsure} alt="error"/></p>
          <small>for 3 Service</small>
         </div>
       </div> 
       <div className="sub_coupan">
         <img src={coupan} alt="error"/>
        <small> 50% Off I Use Code: TRYNEW</small>
       </div>
            </div>
            </div>
            )))}
        </div>
    </div>
  )
}

export default Service_added