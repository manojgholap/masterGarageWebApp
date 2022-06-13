import React, { useState } from 'react';
import { CardBody, Input, Label, ButtonGroup, Button, Row, Col, Container, CardHeader, UncontrolledCollapse, Card } from 'reactstrap';
import { Link, withRouter, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import back1 from '../../Images/drawable-xxxhdpi/Group 35649.png';
import logo from '../../Images/drawable-xxxhdpi/Group 34795.png';
import Rectangle from '../../Images/drawable-xxxhdpi/rc.png';
import PhoneInput from "react-phone-input-2";
import axios from 'axios';
import { showMessage } from '../../Healper';
import Password_Mob from './Password_Mob';

import './login.css'
const Otp_Mob = (props) => {
  const [selectedCountry, setSelectedCountry] = useState("");
  const [phone, setPhone] = useState(props.mobileNumber.substring(2, 12) || '');
  const [otp, setOtp] = useState('');
  const [isAuth, setAuth] = useState(false);

  function authenticateOtp() {
    if (otp.length < 4) {
      showMessage("info", "please enter four digit otp");
    }
    else {
      axios.post(process.env.REACT_APP_Master_Garage + "user/signUp.php",
        { mobileNumber: phone, otp: otp, action: "otpVerified" })
        .then((res, err) => {
          if (res.data.success == 1) {
            showMessage("success", res.data.message)
            setAuth(true)
          }
          else {
            showMessage("error", res.data.message)
          }
        })
    }
  }
  function resendOtp() {
    axios.post(process.env.REACT_APP_Api_Url + "generateOtp", { mobileNumber: phone }).then((res, err) => {
      if (res.data.status == true) {
        showMessage("success", "Your Otp is send to your mobile number kindly check")
      }
      else {
        showMessage("success", res.data.err)
      }
    })
  }
  function onChange(e) {
    const re = /^[0-9\b]+$/;
    if (e.target.value === '' || re.test(e.target.value)) {
      setOtp(e.target.value)
    }
  }
  return (<>
    {isAuth ? <Password_Mob mobileNumber={phone} ownerId={props.ownerId} ></Password_Mob> : <> <div>
      <div className="login_Mob">
        <img src={logo} alt="error" />
      </div>
    </div>

      <div className="container">
        <div className="css-slider-wrapper">
          <input type="radio" className="slide-radio1" name="slider" id="slider_1" checked="checked" />
          <input type="radio" className="slide-radio2" name="slider" id="slider_2" />
          <input type="radio" className="slide-radio3" name="slider" id="slider_3" />
          <input type="radio" className="slide-radio4" name="slider" id="slider_4" />
          <div className="slider-pegination">
            <label for="slider_1" className="page1"></label>
            <label for="slider_2" className="page2"></label>
            <label for="slider_3" className="page3"></label>
            <label for="slider_4" className="page4"></label>
          </div>
          <div className="next control">
            <label for="slider_1" className="numb1"><i className="fa fa-arrow-circle-right"></i></label>
            <label for="slider_2" className="numb2"><i className="fa fa-arrow-circle-right"></i></label>
            <label for="slider_3" className="numb3"><i className="fa fa-arrow-circle-right"></i></label>
            <label for="slider_4" className="numb4"><i className="fa fa-arrow-circle-right"></i></label>
          </div>
          <div className="previous control">
            <label for="slider_1" className="numb1"><i className="fa fa-arrow-circle-left"></i></label>
            <label for="slider_2" className="numb2"><i className="fa fa-arrow-circle-left"></i></label>
            <label for="slider_3" className="numb3"><i className="fa fa-arrow-circle-left"></i></label>
            <label for="slider_4" className="numb4"><i className="fa fa-arrow-circle-left"></i></label>
          </div>
          <div className="slider slide1">
            <div className="next_pre">
              <h2><img src={back1} width="300px" alt="error" /></h2>
            </div>
          </div>
          <div className="slider slide2">
            <div>
              <h2><img src={back1} width="300px" alt="error" /></h2>
            </div>
          </div>
          <div className="slider slide3">
            <div>
              <h2><img src={back1} width="300px" alt="error" /></h2>
            </div>
          </div>
          <div className="slider slide4">
            <div>
              <h2><img src={back1} width="300px" alt="error" /></h2>
            </div>
          </div>
        </div>
      </div>
      <div className="login_first1">
        <img src={Rectangle} alt="error" />
        <h3>Enter OTP</h3>
        <div>
          <div className="inputpass">
            <input id="txtPassword"
              type="password"
              className="textfield password"
              placeholder="Enter OTP here"
              onChange={(e) => onChange(e)}
            />
            <Link className="hyperlink" onClick={() => resendOtp()}>Resend</Link>
          </div>
          <Link > <button className='btn_login1' onClick={() => authenticateOtp()}>CONTINUE</button>  </Link>
          <p>OTP sent to {phone} <Link to="/SignUp_Mob">Change number</Link></p>
        </div>
      </div></>}
  </>
  )
}

export default Otp_Mob