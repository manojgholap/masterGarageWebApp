import React, { useState } from 'react'
import { Container, Row, Col, Card, Button, ButtonGroup, Input, CardBody, CardTitle, CardText, CardSubtitle, CardFooter, CardHeader } from 'reactstrap';
import Coins from '../../Images/Images/drawable-ldpi/coins.png';
import ReactStars from "react-rating-stars-component"
import './dashboard.css';
import { Link, withRouter, useHistory } from 'react-router-dom';
import profile from '../../Images/drawable-xxxhdpi/drawable-xxxhdpi/Ellipse 12.png'
import visa from '../../Images/drawable-xxxhdpi/drawable-xxxhdpi/visa.png';
import googlepay from '../../Images/drawable-xxxhdpi/drawable-xxxhdpi/googlepay.png';
import freechare from '../../Images/drawable-xxxhdpi/drawable-xxxhdpi/freecharge.png';
import paytm from '../../Images/drawable-xxxhdpi/drawable-xxxhdpi/paytm.png';
import phonepay from '../../Images/drawable-xxxhdpi/drawable-xxxhdpi/phonepe.png';
import Switch from "react-switch";
import review1 from '../../Images/drawable-xxxhdpi/drawable-xxxhdpi/review1.png'
import './../Login.css';
import profileavt from '../../Images/drawable-xxxhdpi/drawable-xxxhdpi/Ellipse 12.png';
import mygarage from '../../Images/drawable-xxxhdpi/drawable-xxxhdpi/mygarage.png';
import myorder from '../../Images/drawable-xxxhdpi/drawable-xxxhdpi/myorder.png';
import chats from '../../Images/drawable-xxxhdpi/drawable-xxxhdpi/chats.png';
import bookmark from '../../Images/drawable-xxxhdpi/drawable-xxxhdpi/bookmark.png';
import mgcoin from '../../Images/drawable-xxxhdpi/drawable-xxxhdpi/mgcoin.png';
import helpsupport from '../../Images/drawable-xxxhdpi/drawable-xxxhdpi/helpsupport.png';
import referearn from '../../Images/drawable-xxxhdpi/drawable-xxxhdpi/referearn.png';
import UpdateProfile from './UpdateProfile'
import {immediateToast} from 'izitoast-react'
const ProfileDashboard = (user) => {
    const profilePhoto = user.user.profilePhoto
    const [isUpdate, updateProfile] = useState(false)
    const history =useHistory()
    const rating = {
        size: 50,
        count: 10,
        color: "black",
        activeColor: "red",
        value: 7.5,
        a11y: true,
        isHalf: true,
        emptyIcon: <i className="far fa-star" />,
        halfIcon: <i className="fa fa-star-half-alt" />,
        filledIcon: <i className="fa fa-star" />,
        onChange: newValue => {
            console.log(`Example 2: new value is ${newValue}`);
        }
    };
    function handleClick() {
        immediateToast("question",{
            message:"Are u sure want to log out",
            position:"center",
            backgroundColor:"yellow",
            buttons:[
              ['<button>Yes</button>', function (instance, toast) {
                localStorage.removeItem("mobileNumber");
                localStorage.setItem("isLogin",false);
                instance.hide({ transitionOut: 'fadeOut' }, toast, 'button');
                history.push("/home")
            }, true],
            ['<button>No</button>', function (instance, toast) {
                instance.hide({ transitionOut: 'fadeOut' }, toast, 'button');
          }, true]
            ]
          })
    }
    function setProfile(){
        updateProfile(true)
    }
    return (
        <>
            <Container fluid className="profile-dashboard">
                <Row>
                    <Col lg={3}>
                        <Card className="card1 d-flex rounded">
                            <CardBody >
                                <ul className="supportprofile">
                                    <li>
                                        <img src={profileavt} width="10%" height="20%" alt="error" />
                                        <p >Profile</p>

                                    </li>
                                    <Link to="/MyGarage">
                                        <li>
                                            <img src={mygarage} alt="error" />
                                            <p>My Garage</p>
                                        </li>
                                    </Link>
                                    <Link to="/MyOrder">
                                        <li>
                                            <img src={myorder} alt="error" />
                                            <p>My Orders</p>
                                        </li>
                                    </Link>
                                    <Link to="/chat">
                                        <li>
                                            <img src={chats} alt="error" />
                                            <p>Chats</p>
                                        </li>
                                    </Link>
                                    <li>
                                        <img src={bookmark} alt="error" />
                                        <p>Bookmarks</p>
                                    </li>
                                    <Link to="/MgCoin">
                                        <li>
                                            <img src={mgcoin} alt="error" />
                                            <p>MG Coins</p>
                                        </li>
                                    </Link>
                                    <Link to="/HelpsSupport">
                                        <li>
                                            <img src={helpsupport} alt="error" />
                                            <p>Help & Support</p>
                                        </li>
                                    </Link>
                                    <Link to="/refer">
                                        <li>
                                            <img src={referearn} alt="error" />
                                            <p>Refer & Earn</p>
                                        </li>
                                    </Link>
                                </ul>
                            </CardBody>
                            <footer>
                                <div>
                                    <ul className="social_icons">
                                        <li><i class="fas fa-share-alt"></i><span>Share us</span></li>
                                        <li><i class="fab fa-facebook-square"></i></li>
                                        <li><i class="fab fa-twitter"></i></li>
                                        <li><i class="fab fa-linkedin"></i></li>
                                        <li><i class="fab fa-instagram"></i></li>
                                    </ul>
                                </div>
                            </footer>
                        </Card>
                    </Col>
                    {
                        isUpdate ?<Col><UpdateProfile user={user.user}></UpdateProfile></Col> :
                            <Col>
                                <Card>
                                    <div className="allcontainer">
                                        <Row className="p-4">
                                            <Col lg={3}>
                                                <div className="profileheader">
                                                    {profilePhoto?<img src={`${process.env.REACT_APP_Api_Url+user.user.profilePhoto}`} width="25%" height="25%" alt={profileavt}  className="mb-4" />:
                                                    <img src={profileavt}  alt={profileavt}  className="mb-4" />}
                                                    <Button variant="primary" color="primary" onClick={setProfile}><i class="far fa-edit"></i>Update Profile</Button>
                                                </div>
                                            </Col>
                                            <Col lg={8}>
                                                <div className="peofileinfos">
                                                    <div className="profilename"><h3>{user.user.firstName ? user.user.firstName +" "+user.user.lastName : "User"}</h3>
                                                        <a class="btn btn-danger" onClick={handleClick} >
                                                            <i class="fa fa-sign-out"></i>&nbsp;logout
                                                        </a>
                                                    </div>
                                                    <div className="subconatiner">
                                                        <ul>
                                                            <li><i class="far fa-envelope"></i>{user.user.email ? user.user.email : "xxxxx@gmail.com"}</li>
                                                            <li><i class="fas fa-phone"></i>{user.user.mobileNumber ? user.user.mobileNumber : "xxxxxxxxxx"}</li>
                                                            {/* <li><i class="fas fa-phone"></i>+91 9082224157</li> */}
                                                            <li><i class="fas fa-map-marker-alt"></i>{user.user.homeAddress ? user.user.homeAddress : "update address"}</li>
                                                        </ul>
                                                        <div className="qrborder"><i class="fas fa-qrcode"></i></div>
                                                    </div>
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                </Card>
                                <div className="mt-4">
                                    <div className="profileseconfcont p-3">
                                        <div className="experiencref">
                                            <div>
                                                <p><i class="fas fa-share-alt"></i> Refer a friend</p>
                                                <p className="referprofile"> <small>Refer a friend to Master Garage & earn
                                                    coins once they complete booking</small></p>
                                            </div>
                                            <div>
                                                <p>How has your experience been? Tell us</p>
                                                <p className="referprofile1">
                                                    <ReactStars
                                                        count={5}
                                                        onChange={rating}
                                                        className="rat_star"
                                                        size={24}
                                                        activeColor="#ffd700"
                                                    />
                                                    <p> ,Write a review</p>
                                                </p>
                                            </div>
                                            <div>
                                                <p>Need Help?</p>
                                                <button className="btncontact">Contact Us</button>
                                            </div>



                                        </div>
                                    </div>
                                </div>
                                <div className="paymentfullcont mt-3">
                                    <h4>Payment</h4>
                                    <div>
                                        <div className="p-2 paymentcontmain">
                                            <div>
                                                <h5>Saved Cards</h5>
                                                <div className="paymentcont">
                                                    <Col lg={4}>
                                                        <Card className="rounded">
                                                            <div className="paymentscard p-3">
                                                                <p><img src={visa} alt="error" /></p>
                                                                <div className="paymentgap">
                                                                    <p>8089 - XXXX - XXXX - 0099</p>
                                                                    <small>Valid Till 08/2024</small>
                                                                </div>
                                                                <Link className="deletepaymentcard">Delete</Link>
                                                            </div>
                                                        </Card>
                                                    </Col>
                                                    <Col lg={4}>
                                                        <Card className="rounded">
                                                            <div className="paymentscard p-3">
                                                                <p><img src={visa} alt="error" /></p>
                                                                <div className="paymentgap">
                                                                    <p>8089 - XXXX - XXXX - 0099</p>
                                                                    <small>Valid Till 08/2024</small>
                                                                </div>
                                                                <Link className="deletepaymentcard">Delete</Link>

                                                            </div>
                                                        </Card>
                                                    </Col>
                                                </div>
                                            </div>
                                            <div>
                                                <h5>Saved UPI Addresses</h5>
                                                <div className="paymentcont">
                                                    <Col lg={4}>
                                                        <Card className="rounded">
                                                            <div className="paymentscard p-3">
                                                                <p><img src={phonepay} alt="error" /></p>
                                                                <div className="paymentgap">
                                                                    <p>8853299293@oksbi</p>
                                                                </div>
                                                                <Link className="deletepaymentcard">Delete</Link>
                                                            </div>
                                                        </Card>
                                                    </Col>
                                                    <Col lg={4}>
                                                        <Card className="rounded">
                                                            <div className="paymentscard p-3">
                                                                <p><img src={googlepay} alt="error" /></p>
                                                                <div className="paymentgap">
                                                                    <p>8853299293@oksbi</p>
                                                                </div>
                                                                <Link className="deletepaymentcard">Delete</Link>

                                                            </div>
                                                        </Card>
                                                    </Col>
                                                </div>
                                            </div>
                                            <div>
                                                <h5>Linked Wallets</h5>
                                                <div className="paymentcont">
                                                    <Col lg={4}>
                                                        <Card className="rounded">
                                                            <div className="paymentscard p-3">
                                                                <p><img src={paytm} alt="error" /></p>
                                                                <div className="paymentgap">
                                                                    <p>Paytm</p>
                                                                    <small>Balance- 0</small>
                                                                </div>
                                                                <Link className="deletepaymentcard">Delete</Link>
                                                            </div>
                                                        </Card>
                                                    </Col>
                                                    <Col lg={4}>
                                                        <Card className="rounded">
                                                            <div className="paymentscard p-3">
                                                                <p><img src={freechare} alt="error" /></p>
                                                                <div className="paymentgap">
                                                                    <p>Freecharge</p>
                                                                    <small>Balance- 0</small>
                                                                </div>
                                                                <Link className="deletepaymentcard">Delete</Link>

                                                            </div>
                                                        </Card>
                                                    </Col>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-4 mb-4">
                                    <h5>Saved Address</h5>
                                    <Row>
                                        <Col lg={6} className="mb-4">
                                            <div>
                                                <div className="profileaddres p-3">
                                                    <div className="editdelete">
                                                        <p><Link className="edit1">Edit</Link></p>
                                                        <p><Link className="delete1">Delete</Link></p>
                                                    </div>
                                                    <div className="homeaddress">
                                                        <i class="fas fa-home"></i>
                                                        <div>
                                                            <p>Home</p>
                                                            <small>5, Vasant Kunj, Shanti Nagar, Near Andheri Metro Station,
                                                                Andheri East, Mumbai- 123 456, Maharashtra, India</small>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col lg={6} className="mb-4">
                                            <div>
                                                <div className="profileaddres p-3">
                                                    <div className="editdelete">
                                                        <p><Link className="edit1">Edit</Link></p>
                                                        <p><Link className="delete1">Delete</Link></p>
                                                    </div>
                                                    <div className="homeaddress">
                                                        <i class="fas fa-briefcase"></i>
                                                        <div>
                                                            <p>Office</p>
                                                            <small>5, Vasant Kunj, Shanti Nagar, Near Andheri Metro Station,
                                                                Andheri East, Mumbai- 123 456, Maharashtra, India</small>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col lg={6} className="mb-4">
                                            <div>
                                                <div className="profileaddres p-3">
                                                    <div className="editdelete">
                                                        <p><Link className="edit1">Edit</Link></p>
                                                        <p><Link className="delete1">Delete</Link></p>
                                                    </div>
                                                    <div className="homeaddress">
                                                        <i class="fas fa-map-marker-alt"></i>
                                                        <div>
                                                            <p>Aditya</p>
                                                            <small>5, Vasant Kunj, Shanti Nagar, Near Andheri Metro Station,
                                                                Andheri East, Mumbai- 123 456, Maharashtra, India</small>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col lg={6} className="mb-4">
                                            <div>
                                                <div className="profileaddres p-3">
                                                    <div className="editdelete">
                                                        <p><Link className="edit1">Edit</Link></p>
                                                        <p><Link className="delete1">Delete</Link></p>
                                                    </div>
                                                    <div className="homeaddress">
                                                        <i class="fas fa-map-marker-alt"></i>
                                                        <div>
                                                            <p>Parents</p>
                                                            <small>5, Vasant Kunj, Shanti Nagar, Near Andheri Metro Station,
                                                                Andheri East, Mumbai- 123 456, Maharashtra, India</small>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Col>
                                        <Link><i class="fas fa-plus"></i> Add more Address</Link>
                                    </Row>
                                </div>
                                <div>
                                    <h5>Notification Setting</h5>
                                    <div className="profileaddres p-3">
                                        <ul>
                                            <li className="notificationprofile">
                                                <p>Allow garages to send you personalized promotional emails for discounts & special offers </p>
                                                <div className="">
                                                    <i class="far fa-question-circle"></i>
                                                    <Switch />
                                                </div>
                                            </li>
                                            <li className="notificationprofile">
                                                <p>Alert me on reminders and upcoming appointment notifications</p>
                                                <div className="">
                                                    <i class="far fa-question-circle"></i>
                                                    <Switch />
                                                </div>
                                            </li>
                                            <li className="notificationprofile">
                                                <p>Notify me about offers and discounts by Master Garage</p>
                                                <div className="">
                                                    <i class="far fa-question-circle"></i>
                                                    <Switch />
                                                </div>
                                            </li>
                                            <li className="notificationprofile">
                                                <p>Notify me via e-mail when a merchant sends me a personalized message</p>
                                                <div className="">
                                                    <i class="far fa-question-circle"></i>
                                                    <Switch />
                                                </div>
                                            </li>
                                            <li className="notificationprofile">
                                                <p>WhatsApp notifications when you book a service through Master Garage </p>
                                                <div className="">
                                                    <i class="far fa-question-circle"></i>
                                                    <Switch />
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="removeprofile mb-4">
                                    <h5>Remove Account</h5>
                                    <p>Want to stop using this account?</p>
                                    <button className="btnremove">REMOVE</button>
                                </div>
                            </Col>
                    }
                </Row>
            </Container>
        </>

    )
}

export default ProfileDashboard
