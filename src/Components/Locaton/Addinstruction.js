import React from 'react';
import {CardBody,Input,Label, ButtonGroup,Card, Button,Row,Col, Container} from 'reactstrap';
import {Link} from 'react-router-dom';
import './location.css'
import addinstruction from '../../Images/drawable-xxxhdpi/drawable-xxxhdpi/addinstruction.png';
const Addinstruction = () => {
  return ( 
    <Container className="">
    <Card className="addvehiwidth p-4 mt-4">
        <div className="addvehicalhead">
            <div>
            <Link to="/addinstruction"><i className="fas fa-times">  Add Vehical</i></Link>
             
            </div>
        <img src={addinstruction} alt="error"/>
        <h3>
        Please Add 
         Service Instructions
        </h3>
        <p>Thankyou for Choosing Master Garage!  </p>
        <textarea type="text"rows="4" cols="50" placeholder="Explain the problems. Type here...….."/>
          <ButtonGroup>
            <button className="btnbox1">Skip</button>
            <button className="btnbox2">Submit</button>
        </ButtonGroup>
        </div>
        
    </Card>
</Container>
  )
};

export default Addinstruction;
