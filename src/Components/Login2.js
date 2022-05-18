import React, { useState } from 'react'
import axios from 'axios';
import './Login.css';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Card, Button, ButtonGroup, CardHeader, CardBody, CardTitle, CardText, CardSubtitle, CardFooter, Alert } from 'reactstrap';
import profile from '../Images/profile.png';
import helpsupport from '../Images/drawable-xxxhdpi/drawable-xxxhdpi/helpsupport.png';
import favourites from '../Images/drawable-xxxhdpi/drawable-xxxhdpi/favourites.png';
import referearn from '../Images/drawable-xxxhdpi/drawable-xxxhdpi/referearn.png';
import contact from '../Images/drawable-xxxhdpi/drawable-xxxhdpi/contactus.png';
import { useUserAuth } from './context/UserAuthContext';
import { async } from '@firebase/util';
import Home from './Home';
import { showMessage } from '../Healper';
//import {firebase,auth} from './firebase'
const Login2 = () => {
  const [mynumber, setnumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [final, setfinal] = useState('');
  const [show, setshow] = useState(false);
  const [error, setError] = useState("");
  const [otp, setotp] = useState()
  const [isAuth, setAuth] = useState(false);

  function Login() {
    if (!email) {
      showMessage("info","enter email or mobilenumber")
      return
    }
    if (!password) {
      showMessage("info","enter password");
      return
    }
    axios.post(process.env.REACT_APP_Api_Url+"login/login",
      { mobileNumber: email, password: password })
      .then((res, err) => {
        if (res.data.status == true) {
          localStorage.setItem("mobileNumber",email);
          localStorage.setItem("isLogin",true);
          setAuth(true)
        }
        else {
          showMessage("error",res.data.err)
        }
      })
  }
  return (
    <>
      {isAuth ? <Home></Home> :
        <Container>
          <Card className="card1 active">
            <div className="login">
              <div className="">
                <div className="hello">
                  <h4>Hello User,</h4>
                  <Link> <i class="far fa-times" data-bs-dismiss="offcanvas"></i></Link>
                </div>
                <div className="headerProfile1">
                  <div><img src={profile} alt="error" /></div>
                </div>
              </div>
              <CardBody className="login_head">
                <h4>Log in</h4>
                {error && <Alert color="danger" variant="danger">{error}</Alert>}
                <div className="input_log">
                  <input placeholder="Enter Phone number or E-mail"
                    type="text"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <div className="inputpass">
                    <input id="txtPassword"
                      type="password"
                      className="textfield password"
                      placeholder="Password"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <Link className="hyperlink">Forgot Password</Link>
                  </div>
                  <button className="contine_btn" onClick={Login}>Log In</button>
                </div>
                <h6 className="create_acc">New to Master Garage?<Link to="/signup"> Create Account</Link></h6>
              </CardBody>
              <footer>
                <div className="tearmcondition">
                  <Link className="tearm"><p>Terms & Conditions</p></Link><p className="tearms">|</p>
                  <Link className="tearm"><p>Privacy Policy</p></Link>
                </div>
              </footer>
            </div>
          </Card>
        </Container>
      }
    </>
  )
}

export default Login2


