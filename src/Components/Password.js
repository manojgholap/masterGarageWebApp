import React, { useState } from 'react'
import axios from 'axios';
import './Login.css';
import { Link } from 'react-router-dom';
import Home from './Home'
import { Container, Row, Col, Card, Button, ButtonGroup, CardHeader, CardBody, CardTitle, CardText, CardSubtitle, CardFooter } from 'reactstrap';
import profile from '../Images/profile.png';
import { showMessage } from '../Healper';
const Password = ({ mobileNumber }) => {
    const [password, setPassword] = useState('');
    const [repassword, setRePassword] = useState('');
    const [isAuth, setAuth] = useState(false);
    
    function confirmPassword() {
        if (password !== repassword) {
            showMessage("info","password doesn't match");
            return
        }
        if (password.length < 6) {
            showMessage("info","length of password should be six characters");
            return
        }
        axios.post(process.env.REACT_APP_Api_Url+"user/setPassword",
            { mobileNumber: mobileNumber.substring(2, 12), password: password,token:localStorage.getItem('token')})
            .then((res, err) => {
                if (res.data.status == true) {
                    showMessage("success","password updated")
                    localStorage.setItem("mobileNumber", mobileNumber.substring(2, 12));
                    localStorage.setItem("isLogin",true);
                    localStorage.removeItem('token');
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

export default Password


