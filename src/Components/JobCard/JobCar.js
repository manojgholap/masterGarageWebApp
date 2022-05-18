import React from 'react';
import { Container,Row,Col,Card,Button,ButtonGroup, CardBody, CardTitle, CardText,CardSubtitle, CardFooter } from 'reactstrap'
import { Link } from 'react-router-dom';
import firstchoice from '../../Images/choicefirst.jpg'
import userprofile from '../../Images/drawable-xxxhdpi/drawable-xxxhdpi/myuser.png'
import './jobcar.css'
const JobCar = () => {
  return(
    <div> 
        <div className="infobooking">
       
        <div className="d-flex rounded shadow">
            <div className="garageCard">
            <div className="jobcarHeader">
                <h3>Job Card</h3>
                <div>
                    <h5>Maruti Suzuki  XL6 Petrol</h5>
                    <p>MH 04 AB 3827</p>
                </div>
                <div>
                    <h5>Engine no.</h5>
                    <p>MACD1234WE2345</p>
                </div>
                <div>
                    <h5>Chassis no.</h5>
                    <p>MACD1234WE2345</p>
                </div>
                <div>
                    <h5>Kms Driven</h5>
                    <p>113456</p>
                </div>
            </div>
            <CardBody className='jobcarContainer'>
                <Row>
                    <Col lg={4}>
                <CardText>
                 <h5>Inventory Checklist</h5>
                 <Card className="fistCard d-flex rounded shadow">
                     <CardBody>
                     <ul><li>
                        <label class="fancy-checkbox">
                            <input type="checkbox" />
                            <span className="alignlist">Owners Manual</span>
                        </label>
                    </li><li>
                        <label class="fancy-checkbox">
                            <input type="checkbox" />
                            <span>Infotainment System</span>
                        </label>
                    </li>
                    <li>
                        <label class="fancy-checkbox">
                            <input type="checkbox" />
                            <span>Speakers</span>
                        </label>
                    </li>
                    <li>
                        <label class="fancy-checkbox">
                            <input type="checkbox" />
                            <span>Key Chain</span>
                        </label>
                    </li>
                    <li>
                        <label class="fancy-checkbox">
                            <input type="checkbox" />
                            <span>Key Remote</span>
                        </label>
                    </li>
                    <li>
                        <label class="fancy-checkbox">
                            <input type="checkbox" />
                            <span>Doll/Idols</span>
                        </label>
                    </li>
                    <li>
                        <label class="fancy-checkbox">
                            <input type="checkbox" />
                            <span>Air Freshner</span>
                        </label>
                    </li>
                    <li>
                        <label class="fancy-checkbox">
                            <input type="checkbox" />
                            <span>Mobile Charger</span>
                        </label>
                    </li>
                    <li>
                        <label class="fancy-checkbox">
                            <input type="checkbox" />
                            <span>Upholstery torn/broken</span>
                        </label>
                    </li>
                    <li>
                        <label class="fancy-checkbox">
                            <input type="checkbox" />
                            <span>Jack & Handle</span>
                        </label>
                    </li>
                    <li>
                        <label class="fancy-checkbox">
                            <input type="checkbox" />
                            <span>Floor Mats</span>
                        </label>
                    </li>
                    <li>
                        <label class="fancy-checkbox">
                            <input type="checkbox" />
                            <span>Seat Cover</span>
                        </label>
                    </li>
                    <li>
                        <label class="fancy-checkbox">
                            <input type="checkbox" />
                            <span>Tool Kit</span>
                        </label>
                    </li>
                    <li>
                        <label class="fancy-checkbox">
                            <input type="checkbox" />
                            <span>Boot Mat</span>
                        </label>
                    </li>
                    <li>
                        <label class="fancy-checkbox">
                            <input type="checkbox" />
                            <span>Mud Flaps</span>
                        </label>
                    </li>
                    <li>
                        <label class="fancy-checkbox">
                            <input type="checkbox" />
                            <span>Spare Wheel</span>
                        </label>
                    </li>
                    <li>
                        <label class="fancy-checkbox">
                            <input type="checkbox" />
                            <span>Fog Lamp</span>
                        </label>
                    </li>
                    <li>
                        <label class="fancy-checkbox">
                            <input type="checkbox" />
                            <span>Wheel Cover/ Cap</span>
                        </label>
                    </li>
                    <li>
                        <label class="fancy-checkbox">
                            <input type="checkbox" />
                            <span>Wiper Arms/ Blades</span>
                        </label>
                    </li>
                    <li>
                        <label class="fancy-checkbox">
                            <input type="checkbox" />
                            <span>Side Mirrors</span>
                        </label>
                    </li>
                    <li>
                        <label class="fancy-checkbox">
                            <input type="checkbox" />
                            <span>Fuel Cap</span>
                        </label>
                    </li>
                    <li>
                        <label class="fancy-checkbox">
                            <input type="checkbox" />
                            <span>Horns</span>
                        </label>
                    </li>
                    <li>
                        <label class="fancy-checkbox">
                            <input type="checkbox" />
                            <span>Underbody Scratches</span>
                        </label>
                    </li>
                      </ul>
                     </CardBody>
                 </Card>
                 </CardText>
                 </Col>
                 <Col lg={4}>
                 <CardText>
                 <h5>Demanded Jobs</h5>
                 <Card className="fistCard d-flex rounded shadow">
                     <CardBody>
                         <ul>
                             <li>
                         <label>
                                <input
                                type="radio"
                                value="motor"
                                />
                                <span>Starter Motor Repair</span>
                          </label>
                        </li>
                            <li>
                            <label>
                                <input
                                type="radio"
                                value="motor"
                              
                                />
                                <span>Basic Service</span>
                          </label>
                            </li>
                            <li>
                              <label>
                                    <input
                                    type="radio"
                                    value="motor"
                                 
                                    />
                                    <span>Engine Scanning</span>
                               </label>
                                </li>
                            <li>
                            <label>
                                    <input
                                    type="radio"
                                    value="motor"
                                  
                                    />
                                    <span>Inspection & Diagnostics</span>
                               </label>
                            </li>
                         </ul>
                     </CardBody>
                     <>
                         <div className="footjobcar">
                         <Link className='linkcolor'><span><i class="far fa-edit"></i></span> Add service instructions</Link>
                         </div>
                     </>
                 </Card>
                 </CardText>
                 </Col>
                 <Col lg={4}>
                 <CardText>
                 <h5>Demanded Jobs</h5>
                    <CardBody>
                        <Card className="rounded shadow">
                            <div className="jobcarpayhead">
                                   <p>We have recommended following services for your vehicle,
                                        Please Approve!</p>
                            </div>
                            <div>
                                <div className="serives">
                                    <div>
                                        <small>Service </small>
                                        <h6>Battery Termninal</h6>
                                        <p>₹1,459</p>
                                    </div>
                                    <div>
                                        <small>View Details</small>
                                        <p className="serviceicon">
                                        <i class="fas fa-check-circle"></i>
                                        <i class="far fa-times-circle"></i>
                                        </p>
                                    </div>
                                </div>
                                <div className="serives">
                                    <div>
                                        <small>Service 1 </small>
                                        <h6>Battery Termninal</h6>
                                        <p>₹1,459</p>
                                    </div>
                                    <div>
                                        <small>View Details</small>
                                        <p className="serviceicon">
                                        <i class="fas fa-check-circle"></i>
                                        <i class="far fa-times-circle"></i>
                                        </p>
                                    </div>
                                </div>
                                <div className="serives">
                                    <div>
                                        <small>Service 1 </small>
                                        <h6>Engine Scanning</h6>
                                        <p>₹999</p>
                                    </div>
                                    <div>
                                        <small>View Details</small>
                                        <p className="serviceicon">
                                        <i class="fas fa-check-circle"></i>
                                        <i class="far fa-times-circle"></i>
                                        </p>
                                    </div>
                                </div>
                                <div className="serives">
                                    <div>
                                        <small>Service 1 </small>
                                        <h6>Starter Motor Repair</h6>
                                        <p>₹1,459</p>
                                    </div>
                                    <div>
                                        <small>View Details</small>
                                        <p className="serviceicon">
                                        <i class="fas fa-check-circle"></i>
                                        <i class="far fa-times-circle"></i>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </CardBody>
                 </CardText>
                 </Col>
                 </Row>
            </CardBody>
            <CardFooter className="finalfoot">
                <div className="firstfootfinal">
                    <p className="firststep"><img src={firstchoice} alt="error"/></p>
                    <div className="finalfootcolor">
                        <h5>Mahindra First Chice</h5>
                        <p>Kandivali East, Mumbai 400101</p>
                     </div>
                     <p className="footicon">
                     <Link><p className="comment1"><i class="fas fa-share-alt"></i></p></Link>
                     <Link><p className="comment1"><i class="fas fa-phone-alt"></i></p></Link> 
                     </p>
                </div>
                <div className="firstfootfinal">
                    <p className="firststep">
                    <img src={userprofile} alt="error"/>
                     </p>
                    <div className="finalfootcolor">
                        <h5>Aditya Mishra</h5>
                        <p>Service Advisor</p>
                     </div>
                     <p className="footicon">
                     <Link><p className="comment1"><i class="fas fa-phone-alt"></i></p></Link>
                     <Link><p className="comment1"><i class="far fa-comments"></i></p></Link> 
                     </p>
                </div>
            </CardFooter>
            </div>
        </div>
    </div>
    </div>
    ) 
};

export default JobCar;
