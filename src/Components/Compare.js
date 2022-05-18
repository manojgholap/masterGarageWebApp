import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { Row, Col, Container } from 'reactstrap';
import SettingSeaGreen from '../Images/ImagesAll/drawable-xxxhdpi/SettingSeaGreen.png';
import SmilePurpule from '../Images/ImagesAll/drawable-xxxhdpi/SmilePurpule.png';
import PeoplesRed from '../Images/ImagesAll/drawable-xxxhdpi/PeoplesRed.png';
import HeartBlue from '../Images/ImagesAll/drawable-xxxhdpi/HeartBlue.png';
import homeimg1 from '../Images/ImagesAll/drawable-xxxhdpi/homeimg1.png';
import HomeMain1 from "./Home_Maintain/HomeMain1";
import './Login.css';
import { get } from 'lodash-es'
import { showMessage } from "../Healper";


const CompareandChoose = () => {
    const [pincode, setPinCode] = useState('');
    const [isPinCode,getPinCode]=useState(false)

    function handleClick() {
        if (pincode.length < 6 || pincode.length > 6) {
            showMessage("info", 'enter 6 digit pin code number');
            return
        }
        getPinCode(true)
    }
    function onChange(e) {
        const re = /^[0-9\b]+$/;
        if (e.target.value === '' || re.test(e.target.value)) {

            setPinCode(e.target.value)
        }
    }
    function onGarageSelect(garages) {
        console.log(garages)
    }
    return (
        <>
            {isPinCode?<HomeMain1 pincode={pincode}></HomeMain1>:
                <Container fluid>
                    <Row className="row1">
                        <Col lg={7} id="home_cont1" className='row1bg'>
                            <Row className="second_home">
                                <p className="text1">Compare & Choose Schedule an appoitment Pay securely online</p>
                                <div className="p-3 selectcart">
                                    <h5>Enter your location to get information on garage nearby</h5>
                                    <div className="inputser_garage1">
                                        <i class="fas fa-map-marker-alt"></i>
                                        <input
                                            className='Searchinput1'
                                            value={pincode}
                                            type="text"
                                            placeholder="Enter Pin Code"
                                            onChange={(event) => onChange(event)}
                                        />
                                        <button className="btn btn-primary btn-lg" onClick={handleClick}>Find Garage</button>
                                    </div>
                                </div>
                            </Row>
                        </Col>
                        <Col lg={5}><img src={homeimg1} style={{ height: "385px", width: "623px", paddingLeft: '10px' }} alt="error" />
                        </Col>
                    </Row>
                    {/* {searchgarage ?
                        garages.map(garages => {
                            return (
                                <Container >
                                    <div className="all_garage" style={{ cursor: "pointer" }} onClick={onGarageSelect(garages)}>
                                        <div className="cardMain">
                                            <div className="allgaragehead p-3">
                                                <div className="allsubgarage">
                                                    <h6>{garages.garageName}</h6>
                                                    <small>{garages.garageType}</small>
                                                    {
                                                        garages.garageAddress.map(add => {
                                                            return (<p className='allgaragehead1'><small>{add.city + ' ' + add.pincode}</small>
                                                            </p>
                                                            )
                                                        })}
                                                </div>
                                            </div>
                                            <div className="ameent">
                                                <h4>Amenities</h4>
                                                <ul><li>
                                                    {garages.garageServices.map(services => {
                                                        return (<label class="fancy-checkbox12">
                                                            <input type="checkbox" />
                                                            <span className="alignlist">{services}</span>
                                                        </label>)
                                                    })}
                                                </li>
                                                </ul>
                                                <div className='coupancont'>
                                                    <p>50% Off I Use Code: TRYNEW</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Container>
                            )
                        }) : ''} */}
                    <div className="choosegarage">
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
                </Container>
            }
        </>
    )
}

export default CompareandChoose