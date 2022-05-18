import React from 'react'
import Track from '../Components/Trackingstatus/TrackingComp'
import { Container,Row,Col,Card,Button,ButtonGroup, CardFooter, CardBody, CardTitle } from 'reactstrap'
import { Link } from 'react-router-dom';
import '../Components/Trackingstatus/Track.css';
import Qrcode from '../Images/Images/qrcode.png'
const AboutUs = () => {
    return (
        <Container fluid>
            <Row className='p-5'>
            <div>
             <Link to ="/bokking" className="bookawait"><i className='fa fa-arrow-left'></i></Link>
             <Link to="/bokking" className="bookawait1">Tracking Status</Link>
             </div>
            <Col lg={8}>
              
            <Track/>
            </Col>
            <Col lg={4}>
             <div className='booking11'>
        
                  <div className='innercard'>
                        <div className="qrheader">
                            <div>
                      <h3>Booking Confirmed</h3>
                      <p>Waiting for Vehicle  Pick-up Schedule by Garage </p>
                      </div>
                      </div>
                      <div className="qrflex">
                          <p className="Qrcode">
                           {/* <img scr={Qrcode} alt="error"/> */}
                           <i class="fas fa-qrcode"></i>
                          <Link><p className="downloadqr">Download QR</p></Link>
                       
                          <div className="groupbtn">
                              <button className='btncancle'>Cancel</button>
                          </div>
                          </p>
                      </div>
             </div>
             </div>
             <div className="mainfoot_con">
                              <div className="payfooter11">
                                  <div className="payAmount">
                                    <p className="cardSize">
                                        <i class="far fa-credit-card"></i>
                                    </p>
                                    <div className="total">
                                                <p>Total payment</p>
                                                <h5>1673</h5>
                                    </div>
                                  </div>
                                  <div >
                                     <Link to="/booking1"><button className="totalbtn">Pay now</button></Link> 
                                  </div>
                              </div>
                      </div>
            </Col>
            </Row>
            
        </Container>
    )
}

export default AboutUs
