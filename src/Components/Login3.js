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
const Login3 = (props) => {
    const [email, setEmail] = useState(props.phone.substring(2, 12));
    const [password, setPassword] = useState("");
    
    function Login() {
        if (!email) {
            showMessage("info", "enter mobile number")
            return
        }
        if (!password) {
            showMessage("info", "enter password");
            return
        }
        axios.post(process.env.REACT_APP_Master_Garage+ "user/login.php",
            { email: email, password: password,token:localStorage.getItem('token') })
            .then((res, err) => {
                if (res.data.success == 1) {
                    localStorage.setItem("mobileNumber", email);
                    localStorage.setItem("isLogin", true);
                    localStorage.removeItem("token");
                    props.setRegister(false);
                }
                else {
                    showMessage("error", res.data.err)
                }
            })
    }
    return (
        <>
            <Container>
                <Card >
                    <CardBody >
                        <div className="input_log">
                            <input placeholder="Enter Mobile Number"
                                value={email}
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
                                <Link to='/Resetpass' className="hyperlink">Forgot Password</Link>
                            </div>
                            <button className="contine_btn" onClick={Login}>Log In</button>
                        </div>
                    </CardBody>
                </Card>
            </Container>
        </>
    )
}

export default Login3


