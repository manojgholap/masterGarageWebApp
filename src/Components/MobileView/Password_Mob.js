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

const Password_Mob = (props) => {
  const [password, setPassword] = useState('');
  const [repassword, setRePassword] = useState('');
  const [isAuth, setAuth] = useState(false);
  const history = useHistory()

  function confirmPassword() {
    if (password !== repassword) {
      showMessage("info", "password doesn't match");
      return
    }
    if (password.length < 6) {
      showMessage("info", "length of password should be six characters");
      return
    }
    axios.post(process.env.REACT_APP_Master_Garage + "user/signUp.php",
      { mobileNumber:props.mobileNumber, passCode:password,action:"updatePassword",ownerId:props.ownerId})
      .then((res, err) => {
        if (res.data.success == 1) {
          showMessage("success", res.data.message)
          localStorage.setItem("mobileNumber", props.mobileNumber);
          localStorage.setItem("isLogin", true);
          localStorage.removeItem('token');
    history.push('/Home_Mob');
        }
        else {
          showMessage("error", res.data.err)
        }
      })
  }
  return (
    <>
      <div className="login_first">
        <img src={Rectangle} alt="error" />
        <h3>Password</h3>
        <div className="input_log">
          <div className="inputpass">
            <input id="txtPassword"
              type="password"
              className="textfield password"
              placeholder="Enter Password"
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>
          <div className="inputpass">
            <input id="txtPassword"
              type="password"
              className="textfield password"
              placeholder="Re Enter Password"
              onChange={(event) => setRePassword(event.target.value)}
            />
          </div>
           <button className='btn_login' onClick={()=>confirmPassword()}>Confirm</button>
        </div>
      </div>
    </>
  )
}

export default Password_Mob   