import React from 'react';
import {CardBody,Input,Label, ButtonGroup,Card, Button,Row,Col, Container} from 'reactstrap';
import {Link} from 'react-router-dom';
import './location.css';
import direction from '../../Images/drawable-xxxhdpi/drawable-hdpi/Group 30299.png';


const Location1 = () => {
  return ( 
        <Container className="mt-4">
            <Card className="p-4 w-50">
            <div className="locationheader">
               <p><i className="fas fa-map-marker-alt">Location</i></p> 
               <p><i className="fas fa-times"></i></p> 
            </div>
                <div className="locationcard mb-3">
                    <img src={direction} alt="error"/>
                </div>
                <Card className="mb-3">
                    <div className="locationaddress p-3">
                        <small>Wing/ Door/ Flat No./ House No.</small>
                        <p>A 1002, Oberoi Splendora</p>
                    </div>
                </Card>
                <Card className="mb-3">
                    <div className="locationaddress p-3">
                        <small>Landmark</small>
                        <p>Mahindra Club</p>
                    </div>
                </Card>
                      <div className="locationaddress1">
                          <div className="locationaddress12">
                      <i class="fas fa-home">Home</i>
                      <i class="fas fa-suitcase">Office</i>
                      <i class="fas fa-crosshairs">Other</i>
                      </div>
                      <Link to="/notification"><Button variant="primary" color="primary">SAVE</Button></Link>
                      </div>
            </Card>
        </Container>
  )
};

export default Location1;
