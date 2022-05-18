import React from 'react'
import Track from '../Trackingstatus/TrackingComp'
import { Container,Row,Col,Card,Button,ButtonGroup, CardBody, CardTitle, CardText,CardSubtitle, CardFooter } from 'reactstrap'
import { Link,withRouter } from 'react-router-dom';
import {useDispatch,useSelector} from 'react-redux';
import {selectVehical,calenderTime} from '../../redux/action';
import './Booking.css';
const Booking1 = () => {
    const cal_data=useSelector((state)=>state.check.calenderTime);
    return (
        <Container fluid>
            <Row className='p-5'>
             <div>
             <Link to ="/Confirmbook" className="bookawait"><i className='fa fa-arrow-left'></i></Link>
             <Link to="/Confirmbook" className="bookawait1">Tracking Status</Link>
             </div>
            <Col lg={8}>
            <Track/>
            </Col>
            <Col lg={4} className="tkcard">
           
                 <div className="cardtk">
                 <CardBody>
                      <CardText className='innercard1'>
                           <div className="pickup">
                               <h5>Pick-Up Scheduled</h5>
                               <p>Share the OTP or QR Code with Driver on his Arrival</p>
                               <button className="btnjobcard1">JOB CARD</button>
                           </div>
                           <div className="qrcode1">
                           <i class="fas fa-qrcode"></i>
                          <Link><small className="downloadqr1">Download QR</small></Link>
                          <h6>OTP-0091</h6>
                           </div>
                      </CardText>
                      <CardSubtitle className="carbody1">
                          <div className="carDetail1">
                              <p className="caricon1"><i class="fas fa-car"></i></p>
                              <div className="custominfo1">
                              <h5>Mr.Shyam Kanojia</h5>
                              <p>Your Vehicle Pickup Driver</p>
                              </div>
                          </div>
                          <div><Link><p className="call1"><i class="fas fa-phone-alt"></i></p></Link></div>
                      </CardSubtitle>
                      <CardText className="cardText1">
                          <h1>1hr 45 mins left</h1>
                      </CardText>
                      {cal_data?.map((item)=>(
                                 <CardText className="schedulTime1">
                        
                                 <div>
                                     <h5>Pick-Up Date</h5>
                                     <p>{new Date(item.date).toLocaleDateString()}</p>
                                 </div>
                                 <div>
                                     <h5>Pick-Up Time</h5>
                                     <p> {item.selectedTimeSlot}</p>
                                 </div>
                             </CardText>
                              ))}
                    
                      </CardBody>
                           
                      
             </div>
             <div className="payfooter1">
                                  <div className="payAmount1">
                                   <p className="cardSize1"><i class="far fa-credit-card"></i></p>
                                   <div className="total1">
                                            <p>Total payment</p>
                                            <h5>1673</h5>
                                   </div>
                                  </div>
                                  <div >
                                     <Link to="/confirmbooking"> <button className="totalbtn1">Pay now</button></Link>
                                  </div>
                              </div>
            </Col>
            </Row>
            
        </Container>
    )
}

export default withRouter(Booking1)
