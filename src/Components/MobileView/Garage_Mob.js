import React,{useState} from 'react';
import {Button,Row,Col, Container} from 'reactstrap';
import {
  MdRemoveCircleOutline,
  MdAddCircleOutline,
  MdDelete,
} from 'react-icons/md';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link,withRouter } from 'react-router-dom';

import './style.css'
import account from '../../Images/drawable-xxxhdpi/Group 26337.png';
import timer from '../../Images/drawable-xxxhdpi/Group 26338.png';
import locat from '../../Images/drawable-xxxhdpi/Group 26339.png';
import payment from '../../Images/drawable-xxxhdpi/Group 26340.png';

import PhoneInput from "react-phone-input-2";
import {useSelector,useDispatch} from 'react-redux';
import {logingarage} from '../../redux/action';
import enLocale from "i18n-iso-countries/langs/en.json";
import itLocale from "i18n-iso-countries/langs/it.json";
import countries from "i18n-iso-countries";
const Garage_Mob = () => {
    const [selectedCountry, setSelectedCountry] = useState("");
    const [phone, setPhone] = useState();
    const setSelectCountry = (value) => setSelectedCountry(value);
  
    // Have to register the languages you want to use
    countries.registerLocale(enLocale);
    countries.registerLocale(itLocale);
  
    // Returns an object not a list
    const countryObj = countries.getNames("en", { select: "official" });
  
    const countryArr = Object.entries(countryObj).map(([key, value]) => {
      return {
        label: value,
        value: key,
      };
    });
    
    const check1=useSelector((state)=>state.check?.logingarage);
    const dispatch=useDispatch()
  
    const handleclick=()=>{
        var prev;
        if(check1.length){
          prev=[...check1];
        }else{
          prev=[]
        }
        const body=[
          ...prev,
          {phone}
        ]
        console.log(body)
        dispatch(logingarage(body));
    }

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
            <Row className='px-2 allpageacc1'>
           <div style={{display:'flex'}} className='mb-4'>
   <img src={account} alt="error"/>
                        <Row className='px-5 py-3 accountbg212'>
                <h5 className=''>Account</h5>
                <p className=''>Please login to your existing account or sign-up to confirm booking</p>
                <div className="phonecard12">
                <PhoneInput
                      value={phone}
                      onChange={(e) =>setPhone(e)}
                      defaultCountry="TH"
                      id="phone-input"
                      className="form-control1"
                    />
                    
                    
                       <div className="submitinfo">
                       <input className="" placeholder="Enter OTP"/><Link to="/Timedate_sched"><button className='' onClick={(e)=>handleclick()}>Submit</button></Link>
                       </div>
                   
                     </div>
                    
                    </Row>  
           </div>
           <div style={{display:'flex'}} className='mb-4'>
   <img src={timer} alt="error"/>
                        <Row className='px-5 py-3 accountbg213'>
                <h5 className=''>Pick up & Drop Address</h5>
                <p className=''>Add or choose your preferred address for pick up 
& drop of your vehicle </p>
                    </Row>  
           </div>
           
           
           <div style={{display:'flex'}} className='mb-4'>
   <img src={locat} alt="error"/>
   <Row className='px-5 py-3 accountbg213'>
                <h5 className=''>Service Schedule</h5>
                <p className=''>Select your preferred Date & Time for the service </p>
                    </Row> 
           </div>
           <div style={{display:'flex'}} className='mb-4'>
   <img src={payment} alt="error"/>
   <Row className='px-5 py-3 accountbg213'>
                <h5 className=''>Payments</h5>
                <p className=''>Select your preferred payment method </p>
                    </Row> 
           </div>
  
                     
            </Row>

            <div className='proceed_pay'>
              <div className='pay_proceed'>
                <p>To Pay</p>
                <h6>₹6,459</h6>
                <p>Inclusive of all charges</p>
              </div>
              <button>PROCEED</button>
            </div>

 </div>
  )
}

export default Garage_Mob