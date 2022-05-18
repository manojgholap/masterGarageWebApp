import React,{useState} from 'react';
import {Button,Row,Col, Container} from 'reactstrap';
import { connect } from 'react-redux';
import { Link,withRouter } from 'react-router-dom';
import man from '../../Images/drawable-xxxhdpi/Group 32085.png';
import gpay from '../../Images/drawable-xxxhdpi/google pay.png';
import paytm from '../../Images/drawable-xxxhdpi/paytm.png';
import amazon from '../../Images/drawable-xxxhdpi/amazon pay.png';
import phonepay from '../../Images/drawable-xxxhdpi/phonepay.png';
import payonline from '../../Images/drawable-xxxhdpi/Group 31946.png';
import paycash from '../../Images/drawable-xxxhdpi/Group 31946.png';
import addmore from '../../Images/drawable-xxxhdpi/Group 31945.png';
import simpl from '../../Images/drawable-xxxhdpi/simpl.png';
import mobikwik from '../../Images/drawable-xxxhdpi/mobikwik.png';
import freecharge from '../../Images/drawable-xxxhdpi/freecharge.png';

import './style.css'

const SelectPayment_mob = () => {
  return (
    <div class="add_Top">
          <div className="nav_mob"> 
       <Link to="/PlaceOrder_Mob"> <div className="arrow_marge"><i class="fa-solid fa-arrow-left"></i> <h6 className="arrow_non">Select Payment Method</h6></div></Link>
        </div>
  <ul className="ulPayment">
  <li>
  <p for="f-option">Pizza</p>
    <input type="radio" id="f-option" name="selector"/>
   
    
    <div class="check"></div>
  </li>
  
  <li>
    <input type="radio" id="s-option" name="selector"/>
    <label for="s-option">Bacon</label>
    
    <div class="check"><div class="inside"></div></div>
  </li>
  
  <li>
    <input type="radio" id="t-option" name="selector"/>
    <label for="t-option">Cats</label>
    
    <div class="check"><div class="inside"></div></div>
  </li>
</ul>
</div>
  )
}

export default SelectPayment_mob