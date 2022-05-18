import React from 'react';
import {CardBody,Input,Label, ButtonGroup,Card, Button,Row,Col, Container} from 'reactstrap';
import {Link} from 'react-router-dom';
import bluedot from '../../Images/drawable-xxxhdpi/drawable-xxxhdpi/bluedot.png';
import greendot from '../../Images/drawable-xxxhdpi/drawable-xxxhdpi/greendot.png';
import pickdrop from '../../Images/drawable-xxxhdpi/drawable-xxxhdpi/pickdrop.png';
import locationboth from '../../Images/drawable-xxxhdpi/drawable-xxxhdpi/location.png';
import botharrow from '../../Images/drawable-xxxhdpi/botharrow.png';
import manual from '../../Images/drawable-xxxhdpi/drawable-xxxhdpi/manual.png';
import automation from '../../Images/drawable-xxxhdpi/drawable-xxxhdpi/automation.png';
import whitedot from '../../Images/drawable-xxxhdpi/drawable-xxxhdpi/whitedot.png';
import estimatetime from '../../Images/drawable-xxxhdpi/drawable-xxxhdpi/estimatetime.png';
import driveu from '../../Images/drawable-xxxhdpi/drawable-xxxhdpi/driveu.png';
import datetimestimate from '../../Images/drawable-xxxhdpi/drawable-xxxhdpi/datetimestimate.png';
import drivesure from '../../Images/drawable-xxxhdpi/drawable-xxxhdpi/drivesure.png';
import suvidha from '../../Images/drawable-xxxhdpi/drawable-xxxhdpi/suvidha.png';
import maruti from '../../Images/drawable-xxxhdpi/drawable-xxxhdpi/maruti.png';
import Stars from '../../Images/drawable-xxxhdpi/drawable-xxxhdpi/stars.png';
import offers from '../../Images/drawable-xxxhdpi/drawable-xxxhdpi/offers.png';

import './chauffer.css'

const AddChauffer = () => {
  return ( 
        <Container fluid>
            <Row className="mt-4">
                <Col lg={8}>
                    <Card className="mb-3">
                        <div>
                                <div className="addchauffer mt-4">
                                <div className="locationdeco">
                                <h5><i className="fas fa-map-marker-alt"> Add Location Details</i></h5> 
                                    <p className="locationdot"><img src={bluedot} alt="error"/></p>
                                    <input type="text" className="picklocation form-control1" placeholder="Search"/>
                                    <p><img src={locationboth} alt="error" width="17px"/>Locate me</p>
                                </div>
                                <div className="pickdrop"><img src={pickdrop} width="25px" alt="error"/></div>
                                <div>
                                    <div className="bothtrip">
                                        <p><i class="far fa-arrow-alt-circle-up" ></i> One Way</p>
                                         <p className="roundtrip"><img src={botharrow} alt="error"  width="25px"/>Round Trip</p> 
                                         
                                    </div>
                                    <p className="locationdot"><img src={greendot} alt="error"/></p>
                                    <input type="text" className="picklocation form-control1" placeholder="Search"/>
                                    <p><img src={locationboth} alt="error" width="17px"/>Choose on map</p>
                                </div>
                            </div>
                        </div>
                    </Card>
                    <Card>
                        <div>
                        <div className="addchauffer p-3 mt-4">
                                <div className="">
                                <label for="cars">Date </label>
                                    <select name="cars" className="picklocation1 form-control1" id="cars">
                                        <option value="volvo">Volvo</option>
                                        <option value="saab">Saab</option>
                                        <option value="opel">Opel</option>
                                        <option value="audi">Audi</option>
                                    </select>
                                </div>
                                <div className="">
                                <label for="cars">Time</label>
                                    <select name="cars" className="picklocation1 form-control1" id="cars">
                                        <option value="volvo">Volvo</option>
                                        <option value="saab">Saab</option>
                                        <option value="opel">Opel</option>
                                        <option value="audi">Audi</option>
                                    </select>
                                </div>
                                <div>
                                   <Button size="lg" color="primary">Sechude</Button>
                                </div>
                            </div>
                        </div>
                    </Card>
                    <Card className="p-3 mt-4">
                        <div>
                             <div className="choosetype">
                                 <h5><i class="fas fa-car"></i> Choose vehicle type and transmission</h5>
                                 <Link>Choose from My Garage</Link>
                             </div>
                             <div className="choosetype">
                                  <div className="Choosebtn">
                                      <p>Type</p>
                                      <ButtonGroup>
                                          <button>Hatchback</button>
                                          <button>Sedan</button>
                                          <button>SUV/MUV</button>
                                          <button>Luxury</button>
                                      </ButtonGroup>
                                  </div>
                                  <div>
                                      <p>Transmission</p>
                                      <div className="menualclass">
                                          <div className="menualclass">
                                              <img src={manual} alt="error" width="18.33px" height="25px"/>
                                              <p>Manual</p>
                                              <img src={greendot} alt="error" width="17px" height="17px"/>
                                          </div>
                                          <div className="menualclass">
                                              <img src={automation} alt="error" width="25px" height="25px"/>
                                              <p>Automation</p>

                                              <img src={whitedot} alt="error" width="17px" height="17px"/>
                                          </div>
                                      </div>
                                  </div>
                             </div>
                        </div>
                    </Card>
                    <Card className="mt-4 p-3">
                    <h5><img src={estimatetime} alt="error" width="28.23px" height="25px"/> Estimated Usage</h5>
                    <div className="datetimeesti">
                        <p className="hour">HOURS</p>
                        <p className="days">Days</p>
                        <img src={datetimestimate} alt="error"/>
                    </div>
                    </Card>
                </Col>
            <Col>
                <Card>
                    <div className="paymentflex p-3">
                        <div className="chauffpay">
                            <div className="cardoffer">
                                <p><img src={driveu} alt="error"/></p>
                                <div className='starsize'>
                                    <p>Drive U</p>
                                    <small>13 min away</small>
                                    <p><img src={Stars} alt="error"/></p>
                                </div>
                            </div>
                            <p className="offersize"><img src={offers} alt="error"/>50% Off I Use Code: TRYNEW</p>
                        </div>
                   
                    <div className="cashcard">
                        <h4>₹1,459 </h4><i class="fas fa-exclamation-circle"></i>
                    </div>
                    </div>
                    <div className="paymentflex p-3">
                        <div className="chauffpay">
                            <div className="cardoffer">
                                <p><img src={drivesure} alt="error"/></p>
                                <div className='starsize'>
                                    <p>Driver for Sure </p>
                                    <small>13 min away</small>
                                    <p><img src={Stars} alt="error"/></p>
                                </div>
                            </div>
                            <p className="offersize"><img src={offers} alt="error"/>50% Off I Use Code: TRYNEW</p>
                        </div>
                   
                    <div className="cashcard">
                        <h4>₹1,459 </h4><i class="fas fa-exclamation-circle"></i>
                    </div>
                    </div>
                    <div className="paymentflex p-3">
                        <div className="chauffpay">
                            <div className="cardoffer">
                                <p><img src={suvidha} alt="error"/></p>
                                <div className='starsize'>
                                    <p>Driver Suvidha </p>
                                    <small>13 min away</small>
                                    <p><img src={Stars} alt="error"/></p>
                                </div>
                            </div>
                            <p className="offersize"><img src={offers} alt="error"/>50% Off I Use Code: TRYNEW</p>
                        </div>
                   
                    <div className="cashcard">
                        <h4>₹1,459 </h4><i class="fas fa-exclamation-circle"></i>
                    </div>
                    </div>
                    <div className="paymentflex p-3">
                        <div className="chauffpay">
                            <div className="cardoffer">
                                <p><img src={maruti} alt="error"/></p>
                                <div className='starsize'>
                                    <p>Call Drivers Mumbai</p>
                                    <small>13 min away</small>
                                    <p><img src={Stars} alt="error"/></p>
                                </div>
                            </div>
                            <p className="offersize"><img src={offers} alt="error"/>50% Off I Use Code: TRYNEW</p>
                        </div>
                   
                    <div className="cashcard">
                        <h4>₹1,459 </h4><i class="fas fa-exclamation-circle"></i>
                    </div>
                    </div>
                </Card>
            </Col>
           </Row>
        </Container>
  )
};

export default AddChauffer;
