import React, { useState } from 'react'
//import Navbar from '../features/home/Navabr';
import { CardBody, Card, CardTitle, CardText, CardImg, Input, Label, ButtonGroup, Button, Row, Col, Container, CardSubtitle } from 'reactstrap';
import { Link } from 'react-router-dom';
import ReactStars from "react-rating-stars-component"
import booking from '../Images/drawable-xxxhdpi/drawable-xxxhdpi/home.png';
import background from '../Images/drawable-xxhdpi/Group 37748@2x.png';
import setting from '../Images/drawable-xxhdpi/setting.png';
import Carwash from '../Images/drawable-xxhdpi/wash.png';
import serviceRepair from '../Images/drawable-xxhdpi/Group 37743.png'
import carCare from '../Images/drawable-xxhdpi/Group 37745.png'
import usedNew from '../Images/drawable-xxhdpi/Group 37746.png'
import washDenting from '../Images/drawable-xxhdpi/Group 37744.png'
import fastag from '../Images/drawable-xxxhdpi/Group 35745.png';
import challan from '../Images/drawable-xxhdpi/paychallan.png';
import chauffers from '../Images/drawable-xxhdpi/chuffer.png';
import parking from '../Images/drawable-xxhdpi/parking.png';
import insurance from '../Images/drawable-xxhdpi/insurance.png';
import usecar from '../Images/drawable-xxhdpi/onestep.png';
import appstore from '../Images/drawable-xxhdpi/appstore.png';
import googlepay from '../Images/drawable-xxhdpi/googleplay.png';
import phoneapp from '../Images/drawable-xxhdpi/phoneapp.png';
import Rectangle from '../Images/drawable-xxhdpi/Rectangle.png';
import referearn from '../Images/drawable-xxxhdpi/referearn.png';
import dotline from '../Images/drawable-xxxhdpi/dotline.png';
import user1 from '../Images/drawable-xxxhdpi/user1.png';
import coin from '../Images/drawable-xxxhdpi/coin.png';
import hindustan from '../Images/drawable-xxxhdpi/hindustan.png';
import quots from '../Images/drawable-xxxhdpi/quots.png';
import bstandard from '../Images/drawable-xxxhdpi/bstandard.png';
import economic from '../Images/drawable-xxxhdpi/economic.png';
import mint from '../Images/drawable-xxxhdpi/mint.png';
import set_mob from '../Images/drawable-xxxhdpi/Path 32368.png';
import fastage_mob from '../Images/drawable-xxxhdpi/netc-fastag-logo-vector.png';
import paychallan_mob from '../Images/drawable-xxxhdpi/Path 32483.png';
import sound_mob from '../Images/drawable-xxxhdpi/Path 32483.png'

import contact from '../Images/drawable-xxxhdpi/contact.png';
import logo2 from '../Images/drawable-xxxhdpi/logo2.png';
import facebook from '../Images/drawable-xxxhdpi/facebook.png';
import twitter from '../Images/drawable-xxxhdpi/twitter.png';
import linkedin from '../Images/drawable-xxxhdpi/linkedin.png';
import instagram from '../Images/drawable-xxxhdpi/instagram.png';
import homeimg1 from '../Images/ImagesAll/drawable-xxxhdpi/homeimg1.png';
import user2 from '../Images/drawable-xxxhdpi/user2.png';
import user3 from '../Images/drawable-xxxhdpi/user3.png';
import tesimani from '../Images/drawable-xxxhdpi/tesimani.png';
import send from '../Images/drawable-xxxhdpi/send.png';
import SettingSeaGreen from '../Images/ImagesAll/drawable-xxxhdpi/SettingSeaGreen.png';
import SmilePurpule from '../Images/ImagesAll/drawable-xxxhdpi/SmilePurpule.png';
import PeoplesRed from '../Images/ImagesAll/drawable-xxxhdpi/PeoplesRed.png';
import HeartBlue from '../Images/ImagesAll/drawable-xxxhdpi/HeartBlue.png';
import newev from '../Images/drawable-xxxhdpi/drawable-xxxhdpi/newsev.png';
import activatepng from '../Images/drawable-xxxhdpi/drawable-xxxhdpi/ActivateBG.png';
import locationleft from '../Images/drawable-xxxhdpi/locationleft.png';
import stargive from '../Images/drawable-xxxhdpi/Group 28794.png';
import BatteryCare from '../Images/ImagesAll/drawable-xxxhdpi/BatteryCare.png';
import ACService from '../Images/ImagesAll/drawable-xxxhdpi/ACService.png';
import AutoDetailing from '../Images/ImagesAll/drawable-xxxhdpi/AutoDetailing.png';
import DentingPainting from '../Images/ImagesAll/drawable-xxxhdpi/DentingPainting.png';
import GeneralService from '../Images/ImagesAll/drawable-xxxhdpi/GeneralService.png';
import WheelCare from '../Images/ImagesAll/drawable-xxxhdpi/WheelCare.png';
import AboutLogo from '../Images/aboutlogo.PNG'
import logo from "../Images/drawable-xxhdpi/Group 37749.png"
import Service from './Service';
import Item from './Item';
import './styles.css'
const Home = () => {
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
    const [serviceId,setServiceId]=useState('')
     
    function onServiceClick(){

    }

    
    return (
        <>
            <div>
                <Container fluid>
                    <Row className="head_container">
                        <Col lg={6} className="left_container">
                            <div className="left_items">
                                <h1 className="">Freedom
                                    of Choice</h1>
                                <h2 className="boldfent">One key to unlock
                                    all your car needs!</h2>
                                <p>Master Garage is your car buddy that assists you to make an informed
                                    and helps you to enjoy your freedom to choose !</p>
                            </div>
                        </Col>
                        <Col lg={6} sm={12}>
                            <img src={background} alt="error" className="backgroundhome" />

                        </Col>
                    </Row>
                    <div className="p-3 selectcart">
                        <h3>Select a Category </h3>
                        <div className="cardItem">
                            <Link to="/services" style={{ textDecoration: 'none' }}>
                                <div className='item' style={{ backgroundColor: "aliceblue" }}>
                                    <img src={serviceRepair} alt="error" />
                                    <p style={{ marginLeft: "5px" }}><b>SERVICE AND REPAIRE</b></p>
                                    <hr style={{ height: "2px", width: "90%", borderWidth: "5px", color: "gray", backgroundColor: "gray" }}></hr>
                                    <p style={{ marginLeft: "5px" }}>Compare and choose garage</p>
                                </div>
                            </Link>
                            <Link to="/washing" style={{ textDecoration: 'none' }}>
                                <div className='item' style={{ backgroundColor: "aliceblue" }}>
                                    <img src={washDenting} alt="error" />
                                    <p style={{ marginLeft: "5px" }}><b>Wash & Detailing</b></p>
                                    <hr style={{ height: "2px", width: "90%", borderWidth: "5px", color: "gray", backgroundColor: "gray" }}></hr>
                                    <p style={{ marginLeft: "5px" }}>The Carspa & more</p>
                                </div>
                            </Link>
                            <Link to="/services" style={{ textDecoration: 'none' }}>
                                <div className='item' style={{ backgroundColor: "aliceblue" }}>
                                    <img src={carCare} alt="error" />
                                    <p style={{ marginLeft: "5px" }}><b>Car care & accessory</b></p>
                                    <hr style={{ height: "2px", width: "90%", borderWidth: "5px", color: "gray", backgroundColor: "gray" }}></hr>
                                    <p style={{ marginLeft: "5px" }}>Buy with MG coins</p>
                                </div>
                            </Link>
                            <Link to="/services" style={{ textDecoration: 'none' }}>
                                <div className='item' style={{ backgroundColor: "aliceblue" }}>
                                    <img src={usedNew} alt="error" />
                                    <p style={{ marginLeft: "5px" }}><b>New & Useded Cars</b></p>
                                    <hr style={{ height: "2px", width: "90%", borderWidth: "5px", color: "gray", backgroundColor: "gray" }}></hr>
                                    <p style={{ marginLeft: "5px" }}>The Car Trade Marketplace</p>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="p-3 selectcart">
                        <div>
                            <h3>Value added Service</h3>
                        </div>
                        <div className="cardItem">
                            <div className='valueitem'>
                                <Link to="/HomeFastag" style={{ textDecoration: 'none' }}>
                                    <img src={fastag} alt="error" />
                                    <p>Fastag Recharge</p>
                                </Link>
                            </div>
                            <div className="valueitem">
                                <Link to="/HomeChallan" style={{ textDecoration: 'none' }}>
                                    <img src={challan} alt="error" />
                                    <p>Pay Challans</p>
                                </Link>
                            </div>
                            <div className="valueitem">
                                <Link to="/ChaufferHome" style={{ textDecoration: 'none' }}>
                                    <img src={chauffers} alt="error" />
                                    <p>Chauffer Service</p></Link>
                            </div>
                            <div className="valueitem">
                                <img src={parking} alt="error" />
                                <p>Parking's Nearby</p>
                            </div>
                            <div className="valueitem">
                                <img src={insurance} alt="error" />
                                <p>Insurance Renewal</p>
                            </div>
                        </div>
                    </div>
                </Container>
                <div className="choosegarage">
                    <h3>Why Choose Us?</h3>
                    <Row className='iconrow'>
                        <Col sm={3}>
                            <div className='rowbox py-5'>
                                <Link to="/services" style={{ textDecoration: 'none' }}>
                                    <div className='firsth1'>
                                        <img src={SettingSeaGreen} style={{ width: '100px', height: '100px' }} alt="error" /><br></br>
                                        <span className='head1'>One Stop Solution</span>
                                        <p className='shortpara'>Compare, Choose & Book what fits your needs</p>

                                    </div>
                                </Link>
                            </div>
                        </Col>
                        <Col sm={3}>
                            <div className='rowbox py-5'>
                                <div className='firsth1'>
                                    <img src={SmilePurpule} style={{ width: '100px', height: '100px' }} alt="error" /><br></br>
                                    <span className='head1'>Peace of Mind</span>
                                    <p className='shortpara' >Quality Service, Secure Payment and rooust customer support</p>
                                </div>
                            </div></Col>
                        <Col sm={3}>
                            <div className='rowbox py-5'>
                                <div className='firsth1'>
                                    <img src={HeartBlue} style={{ width: '100px', height: '100px' }} alt="error" /><br></br>
                                    <span className='head1'>Freedom of Choice</span>
                                    <p className='shortpara'>Compare, Choose & Book what fits your needs</p>
                                </div>
                            </div>
                        </Col>
                        <Col sm={3}>
                            <div className='rowbox py-5'>
                                <div className='firsth1'>
                                    <img src={PeoplesRed} style={{ width: '100px', height: '100px' }} alt="error" /><br></br>
                                    <span className='head1'>Trusted Partners</span>
                                    <p className='shortpara'>100% genuine and trusted service providers nearby</p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
                <Container fluid className="about">
                    <Row>
                        <Col lg={10}>
                            <div className="aboutcont">
                                <h3>About Us</h3>
                                <p>

                                    Master Garage provides end to end solution for all your automobile needs and assists you to
                                    make an informed decision, from new vehicle purchase to getting your car serviced at the best
                                    garage nearby, manage all your fastags at one place, find chauffer's for your trips, renew your
                                    insurance, find a suitable parking and to buy and sell used car at the best price.
                                </p>
                            </div>
                        </Col>
                        <Col lg={2} className="icon">
                            <p><img src={logo} alt="error" /></p>
                            <Link className="knownmore">Known more<i class="fas fa-arrow-right"></i></Link>
                        </Col>
                    </Row>
                </Container>

                <div>
                    <div className="media_cont12">
                        <h3>Media Highlights</h3>
                        <div>
                            <Link className="knownmore1">Next<i class="fas fa-arrow-right"></i></Link>
                        </div>
                    </div>
                    <div className="media_cont">
                        <div className="hindustan p-3">
                            <p><img src={hindustan} alt="error" /></p>
                            <div className="quot_img">
                                <img src={quots} alt="error" className="quots" />
                                <h6>
                                    One of India's Fastest Growing
                                    Automotive Tech Startup
                                </h6>
                            </div>
                            <p>Great Service and Support by Vendor, as well as  Master Garage Team,
                                I l  oved the  Idea of comparing  garages  on various
                                parameters and  choosing  the  best  out of the rest,
                                keep on  doing  great!
                                Wish  you  the  Best  of Luck Master Garage...….</p>
                            <p className="readmore">Read More</p>
                            <p className="moreinfoget">Written by Aryan Kapoor on Aug 15 2020</p>
                        </div>
                        <div>
                            <div className="media_cont1">
                                <div className="b_standard p-3">
                                    <p><img src={bstandard} alt="error" /></p>
                                    <div className="quot_img">
                                        <img src={quots} alt="error" className="quots" />
                                        <h6>One of India's Fastest Growing
                                            Automotive Tech Startup</h6>
                                    </div>

                                    <p>Great Service and Support by Vendor, as
                                        well as  Master Garage Team, I loved the
                                        Idea of comparing  garages  on var...…..
                                    </p>
                                    <p className="readmore">Read More</p>
                                    <p className="moreinfoget">Written by Aryan Kapoor on Aug 15 2020</p>

                                </div>
                                <div className="economic p-3">
                                    <p><img src={economic} alt="error" /></p>
                                    <div className="quot_img">
                                        <img src={quots} alt="error" className="quots" />
                                        <h6>One of India's Fastest Growing
                                            Automotive Tech Startup</h6>
                                    </div>
                                    <p>Great Service and Support by Vendor, as
                                        well as  Master Garage Team, I loved the
                                        Idea of comparing  garages  on var...…..
                                    </p>
                                    <p className="readmore">Read More</p>
                                    <p className="moreinfoget">Written by Aryan Kapoor on Aug 15 2020</p>
                                </div>
                            </div>
                            <div>
                                <div className="mint_cont p-3">
                                    <img src={mint} alt="error" />
                                    <div className="">
                                        <div className="quot_img">
                                            <img src={quots} alt="error" className="quots" />
                                            <h6> One of India's Fastest Growing
                                                Automotive Tech Startup</h6>
                                        </div>
                                        <p>Great Service and Support by Vendor, as
                                            well as  Master Garage Team, I loved the
                                            Idea of comparing  garages  on var...…..
                                        </p>
                                        <p className="readmore">Read More</p>
                                        <p className="moreinfoget">Written by Aryan Kapoor on Aug 15 2020</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <div className="social_cont">
                        <div className="carcont">
                            <p>THE</p>
                            <h1>CAR</h1>
                            <h3>Owner's App</h3>
                            <h4>One key to unlock all your car needs!</h4>
                            <div className="social">
                                <img src={appstore} alt="error" />
                                <img src={googlepay} alt="error" />
                            </div>
                        </div>
                        <div className="phoneapp">
                            <img src={Rectangle} alt="error" className='phone_rec' />
                            <img className="phone1" src={phoneapp} alt="error" />

                        </div>
                    </div>
                </div>



                <div className="refer_count">
                    <div><img src={referearn} alt="error" /></div>
                    <div className="refer_sub_count">
                        <h3>Refer & Earn 5000 MG Coins</h3>
                        <p>Redeem at service bookings, buy accessories on MG world and do more,
                            Also earn exciting rewards when your friend completes his first service</p>
                        <Link to="/refer"><button>REFER NOW</button></Link>
                    </div>
                    <div className="coin_count">
                        <img src={Rectangle} alt="error" className="rec_cont" />
                        <img className="coin1" src={coin} alt="error" />

                    </div>
                </div>

                <div className="choosegarage">
                    <img src={tesimani} alt="error" className='tesimani' />
                    <div className="testimonials">
                        <h3>Testimonials</h3>
                        <p>See what people are saying </p>
                    </div>
                    <div className="user_cont1">
                        <div>
                            <div className="user_cont">
                                <img src={user1} alt="error" />
                                <div className="user_info">
                                    <h6>Natasha Singh</h6>
                                    <p>Mumbai</p>
                                </div>
                            </div>
                            <div className="user_cont">
                                <img src={user2} alt="error" />
                                <div className="user_info">
                                    <h6>Alex Morgan</h6>
                                    <p>Mumbai</p>
                                </div>
                            </div>
                            <div className="user_cont">
                                <img src={user3} alt="error" />
                                <div className="user_info">
                                    <h6>Arthur Hansen</h6>
                                    <p>Mumbai</p>
                                </div>

                            </div>

                        </div>
                        <div className="sub_user">
                            <h5>Excellent Work by Master Garage and Team</h5>
                            <p>  <img src={stargive} alt="error" /></p>
                            <p className="paraexplain">" Great Service and Support by Vendor, as well as  Master Garage Team,
                                I loved the  Idea of comparing  garages  on various parameters and
                                choosing  the  best  out of the rest, keep on  doing  great!  Wish  you
                                the  Best  of Luck Master Garage. "
                            </p>
                        </div>


                    </div>
                </div>
                x
                <div className="choosegarage">
                    <div className="media_cont123"><h3>Auto Insights</h3><p> <Link className="knownmore">Next<i class="fas fa-arrow-right"></i></Link></p></div>
                    <div className='auto_insight'>
                        <ul className=''>
                            <li >
                                <div className='card_cont'>
                                    <CardImg

                                        src={BatteryCare}
                                        alt="" />
                                    <CardBody className='card_body'>
                                        <CardTitle className='title'>Post Title</CardTitle>
                                        <CardText className='subtitle'>Written by Aryan Kapoor on Aug 15 2020</CardText>
                                        <CardText>
                                            Master Garage Automated Quote Service generates competitive
                                            estimates on behalf of service providers for the customers,
                                            further the customer can choose and book the best.
                                        </CardText>
                                    </CardBody>
                                </div>
                            </li>
                            <li >
                                <div className='card_cont'>
                                    <CardImg

                                        src={AutoDetailing}
                                        alt="" />
                                    <CardBody className='card_body'>
                                        <CardTitle className='title'>Post Title</CardTitle>
                                        <CardText className='subtitle'>Written by Aryan Kapoor on Aug 15 2020</CardText>
                                        <CardText>
                                            Master Garage Automated Quote Service generates competitive
                                            estimates on behalf of service providers for the customers,
                                            further the customer can choose and book the best.
                                        </CardText>
                                    </CardBody>
                                </div>
                            </li>
                            <li >
                                <div className='card_cont'>
                                    <CardImg

                                        src={GeneralService}
                                        alt="" />
                                    <CardBody className='card_body'>
                                        <CardTitle className='title'>Post Title</CardTitle>
                                        <CardText className='subtitle'>Written by Aryan Kapoor on Aug 15 2020</CardText>
                                        <CardText>
                                            Master Garage Automated Quote Service generates competitive
                                            estimates on behalf of service providers for the customers,
                                            further the customer can choose and book the best.
                                        </CardText>
                                    </CardBody>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='cont_cont'>
                    <div className="logo2">
                        <p> <img src={logo2} alt="error" /></p>
                        <p>Master Garage</p>
                    </div>
                    <img className="cont_back" src={contact} alt="error" />
                    <div className='contact_cont'>
                        <div className="get_reg">
                            <h1>Got a question?</h1>
                            <p>Just leave your email with us! and we'll get back to you!</p>
                        </div>
                        <div>
                            <div className="input_text">
                                <input placeholder='your full name' />
                                <input placeholder='how can we help?' />
                            </div>
                            <div className="input_text">
                                <input placeholder='Your email address' />
                                <input placeholder='Your mobile number' />
                            </div>
                            <div>
                                <textarea className="text_area" />
                            </div>
                            <div className="send_btn">
                                <button >Send
                                    <img className="send_img" src={send} alt="error" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="choosegarage">
                    <div className="footer_garage">
                        <div>
                            <h5>COMPANY</h5>
                            <ul>
                                <li>About Us</li>
                                <li>Team</li>
                                <li>Careers</li>
                                <li>Blogs</li>
                                <li>Partner with us</li>
                            </ul>
                        </div>
                        <div>
                            <h5>SERVICES</h5>
                            <ul>
                                <li>Service & Repairs</li>
                                <li>Wash & Detailing</li>
                                <li>Fastag Service</li>
                                <li>Challan Service</li>
                            </ul>
                        </div>
                        <div>
                            <h5>OTHERS</h5>
                            <ul>
                                <li>Parking Nearby</li>
                                <li>Chauffer Services</li>
                                <li>Insurance Service</li>
                                <li>New & Used Cars</li>
                            </ul>
                        </div>
                        <div>
                            <h5>HELP & LEGAL</h5>
                            <ul>
                                <li>Help & Support</li>
                                <li>Terms & Conditions</li>
                                <li>Refund & Cancellation</li>
                                <li>Privacy Policy</li>
                                <li>Cookies Policy</li>
                            </ul>
                        </div>
                        <div>
                            <div><img src={googlepay} alt="error" className="social" /></div>
                            <div><img src={appstore} alt="error" className="social" /></div>
                        </div>
                    </div>

                    <div className="last_footer">
                        <div className="logo_size">
                            <img src={logo} alt="error" />
                            <h4>Master Garage</h4>
                        </div>
                        <div className="corporation">
                            <p>Carcrafts Corporation © 2021. All rights Reserved.</p>
                        </div>
                        <div className="social_media">
                            <ul>
                                <li><img src={facebook} alt="error" /></li>
                                <li><img src={twitter} alt="error" /></li>
                                <li><img src={linkedin} alt="error" /></li>
                                <li><img src={instagram} alt="error" /></li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Home
