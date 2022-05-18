import React from 'react';
import {CardBody,Input,Label, ButtonGroup,Card, Button,Row,Col, Container} from 'reactstrap';
import {Link} from 'react-router-dom';
import './location.css'
import addvehical from '../../Images/drawable-xxxhdpi/drawable-xxxhdpi/addvehical.png';
const Addvihical = () => {
  return ( 
      <Container className="">
          <Card className="addvehiwidth p-4 mt-4">
              <div className="addvehicalhead">
                  <div>
                  <Link to="/addinstruction"><i className="fas fa-times">  Add Vehical</i></Link>
                   
                  </div>
              <img src={addvehical} alt="error"/>
              <h3>
              Enter Vehicle 
               Registration Number
              </h3>
              <p>Thankyou for Choosing Master Garage!  </p>
              <input type="text" className="inputlocation form-control1" placeholder="Example- MH 01 AB 1234"/>
              <button className="btnbox">Submit</button>
              </div>
              
          </Card>
      </Container>
  )
};

export default Addvihical;
