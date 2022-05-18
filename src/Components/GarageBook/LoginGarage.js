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

function LoginBook(){
  const[page,setPage]=useState(0);
  const formTitles=['E','Vehical','Service','Garage','Basic','F']
    return( <>
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
            
    </>
    )
}



const SubMid = () =>{
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
     
   return( <>
         

           <Row className='px-2 allpageac'>
           <div style={{display:'flex'}} className='mb-2'>
   <img src={account} alt="error"/>
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
           <div style={{display:'flex'}} className='my-2'>
           <img src={timer} alt="error"/>

                        <Row className='px-5 py-3 accountbg'>
                <p className='bookinghead1'>Service Schedule</p>
                <p className='bookingpara'>Select your preferred Date & Time for the service</p>
                    </Row>  
           </div>
           
           
<div style={{display:'flex'}} className='my-2'>
<img src={locat} alt="error"/>

                        <Row className='px-5 py-3 accountbg'>
                <p className='bookinghead1'>Pick up & Drop Address</p>
                <p className='bookingpara'>Add or choose your preferred address for pick up & drop</p>
                    </Row>  
           </div>
           <div style={{display:'flex'}} className='my-2'>
           <img src={payment} alt="error"/>


                        <Row className='px-5 py-3 accountbg'>
                <p className='bookinghead1'>Payments</p>
                <p className='bookingpara'>Select your preferred payment method</p>
                    </Row>  
           </div>
  
                     
            </Row>
    </>
    )
    
 };

export default withRouter(LoginBook);


