import React, { useState } from 'react';
import './Login.css';
import { Link, withRouter } from 'react-router-dom';
import axios from 'axios';
import { Container, Row, Col, Card, Button, ButtonGroup, CardHeader, CardBody, CardTitle, CardText, CardSubtitle, CardFooter } from 'reactstrap';
import profile from '../Images/profile.png';
import { useSelector, useDispatch } from 'react-redux';
import { logingarage } from '../redux/action';
import enLocale from "i18n-iso-countries/langs/en.json";
import itLocale from "i18n-iso-countries/langs/it.json";
import { useForm, Controller } from "react-hook-form";
import PhoneInput, { isValidPhoneNumber } from "react-phone-input-2";
//import 'react-phone-input-2/lib/style.css'
import countries from "i18n-iso-countries";
import OTP from './Otp'
import { showMessage } from '../Healper';
const Resetpass = () => {
  const [phone, setPhone] = useState('');
  const [isotp, setOtp] = useState(false)

  const handleclick = () => {
    if (!phone || phone.length < 12) {
      return showMessage('info',"please enter valid phone number")
    }
    else {
      axios.post(process.env.REACT_APP_Api_Url+"login/forgotPassword", { mobileNumber: phone.substring(2, 12) }).then((res, err) => {
        if (res.data.status == true) {
          setOtp(true)
        }
        else {
          showMessage('error',res.data.err)
        }
      })
    }
  }
  function onChange(value) {
    const re = /^[0-9\b]+$/;
    if (value === '' || re.test(value)) {
      setPhone(value)
    }
  }
  return (
    <>
    {isotp ? <OTP mobileNumber={phone}></OTP> :
            <Card className="card1 active">
            <div className="login">
               <div className="">
               <div className="hello">
                 <h3>Hello User,</h3>
                 <Link> <i class="far fa-times" data-bs-dismiss="offcanvas"></i></Link>
                 </div>
                    <div className="headerProfile1">
                       <div><img src={profile} alt="error"/></div>
                    </div>
               </div>
               <CardBody className="login_head">
                   <h4>Reset password</h4>
                   <div className="input_log1">
                  <PhoneInput
                    country={'in'}
                    value={phone}
                    onChange={(value) => onChange(value)}
                    className="width_Input"
                  />
                  <button className="contine_btn" onClick={handleclick}>CONTINUE</button>
                  <h6 className="create_acc">New to Master Garage?<Link to="/signup"> Create Account</Link></h6>
                </div>
               </CardBody>
               <footer>
                 <div className="tearmcondition">
                    <Link className="tearm"><p>Terms & Conditions</p></Link><p className="tearms">|</p>
                    <Link className="tearm"><p>Privacy Policy</p></Link>
                 </div>
               </footer>
               </div>
            </Card>}
            </>
  )
}

export default Resetpass