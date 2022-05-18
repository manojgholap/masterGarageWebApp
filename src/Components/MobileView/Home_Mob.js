import React,{useState,useEffect} from 'react';
import axios from 'axios';
import {CardBody,Input,Label, ButtonGroup, Button,Row,Col, Container,CardHeader,UncontrolledCollapse ,Card} from 'reactstrap';
import { Link,withRouter,useHistory } from 'react-router-dom';
import {useDispatch,useSelector} from 'react-redux';
import locationleft from '../../Images/drawable-xxxhdpi/locationleft.png';
import setting from '../../Images/drawable-xxxhdpi/Path 32368.png';
import fastaglog from '../../Images/drawable-xxxhdpi/netc-fastag-logo-vector.png';
import paychalan from '../../Images/drawable-xxxhdpi/Path 32483.png';
import sound from '../../Images/drawable-xxxhdpi/Path 32482.png';
import dotlineback from '../../Images/drawable-xxxhdpi/Group 32634.png';
import Subtraction from '../../Images/drawable-xxxhdpi/Subtraction 53.png';
import fuecoupan from '../../Images/drawable-xxxhdpi/Group 34961.png';

import './vehical.css'
const Home_Mob = () => {
  return (
    <div className="add_Top">
    <div className="nav_mob12 px-3"> 
<div className="arrow_marge11"><img src={locationleft} alt="error"/> <h6 className="arrow_non12"> Mira Bhayander <i class="fa-solid fa-chevron-down"></i></h6></div>
    <div className="nav_mob1">
        <i class="fa-solid fa-bell"></i>
    </div>
</div>


<div className="">
        <div className="inputser_garage121 p-2">
              <i class="fa-solid fa-magnifying-glass"></i>
                <input
                    className='Searchinput121'
                        type="text"
                        placeholder="Search for garages, services....."
                       
                    />
                  </div>
      </div>
  <Link to="./Mob_tracking">
      <div className="All_Main">
        <div className="card_my12">
          <div className="sub_cont_card">
              <img src={dotlineback} alt="error" className="dotlineback"/>
          <img src={setting} alt="error"/>
          <div className="car_my_sub">
          <h6>Service &  Repairs</h6>
            <p>Hot deals & offers to get your
          car serviced & save ₹2000</p>
          <button>Book Now</button>
          </div>
      </div>
        </div>

        <div className="card_my">
        <div className="sub_cont_card">
        <img src={dotlineback} alt="error" className="dotlineback"/>
          <img src={fastaglog} alt="error"/>
          <div className="car_my_sub">
          <h6>Recharge Fastag</h6>
            <p>Recharge your fastag and 
              get 100% assured cashback</p>
          <button>Recharge</button>
      </div>
      </div>
        </div>

        <div className="card_my">
        <div className="sub_cont_card">
        <img src={dotlineback} alt="error" className="dotlineback"/>
          <img src={paychalan} alt="error"/>
          <div className="car_my_sub">
          <h6>Pay Challans</h6>
            <p>Get challan updates and pay 
              online, get rewarded for your 
              payments</p>
          <button>Pay</button>
      </div>
      </div>
        </div>

        <div className="card_my">
        <div className="sub_cont_card">
                  <img src={dotlineback} alt="error" className="dotlineback"/>
          <img src={sound} alt="error"/>
          <div className="car_my_sub">
          <h6>Refer a friend</h6>
            <p>Invite friends and earn MG 
              coins & more rewards</p>
          <button>Refer</button>
      </div>
      </div>
        </div>
      </div>
      
      </Link>

      <div className='fuecoupan px-3'>
        <img src={Subtraction} alt="error" className="Subtraction"/>
        <div className="fuecoupan_sub">
          <img src={fuecoupan} alt="error" className="fuecoupanimg"/>
          <div className="subcoupan">
            <h6>₹ 500 Fuel Coupon</h6>
            <p>Claim your free fuel today! </p>
          </div>
          <button>Get Now</button>
        </div>
      </div>

      <div>
        
      </div>
    </div>

   
  )
}

export default Home_Mob