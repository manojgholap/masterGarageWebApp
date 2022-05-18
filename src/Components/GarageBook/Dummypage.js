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
import '../PeriodicServices/periodic.css';
import './LoginBook.css';
import CartBox from './CartBox';
import FirstChoice from '../../Images/ImagesAll/drawable-xxxhdpi/FirstChoice.png';
import checkright from '../../Images/drawable-xxxhdpi/Path 22613.png';
//import * as CartAction from '../store/modules/cart/actions'

import PhoneInput from "react-phone-input-2";
import {useSelector,useDispatch} from 'react-redux';
import {logingarage} from '../../redux/action';
import enLocale from "i18n-iso-countries/langs/en.json";
import itLocale from "i18n-iso-countries/langs/it.json";
import countries from "i18n-iso-countries";


const dummypage = () => {
  return (
    <div className='container-fluid'>
    <Row>
            <Col sm={8} className='linkhead mt-4'>
                <Link to ="/BookGarageA" className="bookgarage"><i className='fa fa-arrow-left'></i></Link>
                <Link to="/BookGarageA" className="bookgarage1">Confirm Booking</Link>
            </Col>
            <Col sm={4} className='mt-3'>
            <div className="progressbar">
            <div className="prog14">      
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
            </Col>
        </Row>
        <Row className='py-2'> 
            <Col sm={8} ><SubMid></SubMid></Col>
            <Col sm={4}  ><CartBox></CartBox></Col>
            
        </Row>

</div>
  )
}

const SubMid=()=>{
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
  return(
    <div>
      <div className="accountlog">
          <svg xmlns="http://www.w3.org/2000/svg" width="78" height="78" className='accounticon' viewBox="0 0 78 78">
            <defs>
              <filter id="Ellipse_2112" x="0" y="0" width="78" height="78" filterUnits="userSpaceOnUse">
                <feOffset dy="3" input="SourceAlpha"/>
                <feGaussianBlur stdDeviation="3" result="blur"/>
                <feFlood flood-opacity="0.161"/>
                <feComposite operator="in" in2="blur"/>
                <feComposite in="SourceGraphic"/>
              </filter>
            </defs>
            <g id="Group_26337" data-name="Group 26337" transform="translate(9 6)">
              <g transform="matrix(1, 0, 0, 1, -9, -6)" filter="url(#Ellipse_2112)">
                <circle id="Ellipse_2112-2" data-name="Ellipse 2112" cx="30" cy="30" r="30" transform="translate(9 6)" fill="#2650d8"/>
              </g>
              <g id="Group_26335" data-name="Group 26335" transform="translate(17.358 15.777)">
                <path id="Path_28625" data-name="Path 28625" d="M27.95,19.481v-3.16A6.321,6.321,0,0,0,21.629,10H8.987a6.321,6.321,0,0,0-6.321,6.321v3.16" transform="translate(-2.667 8.963)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/>
                <path id="Path_28626" data-name="Path 28626" d="M11.654,14.642A6.321,6.321,0,1,0,5.333,8.321,6.321,6.321,0,0,0,11.654,14.642Z" transform="translate(0.988 -2)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/>
              </g>
            </g>
          </svg>
          <Row className='px-5 py-3 accountbg'>
                <p className='bookinghead1'>Account</p>
                <p className='bookingpara'>Please login to your existing account or sign-up to confirm booking</p>
                <div className="phonecard">
                <PhoneInput
                      value={phone}
                      onChange={(e) =>setPhone(e)}
                      defaultCountry="TH"
                      id="phone-input"
                      className="form-control1"
                    />
                    
                     <Link to="/ScheduleBook">
                       <button className='submitphone' onClick={(e)=>handleclick()}>Submit</button>
                     </Link>
                     </div>
                    
                    </Row> 
                </div>
            </div>
  )
}
export default dummypage