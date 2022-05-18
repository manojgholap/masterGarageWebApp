import React from 'react';
import { Container,Row,Col,Card,Button,ButtonGroup, CardBody, CardTitle, CardText,CardSubtitle, CardFooter } from 'reactstrap'
import { Link } from 'react-router-dom';
import cardescription from '../../Images/ImagesAll/drawable-hdpi/cardescription.png'
import JobCar from './JobCar';
import carfront from '../../Images/frontcar.jpg';
import carleft from '../../Images/leftcar.jpg'
import carright from '../../Images/rightcar.jpg'
import backcar from '../../Images/backcar.jpg'
import './jobcar.css'
const Jobcardprogress = () => {
  return (
      <Container fluid>
            <Row className="mt-3">
            
                <Col lg={8}>
                <div className="bookingtrack">
             <Link className="bookingstatus"><i class="fas fa-arrow-left"></i><h5>Booking ID: MG1234567890 </h5></Link>
             <Link className="bookingstatus"><small>Status</small><h6>Work in Progress</h6></Link>
             </div>
                     <JobCar/>
                </Col>
                <Col lg={4}>
                   <Card>
                      <div className="cardescripthead"><label class="fancycheckbox">
                            <input type="radio" name="wipro" value="M" />
                            <span>Wiper Arms/ Blades</span>
                        </label></div>
                        <div className="maindescriptioncar">
                            <div>
                            <div className="cardescription"><img  src={cardescription} alt="error"/></div>
                            </div>
                            <div>
                            <p className="borderfuel"><label class="fancycheckbox1">
                            <input type="radio" name="fuel" value="M" />
                                <span>Fuel</span></label></p>
                                <div className="progress_bar">
                <div className="prog_1">   
                </div>
                <div className="pagesize1_1"><li>-</li><li>-</li><li>-</li><li>-</li><li>-</li><li>-</li></div>
                <div className="pagesize_1">
                     <li></li>
                     <li></li>
                     <li></li>
                     <li>1/2</li>
                     <li>1/4</li>
                     
                </div> 
            </div>
                        </div>
                        </div>
                        <CardFooter className='footcarlist'>
                            <div className="listcarimg">
                            <ul className="carlist">
                                <li><img src={carfront} alt="error"/></li>
                                <li><img src={carleft} alt="error"/></li>
                                <li><img src={carright} alt="error"/></li>
                                <li><img src={backcar} alt="error"/></li>
                            </ul>
                            </div>
                            <div className="viewcars">
                                <h5>+24 images</h5>
                                <Link to="/Nextcarprogress">View all images</Link>
                            </div>
                        </CardFooter>
                   </Card>
                </Col>
            </Row>
      </Container>
  );
};

export default Jobcardprogress;
