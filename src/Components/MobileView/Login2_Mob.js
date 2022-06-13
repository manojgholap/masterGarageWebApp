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
import './login.css'

const Login2_Mob = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState("");
  const  history = useHistory()
  function Login() {
    if (!email) {
      showMessage("info", "enter mobile number")
      return
    }
    if (!password) {
      showMessage("info", "enter password");
      return
    }
    axios.post(process.env.REACT_APP_Master_Garage + "user/login.php",
      { email: email, password: password, token: localStorage.getItem('token') })
      .then((res, err) => {
        if (res.data.success == 1) {
          localStorage.setItem("mobileNumber", email);
          localStorage.setItem("isLogin", true);
          localStorage.removeItem("token");
          history.push('/Home_Mob');
        }
        else {
          showMessage("error", res.data.message)
        }
      })
  }
  return (
    <>
      <div className="login_first">
        <img src={Rectangle} alt="error" />
        <h3>Log in</h3>
        <div className="input_log">
          <div className="inputpass">
            <input id="txtPassword"
              type="text"
              className="textfield password"
              placeholder="Mobile Number"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="inputpass">
            <input id="txtPassword"
              type="password"
              className="textfield password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <Link className="hyperlink" to='/Resetpass'>Forgot Password</Link>
          </div>
           <button className='btn_login' onClick={Login}>CONTINUE</button>
           <p>New to Master Garage? <Link to="/SignUp_Mob">Create Account</Link></p>
          <p>By Clicking, I accept the Terms & Conditions & Privacy Policy</p>
        </div>
      </div>
    </>
  )
}

export default Login2_Mob   