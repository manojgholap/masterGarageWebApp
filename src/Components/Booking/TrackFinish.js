import React from 'react'
import Track from '../Trackingstatus/TrackingComp'
import { Container,Row,Col,Card,Button,ButtonGroup, CardBody, CardTitle, CardText,CardSubtitle, CardFooter } from 'reactstrap'
import { Link,withRouter } from 'react-router-dom';
import './Booking.css';
import carttrack1 from '../../Images/drawable-xxxhdpi/1.png';
import carttrack2 from '../../Images/drawable-xxxhdpi/2.png'
import carttrack3 from '../../Images/drawable-xxxhdpi/3.png';
import carttrack4 from '../../Images/drawable-xxxhdpi/4.png';
import carttrack5 from '../../Images/drawable-xxxhdpi/5.png';
import carttrack11 from '../../Images/drawable-xxxhdpi/11.png';
import carttrack22 from '../../Images/drawable-xxxhdpi/22.png'
import carttrack33 from '../../Images/drawable-xxxhdpi/33.png'
import carttrack44 from '../../Images/drawable-xxxhdpi/44.png'
import carttrack55 from '../../Images/drawable-xxxhdpi/55.png'
const TrackFinish = () => {
    return (
        <Container fluid>
            <Row className='p-5'>
               <div>
             <Link to ="/Carttrack4" className="bookawait"><i className='fa fa-arrow-left'></i></Link>
             <Link to="/Carttrack4" className="bookawait1">Tracking Status</Link>
             </div>
            <Col lg={8}>
            <Track/>
            </Col>
            <Col lg={4}>
            <div className="cardtrack">
                 <CardBody>
                      <CardText className='innercard1'>
                           <div className="pickup">
                               <h5>Payment Successful</h5>
                               <p>Garage will soon diagnose your 
                                   vehicle and start the service</p>
                               <button className="btnjobcard1">JOB CARD</button>
                           </div>
                           <div className="qrcode1">
                           <i class="fas fa-qrcode"></i>
                          <Link><small className="downloadqr1">Download QR</small></Link>
                           </div>
                      </CardText>
                      
                        <div className="cartrack1">
                          <div>
                            <div class="step step-active">
                            <div className="step-active1">
                              <div class="circle1"><i class="fa fa-check"></i></div>
                          </div>
                          <div>
                             <img src={carttrack1} alt="error"/>
                          </div>
                        </div>
                        <div class="step step-active">
                        <div className="step-active1">
                              <div class="circle1"><i class="fa fa-check"></i></div>
                          </div>
                          <div>
                             <img src={carttrack2} alt="error"/>
                          </div>
                        </div>
                        <div class="step">
                        <div className="step-active1">
                              <div class="circle1"><i class="fa fa-check"></i></div>
                          </div>
                          <div>
                          <img src={carttrack3} alt="error"/>
                          </div>
                        </div>
                        <div class="step">
                        <div className="step-active1">
                              <div class="circle1"><i class="fa fa-check"></i></div>
                          </div>
                          <div>
                          <img src={carttrack4} alt="error"/>
                          </div>
                        </div>
                        <div class="step">
                         <div className="step-active1">
                              <div class="circle12"><i class="fa fa-check"></i></div>
                          </div>
                          <div>
                          <img src={carttrack5} alt="error"/>
                          </div>
                        </div>
                        </div>

                            <ul className="eventstepp">
                            <li className="first">Vehicle Received</li>
                              <li className="first1">Diagnosed by Garage</li>
                              <li className="first1">Work In Progress</li>
                              <li className="first1">Vehicle Ready</li>
                             <li>Payment</li>
                            </ul>
                        </div>
                      </CardBody>
                              <div className="payfooter12">
                                  <div className="payAmount1">
                                   <p className="cardSize1"><i class="far fa-credit-card"></i></p>
                                   <div className="total1">
                                            <p>Total payment</p>
                                            <h5>1673</h5>
                                   </div>
                                  </div>
                                  <div>
                                     <Link to="/Outdelivery"> <button className="totalbtn1">Pay now</button></Link>
                                  </div>
                              </div>
                      
             </div>
      
            </Col>
            </Row>
            
        </Container>
    )
}

export default withRouter(TrackFinish)
