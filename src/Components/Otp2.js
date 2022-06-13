import React, { useState } from 'react'
import axios from 'axios';
import './Login.css';
import { Link } from 'react-router-dom';
import Home from './Home'
import { Container, Row, Col, Card, Button, ButtonGroup, CardHeader, CardBody, CardTitle, CardText, CardSubtitle, CardFooter } from 'reactstrap';
import profile from '../Images/profile.png';
import Password2 from './Password2';
import { showMessage } from '../Healper';

const Otp2 = (props) => {
   const [otp, setOtp] = useState('');
   const [isAuth, setAuth] = useState(false);

   function authenticateOtp() {
      if (otp.length < 4) {
         showMessage("info","please enter four digit otp");
      }
      else {
         axios.post(process.env.REACT_APP_Api_Url+"login/validateOtp",
            { mobileNumber: props.phone.substring(2, 12), otp: otp })
            .then((res, err) => {
               if (res.data.status == true) {
                  showMessage("success","otp verified")
                  setAuth(true)
               }
               else {
                  showMessage("error",res.data.err)
               }
            })
      }
   }
   function resendOtp() {
      axios.post(process.env.REACT_APP_Api_Url+"generateOtp", { mobileNumber: props.phone.substring(2, 12) }).then((res, err) => {
         if (res.data.status == true) {
            showMessage("success","Your Otp is send to your mobile number kindly check")
         }
         else {
            showMessage("success",res.data.err)
         }
      })
   }
   function onChange(e) {
      const re = /^[0-9\b]+$/;
      if (e.target.value === '' || re.test(e.target.value)) {
         setOtp(e.target.value)
      }
   }
   return (
      <>
         {isAuth ? <Password2 phone={props.phone} setOtp={props.setOtp}></Password2> :
            <Card>
                  <CardBody>
                     <h4>Enter OTP</h4>
                     <div className="input_log">
                        <div className="inputpass">
                           <input id="txtPassword"
                              type="password"
                              className="textfield password"
                              placeholder="Enter OTP here"
                              onChange={(e) => onChange(e)}
                           />
                           <a className='hyperlink' onClick={resendOtp}>resend</a>
                        </div>
                        <button onClick={authenticateOtp}>SUBMIT</button>
                     </div>
                     <p className="create_acc">OTP sent to {props.phone.substring(2, 12)} <Link onClick={()=>props.setOtp(false)}> Change number</Link></p>
                  </CardBody>
            </Card>
         }
      </>
   )
}

export default Otp2


