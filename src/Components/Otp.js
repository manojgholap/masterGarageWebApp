import React, { useState } from 'react'
import axios from 'axios';
import './Login.css';
import { Link } from 'react-router-dom';
import Home from './Home'
import { Container, Row, Col, Card, Button, ButtonGroup, CardHeader, CardBody, CardTitle, CardText, CardSubtitle, CardFooter } from 'reactstrap';
import profile from '../Images/profile.png';
import Password from './Password';
import { showMessage } from '../Healper';

const Otp = ({ mobileNumber }) => {
   const [otp, setOtp] = useState('');
   const [isAuth, setAuth] = useState(false);

   function authenticateOtp() {
      if (otp.length < 4) {
         showMessage("info","please enter four digit otp");
      }
      else {
         axios.post(process.env.REACT_APP_Api_Url+"login/validateOtp",
            { mobileNumber: mobileNumber.substring(2, 12), otp: otp })
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
      axios.post(process.env.REACT_APP_Api_Url+"generateOtp", { mobileNumber: mobileNumber.substring(2, 12) }).then((res, err) => {
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
         {isAuth ? <Password mobileNumber={mobileNumber}></Password> :
            <Card className="card1 active">
               <div className="login">
                  <div className="">
                     <div className="hello">
                        <h3>Hello User,</h3>
                        <Link> <i class="far fa-times" data-bs-dismiss="offcanvas"></i></Link>
                     </div>
                     <div className="headerProfile1">
                        <div><img src={profile} alt="error" /></div>
                     </div>
                  </div>
                  <CardBody className="login_head">
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
                     <p className="create_acc">OTP sent to {mobileNumber.substring(2, 12)} <Link to="/signup"> Change number</Link></p>
                  </CardBody>
                  <footer>
                     <div className="tearmcondition">
                        <Link className="tearm"><p>Terms & Conditions</p></Link><p className="tearms">|</p>
                        <Link className="tearm"><p>Privacy Policy</p></Link>
                     </div>
                  </footer>
               </div>
            </Card>
         }
      </>
   )
}

export default Otp


