import React from 'react';
import { Container,Row,Col,Card,Button,ButtonGroup, CardBody, CardTitle, CardText,CardSubtitle, CardFooter } from 'reactstrap'
import { Link } from 'react-router-dom';
import cardescription from '../../Images/ImagesAll/drawable-hdpi/cardescription.png'
import JobCar from './JobCar';
import carfront from '../../Images/frontcar.jpg';
import carleft from '../../Images/leftcar.jpg'
import carright from '../../Images/rightcar.jpg'
import backcar from '../../Images/backcar.jpg'
const Nextcarprogress = () => {
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
                   <Card className="descriptioncar1">
                        <CardBody>
                        <div className="listcarimg1">
                            <div className="imgshow">
                               <p>All images (24)</p>
                               <i class="fas fa-times"></i>
                            </div>
                            <ul className="carlist1">
                                <li><Card><img src={carfront} alt="error"/></Card></li>
                                <li><Card><img src={carleft} alt="error"/></Card></li>
                               <li> <Card><img src={carright} alt="error"/></Card></li>
                               <li><Card><img src={backcar} alt="error"/></Card></li>
                            </ul>
                            </div>
                        </CardBody>
                   </Card>
                </Col>
            </Row>
      </Container>
  );
};

export default Nextcarprogress;
