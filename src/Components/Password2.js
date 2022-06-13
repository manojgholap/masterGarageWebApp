import React, { useState } from 'react'
import axios from 'axios';
import './Login.css';
import { Link } from 'react-router-dom';
import Home from './Home'
import { Container, Row, Col, Card, Button, ButtonGroup, CardHeader, CardBody, CardTitle, CardText, CardSubtitle, CardFooter } from 'reactstrap';
import profile from '../Images/profile.png';
import { showMessage } from '../Healper';
const Password2 = (props) => {
    const [password, setPassword] = useState('');
    const [repassword, setRePassword] = useState('');
    function confirmPassword() {
        if (password !== repassword) {
            showMessage("info", "password doesn't match");
            return
        }
        if (password.length < 8) {
            showMessage("info", "length of password should be eight characters");
            return
        }
        axios.post(process.env.REACT_APP_Api_Url + "user/setPassword",
            { mobileNumber: props.phone.substring(2, 12), password: password, token: localStorage.getItem('token') })
            .then((res, err) => {
                if (res.data.status == true) {
                    showMessage("success", res.data.message);
                    localStorage.setItem("mobileNumber", props.phone.substring(2, 12));
                    localStorage.setItem("isLogin", true);
                    localStorage.removeItem('token');
                    props.setOtp(false);
                }
                else {
                    showMessage("error", res.data.err)
                }
            })
    }

    return (
        <>
            <Card >
                <CardBody className="login_head">
                    <h4>Enter Password</h4>
                    <div className="input_log">
                        <div className="inputpass">
                            <input id="txtPassword" type="password" className="textfield password" placeholder="Enter Password" onChange={(event) => setPassword(event.target.value)} />
                        </div>
                        <div className="inputpass">
                            <input id="txtPassword" type="password" className="textfield password" placeholder="ReEnter Password" onChange={(event) => setRePassword(event.target.value)} />
                        </div>
                        <button onClick={confirmPassword}>Confirm</button>
                    </div>
                </CardBody>
            </Card>
        </>
    )
}

export default Password2


