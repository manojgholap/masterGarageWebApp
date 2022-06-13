import React, { useEffect, useState } from 'react';
import '../Home_Maintain/homemaintain.css';
import { Link } from 'react-router-dom';
import { CardBody, Card, CardTitle, CardText, CardImg, Input, Label, ButtonGroup, Button, Row, Col, Container } from 'reactstrap';
import BatteryCare from '../../Images/ImagesAll/drawable-xxxhdpi/BatteryCare.png';
import ACService from '../../Images/ImagesAll/drawable-xxxhdpi/ACService.png';
import AutoDetailing from '../../Images/ImagesAll/drawable-xxxhdpi/AutoDetailing.png';
import DentingPainting from '../../Images/ImagesAll/drawable-xxxhdpi/DentingPainting.png';
import GeneralService from '../../Images/ImagesAll/drawable-xxxhdpi/GeneralService.png';
import WheelCare from '../../Images/ImagesAll/drawable-xxxhdpi/WheelCare.png';
import pg1 from '../../Images/drawable-xxxhdpi/pg1.png';
import pg2 from '../../Images/drawable-xxxhdpi/pg2.png';
import pg3 from '../../Images/drawable-xxxhdpi/pg3.png';
import pg4 from '../../Images/drawable-xxxhdpi/pg4.png';
import pg5 from '../../Images/drawable-xxxhdpi/pg5.png';
import pg6 from '../../Images/drawable-xxxhdpi/pg6.png';
import pg7 from '../../Images/drawable-xxxhdpi/pg7.png';
import pg8 from '../../Images/drawable-xxxhdpi/pg8.png';
import pg9 from '../../Images/drawable-xxxhdpi/pg9.png';
import pg10 from '../../Images/drawable-xxxhdpi/pg10.png';
import pg11 from '../../Images/drawable-xxxhdpi/pg11.png';
import pg12 from '../../Images/drawable-xxxhdpi/pg12.png';
import ratefive from '../../Images/drawable-xxxhdpi/ratfive.png';
import newcard from '../../Images/drawable-xxxhdpi/new.png';
import recomend from '../../Images/drawable-xxxhdpi/recomend.png';
import PS1 from '../../Images/ImagesAll/drawable-xxxhdpi/PS1.png';
import firstchoice from '../../Images/drawable-xxxhdpi/firstchoice.png';
import cartisan from '../../Images/ImagesAll/drawable-xxxhdpi/Cartisan.png';
import castrol from '../../Images/ImagesAll/drawable-xxxhdpi/Castrol.png';
import garagetitan from '../../Images/ImagesAll/drawable-xxxhdpi/garagetitan.png';
import garagekakaro from '../../Images/ImagesAll/drawable-xxxhdpi/garagekakaro.png';
import BKakaako from '../../Images/ImagesAll/drawable-xxxhdpi/BKakaako.png';
import coupan from '../../Images/drawable-xxxhdpi/coupan.png';
import need1 from '../../Images/drawable-xxxhdpi/Group 30858.png';
import need2 from '../../Images/drawable-xxxhdpi/Group 30857.png';
import need3 from '../../Images/drawable-xxxhdpi/Group 30856.png';
import need4 from '../../Images/drawable-xxxhdpi/Group 30855.png';
import need5 from '../../Images/drawable-xxxhdpi/Group 30866.png';
import need6 from '../../Images/drawable-xxxhdpi/Group 30864.png';
import need7 from '../../Images/drawable-xxxhdpi/Group 30862.png';
import need8 from '../../Images/drawable-xxxhdpi/Group 30860.png';
import need9 from '../../Images/drawable-xxxhdpi/Group 32157.png';
import rating from '../../Images/drawable-xxhdpi/rating.png';
import washing from '../../Images/drawable-xxhdpi/washing.png';
import morningSpa from '../../Images/drawable-xxhdpi/morningSpa.png';
import pressureWash from '../../Images/drawable-xxhdpi/pressureWash.png';
import premiumDetailing from '../../Images/drawable-xxhdpi/premiumDetailing.png'

import axios from "axios";
import BBGVechicle from '../BookByGarage/BBGVechicleAdded';


function CarCare(props) {
    const [showButton, setShowButton] = useState(true);
    const [showMessage, setShowMessage] = useState(false);
    const [searchgarage, setGarages] = useState(false);
    const [garages, getGarages] = useState([]);
    const [isSearchGarage, getSearchGarages] = useState('');
    const [isGarageSelected, setGarageSelected] = useState('')


    useEffect(() => {
        getAllGarages()
    }, [searchgarage])
    function handleGarageClick(e) {
        setGarageSelected(e)
    }
    function getAllGarages() {
        axios.post(process.env.REACT_APP_Api_Url + "garage/getGarageByPinCode",
            { pincode: props.pincode || "410502" })
            .then((res, err) => {
                if (res.data.status == true) {
                    if (res.data.resp.length > 0) {
                        getGarages(res.data.resp);
                        setGarages(true)
                    }
                    else {
                        setGarages(false)
                    }
                }
                else {
                    setGarages(false)
                    showMessage("error", res.data.err)
                }
            })
    }
    function getGarageByGarageName(e) {
        if (e.target.value.length > 3) {
            var value = garages.filter((res) => {
                let response = res.garageName.toLocaleLowerCase().startsWith(e.target.value.toLocaleLowerCase());
                return response
            })
            getSearchGarages(value)
        } else {
            getSearchGarages('')
        }
    }
    return (<>
        {isGarageSelected ? <BBGVechicle setGarageSelected={setGarageSelected} isGarageSelected={isGarageSelected}></BBGVechicle> : 
        <>
        <div className='container-fluid px-5'>
            <Row >
                <Col lg={6}>
                    <Row className="washing">
                        <div className="poop">
                            <p className="text1">Wash & Detailing</p>
                            <p className="poppins15R">Everything from car spa to premium Auto Dailing</p>
                        </div>
                    </Row>
                    <Row  >
                        <div className="poppontop">
                            <div className="poop">
                                <p className="text-2" >What are you looking For?</p>
                                <br/>
                                <div className="inputser_garage">
                                    <i class="fa-solid fa-magnifying-glass"></i>
                                    <input
                                        className='Searchinput'
                                        type="text"
                                        placeholder="Search for garages, services....."
                                        onChange={getGarageByGarageName}
                                    />
                                </div>
                            </div>
                        </div>
                    </Row>
                    <Row>
                        <ul className="row2  mt-3">
                            <li className='ServicesBG' style={{marginRight:"100px"}} >
                                <Link to="/WashingService" pincode={props.pincode} style={{ textDecoration: 'none' }}>
                                    <div className="rowBox p-2">
                                        <img src={morningSpa} alt="error" />
                                    </div>
                                    <p style={{ textAlign: 'center' }}>Morning Spa</p>
                                </Link>
                            </li>
                            <li className='ServicesBG' style={{marginRight:"100px"}}>
                                <Link to="/WashingService" style={{ textDecoration: 'none' }}>
                                    <div className="rowBox p-2">
                                        <img src={pressureWash} alt="error" />
                                    </div>
                                    <p style={{ textAlign: 'center' }}>Pressure Wash</p>
                                </Link>
                            </li>
                            <li className='ServicesBG'>
                                <Link to="/WashingService" style={{ textDecoration: 'none' }}>
                                    <div className="rowBox p-2">
                                        <img src={premiumDetailing} alt="error" />
                                    </div>
                                    <p style={{ textAlign: 'center' }}>premium Detailing</p>
                                </Link>
                            </li>
                        </ul>
                    </Row>
                </Col>

                <Col lg={6} style={{ marginTop: "50px" }}>
                    <img src={washing} style={{ height: "385px", width: "623px", paddingLeft: '10px' }} alt="error" />
                </Col>
            </Row>
            <Row>
                <Container >
                    <div className="all_garage">
                        <Row>
                            {isSearchGarage ?
                                isSearchGarage.map(garages => {
                                    return (
                                        <Col className="SubmidBgBox mb-3" lg={4} style={{ marginBottom: "10px", cursor: "pointer" }} onClick={() => handleGarageClick(garages)}>
                                            <div style={{
                                                boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.555)",
                                                position: "relative",
                                                borderRadius: "10px"
                                            }}>
                                                <div className="allgaragehead p-3">
                                                    <img src={cartisan} alt="error" />
                                                    <div className="allsubgarage">
                                                        {/* <img src={recomend} alt="error" className='recomanded' /> */}
                                                        <h6>{garages.garageName}</h6>
                                                        <small>{garages.garageType}</small>
                                                        {
                                                            garages.garageAddress.map(add => {
                                                                return (<p className='allgaragehead1'><small>{add.city + ' ' + add.pincode}</small>
                                                                </p>
                                                                )
                                                            })}
                                                    </div>
                                                    {/* <p> <img src={rating}></img></p>  */}
                                                </div>
                                                <div className="ameent">
                                                    <h4>Amenities</h4>
                                                    <ul><li>
                                                        {garages.garageAmenities.map(services => {
                                                            return (<label class="fancy-checkbox12">
                                                                <input type="checkbox" />
                                                                <span>{services}</span>
                                                            </label>)
                                                        })}
                                                    </li>
                                                    </ul>
                                                    <div className='coupancont'>
                                                        <img src={coupan} alt="error" />
                                                        <p>50% Off I Use Code: TRYNEW</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </Col>
                                    )
                                }) : ''}

                        </Row>
                    </div>
                </Container>
            </Row>
        </div>
            <Card>
                <div className="popular_garage p-3">
                    <h3>Popular Garages</h3>
                    <ul>
                        <li>
                            <div>
                                <img src={pg2} alt="error" />
                                <h6>Cartisan Garage</h6>
                                <small>South Bombay</small>
                            </div>
                        </li>
                        <li>
                            <div>
                                <img src={pg1} alt="error" />
                                <h6>Mahindra First Choice</h6>
                                <small>South Bombay</small>
                            </div>
                        </li>
                        <li>
                            <div>
                                <img src={pg3} alt="error" />
                                <h6>ABC Garage</h6>
                                <small>South Bombay</small>
                            </div>
                        </li>
                        <li>
                            <div>
                                <img src={pg4} alt="error" />
                                <h6>Spares Club</h6>
                                <small>South Bombay</small>
                            </div>
                        </li>
                        <li>
                            <div>
                                <img src={pg5} alt="error" />
                                <h6>Frankies Garage</h6>
                                <small>South Bombay</small>
                            </div>
                        </li>
                        <li>
                            <div>
                                <img src={pg6} alt="error" />
                                <h6>Royal Auto Care</h6>
                                <small>South Bombay</small>
                            </div>
                        </li>
                        <li>
                            <div>
                                <img src={pg7} alt="error" />
                                <h6>Gregs Garage LLC</h6>
                                <small>South Bombay</small>
                            </div>
                        </li>
                        <li>
                            <div>
                                <img src={pg8} alt="error" />
                                <h6>Garage Titans</h6>
                                <small>South Bombay</small>
                            </div>
                        </li>
                    </ul>
                </div>

            </Card>
            <div className='px-5 '>
                <div className='py-3'>
                    <Row className="trandpage">
                        <p className='poppins30B'>Trending Services</p>
                        <p className='Opens20R'>Expert Garages at Best Prices</p>
                    </Row>
                    <Row>
                        <div className='ServicesScroll'>
                            <ul className='TrendingServices'>
                                <li >
                                    <Card className='ServicesOption' style={{ backgroundColor: '#F8F9FA' }}>
                                        <CardImg
                                            style={{ width: '400px', height: '219px' }}
                                            src={BatteryCare}
                                            alt="Services " />
                                        <CardBody className='p-0 m-0 px-3'>
                                            <CardTitle className='poppins25M'>Battery Care</CardTitle>
                                            <CardText className='poppins15L'>Battery Replacement at Best Price</CardText>
                                        </CardBody>
                                    </Card>
                                </li>
                                <li >
                                    <Card className='ServicesOption' style={{ backgroundColor: '#F8F9FA' }}>
                                        <CardImg
                                            style={{ width: '400px', height: '219px' }}
                                            src={AutoDetailing}
                                            alt="Services " />
                                        <CardBody className='p-0 m-0 px-3'>
                                            <CardTitle className='poppins25M'>Auto Detailing</CardTitle>
                                            <CardText className='poppins15L'>Free Interior Car Spa</CardText>
                                        </CardBody>
                                    </Card>
                                </li>
                                <li >
                                    <Card className='ServicesOption' style={{ backgroundColor: '#F8F9FA' }}>
                                        <CardImg
                                            style={{ width: '400px', height: '219px' }}
                                            src={GeneralService}
                                            alt="Services " />
                                        <CardBody className='p-0 m-0 px-3'>
                                            <CardTitle className='poppins25M'>General Service</CardTitle>
                                            <CardText className='poppins15L'>Get Ready for Your Next Road Trip</CardText>
                                        </CardBody>
                                    </Card>
                                </li>

                                <li >
                                    <Card className='ServicesOption' style={{ backgroundColor: '#F8F9FA' }}>
                                        <CardImg
                                            style={{ width: '400px', height: '219px' }}
                                            src={DentingPainting}
                                            alt="Services " />
                                        <CardBody className='p-0 m-0 px-3'>
                                            <CardTitle className='poppins25M'>Denting & Painting</CardTitle>
                                            <CardText className='poppins15L'>Best Quality Paints at Better Prices</CardText>
                                        </CardBody>
                                    </Card>
                                </li>
                                <li >
                                    <Card className='ServicesOption' style={{ backgroundColor: '#F8F9FA' }}>
                                        <CardImg
                                            style={{ width: '400px', height: '219px' }}
                                            src={WheelCare}
                                            alt="Services " />
                                        <CardBody className='p-0 m-0 px-3'>
                                            <CardTitle className='poppins25M'>Wheel Care</CardTitle>
                                            <CardText className='poppins15L'>Tire alignments & More</CardText>
                                        </CardBody>
                                    </Card>
                                </li>
                                <li >
                                    <Card className='ServicesOption' style={{ backgroundColor: '#F8F9FA' }}>
                                        <CardImg
                                            style={{ width: '400px', height: '219px' }}
                                            src={ACService}
                                            alt="Services " />
                                        <CardBody className='p-0 m-0 px-3'>
                                            <CardTitle className='poppins25M'>AC Service</CardTitle>
                                            <CardText className='poppins15L'>Be Prepared For Summers</CardText>
                                        </CardBody>
                                    </Card>
                                </li>
                            </ul>
                        </div>

                    </Row>
                </div>
            </div>

            <div className="offerMaincont1 p-4">
                <h2>Offers</h2>
                <div className="offerMaincont">
                    <div className='offerhome ml-3'>
                        <div className="offerback"><img src={pg1} alt="error" /></div>
                        <div className="pg1color p-4">
                            <h4>Upto</h4>
                            <h2>50%<small>off</small></h2>
                            <p>On Extended Warranty</p>
                        </div>
                    </div>
                    <div className='offerhome ml-3'>
                        <div className="offerback2"><img src={pg9} alt="error" /></div>
                        <div className="pg9color p-4">
                            <h4>Upto</h4>
                            <h2>10%<small>off</small></h2>
                            <p>On Extended Warranty</p>
                        </div>
                    </div>
                    <div className='offerhome ml-3'>
                        <div className="offerback3"><img src={pg8} alt="error" /></div>
                        <div className="pg8color p-4">
                            <h4>Upto</h4>
                            <h2>10%<small>off</small></h2>
                            <p>On Extended Warranty</p>
                        </div>
                    </div>
                    <div className='offerhome ml-3'>
                        <div className="offerback4"><img src={pg10} alt="error" /></div>
                        <div className="pg10color p-4">
                            <h4>Upto</h4>
                            <h2>50%<small>off</small></h2>
                            <p>On Extended Warranty</p>
                        </div>
                    </div>
                    <div className='offerhome ml-3'>
                        <div className="offerback5"><img src={pg11} alt="error" /></div>
                        <div className="pg11color p-4">
                            <h4>Upto</h4>
                            <h2>10%<small>off</small></h2>
                            <p>On Extended Warranty</p>
                        </div>
                    </div>
                    <div className='offerhome ml-3'>
                        <div className="offerback6"><img src={pg12} alt="error" /></div>
                        <div className="pg12color p-4">
                            <h4>Upto</h4>
                            <h2>10%<small>off</small></h2>
                            <p>On Extended Warranty</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='footerbg1 m-0 mt-3 p-4'>

                <div className="classpease">
                    <ul className="peasemind">
                        <div className="peasefiret">
                            <h2>Peace of Mind Guarantee Program</h2>
                            <p>Know more    <i class="fas fa-arrow-circle-right"></i></p>
                        </div>
                        <li>  <label class="fancy-checkbox1">
                            <input type="checkbox" />
                            <span> Competitive Pricing</span>
                        </label></li>
                        <li>  <label class="fancy-checkbox1">
                            <input type="checkbox" />
                            <span> Secure Payments</span>
                        </label></li>
                        <li>  <label class="fancy-checkbox1">
                            <input type="checkbox" />
                            <span> High Quality Service</span>
                        </label></li>
                        <li>  <label class="fancy-checkbox1">
                            <input type="checkbox" />
                            <span>25000 Warrenty</span>
                        </label></li>
                    </ul>

                    <img src={PS1} />
                </div>

            </div>
            <div>
                <>
                    <div className="allff p-4">
                        <h2>All Garage({garages.length})</h2>
                        <div className="inputser_garage1">
                            <i class="fa-solid fa-magnifying-glass"></i>
                            <input
                                className='Searchinput1'
                                type="text"
                                placeholder="Search for garages, services....."
                                onChange={getGarageByGarageName}
                            />
                        </div>
                    </div>
                    {isSearchGarage ?
                        <Container >
                            <div className="all_garage">
                                <Row>
                                    {isSearchGarage.map(garages => {
                                        return (
                                            <Col className="SubmidBgBox mb-3" lg={4} style={{ marginBottom: "10px", cursor: "pointer" }} onClick={() => handleGarageClick(garages)}>
                                                <div style={{
                                                    boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.555)",
                                                    position: "relative",
                                                    borderRadius: "10px"
                                                }}>
                                                    <div className="allgaragehead p-3">
                                                        <img src={cartisan} alt="error" />
                                                        <div className="allsubgarage">
                                                            {/* <img src={recomend} alt="error" className='recomanded' /> */}
                                                            <h6>{garages.garageName}</h6>
                                                            <small>{garages.garageType}</small>
                                                            {
                                                                garages.garageAddress.map(add => {
                                                                    return (<p className='allgaragehead1'><small>{add.city + ' ' + add.pincode}</small>
                                                                    </p>
                                                                    )
                                                                })}
                                                        </div>
                                                        {/* <p> <img src={rating}></img></p>  */}
                                                    </div>
                                                    <div className="ameent">
                                                        <h4>Amenities</h4>
                                                        <ul><li>
                                                            {garages.garageAmenities.map(services => {
                                                                return (<label class="fancy-checkbox12">
                                                                    <input type="checkbox" />
                                                                    <span>{services}</span>
                                                                </label>)
                                                            })}
                                                        </li>
                                                        </ul>
                                                        <div className='coupancont'>
                                                            <img src={coupan} alt="error" />
                                                            <p>50% Off I Use Code: TRYNEW</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Col>
                                        )
                                    })
                                    }
                                </Row>
                            </div>
                        </Container> :
                        <Container >
                            <div className="all_garage">
                                <Row>
                                    {searchgarage && garages.map(garages => {
                                        return (
                                            <Col className="SubmidBgBox mb-3" lg={4} style={{ marginBottom: "10px", cursor: "pointer" }} onClick={() => handleGarageClick(garages)}>
                                                <div style={{
                                                    boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.555)",
                                                    position: "relative",
                                                    borderRadius: "10px"
                                                }}>
                                                    <div className="allgaragehead p-3">
                                                        <img src={cartisan} alt="error" />
                                                        <div className="allsubgarage">
                                                            {/* <img src={recomend} alt="error" className='recomanded' /> */}
                                                            <h6>{garages.garageName}</h6>
                                                            <small>{garages.garageType}</small>
                                                            {
                                                                garages.garageAddress.map(add => {
                                                                    return (<p className='allgaragehead1'><small>{add.city + ' ' + add.pincode}</small>
                                                                    </p>
                                                                    )
                                                                })}
                                                        </div>
                                                        {/* <p> <img src={rating}></img></p> */}
                                                    </div>
                                                    <div className="ameent">
                                                        <h4>Amenities</h4>
                                                        <ul><li>
                                                            {garages.garageAmenities.map(services => {
                                                                return (<label class="fancy-checkbox12">
                                                                    <span>{services}</span>
                                                                </label>)
                                                            })}
                                                        </li>
                                                        </ul>
                                                        <div className='coupancont'>
                                                            <img src={coupan} alt="error" />
                                                            <p>50% Off I Use Code: TRYNEW</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Col>
                                        )
                                    })
                                    }
                                </Row>
                            </div>
                        </Container>
                    }
                    <div className="btnblockall">
                        <button className="btn btn-block" color='primary'>
                            <h4> See all  Garages</h4>
                        </button>
                    </div>
                </>
            </div>
        </>}
    </>
    )
}

export default CarCare;