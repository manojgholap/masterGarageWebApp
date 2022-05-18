import React from 'react';
import {CardBody,Input,Label, ButtonGroup,Card, Button,Row,Col, Container} from 'reactstrap';
import {Link} from 'react-router-dom';
import './location.css'
const Search = () => {
  return ( 
    <Container className="locationcont mt-3">
    <Card className="p-4">
        <div className="mb-3">
        <div className="searchbell mb-4">
                   <Link to="/addvehical"><i className="fa fa-search"> Search</i></Link>
                    <i className="fas fa-times"></i>
                </div>
                <div>
               <p className="form-control-feedback1"> <i className="fa fa-search"></i></p>
                 <input type="text" className="inputlocation form-control1" placeholder="Search"/>
                </div>
        </div>
        <Card className="">
            <div className="locationaddress p-4">
                <p>Suggesstions</p>
            <div className="gpslocation1 mb-4">
            <i class="far fa-question-circle"></i>
              <div className="getgps1">
                  <p>Basic Service Package</p>
                  <small>Recommended at every 5000 Kms, 15 points service included</small>
              </div>
            </div>
            <div className="gpslocation1 mb-4">
            <i class="far fa-question-circle"></i>
              <div className="getgps1">
                  <p>Wheel Balancing & Alignment</p>
                  <small>Recommended at every 5000 Kms, 15 points service included</small>
              </div>
            </div>
            <div className="gpslocation1 mb-4">
            <i class="far fa-question-circle"></i>
              <div className="getgps1">
                  <p>Starter Motor Repair</p>
                  <small>Recommended at every 5000 Kms, 15 points service included</small>
              </div>
            </div>
            <h5><Link className="viewmorelocation">VIEW MORE</Link></h5>
    
            </div>
            
        </Card>
    </Card>
    </Container>
  )
};

export default Search;
